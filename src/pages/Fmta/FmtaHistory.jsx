import { Link, useLocation } from 'react-router-dom'
import Icon from '../../components/Icon/Icon'
import HeroSection from '../../components/HeroSection/HeroSection'

export default function FmtaHistory() {
  const location = useLocation()

  return (
    <>
      <HeroSection
        title="협회연혁"
        subtitle="FMTA 협회의 발자취"
        size="sm"
        breadcrumb={[
          { label: '홈', to: '/' },
          { label: 'FMTA', to: '/fmta' },
          { label: '협회연혁' },
        ]}
      />

      <section className="section">
        <div className="container">
          <div className="content-with-sidebar">
            <main className="main-content">
              {/* 타임라인 */}
              <div className="timeline">
                <div className="timeline-item">
                  <div className="timeline-marker">2025</div>
                  <div className="timeline-content">
                    <h4>전문 강사 양성 및 지역사회 연계</h4>
                    <ul>
                      <li>전문 강사 양성 사업 확대</li>
                      <li>지역사회 연계 일자리 창출 사업 확대</li>
                    </ul>
                  </div>
                </div>

                <div className="timeline-item">
                  <div className="timeline-marker">2024</div>
                  <div className="timeline-content">
                    <h4>FMTA 설립</h4>
                    <ul>
                      <li>기능적움직임트레이닝협회(FMTA) 설립</li>
                    </ul>
                  </div>
                </div>

                <div className="timeline-item">
                  <div className="timeline-marker">2023</div>
                  <div className="timeline-content">
                    <h4>블루모션트레이닝 센터 확장 이전</h4>
                    <ul>
                      <li>&lsquo;블루모션 트레이닝 센터&rsquo; 확장 이전 및 리브랜딩</li>
                    </ul>
                  </div>
                </div>

                <div className="timeline-item">
                  <div className="timeline-marker">2019</div>
                  <div className="timeline-content">
                    <h4>전신 센터 설립</h4>
                    <ul>
                      <li>블루모션의 전신, &lsquo;힐라테스 센터&rsquo; 설립 및 운영</li>
                    </ul>
                  </div>
                </div>
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
