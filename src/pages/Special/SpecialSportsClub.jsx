import { Link, useLocation } from 'react-router-dom'
import Icon from '../../components/Icon/Icon'
import HeroSection from '../../components/HeroSection/HeroSection'

export default function SpecialSportsClub() {
  const location = useLocation()

  return (
    <>
      <HeroSection
        title="스포츠클럽"
        subtitle="블루모션 스포츠클럽 활동"
        size="sm"
        breadcrumb={[
          { label: '홈', to: '/' },
          { label: '특별활동', to: '/special/team-building' },
          { label: '스포츠클럽' },
        ]}
      />

      <section className="section">
        <div className="container">
          <div className="content-with-sidebar">
            <main className="main-content">
              <div className="placeholder-section" style={{ padding: '4rem 0', textAlign: 'center' }}>
                <h3>페이지를 구성하는 중입니다</h3>
                <p className="mt-3">곧 자세한 내용을 안내드리겠습니다.</p>
              </div>
            </main>

            <aside className="sidebar">
              <nav className="sidebar-menu">
                <h3 className="sidebar-title">특별활동</h3>
                <Link to="/special/team-building" className={`sidebar-link${location.pathname === '/special/team-building' ? ' active' : ''}`}>팀빌딩 · 워크샵</Link>
                <Link to="/special/beach-pilates" className={`sidebar-link${location.pathname === '/special/beach-pilates' ? ' active' : ''}`}>비치필라테스</Link>
                <Link to="/special/sports-club" className={`sidebar-link${location.pathname === '/special/sports-club' ? ' active' : ''}`}>스포츠클럽</Link>
                <Link to="/special/i-am-blue" className={`sidebar-link${location.pathname === '/special/i-am-blue' ? ' active' : ''}`}>나는 블루</Link>
              </nav>
              <div className="info-box mt-3">
                <h4 className="info-box-title">문의</h4>
                <dl>
                  <dt><Icon name="phone" /></dt><dd>054-XXX-XXXX</dd>
                  <dt><Icon name="mail" /></dt><dd>info@bluemotion.co.kr</dd>
                </dl>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </>
  )
}
