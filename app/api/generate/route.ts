// // app/api/generate/route.ts
// import { NextRequest, NextResponse } from 'next/server';

// const OPENAI_API_KEY = process.env.OPEN_API_KEY;

// export async function POST(request: NextRequest) {
//   try {
//     const { systemPrompt, userPrompt } = await request.json();

//     if (!OPENAI_API_KEY) {
//       return NextResponse.json(
//         { error: 'OpenAI API key not configured' },
//         { status: 500 }
//       );
//     }

//     const response = await fetch('https://api.openai.com/v1/chat/completions', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//         'Authorization': `Bearer ${OPENAI_API_KEY}`,
//       },
//       body: JSON.stringify({
//         model: 'gpt-3.5-turbo',
//         messages: [
//           { role: 'system', content: systemPrompt },
//           { role: 'user', content: userPrompt },
//         ],
//         temperature: 0.7,
//         max_tokens: 2000,
//       }),
//     });

//     if (!response.ok) {
//       const errorData = await response.json().catch(() => ({}));
//       console.error('OpenAI API Error:', errorData);
//       return NextResponse.json(
//         { error: 'OpenAI API request failed', details: errorData },
//         { status: response.status }
//       );
//     }

//     const data = await response.json();
//     return NextResponse.json({ content: data.choices[0].message.content });
    
//   } catch (error) {
//     console.error('Server error:', error);
//     return NextResponse.json(
//       { error: 'Internal server error' },
//       { status: 500 }
//     );
//   }
// }



// app/api/generate/route.ts
import { NextRequest, NextResponse } from 'next/server';

const GEMINI_API_KEY = process.env.GEMINI_API_KEY;

// Gemini returns these when a model is temporarily overloaded or rate-limited.
// They're transient (or model-specific), so we retry / fall back instead of
// failing the user's request outright.
const RETRYABLE_STATUSES = new Set([429, 500, 503]);

// Free-tier models, in preference order. When one is overloaded (503) or out of
// quota (429), we fall through to the next before backing off and trying again.
// Each model has its own demand pool and quota, so spreading across them makes a
// successful generation far more likely than hammering a single congested model.
const MODELS = ['gemini-2.5-flash-lite', 'gemini-2.5-flash'];
const MAX_ROUNDS = 3;

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

const callGemini = (model: string, systemPrompt: string, userPrompt: string) =>
  fetch(
    `https://generativelanguage.googleapis.com/v1/models/${model}:generateContent?key=${GEMINI_API_KEY}`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        contents: [
          {
            parts: [
              {
                text: `${systemPrompt}\n\n${userPrompt}`,
              },
            ],
          },
        ],
        generationConfig: {
          temperature: 0.7,
          maxOutputTokens: 8048, // Increased for landing page content
          topP: 0.95,
          topK: 40,
        },
      }),
    }
  );

export async function POST(request: NextRequest) {
  try {
    const { systemPrompt, userPrompt } = await request.json();

    if (!GEMINI_API_KEY) {
      return NextResponse.json(
        { error: 'Gemini API key not configured' },
        { status: 500 }
      );
    }

    let response: Response | undefined;
    let errorData: unknown = {};

    // Each round walks the full model list; if every model is transiently
    // unavailable we back off and start another round.
    outer: for (let round = 0; round < MAX_ROUNDS; round++) {
      for (const model of MODELS) {
        response = await callGemini(model, systemPrompt, userPrompt);

        if (response.ok) break outer;

        errorData = await response.json().catch(() => ({}));

        // Non-transient errors (bad request, bad key, etc.) won't improve by
        // retrying or switching models — fail fast.
        if (!RETRYABLE_STATUSES.has(response.status)) break outer;

        console.warn(
          `Gemini ${model} returned ${response.status}; trying next model`
        );
      }

      // Every model was transiently unavailable this round. Back off before
      // retrying, unless this was the last round.
      if (round < MAX_ROUNDS - 1) {
        const delay = 500 * 2 ** round + Math.random() * 250; // ~0.5s, 1s, 2s
        console.warn(`All models unavailable, retrying in ${Math.round(delay)}ms`);
        await sleep(delay);
      }
    }

    if (!response || !response.ok) {
      const status = response?.status ?? 503;
      console.error('Gemini API Error:', errorData);
      return NextResponse.json(
        { error: 'Gemini API request failed', details: errorData },
        { status }
      );
    }

    const data = await response.json();

    // Extract the generated text
    const content = data.candidates?.[0]?.content?.parts?.[0]?.text ?? '';

    if (!content) {
      return NextResponse.json(
        { error: 'No content generated' },
        { status: 500 }
      );
    }

    return NextResponse.json({ content });

  } catch (error) {
    console.error('Server error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}