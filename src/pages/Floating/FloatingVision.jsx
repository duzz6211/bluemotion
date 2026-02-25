import { Link, useLocation } from 'react-router-dom'
import Icon from '../../components/Icon/Icon'
import HeroSection from '../../components/HeroSection/HeroSection'

export default function FloatingVision() {
  const location = useLocation()

  return (
    <>
      <HeroSection
        title="비전"
        subtitle="플로팅 온 더 블루의 비전과 미래"
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
              {/* 비전 선언 */}
              <div className="info-box mb-4" style={{ textAlign: 'center', padding: '3rem 2rem' }}>
                <h3 style={{ color: 'var(--color-primary)', marginBottom: '1rem' }}>Our Vision</h3>
                <p style={{ fontSize: 'var(--font-size-xl)', fontWeight: 600 }}>
                  &ldquo;바다와 자연이 선사하는 움직임의 힐링,<br/>
                  울진을 대한민국 대표 웰니스 관광 도시로&rdquo;
                </p>
              </div>

              {/* 비전 목표 */}
              <h3>비전 목표</h3>
              <div className="grid-2 mb-4">
                <div className="card text-center">
                  <div className="card-body">
                    <span className="feature-icon" style={{ fontSize: '2rem' }}><Icon name="waves" /></span>
                    <h4 className="card-title mt-2">수중 웰니스 선도</h4>
                    <p className="card-text">수중 환경을 활용한 새로운 웰니스 프로그램의 기준을 만들어갑니다.</p>
                  </div>
                </div>
                <div className="card text-center">
                  <div className="card-body">
                    <span className="feature-icon" style={{ fontSize: '2rem' }}><Icon name="globe" /></span>
                    <h4 className="card-title mt-2">관광 브랜드 구축</h4>
                    <p className="card-text">울진의 자연환경과 연계한 대표 웰니스 관광 브랜드로 성장합니다.</p>
                  </div>
                </div>
                <div className="card text-center">
                  <div className="card-body">
                    <span className="feature-icon" style={{ fontSize: '2rem' }}><Icon name="leaf" /></span>
                    <h4 className="card-title mt-2">지속 가능한 프로그램</h4>
                    <p className="card-text">환경을 보존하며 지속 가능한 해양 체험 프로그램을 개발합니다.</p>
                  </div>
                </div>
                <div className="card text-center">
                  <div className="card-body">
                    <span className="feature-icon" style={{ fontSize: '2rem' }}><Icon name="users" /></span>
                    <h4 className="card-title mt-2">지역 상생 발전</h4>
                    <p className="card-text">지역 관광 산업과 연계하여 함께 성장하는 상생 모델을 구축합니다.</p>
                  </div>
                </div>
              </div>

              {/* 미래 계획 */}
              <h3 className="mt-4">미래 계획</h3>
              <div className="info-box mb-3">
                <h4 className="info-box-title"><Icon name="calendar" /> 2025년 계획</h4>
                <ul>
                  <li>시즌 기간 확대 (4월~10월 정규 운영)</li>
                  <li>신규 프로그램 개발: SUP(스탠드업 패들보드) 요가</li>
                  <li>숙박+체험 패키지 상품 다양화</li>
                  <li>지역 축제 연계 프로그램 운영</li>
                </ul>
              </div>
              <div className="info-box mb-3">
                <h4 className="info-box-title"><Icon name="trending" /> 중장기 계획</h4>
                <ul>
                  <li>전용 수중 센터(실내 풀) 건립 추진</li>
                  <li>전국 단위 웰니스 관광 프로그램 런칭</li>
                  <li>플로팅 전문가 과정 확대 및 전국 교육 센터화</li>
                  <li>해외 관광객 대상 프로그램 개발</li>
                  <li>울진 해양 웰니스 축제 주관</li>
                </ul>
              </div>
            </main>

            <aside className="sidebar">
              <nav className="sidebar-menu">
                <h3 className="sidebar-title">플로팅온더블루</h3>
                <Link to="/floating" className={`sidebar-link${location.pathname === '/floating' ? ' active' : ''}`}>프로그램 소개</Link>
                <Link to="/floating/activity" className={`sidebar-link${location.pathname === '/floating/activity' ? ' active' : ''}`}>활동 갤러리</Link>
                <Link to="/floating/partners" className={`sidebar-link${location.pathname === '/floating/partners' ? ' active' : ''}`}>제휴 기관</Link>
                <Link to="/floating/vision" className={`sidebar-link${location.pathname === '/floating/vision' ? ' active' : ''}`}>비전</Link>
              </nav>
              <div className="info-box mt-3">
                <h4 className="info-box-title">시즌 안내</h4>
                <p>메인 시즌: 5월~9월</p>
                <p><Icon name="phone" /> 054-XXX-XXXX</p>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </>
  )
}
