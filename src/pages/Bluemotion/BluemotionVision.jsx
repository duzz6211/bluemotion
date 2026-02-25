import { Link, useLocation } from 'react-router-dom'
import Icon from '../../components/Icon/Icon'
import HeroSection from '../../components/HeroSection/HeroSection'

export default function BluemotionVision() {
  const location = useLocation()

  return (
    <>
      <HeroSection
        title="비전"
        subtitle="블루모션트레이닝 센터의 비전과 발전 계획"
        size="sm"
        breadcrumb={[
          { label: '홈', to: '/' },
          { label: '블루모션트레이닝', to: '/bluemotion' },
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
                  &ldquo;울진에서 시작하여 대한민국을 넘어<br/>
                  움직임 교육의 새로운 패러다임을 만들어갑니다&rdquo;
                </p>
              </div>

              {/* 목표 */}
              <h3>센터 목표</h3>
              <div className="grid-3 mb-4">
                <div className="card text-center">
                  <div className="card-body">
                    <span className="feature-icon" style={{ fontSize: '2rem' }}><Icon name="target" /></span>
                    <h4 className="card-title mt-2">교육 품질 최고 수준</h4>
                    <p className="card-text">FMTA 교육 철학을 현장에서 완벽하게 구현하여 최고 수준의 교육 품질을 달성합니다.</p>
                  </div>
                </div>
                <div className="card text-center">
                  <div className="card-body">
                    <span className="feature-icon" style={{ fontSize: '2rem' }}><Icon name="heart" /></span>
                    <h4 className="card-title mt-2">지역사회 건강 증진</h4>
                    <p className="card-text">울진 지역 주민들의 건강하고 활기찬 삶에 기여하는 센터가 되겠습니다.</p>
                  </div>
                </div>
                <div className="card text-center">
                  <div className="card-body">
                    <span className="feature-icon" style={{ fontSize: '2rem' }}><Icon name="globe" /></span>
                    <h4 className="card-title mt-2">웰니스 관광 허브</h4>
                    <p className="card-text">울진의 자연환경과 결합한 웰니스 관광 프로그램의 중심지로 성장합니다.</p>
                  </div>
                </div>
              </div>

              {/* 발전 계획 */}
              <h3 className="mt-4">발전 계획</h3>

              <div className="info-box mb-3">
                <h4 className="info-box-title"><Icon name="calendar" /> 단기 계획 (1년 이내)</h4>
                <ul>
                  <li>레슨 프로그램 다양화 및 회원 만족도 향상</li>
                  <li>스페셜 임산부 프로그램 운영 안정화</li>
                  <li>지역 의료기관 및 복지시설 연계 강화</li>
                  <li>온라인 예약 시스템 고도화</li>
                </ul>
              </div>

              <div className="info-box mb-3">
                <h4 className="info-box-title"><Icon name="trending" /> 중기 계획 (1~3년)</h4>
                <ul>
                  <li>플로팅온더블루 프로그램 전국 홍보 및 확대</li>
                  <li>교육 실습 센터로서의 기능 강화</li>
                  <li>울진 웰니스 관광 패키지 개발 및 운영</li>
                  <li>지역 관광 인프라와 연계한 프로그램 확대</li>
                  <li>전문 지도자 추가 영입 및 역량 강화</li>
                </ul>
              </div>

              <div className="info-box mb-3">
                <h4 className="info-box-title"><Icon name="sparkles" /> 장기 계획 (3년 이상)</h4>
                <ul>
                  <li>제2센터 개설 검토 (수도권 또는 주요 도시)</li>
                  <li>FMTA 교육 모델의 전국 확산 거점 역할</li>
                  <li>해외 워크샵 및 교류 프로그램 운영</li>
                  <li>움직임 교육 연구센터 기능 수행</li>
                  <li>지역 대표 웰니스 브랜드로 성장</li>
                </ul>
              </div>
            </main>

            <aside className="sidebar">
              <nav className="sidebar-menu">
                <h3 className="sidebar-title">블루모션트레이닝</h3>
                <Link to="/bluemotion" className={`sidebar-link${location.pathname === '/bluemotion' ? ' active' : ''}`}>시설소개</Link>
                <Link to="/bluemotion/lesson" className={`sidebar-link${location.pathname === '/bluemotion/lesson' ? ' active' : ''}`}>레슨안내</Link>
                <Link to="/bluemotion/location" className={`sidebar-link${location.pathname === '/bluemotion/location' ? ' active' : ''}`}>오시는길/정보</Link>
                <Link to="/bluemotion/vision" className={`sidebar-link${location.pathname === '/bluemotion/vision' ? ' active' : ''}`}>비전</Link>
              </nav>
              <div className="info-box mt-3">
                <h4 className="info-box-title">문의</h4>
                <dl>
                  <dt><Icon name="phone" /> 전화</dt><dd>054-XXX-XXXX</dd>
                  <dt><Icon name="clock" /> 운영시간</dt><dd>평일 09:00-21:00</dd>
                </dl>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </>
  )
}
