import { Link, useLocation } from 'react-router-dom'
import Icon from '../../components/Icon/Icon'
import HeroSection from '../../components/HeroSection/HeroSection'

export default function FloatingVision() {
  const location = useLocation()

  return (
    <>
      <HeroSection
        title="비전"
        subtitle="플로팅온더블루의 비전"
        size="sm"
        breadcrumb={[
          { label: '홈', to: '/' },
          { label: '플로팅온더블루', to: '/floating' },
          { label: '비전' },
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
                <h3 className="sidebar-title">플로팅온더블루</h3>
                <Link to="/floating" className={`sidebar-link${location.pathname === '/floating' ? ' active' : ''}`}>활동소개</Link>
                <Link to="/floating/process" className={`sidebar-link${location.pathname === '/floating/process' ? ' active' : ''}`}>진행과정</Link>
                <Link to="/floating/education" className={`sidebar-link${location.pathname === '/floating/education' ? ' active' : ''}`}>교육과정</Link>
                <Link to="/floating/vision" className={`sidebar-link${location.pathname === '/floating/vision' ? ' active' : ''}`}>비전</Link>
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
