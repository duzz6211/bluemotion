import { Link, useLocation } from 'react-router-dom'
import Icon from '../../components/Icon/Icon'
import HeroSection from '../../components/HeroSection/HeroSection'

export default function FmtaIndex() {
  const location = useLocation()

  return (
    <>
      <HeroSection
        title="FMTA 협회소개"
        subtitle="움직임 교육 전문 협회"
        size="sm"
        breadcrumb={[
          { label: '홈', to: '/' },
          { label: 'FMTA', to: '/fmta' },
          { label: '협회소개' },
        ]}
      />

      <section className="section">
        <div className="container">
          <div className="content-with-sidebar">
            <main className="main-content">
              {/* 미션 & 비전 */}
              <div className="grid-2 mb-4">
                <div className="info-box">
                  <h3 className="info-box-title">미션 (Mission)</h3>
                  <p>기능적 움직임 교육을 통해 건강한 삶의 질을 높이고, 전문 지도자를 양성하여 사회에 기여합니다.</p>
                </div>
                <div className="info-box">
                  <h3 className="info-box-title">비전 (Vision)</h3>
                  <p>대한민국 움직임 교육의 새로운 기준을 만들어가는 선도적 전문 협회가 되겠습니다.</p>
                </div>
              </div>

              {/* 협회 소개 */}
              <h3>FMTA란?</h3>
              <p>
                FMTA(Functional Movement Training Association)는 기능적 움직임 훈련을 전문으로 하는 교육 협회입니다.
                인체의 기능해부학적 이해를 바탕으로 안전하고 효과적인 움직임 교육 커리큘럼을 개발하고,
                이를 기반으로 전문 지도자를 양성하며 민간자격증을 발급합니다.
              </p>
              <p>
                FMTA는 단순한 운동 기술 전달이 아닌, 움직임의 원리와 과학적 근거에 기반한 체계적 교육을 지향합니다.
                협회가 개발한 교육 커리큘럼은 블루모션트레이닝 센터를 통해 현장에서 구현되며,
                이론과 실습이 통합된 교육 환경을 제공합니다.
              </p>

              {/* 핵심 가치 */}
              <h3 className="mt-4">핵심 가치</h3>
              <div className="grid-3 mb-4">
                <div className="card text-center">
                  <div className="card-body">
                    <span className="feature-icon" style={{ fontSize: '2rem' }}><Icon name="award" /></span>
                    <h4 className="card-title mt-2">전문성</h4>
                    <p className="card-text">기능해부학과 운동과학에 기반한 체계적 커리큘럼으로 전문 지도자를 양성합니다.</p>
                  </div>
                </div>
                <div className="card text-center">
                  <div className="card-body">
                    <span className="feature-icon" style={{ fontSize: '2rem' }}><Icon name="shieldCheck" /></span>
                    <h4 className="card-title mt-2">신뢰</h4>
                    <p className="card-text">검증된 교육 시스템과 엄격한 자격 관리로 교육의 질과 신뢰를 보장합니다.</p>
                  </div>
                </div>
                <div className="card text-center">
                  <div className="card-body">
                    <span className="feature-icon" style={{ fontSize: '2rem' }}><Icon name="trending" /></span>
                    <h4 className="card-title mt-2">성장</h4>
                    <p className="card-text">지속적인 보수교육과 워크샵을 통해 지도자의 역량 성장을 지원합니다.</p>
                  </div>
                </div>
              </div>

              {/* 자격증 안내 */}
              <h3 className="mt-4">FMTA 민간자격증</h3>
              <p>FMTA에서 발급하는 공인 민간자격증을 안내합니다.</p>
              <div className="table-responsive">
                <table className="table">
                  <thead>
                    <tr>
                      <th>자격증명</th>
                      <th>교육기간</th>
                      <th>대상</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>기능해부학 지도자</td>
                      <td>12주</td>
                      <td>운동 전공자 및 관련 종사자</td>
                    </tr>
                    <tr>
                      <td>기능성필라테스 지도자</td>
                      <td>16주</td>
                      <td>기능해부학 이수자 또는 필라테스 경력자</td>
                    </tr>
                    <tr>
                      <td>결혼임신여성운동 전문가</td>
                      <td>8주</td>
                      <td>필라테스 지도자 자격 보유자</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* CTA */}
              <div className="info-box mt-4" style={{ textAlign: 'center' }}>
                <h4>FMTA 교육 과정에 관심이 있으신가요?</h4>
                <p>다양한 교육 과정과 자격증 취득 과정을 확인해보세요.</p>
                <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                  <Link to="/education" className="btn btn-primary">교육과정 보기</Link>
                  <Link to="/news/contact" className="btn btn-secondary">문의하기</Link>
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
