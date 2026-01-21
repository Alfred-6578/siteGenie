// components/preview/Navbar.tsx
interface NavbarProps {
  businessName: string
  ctaText: string
}

export function Navbar({ businessName, ctaText }: NavbarProps) {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[var(--color-background)]/95 backdrop-blur-lg border-b border-primary/10 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 py-6 flex items-center justify-between">
        {/* Logo */}
        <div className="font-bold text-xl text-[var(--color-primary)]">
          {businessName}
        </div>
        
        {/* Nav Links */}
        <div className="hidden md:flex items-center gap-8">
          <a href="#features" className="text-secondary-text hover:text-[var(--color-primary)] transition-colors">
            Features
          </a>
          <a href="#pricing" className="text-secondary-text hover:text-[var(--color-primary)] transition-colors">
            Pricing
          </a>
          <a href="#about" className="text-secondary-text hover:text-[var(--color-primary)] transition-colors">
            About
          </a>
        </div>
        
        {/* CTA Button */}
        <button className="px-6 py-2 bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-accent)] text-[var(--color-background)] font-semibold rounded-lg hover:opacity-90 transition-opacity">
          {ctaText}
        </button>
      </div>
    </nav>
  )
}