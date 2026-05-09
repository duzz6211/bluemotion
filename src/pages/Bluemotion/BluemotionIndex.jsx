import { Link, useLocation } from 'react-router-dom'
import Icon from '../../components/Icon/Icon'
import HeroSection from '../../components/HeroSection/HeroSection'

export default function BluemotionIndex() {
  const location = useLocation()

  return (
    <>
      <HeroSection
        title="시설소개"
        subtitle="블루모션트레이닝 센터 시설 안내"
        size="sm"
        breadcrumb={[
          { label: '홈', to: '/' },
          { label: '블루모션트레이닝센터', to: '/bluemotion' },
          { label: '시설소개' },
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
                <h3 className="sidebar-title">블루모션트레이닝센터</h3>
                <Link to="/bluemotion" className={`sidebar-link${location.pathname === '/bluemotion' ? ' active' : ''}`}>시설소개</Link>
                <Link to="/bluemotion/program" className={`sidebar-link${location.pathname === '/bluemotion/program' ? ' active' : ''}`}>프로그램</Link>
                <Link to="/bluemotion/location" className={`sidebar-link${location.pathname === '/bluemotion/location' ? ' active' : ''}`}>오시는길</Link>
                <Link to="/bluemotion/vision" className={`sidebar-link${location.pathname === '/bluemotion/vision' ? ' active' : ''}`}>비전</Link>
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
