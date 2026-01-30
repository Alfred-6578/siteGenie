import { LandingPage, Section } from '@/types/section'
import { getPalette, generateCSSVariables } from './theme'

// Generate HTML for a section with TAILWIND CLASSES
function generateSectionHTML(section: Section): string {
  switch (section.type) {
    case 'hero':
      return generateHeroHTML(section as any)
    case 'features':
      return generateFeaturesHTML(section as any)
    case 'content':
      return generateContentHTML(section as any)
    case 'cta':
      return generateCTAHTML(section as any)
    case 'footer':
      return generateFooterHTML(section as any)
    default:
      return ''
  }
}

function generateHeroHTML(section: any): string {
  if (section.layout === 'centered') {
    return `
    <section class="flex flex-col gap-10 items-center py-20 px-4 pt-25 bg-white min-h-screen">
        <div class="max-w-4xl text-center">

            <h1 class="text-4xl md:text-5xl font-bold mb-6 text-[var(--color-primary)] capitalize leading-11 md:leading-14 text-center">
            ${section.headline}
            </h1>

            <p class="text-[22px] mb-7 text-[var(--color-body-text-secondary)] text-center">
            ${section.subheadline}
            </p>

            ${section.ctaText ? `
            <a
                href="${section.ctaUrl || '#'}"
                class="inline-block text-lg px-8 py-4 bg-[var(--color-primary)] text-white rounded-lg hover:opacity-90 transition-opacity"
            >
                ${section.ctaText}
            </a>
            ` : ''}

        </div>

        <div class="bg-[var(--color-surface)] rounded-lg flex items-center justify-center max-w-5xl w-full h-100 tny:h-110">
            <img
            src="${section.image}"
            alt="Hero Image"
            class="rounded-lg w-full h-full object-cover"
            />
        </div>
        </section>
`
  }else if (section.layout === 'split') {
    return `
        <section class="flex items-center py-20 px-4 pt-25 bg-white min-h-screen">
            <div class="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">

                <div>
                <h1
                    class="text-[40px] vsm:text-5xl lg:text-[55px] font-bold mb-6 text-[var(--color-primary)] capitalize leading-13 lg:leading-16"
                >
                    ${section.headline}
                </h1>

                <p
                    class="text-xl mb-8 text-[var(--color-body-text-secondary)] leading-8"
                >
                    ${section.subheadline}
                </p>

                <button
                    class="w-full md:w-xs px-6 py-3 rounded-lg bg-[var(--color-primary)] text-white"
                    type="button"
                >
                    <p class="text-center p-0">
                    ${section.ctaText}
                    </p>
                </button>
                </div>

                <div
                class="bg-[var(--color-surface)] rounded-lg h-100 tny:h-110 vsm:h-126 flex items-center justify-center"
                >
                <img
                    src="${section.image}"
                    alt="Hero Image"
                    class="rounded-lg w-full h-full object-cover"
                />
                </div>

            </div>
        </section>

        `
  }else if (section.layout === 'background'){
    return `
        <section
            class="flex justify-center items-center relative py-32 px-4 bg-cover bg-center min-h-screen"
            style="
                background-image: ${
                section.backgroundImage
                    ? `url(${section.backgroundImage})`
                    : 'linear-gradient(135deg, var(--color-primary), var(--color-secondary))'
                };
            "
        >
            <div class="absolute inset-0 bg-black/80 opacity-60"></div>

            <div class="relative max-w-4xl mx-auto text-center text-[var(--color-background)]">

                <h1 class="text-5xl md:text-6xl font-bold mb-6 text-center">
                ${section.headline}
                </h1>

                <p class="text-xl md:text-2xl mb-10 opacity-90 text-center">
                ${section.subheadline}
                </p>

                ${section.ctaText ? `
                <a
                    href="${section.ctaUrl || '#'}"
                    class="inline-block min-w-xs px-8 py-4 text-lg font-semibold bg-[var(--color-background)] text-[var(--color-primary)] rounded-lg hover:bg-gray-100 transition-colors"
                >
                    ${section.ctaText}
                </a>
                ` : ''}

            </div>
        </section>

    `
  }
  return ''
}

function generateFeaturesHTML(section: any): string {
  

    if (section.layout === 'grid') {
        return `
            <section class="py-20 px-4 bg-[var(--color-surface)]" id="features">
                <div class="max-w-7xl mx-auto">

                    <div class="text-center mb-16">
                    <h1 class="text-3xl vsm:text-4xl font-bold mb-4 text-[var(--color-primary)] text-center">
                        ${section.headline}
                    </h1>

                    ${section.subheadline ? `
                        <p class="text-lg vsm:text-xl text-[var(--color-body-text-secondary)] text-center">
                        ${section.subheadline}
                        </p>
                    ` : ''}
                    </div>

                    <div class="grid lg:grid-cols-3 gap-12">
                    ${section.features.map((feature:any, index:any) => `
                        <div class="text-center py-4">
                        <div class="text-5xl mb-4">
                            ${feature.icon}
                        </div>

                        <h3 class="text-[21px] font-semibold mb-2 text-[var(--color-accent)] text-center">
                            ${feature.title}
                        </h3>

                        <p class="text-[var(--color-body-text-secondary)] text-center">
                            ${feature.description}
                        </p>
                        </div>
                    `).join('')}
                    </div>

                </div>
            </section>
            `
    }
    else if (section.layout === 'cards') {
        return  `
            <section class="py-20 px-4 bg-[var(--color-surface)]" id="features">
                <div class="max-w-7xl mx-auto">

                    <div class="text-center mb-16">
                        <h1 class="text-3xl vsm:text-4xl font-bold mb-4 text-[var(--color-primary)] text-center">
                        ${section.headline}
                        </h1>

                        ${section.subheadline ? `
                        <p class="text-lg vsm:text-xl text-[var(--color-body-text-secondary)] text-center">
                            ${section.subheadline}
                        </p>
                        ` : ''}
                    </div>

                    <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        ${section.features.map((feature:any, index:any) => `
                        <div class="bg-white/80 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
                            <div class="text-4xl mb-4">
                            ${feature.icon}
                            </div>

                            <h3 class="text-[22px] font-semibold mb-2 text-[var(--color-accent)]">
                            ${feature.title}
                            </h3>

                            <p class="text-[var(--color-body-text-secondary)]">
                            ${feature.description}
                            </p>
                        </div>
                        `).join('')}
                    </div>

                </div>
            </section>

        `
    }else if (section.layout === "alternating") {
        return  `
            <section class="py-20 px-4 bg-[var(--color-surface)]" id="features">
                <div class="max-w-6xl mx-auto">

                    <div class="text-center mb-16">
                    <h1 class="text-3xl vsm:text-4xl font-bold mb-4 text-[var(--color-primary)] text-center">
                        ${section.headline}
                    </h1>

                    ${section.subheadline ? `
                        <p class="text-lg vsm:text-xl text-[var(--color-body-text-secondary)] text-center">
                        ${section.subheadline}
                        </p>
                    ` : ''}
                    </div>

                    <div class="space-y-16">
                    ${section.features.map((feature:any, index:any) => `
                        <div
                        class="grid md:grid-cols-2 gap-12 items-center ${
                            index % 2 === 1 ? 'md:flex-row-reverse' : ''
                        }"
                        >

                        <!-- Text -->
                        <div class="${index % 2 === 1 ? 'md:order-2' : ''}">
                            <div class="text-5xl mb-4">
                            ${feature.icon}
                            </div>

                            <h3 class="text-2xl font-bold mb-4 text-[var(--color-accent)]">
                            ${feature.title}
                            </h3>

                            <p class="text-lg text-[var(--color-body-text-secondary)]">
                            ${feature.description}
                            </p>
                        </div>

                        <!-- Image -->
                        <div
                            class="bg-[var(--color-accent)]/20 rounded-lg h-74 flex items-center justify-center ${
                            index % 2 === 1 ? 'md:order-1' : ''
                            }"
                        >
                            <img
                            src="${feature.image}"
                            alt="Feature Image"
                            class="rounded-lg w-full h-full object-cover"
                            />
                        </div>

                        </div>
                    `).join('')}
                    </div>

                </div>
                </section>

        `
    }

    return ''

  
}

function generateContentHTML(section: any): string {
    if (section.layout === 'image') {
        return `
            <div class="min-h-screen bg-[var(--color-background)]" id="content">
                <section class="py-20 px-4">
                    <div class="max-w-6xl mx-auto">

                    <!-- Header -->
                    <div class="text-center mb-16">
                        <h1 class="text-3xl vsm:text-4xl font-bold mb-4 text-[var(--color-primary)] text-center">
                        ${section.image?.headline}
                        </h1>

                        ${section.image?.subheadline ? `
                        <p class="text-lg vsm:text-xl text-[var(--color-body-text-secondary)] text-center">
                            ${section.image.subheadline}
                        </p>
                        ` : ''}
                    </div>

                    <!-- Alternating Image-Text Sections -->
                    <div class="space-y-20">
                        ${section?.image?.stories?.map((story:any, index:any) => `
                        <div
                            class="grid md:grid-cols-2 gap-12 items-center ${
                            story.imagePosition === 'right' ? 'md:grid-flow-dense' : ''
                            }"
                        >

                            <!-- Image -->
                            <div class="${story.imagePosition === 'right' ? 'md:col-start-2' : ''}">
                            <div class="relative group">
                                <div class="absolute inset-0 bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-secondary)] rounded-2xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity"></div>

                                <div class="relative bg-gradient-to-br from-[var(--color-primary)]/20 to-[var(--color-secondary)]/20 rounded-2xl aspect-video flex items-center justify-center border border-[var(--color-primary)]/30 overflow-hidden">
                                    ${story?.image ? `
                                        <img
                                            src="${story.image}"
                                            alt="${story.imageAlt || 'Story Image'}"
                                            class="rounded-lg w-full h-full object-cover"
                                        />
                                        ` : `
                                        <span class="text-[var(--color-text-secondary)]">
                                            Image Placeholder
                                        </span>
                                    `}
                                </div>
                            </div>
                            </div>

                            <!-- Text Content -->
                            <div class="${
                            story.imagePosition === 'right'
                                ? 'md:col-start-1 md:row-start-1'
                                : ''
                            }">
                            <h3 class="text-3xl font-bold text-[var(--color-body-text)] mb-4">
                                ${story.title}
                            </h3>

                            <p class="text-lg text-[var(--color-body-text-secondary)] leading-relaxed">
                                ${story.content}
                            </p>
                            </div>

                        </div>
                        `).join('')}
                    </div>

                    <!-- CTA -->
                    ${section.image?.ctaText ? `
                        <div class="text-center mt-16">
                        <a
                            href="${section.image?.ctaUrl || '#'}"
                            class="inline-block px-8 py-4 bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-secondary)] text-[var(--color-background)] font-bold rounded-lg hover:opacity-90 transition-opacity shadow-lg shadow-[#00D4FF]/30"
                        >
                            ${section.image.ctaText}
                        </a>
                        </div>
                    ` : ''}

                    </div>
                </section>
            </div>
        `
    }else if (section.layout === "single") {
        return `
            <section class="py-20 px-5 bg-[var(--color-background)] flex justify-center" id="content">
                <div class="flex flex-col lg:flex-row-reverse gap-12 w-full max-w-7xl vsm:px-4 lg:items-center justify-center">

                    <!-- Text Content -->
                    <div class="mb-12 ${section.single?.includeImage ? 'max-w-xl' : 'max-w-4xl mx-auto'} md:text-center">
                    <h1 class="text-3xl vsm:text-4xl font-bold mb-4 vsm:mb-6 text-[var(--color-primary)] md:text-center">
                        ${section.single?.headline}
                    </h1>

                    <p class="text-lg text-[var(--color-body-text-secondary)] whitespace-pre-wrap md:text-center">
                        ${section.single?.content}
                    </p>

                    ${section.single?.ctaText ? `
                        <a
                        href="${section.single?.ctaUrl || '#'}"
                        class="inline-block mt-8 px-6 py-3 bg-[var(--color-primary)] text-white font-semibold rounded-md hover:opacity-90 transition md:text-center"
                        >
                        ${section.single.ctaText}
                        </a>
                    ` : ''}
                    </div>

                    <!-- Image -->
                    ${section.single?.includeImage ? `
                    <div class="bg-[var(--color-surface)] rounded-lg flex items-center justify-center w-full h-110">
                        ${section.single?.image ? `
                        <img
                            src="${section.single.image}"
                            alt="Hero"
                            class="rounded-lg w-full h-full object-cover"
                        />
                        ` : `
                        <span class="text-[var(--color-text-secondary)]">
                            Image Placeholder
                        </span>
                        `}
                    </div>
                    ` : ''}

                </div>
                </section>

        `
    }else if (section.layout === 'two-col') {
        return `
            <section class="py-20 px-4 bg-[var(--color-background)] flex justify-center" id="content">
                <div class="max-w-7xl">

                    <!-- Header -->
                    <div class="text-center mb-16">
                    <h1 class="text-3xl vsm:text-4xl font-bold mb-4 text-[var(--color-primary)] text-center">
                        ${section.twoCol?.headline}
                    </h1>

                    ${section.twoCol?.subheadline ? `
                        <p class="text-lg vsm:text-xl text-[var(--color-body-text-secondary)] text-center">
                        ${section.twoCol.subheadline}
                        </p>
                    ` : ''}
                    </div>

                    <!-- Two Columns -->
                    <div class="grid md:grid-cols-2 gap-12">

                    <!-- Left Card -->
                    <div class="bg-[var(--color-surface)] rounded-xl p-6 border border-[var(--color-accent)]/40">
                        ${section.twoCol?.left?.title ? `
                        <h3 class="text-xl font-semibold mb-6 text-[var(--color-primary)]">
                            ${section.twoCol.left.title}
                        </h3>
                        ` : ''}

                        <div class="space-y-4">
                        ${section.twoCol?.left?.items?.map((item:any, index:any) => `
                            <div class="flex gap-3 w-full">
                            <span class="text-green-400 mt-1">✓</span>
                            <div class="w-full">
                                <h3 class="font-bold text-[var(--color-body-text)]">
                                ${item.title}
                                </h3>
                                <p class="text-sm text-[var(--color-body-text-secondary)]">
                                ${item.description}
                                </p>
                            </div>
                            </div>
                        `).join('')}
                        </div>
                    </div>

                    <!-- Right Card -->
                    <div class="bg-[var(--color-primary)]/90 rounded-xl p-6 border border-[var(--color-secondary)]">
                        ${section.twoCol?.right?.title ? `
                        <h3 class="text-xl font-semibold mb-6 text-[var(--color-background)]">
                            ${section.twoCol.right.title}
                        </h3>
                        ` : ''}

                        <div class="space-y-4">
                        ${section.twoCol?.right?.type === 'list' ? `
                            <div class="space-y-4">
                            ${section.twoCol.right.items.map((item:any, index:any) => `
                                <div class="flex gap-3">
                                <span class="text-green-400 mt-1">✓</span>
                                <div class="w-full">
                                    <h3 class="font-semibold text-[var(--color-body-text)]">
                                    ${item.title}
                                    </h3>
                                    <p class="text-sm text-[var(--color-background)]/80">
                                    ${item.description}
                                    </p>
                                </div>
                                </div>
                            `).join('')}
                            </div>
                        ` : `
                            <p class="text-lg leading-relaxed">
                            ${section.twoCol.right.content}
                            </p>
                        `}
                        </div>
                    </div>

                    </div>
                </div>
                </section>

        `
    }

    return ''
    
}

function generateCTAHTML(section: any): string {
    return `
        <section class="py-20 px-4 bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-secondary)]">
            <div class="max-w-4xl mx-auto text-center text-white">

                <h2 class="text-3xl vsm:text-4xl font-bold mb-6 text-center">
                ${section.headline}
                </h2>

                ${section.subheadline ? `
                <p class="text-xl mb-8 opacity-90 text-center">
                    ${section.subheadline}
                </p>
                ` : ''}

                ${section.ctaText ? `
                <a
                    href="${section.ctaUrl || '#'}"
                    class="inline-block px-8 py-4 text-lg font-bold bg-white text-[var(--color-primary)] rounded-lg hover:bg-gray-100 transition-colors"
                >
                    ${section.ctaText}
                </a>
                ` : ''}

            </div>
        </section>
    `
}

function generateFooterHTML(section: any): string {
  return `
    <footer class="py-12 px-4 bg-[var(--color-body-text)] text-white">
        <div class="max-w-7xl mx-auto text-center">

            <h3 class="text-2xl font-bold mb-2 text-center">
            ${section.companyName}
            </h3>

            ${section.description ? `
            <p class="text-gray-300 mb-6 text-center">
                ${section.description}
            </p>
            ` : ''}

            <p class="text-sm text-gray-400">
            © ${new Date().getFullYear()} ${section.companyName}. All rights reserved.
            </p>

        </div>
    </footer>
    `
}

// Generate complete HTML document with TAILWIND CDN
export function generateFullHTML(landingPage: LandingPage): string {
  const sectionsHTML = landingPage.sections
    .filter((section) => section.visible)
    .sort((a, b) => a.order - b.order)
    .map((section) => generateSectionHTML(section))
    .join('\n\n')

  const palette = getPalette(landingPage.theme)
  const cssVariables = generateCSSVariables(palette)

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="description" content="${landingPage.businessName} - Landing Page">
  <title>${landingPage.businessName}</title>
  
  <!-- Tailwind CSS CDN -->
  <script src="https://cdn.tailwindcss.com"></script>
  
  <!-- Custom CSS Variables for Theme -->
  <style>
    :root {
      ${cssVariables}
    }
    
    /* Custom Tailwind configuration */
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
  </style>
</head>
<body class="font-sans">
    <nav class="fixed top-0 left-0 right-0 z-50 capitalize bg-[var(--color-background)] backdrop-blur-lg border-b border-primary/10 shadow-lg">
        <div class="max-w-7xl mx-auto px-4 py-7 flex items-center justify-between">

            <!-- Brand -->
            <p class="font-bold text-xl text-[var(--color-primary)]">
            ${landingPage.businessName}
            </p>

            <!-- Desktop Navigation -->
            <div class="hidden md:flex items-center gap-8">
            <a href="#" class="text-secondary-text hover:text-[var(--color-primary)] transition-colors">
                Home
            </a>
            <a href="#features" class="text-secondary-text hover:text-[var(--color-primary)] transition-colors">
                Features
            </a>
            <a href="#content" class="text-secondary-text hover:text-[var(--color-primary)] transition-colors">
                About
            </a>
            </div>

            <!-- CTA Button -->
            <a
            href="${landingPage.sections?.[0].type === 'hero' ? landingPage.sections[0].ctaUrl : '#'}"
            class="px-6 py-2 bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-secondary)] text-[var(--color-background)] font-semibold rounded-lg hover:opacity-90 transition-opacity"
            >
            ${landingPage.sections?.[0].type === 'hero' ? landingPage.sections[0].ctaText : 'Get Started'}
            </a>

        </div>
    </nav>

    <div class="h-20"></div>

    ${sectionsHTML}
</body>
</html>`
}

// Generate separate HTML and CSS files
export function generateSeparateFiles(landingPage: LandingPage): {
  html: string
  css: string
} {
  const sectionsHTML = landingPage.sections
    .filter((section) => section.visible)
    .sort((a, b) => a.order - b.order)
    .map((section) => generateSectionHTML(section))
    .join('\n\n')

  const palette = getPalette(landingPage.theme)
  const cssVariables = generateCSSVariables(palette)

  const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="description" content="${landingPage.businessName} - Landing Page">
  <title>${landingPage.businessName}</title>
  
  <!-- Tailwind CSS CDN -->
  <script src="https://cdn.tailwindcss.com"></script>
  
  <!-- Link to custom styles -->
  <link rel="stylesheet" href="styles.css">
</head>
<body class="font-sans">
    <nav class="fixed top-0 left-0 right-0 z-50 bg-[var(--color-background)] backdrop-blur-lg border-b border-primary/10 shadow-lg">
        <div class="max-w-7xl mx-auto px-4 py-7 flex items-center justify-between">

            <!-- Brand -->
            <p class="font-bold text-xl text-[var(--color-primary)] capitalize">
            ${landingPage.businessName}
            </p>

            <!-- Desktop Navigation -->
            <div class="hidden md:flex items-center gap-8">
            <a href="#" class="text-secondary-text hover:text-[var(--color-primary)] transition-colors">
                Home
            </a>
            <a href="#features" class="text-secondary-text hover:text-[var(--color-primary)] transition-colors">
                Features
            </a>
            <a href="#content" class="text-secondary-text hover:text-[var(--color-primary)] transition-colors">
                About
            </a>
            </div>

            <!-- CTA Button -->
            <a
            href="${landingPage.sections?.[0].type === 'hero' ? landingPage.sections[0].ctaUrl : '#'}"
            class="px-6 py-2 bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-secondary)] text-[var(--color-background)] font-semibold rounded-lg hover:opacity-90 transition-opacity"
            >
            ${landingPage.sections?.[0].type === 'hero' ? landingPage.sections[0].ctaText : 'Get Started'}
            </a>

        </div>
    </nav>

    <div class="h-20"></div>

    ${sectionsHTML}
</body>
</html>`

  const css = `/* Custom Theme Variables */
:root {
  ${cssVariables}
}

/* Additional custom styles can go here */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
`

  return { html, css }
}