import { useState, useEffect } from 'react'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const navItems = [
    { label: '과정 소개', href: '#course' },
    { label: '강사 소개', href: '#instructor' },
    { label: 'FAQ', href: '#faq' },
    { label: '문의', href: '#contact' },
  ]

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/95 backdrop-blur-sm shadow-md' : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        <a href="#" className="text-[21px] font-bold text-brand-primary tracking-tight">
          AI활용교육
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-gray-600 hover:text-brand-primary transition-colors"
            >
              {item.label}
            </a>
          ))}
          <a
            href="#register"
            className="bg-brand-primary text-white px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-sage-600 transition-colors"
          >
            지금 신청하기
          </a>
        </nav>

        {/* Mobile CTA + menu */}
        <div className="flex md:hidden items-center gap-3">
          <a
            href="#register"
            className="bg-brand-primary text-white px-4 py-2 rounded-full text-sm font-semibold"
          >
            신청하기
          </a>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="p-2 text-gray-600"
            aria-label="메뉴"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {menuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-sm border-t border-gray-100 shadow-lg">
          <nav className="flex flex-col py-3">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="px-6 py-3 text-base text-gray-700 hover:bg-sage-50 transition-colors"
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  )
}
