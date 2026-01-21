import { FeatureCard } from "../types/features";

export const featureCards: FeatureCard[] = [
  {
    id: 'ai-copy-generator',
    title: 'AI Copy Generator',
    description:
      'Get compelling headlines, descriptions, and CTAs automatically. Our AI understands your industry and writes copy that converts.',
    icon: {
      emoji: '✨',
      altEmojis: ['🤖'],
      size: 48,
      containerSize: 64,
      gradient: 'cyan-to-purple',
    },
    features: [
      'Industry-specific tone',
      'Multiple variations',
      'Regenerate instantly',
    ],
    animations: {
      idle: 'slow-rotate (-5deg ↔ 5deg) every 3s',
      hover: 'scale(1.1) + faster rotation + glow pulse',
      special: 'animated gradient underline expands 40px → 100px',
    },
  },

  {
    id: 'custom-layouts',
    title: 'Custom Layouts',
    description:
      'Choose from 20+ professionally designed section layouts. Mix and match to create your unique page in minutes.',
    icon: {
      emoji: '🎨',
      altEmojis: ['📐'],
      size: 48,
      containerSize: 64,
      gradient: 'cyan-to-purple',
    },
    features: [
      'Hero, Features, CTA variants',
      'Drag to reorder',
      'Hide/show sections',
    ],
    animations: {
      idle: 'icon rotates through layout symbols every 2s',
      hover: 'tooltip-style layout preview appears',
    },
  },

  {
    id: 'responsive-design',
    title: 'Responsive Design',
    description:
      'Your landing page looks perfect on any device. Mobile-first design that scales beautifully from phone to 4K display.',
    icon: {
      emoji: '📱',
      altEmojis: ['💻', '🖥️'],
      size: 48,
      containerSize: 64,
      gradient: 'cyan-to-purple',
    },
    features: [
      'Mobile-optimized',
      'Tablet-friendly',
      'Desktop perfect',
    ],
    animations: {
      idle: 'cycles through device sizes (shrink/grow)',
      hover: 'mini responsive preview fades in',
    },
  },

  {
    id: 'instant-export',
    title: 'Instant Export',
    description:
      'Export clean HTML/CSS code with one click. Copy to clipboard or download as files. No build process needed.',
    icon: {
      emoji: '⬇️',
      altEmojis: ['📦'],
      size: 48,
      containerSize: 64,
      gradient: 'cyan-to-purple',
    },
    features: [
      'Clean code output',
      'Tailwind CSS ready',
      'Production-ready',
    ],
    animations: {
      idle: 'subtle pulse',
      hover: 'success-green pulse + download arrow animation',
    },
  },

  {
    id: 'color-themes',
    title: 'Color Themes',
    description:
      'Professional color palettes ready to go. Switch themes instantly and see your page transform in real-time.',
    icon: {
      emoji: '🎨',
      size: 48,
      containerSize: 64,
      gradient: 'cyan-to-purple',
    },
    features: [
      'Professional palettes',
      'One-click switch',
      'Custom colors soon',
    ],
    visuals: {
      colorDots: 8,
    },
    animations: {
      idle: 'color dots gently float',
      hover: 'dot scales + card previews selected palette',
    },
  },

  {
    id: 'template-library',
    title: 'Template Library',
    description:
      'Start with pre-built templates for SaaS, portfolios, agencies, and more. Customize from a solid foundation.',
    icon: {
      emoji: '📚',
      altEmojis: ['🗂️'],
      size: 48,
      containerSize: 64,
      gradient: 'cyan-to-purple',
    },
    features: [
      '6+ ready templates',
      'Industry-specific',
      'Fully editable',
    ],
    animations: {
      idle: 'subtle float',
      hover: 'template stack fan-out animation',
    },
  },
]
