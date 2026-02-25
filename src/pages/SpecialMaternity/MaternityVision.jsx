import { Link, useLocation } from 'react-router-dom'
import Icon from '../../components/Icon/Icon'
import HeroSection from '../../components/HeroSection/HeroSection'

export default function MaternityVision() {
  const location = useLocation()

  return (
    <>
      <HeroSection
        title="비전"
        subtitle="스페셜 임산부 프로그램의 비전과 목표"
        size="sm"
        breadcrumb={[
          { label: '홈', to: '/' },
          { label: '스페셜 임산부', to: '/special-maternity' },
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
                  &ldquo;모든 임산부가 안전하고 건강하게<br/>
                  움직일 수 있는 환경을 만들어갑니다&rdquo;
                </p>
              </div>

              {/* 핵심 가치 */}
              <h3>핵심 가치</h3>
              <div className="grid-3 mb-4">
                <div className="card text-center">
                  <div className="card-body">
                    <span className="feature-icon" style={{ fontSize: '2rem' }}><Icon name="shield" /></span>
                    <h4 className="card-title mt-2">안전</h4>
                    <p className="card-text">의학적 근거에 기반한 안전한 운동 프로그램으로 엄마와 아기의 건강을 최우선으로 합니다.</p>
                  </div>
                </div>
                <div className="card text-center">
                  <div className="card-body">
                    <span className="feature-icon" style={{ fontSize: '2rem' }}><Icon name="award" /></span>
                    <h4 className="card-title mt-2">전문성</h4>
                    <p className="card-text">FMTA 공인 전문 자격을 갖춘 지도자가 체계적이고 전문적인 프로그램을 제공합니다.</p>
                  </div>
                </div>
                <div className="card text-center">
                  <div className="card-body">
                    <span className="feature-icon" style={{ fontSize: '2rem' }}><Icon name="heart" /></span>
                    <h4 className="card-title mt-2">돌봄</h4>
                    <p className="card-text">임산부 한 분 한 분에 대한 세심한 돌봄과 관심으로 따뜻한 운동 환경을 제공합니다.</p>
                  </div>
                </div>
              </div>

              {/* 목표 */}
              <h3 className="mt-4">발전 목표</h3>
              <div className="info-box mb-3">
                <h4 className="info-box-title"><Icon name="target" /> 프로그램 목표</h4>
                <ul>
                  <li>임산부 전문 운동 프로그램의 표준 모델 구축</li>
                  <li>산전·산후 전문 지도자 양성 체계 강화</li>
                  <li>참여 임산부 만족도 95% 이상 달성</li>
                  <li>지역 내 임산부 운동 참여율 향상</li>
                </ul>
              </div>

              <div className="info-box mb-3">
                <h4 className="info-box-title"><Icon name="handshake" /> 사회적 목표</h4>
                <ul>
                  <li>취약계층 임산부를 위한 무료 프로그램 확대</li>
                  <li>지역 의료기관·복지기관과의 연계 네트워크 강화</li>
                  <li>다문화가정 임산부 대상 맞춤형 프로그램 개발</li>
                  <li>봉사활동을 통한 지역사회 건강 증진 기여</li>
                </ul>
              </div>

              <div className="info-box mb-3">
                <h4 className="info-box-title"><Icon name="trending" /> 성장 계획</h4>
                <ul>
                  <li>온라인 산전·산후 운동 프로그램 개발 및 서비스</li>
                  <li>임산부 운동 효과에 관한 연구 데이터 축적 및 발표</li>
                  <li>전국 단위 임산부 전문 지도자 양성 네트워크 구축</li>
                  <li>타 지역 센터 연계를 통한 프로그램 확산</li>
                </ul>
              </div>
            </main>

            <aside className="sidebar">
              <nav className="sidebar-menu">
                <h3 className="sidebar-title">스페셜 임산부</h3>
                <Link to="/special-maternity" className={`sidebar-link${location.pathname === '/special-maternity' ? ' active' : ''}`}>프로그램 소개</Link>
                <Link to="/special-maternity/group" className={`sidebar-link${location.pathname === '/special-maternity/group' ? ' active' : ''}`}>그룹 레슨</Link>
                <Link to="/special-maternity/private" className={`sidebar-link${location.pathname === '/special-maternity/private' ? ' active' : ''}`}>개인 레슨</Link>
                <Link to="/special-maternity/couple" className={`sidebar-link${location.pathname === '/special-maternity/couple' ? ' active' : ''}`}>부부 레슨</Link>
                <Link to="/special-maternity/partners" className={`sidebar-link${location.pathname === '/special-maternity/partners' ? ' active' : ''}`}>협력 기관</Link>
                <Link to="/special-maternity/volunteer" className={`sidebar-link${location.pathname === '/special-maternity/volunteer' ? ' active' : ''}`}>봉사활동</Link>
                <Link to="/special-maternity/vision" className={`sidebar-link${location.pathname === '/special-maternity/vision' ? ' active' : ''}`}>비전</Link>
              </nav>
              <div className="info-box mt-3">
                <h4 className="info-box-title">상담 문의</h4>
                <dl>
                  <dt><Icon name="phone" /> 전화</dt><dd>054-XXX-XXXX</dd>
                  <dt><Icon name="mail" /> 이메일</dt><dd>info@bluemotion.co.kr</dd>
                </dl>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </>
  )
}
