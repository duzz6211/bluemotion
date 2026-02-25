import { Link, useLocation } from 'react-router-dom'
import Icon from '../../components/Icon/Icon'
import HeroSection from '../../components/HeroSection/HeroSection'

export default function FmtaHistory() {
  const location = useLocation()

  return (
    <>
      <HeroSection
        title="연혁"
        subtitle="FMTA 협회의 발자취"
        size="sm"
        breadcrumb={[
          { label: '홈', to: '/' },
          { label: 'FMTA', to: '/fmta' },
          { label: '연혁' },
        ]}
      />

      <section className="section">
        <div className="container">
          <div className="content-with-sidebar">
            <main className="main-content">
              {/* 타임라인 */}
              <div className="timeline">
                <div className="timeline-item">
                  <div className="timeline-marker">2024</div>
                  <div className="timeline-content">
                    <h4>글로벌 과정 확장</h4>
                    <ul>
                      <li>온라인 교육과정 플랫폼 런칭</li>
                      <li>플로팅 전문가 과정 4기 운영</li>
                      <li>결혼임신여성운동 전문가 과정 개설</li>
                      <li>울진군 체육회 업무협약 체결</li>
                      <li>플로팅온더블루 시즌 프로그램 확대</li>
                      <li>센터 시설 리모델링 완료</li>
                    </ul>
                  </div>
                </div>

                <div className="timeline-item">
                  <div className="timeline-marker">2023</div>
                  <div className="timeline-content">
                    <h4>센터 확장 및 프로그램 다양화</h4>
                    <ul>
                      <li>블루모션트레이닝 센터 확장 이전</li>
                      <li>플로팅온더블루 프로그램 정식 론칭</li>
                      <li>스페셜 임산부 프로그램 시작</li>
                      <li>기능성필라테스 지도자 과정 1기 개설</li>
                      <li>울진군 보건소 업무협약 체결</li>
                      <li>지역 복지시설 봉사활동 시작</li>
                    </ul>
                  </div>
                </div>

                <div className="timeline-item">
                  <div className="timeline-marker">2022</div>
                  <div className="timeline-content">
                    <h4>FMTA 정식 설립</h4>
                    <ul>
                      <li>FMTA(Functional Movement Training Association) 정식 설립</li>
                      <li>블루모션트레이닝 센터 오픈</li>
                      <li>기능해부학 지도자 과정 1기 개설</li>
                      <li>민간자격증 등록 및 발급 시작</li>
                      <li>교육 커리큘럼 체계 확립</li>
                    </ul>
                  </div>
                </div>

                <div className="timeline-item">
                  <div className="timeline-marker">2021</div>
                  <div className="timeline-content">
                    <h4>준비위원회 구성</h4>
                    <ul>
                      <li>FMTA 설립 준비위원회 구성</li>
                      <li>교육 커리큘럼 연구 및 개발 착수</li>
                      <li>기능해부학 기반 교육 프레임워크 설계</li>
                      <li>블루모션트레이닝 센터 사업계획 수립</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* 주요 성과 */}
              <h3 className="mt-5">주요 성과</h3>
              <div className="grid-4 mb-4">
                <div className="card text-center">
                  <div className="card-body">
                    <span className="feature-icon" style={{ fontSize: '2rem' }}><Icon name="calendar" /></span>
                    <h4 className="card-title" style={{ fontSize: '2rem', color: 'var(--color-primary)' }}>3년+</h4>
                    <p className="card-text">협회 운영</p>
                  </div>
                </div>
                <div className="card text-center">
                  <div className="card-body">
                    <span className="feature-icon" style={{ fontSize: '2rem' }}><Icon name="award" /></span>
                    <h4 className="card-title" style={{ fontSize: '2rem', color: 'var(--color-primary)' }}>200+</h4>
                    <p className="card-text">자격증 발급</p>
                  </div>
                </div>
                <div className="card text-center">
                  <div className="card-body">
                    <span className="feature-icon" style={{ fontSize: '2rem' }}><Icon name="book" /></span>
                    <h4 className="card-title" style={{ fontSize: '2rem', color: 'var(--color-primary)' }}>5개</h4>
                    <p className="card-text">교육 과정</p>
                  </div>
                </div>
                <div className="card text-center">
                  <div className="card-body">
                    <span className="feature-icon" style={{ fontSize: '2rem' }}><Icon name="handshake" /></span>
                    <h4 className="card-title" style={{ fontSize: '2rem', color: 'var(--color-primary)' }}>3개</h4>
                    <p className="card-text">기관 제휴</p>
                  </div>
                </div>
              </div>
            </main>

            <aside className="sidebar">
              <nav className="sidebar-menu">
                <h3 className="sidebar-title">FMTA</h3>
                <Link to="/fmta" className={`sidebar-link${location.pathname === '/fmta' ? ' active' : ''}`}>협회소개</Link>
                <Link to="/fmta/greeting" className={`sidebar-link${location.pathname === '/fmta/greeting' ? ' active' : ''}`}>인사말</Link>
                <Link to="/fmta/history" className={`sidebar-link${location.pathname === '/fmta/history' ? ' active' : ''}`}>연혁</Link>
                <Link to="/fmta/info" className={`sidebar-link${location.pathname === '/fmta/info' ? ' active' : ''}`}>정보</Link>
              </nav>
              <div className="info-box mt-3">
                <h4 className="info-box-title">문의</h4>
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
