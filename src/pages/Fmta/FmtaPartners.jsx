import { Link, useLocation } from 'react-router-dom'
import Icon from '../../components/Icon/Icon'
import HeroSection from '../../components/HeroSection/HeroSection'

export default function FmtaPartners() {
  const location = useLocation()

  return (
    <>
      <HeroSection
        title="제휴업체"
        subtitle="FMTA와 함께하는 파트너"
        size="sm"
        breadcrumb={[
          { label: '홈', to: '/' },
          { label: 'FMTA', to: '/fmta' },
          { label: '제휴업체' },
        ]}
      />

      <section className="section">
        <div className="container">
          <div className="content-with-sidebar">
            <main className="main-content">
              <p>FMTA와 함께 지역사회의 건강한 움직임을 만들어가는 제휴 기관을 소개합니다.</p>

              <div className="grid-3 mt-4">
                {[
                  '울진군보건소',
                  '울진해양레포츠센터',
                  '울진군가족센터',
                  '원덕중고등학교',
                  '한국수력원자력(한울본부)',
                  '한국프리다이빙협회',
                  '(사)지역과소셜비즈',
                  '(주)호아',
                  '디로그디자인그룹',
                ].map((name) => (
                  <div key={name} className="card text-center">
                    <div
                      className="card-image placeholder-image"
                      style={{ height: '120px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                    >
                      [로고]
                    </div>
                    <div className="card-body">
                      <h4 className="card-title" style={{ fontSize: '1rem', margin: 0 }}>{name}</h4>
                    </div>
                  </div>
                ))}
              </div>
            </main>

            <aside className="sidebar">
              <nav className="sidebar-menu">
                <h3 className="sidebar-title">FMTA</h3>
                <Link to="/fmta" className={`sidebar-link${location.pathname === '/fmta' ? ' active' : ''}`}>협회소개</Link>
                <Link to="/fmta/greeting" className={`sidebar-link${location.pathname === '/fmta/greeting' ? ' active' : ''}`}>인사말</Link>
                <Link to="/fmta/history" className={`sidebar-link${location.pathname === '/fmta/history' ? ' active' : ''}`}>협회연혁</Link>
                <Link to="/fmta/partners" className={`sidebar-link${location.pathname === '/fmta/partners' ? ' active' : ''}`}>제휴업체</Link>
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
