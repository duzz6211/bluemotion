import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

const navItems = [
  {
    label: 'FMTA',
    to: '/fmta',
    dropdown: [
      { to: '/fmta', label: '협회소개' },
      { to: '/fmta/greeting', label: '인사말' },
      { to: '/fmta/history', label: '협회연혁' },
      { to: '/fmta/partners', label: '제휴업체' },
    ],
  },
  {
    label: '블루모션트레이닝센터',
    to: '/bluemotion',
    dropdown: [
      { to: '/bluemotion', label: '시설소개' },
      { to: '/bluemotion/program', label: '프로그램' },
      { to: '/bluemotion/location', label: '오시는길' },
      { to: '/bluemotion/vision', label: '비전' },
    ],
  },
  {
    label: '플로팅온더블루',
    to: '/floating',
    dropdown: [
      { to: '/floating', label: '활동소개' },
      { to: '/floating/process', label: '진행과정' },
      { to: '/floating/education', label: '교육과정' },
      { to: '/floating/vision', label: '비전' },
    ],
  },
  {
    label: '프로그램',
    to: '/programs/group-private',
    dropdown: [
      { to: '/programs/group-private', label: '그룹 · 개인' },
      { to: '/programs/maternity', label: '스페셜임사부' },
      { to: '/programs/senior-kids', label: '시니어 · 키즈' },
      { to: '/programs/rehab-athlete', label: '재활 · 선수' },
    ],
  },
  {
    label: '특별활동',
    to: '/special/team-building',
    dropdown: [
      { to: '/special/team-building', label: '팀빌딩 · 워크샵' },
      { to: '/special/beach-pilates', label: '비치필라테스' },
      { to: '/special/sports-club', label: '스포츠클럽' },
      { to: '/special/i-am-blue', label: '나는 블루' },
    ],
  },
  {
    label: '교육과정',
    to: '/education',
    dropdown: [
      { to: '/education/functional-pilates', label: '기능성필라테스' },
      { to: '/education/global-pilates', label: '글로벌필라테스' },
      { to: '/education/floating-pilates', label: '플로팅필라테스' },
      { to: '/education/online-course', label: '온라인 교육과정' },
    ],
  },
  {
    label: '공지/뉴스',
    to: '/news',
    dropdown: [
      { to: '/news', label: '전체소식' },
      { to: '/news/notice', label: '공지사항' },
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
