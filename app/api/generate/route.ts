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

export async function POST(request: NextRequest) {
  try {
    const { systemPrompt, userPrompt } = await request.json();

    if (!GEMINI_API_KEY) {
      return NextResponse.json(
        { error: 'Gemini API key not configured' },
        { status: 500 }
      );
    }

    // ✅ Use the correct model name
    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1/models/gemini-2.5-flash:generateContent?key=${GEMINI_API_KEY}`,
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

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      console.error('Gemini API Error:', errorData);
      return NextResponse.json(
        { error: 'Gemini API request failed', details: errorData },
        { status: response.status }
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