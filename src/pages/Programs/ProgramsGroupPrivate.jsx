import { Link, useLocation } from 'react-router-dom'
import Icon from '../../components/Icon/Icon'
import HeroSection from '../../components/HeroSection/HeroSection'

export default function ProgramsGroupPrivate() {
  const location = useLocation()

  return (
    <>
      <HeroSection
        title="그룹 · 개인"
        subtitle="그룹 및 개인 맞춤 프로그램"
        size="sm"
        breadcrumb={[
          { label: '홈', to: '/' },
          { label: '프로그램', to: '/programs/group-private' },
          { label: '그룹 · 개인' },
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
                <h3 className="sidebar-title">프로그램</h3>
                <Link to="/programs/group-private" className={`sidebar-link${location.pathname === '/programs/group-private' ? ' active' : ''}`}>그룹 · 개인</Link>
                <Link to="/programs/maternity" className={`sidebar-link${location.pathname === '/programs/maternity' ? ' active' : ''}`}>스페셜임사부</Link>
                <Link to="/programs/senior-kids" className={`sidebar-link${location.pathname === '/programs/senior-kids' ? ' active' : ''}`}>시니어 · 키즈</Link>
                <Link to="/programs/rehab-athlete" className={`sidebar-link${location.pathname === '/programs/rehab-athlete' ? ' active' : ''}`}>재활 · 선수</Link>
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
