import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

const navItems = [
  {
    label: 'FMTA',
    to: '/fmta',
    dropdown: [
      { to: '/fmta', label: '협회소개' },
      { to: '/fmta/greeting', label: '인사말' },
      { to: '/fmta/history', label: '연혁' },
      { to: '/fmta/info', label: '정보' },
    ],
  },
  {
    label: '블루모션트레이닝',
    to: '/bluemotion',
    dropdown: [
      { to: '/bluemotion', label: '시설소개' },
      { to: '/bluemotion/lesson', label: '레슨안내' },
      { to: '/bluemotion/location', label: '오시는길/정보' },
      { to: '/bluemotion/vision', label: '비전' },
    ],
  },
  {
    label: '주요레슨',
    to: '/floating',
    dropdown: [
      { to: '/floating', label: '프로그램 소개' },
      { to: '/floating/activity', label: '활동 소개' },
      { to: '/floating/partners', label: '제휴 업체' },
      { to: '/floating/vision', label: '비전' },
    ],
  },
  {
    label: '특별활동',
    to: '/special-maternity',
    dropdown: [
      { type: 'header', label: '레슨 소개' },
      { to: '/special-maternity/group', label: '그룹레슨' },
      { to: '/special-maternity/private', label: '개인레슨' },
      { to: '/special-maternity/couple', label: '부부레슨' },
      { type: 'divider' },
      { type: 'header', label: '지역 연계' },
      { to: '/special-maternity/partners', label: '기관연계' },
      { to: '/special-maternity/volunteer', label: '봉사활동' },
      { type: 'divider' },
      { to: '/special-maternity/vision', label: '비전' },
    ],
  },
  {
    label: '교육과정',
    to: '/education',
    dropdown: [
      { type: 'header', label: '필라테스지도자' },
      { to: '/education/functional-anatomy', label: '기능해부학' },
      { to: '/education/functional-pilates', label: '기능성필라테스' },
      { type: 'divider' },
      { type: 'header', label: '글로벌필라테스지도자' },
      { to: '/education/marriage-pregnancy', label: '결혼임신여성' },
      { to: '/education/online-course', label: '온라인교육과정' },
      { type: 'divider' },
      { type: 'header', label: '플로팅온더블루' },
      { to: '/education/floating-expert', label: '전문가과정' },
    ],
  },
  {
    label: '이용안내',
    to: '/shop',
    dropdown: [
      { to: '/shop/programs', label: '프로그램' },
      { to: '/shop/lessons', label: '레슨' },
      { to: '/shop/instructor-courses', label: '강사과정' },
      { to: '/shop/floating', label: '플로팅온더블루' },
    ],
  },
  {
    label: '공지/뉴스',
    to: '/news',
    dropdown: [
      { to: '/news', label: '전체 소식' },
      { to: '/news/sns', label: 'SNS' },
      { to: '/news/contact', label: '문의' },
    ],
  },
]

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 100)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
    document.body.style.overflow = ''
  }, [location.pathname])

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && mobileOpen) {
        setMobileOpen(false)
        document.body.style.overflow = ''
      }
    }
    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [mobileOpen])

  const toggleMobile = () => {
    const next = !mobileOpen
    setMobileOpen(next)
    document.body.style.overflow = next ? 'hidden' : ''
  }

  const closeMobile = () => {
    setMobileOpen(false)
    document.body.style.overflow = ''
  }

  const isNavActive = (path) => {
    if (path === '/') return location.pathname === '/'
    return location.pathname.startsWith(path)
  }

  return (
    <header className={`header${scrolled ? ' scrolled' : ''}`}>
      {/* Top Bar */}
      <div className="header-top">
        <div className="container">
          <Link to="/news/contact">문의하기</Link>
          <Link to="/news/sns">SNS</Link>
        </div>
      </div>

      {/* Main Header */}
      <div className="header-main">
        <div className="container">
          {/* Logo */}
          <Link to="/" className="logo">
            <div>
              <div className="logo-text">BLUEMOTION</div>
              <div className="logo-sub">FMTA · 블루모션트레이닝 · 플로팅온더블루</div>
            </div>
          </Link>

          {/* Mobile Menu Toggle */}
          <button
            className={`mobile-menu-toggle${mobileOpen ? ' active' : ''}`}
            onClick={toggleMobile}
            aria-label="메뉴 열기"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>

          {/* Main Navigation */}
          <nav className={`main-nav${mobileOpen ? ' active' : ''}`}>
            {navItems.map((item) => (
              <div key={item.label} className="nav-item">
                <Link
                  to={item.to}
                  className={`nav-link${isNavActive(item.to) ? ' active' : ''}`}
                  onClick={closeMobile}
                >
                  {item.label}
                </Link>
                {item.dropdown && (
                  <div className="dropdown-menu">
                    {item.dropdown.map((drop, idx) => {
                      if (drop.type === 'divider') {
                        return <div key={`d-${idx}`} className="dropdown-divider" />
                      }
                      if (drop.type === 'header') {
                        return (
                          <div key={`h-${idx}`} className="dropdown-header">
                            {drop.label}
                          </div>
                        )
                      }
                      return (
                        <Link
                          key={drop.to}
                          to={drop.to}
                          className="dropdown-link"
                          onClick={closeMobile}
                        >
                          {drop.label}
                        </Link>
                      )
                    })}
                  </div>
                )}
              </div>
            ))}
          </nav>
        </div>
      </div>
    </header>
  )
}
