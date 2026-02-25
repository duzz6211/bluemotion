import { Link, useLocation } from 'react-router-dom'
import Icon from '../../components/Icon/Icon'
import HeroSection from '../../components/HeroSection/HeroSection'

export default function BluemotionLesson() {
  const location = useLocation()

  return (
    <>
      <HeroSection
        title="레슨안내"
        subtitle="블루모션트레이닝 센터 레슨 프로그램"
        size="sm"
        breadcrumb={[
          { label: '홈', to: '/' },
          { label: '블루모션트레이닝', to: '/bluemotion' },
          { label: '레슨안내' },
        ]}
      />

      <section className="section">
        <div className="container">
          <div className="content-with-sidebar">
            <main className="main-content">
              <h3>레슨 프로그램</h3>
              <p>
                블루모션트레이닝 센터에서는 개인의 목표와 상황에 맞는 다양한 레슨 프로그램을 운영합니다.
                FMTA 공인 지도자가 체계적인 커리큘럼을 바탕으로 안전하고 효과적인 수업을 진행합니다.
              </p>

              {/* 레슨 유형 */}
              <div className="grid-3 mb-4 mt-4">
                <div className="card">
                  <div className="card-body text-center">
                    <span className="feature-icon" style={{ fontSize: '2.5rem' }}><Icon name="user" /></span>
                    <h4 className="card-title mt-2">개인 레슨 (1:1)</h4>
                    <p className="card-text">
                      전문 지도자와 1:1로 진행되는 맞춤형 레슨입니다. 개인의 체형 분석을 통해
                      목표에 맞는 프로그램을 설계하고, 집중적인 교정과 움직임 개선이 이루어집니다.
                    </p>
                    <ul style={{ textAlign: 'left' }}>
                      <li>50분 수업</li>
                      <li>체형 분석 및 맞춤 프로그램</li>
                      <li>기구 필라테스 중심</li>
                    </ul>
                  </div>
                </div>
                <div className="card">
                  <div className="card-body text-center">
                    <span className="feature-icon" style={{ fontSize: '2.5rem' }}><Icon name="users" /></span>
                    <h4 className="card-title mt-2">그룹 레슨 (2~4인)</h4>
                    <p className="card-text">
                      2~4인의 소그룹으로 진행되는 레슨입니다. 비슷한 수준의 회원들과 함께 수업하며,
                      소수 정원 운영으로 개인별 세심한 지도가 가능합니다.
                    </p>
                    <ul style={{ textAlign: 'left' }}>
                      <li>50분 수업</li>
                      <li>최대 4인 소그룹</li>
                      <li>기구/매트 필라테스</li>
                    </ul>
                  </div>
                </div>
                <div className="card">
                  <div className="card-body text-center">
                    <span className="feature-icon" style={{ fontSize: '2.5rem' }}><Icon name="baby" /></span>
                    <h4 className="card-title mt-2">임산부 레슨</h4>
                    <p className="card-text">
                      산전·산후 전문 지도자가 진행하는 임산부 맞춤 레슨입니다. 임신 주수에 따른
                      안전한 운동 프로그램으로 건강한 출산과 빠른 회복을 돕습니다.
                    </p>
                    <ul style={{ textAlign: 'left' }}>
                      <li>50분 수업</li>
                      <li>산전·산후 맞춤형</li>
                      <li>개인/그룹/부부 선택</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* 요금 안내 */}
              <h3 className="mt-4">요금 안내</h3>
              <div className="table-responsive mb-4">
                <table className="table">
                  <thead>
                    <tr>
                      <th>구분</th>
                      <th>레슨 유형</th>
                      <th>회차</th>
                      <th>금액</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td rowSpan={3}><strong>개인 레슨</strong></td>
                      <td>1:1 개인</td>
                      <td>1회</td>
                      <td>80,000원</td>
                    </tr>
                    <tr>
                      <td>1:1 개인</td>
                      <td>10회</td>
                      <td>720,000원</td>
                    </tr>
                    <tr>
                      <td>1:1 개인</td>
                      <td>20회</td>
                      <td>1,360,000원</td>
                    </tr>
                    <tr>
                      <td rowSpan={3}><strong>그룹 레슨</strong></td>
                      <td>2~4인 그룹</td>
                      <td>1회</td>
                      <td>40,000원</td>
                    </tr>
                    <tr>
                      <td>2~4인 그룹</td>
                      <td>10회</td>
                      <td>360,000원</td>
                    </tr>
                    <tr>
                      <td>2~4인 그룹</td>
                      <td>20회</td>
                      <td>680,000원</td>
                    </tr>
                    <tr>
                      <td><strong>체험 레슨</strong></td>
                      <td>1:1 체험</td>
                      <td>1회</td>
                      <td>50,000원</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-muted" style={{ fontSize: 'var(--font-size-sm)' }}>
                * 위 금액은 부가세 포함 금액이며, 세부 사항은 센터에 문의해주세요.
              </p>

              {/* 등록 절차 */}
              <h3 className="mt-4">등록 절차</h3>
              <div className="grid-5 mb-4">
                <div className="card text-center">
                  <div className="card-body">
                    <span className="step-number">1</span>
                    <h4 className="card-title">상담 예약</h4>
                    <p className="card-text">전화 또는 온라인으로 상담 예약</p>
                  </div>
                </div>
                <div className="card text-center">
                  <div className="card-body">
                    <span className="step-number">2</span>
                    <h4 className="card-title">방문 상담</h4>
                    <p className="card-text">센터 방문 후 상담 및 체형 분석</p>
                  </div>
                </div>
                <div className="card text-center">
                  <div className="card-body">
                    <span className="step-number">3</span>
                    <h4 className="card-title">프로그램 설계</h4>
                    <p className="card-text">목표에 맞는 맞춤 프로그램 설계</p>
                  </div>
                </div>
                <div className="card text-center">
                  <div className="card-body">
                    <span className="step-number">4</span>
                    <h4 className="card-title">등록 및 결제</h4>
                    <p className="card-text">레슨 등록 및 수강료 결제</p>
                  </div>
                </div>
                <div className="card text-center">
                  <div className="card-body">
                    <span className="step-number">5</span>
                    <h4 className="card-title">레슨 시작</h4>
                    <p className="card-text">일정 확정 후 레슨 시작</p>
                  </div>
                </div>
              </div>

              {/* 예약 안내 */}
              <div className="info-box mt-4">
                <h4 className="info-box-title"><Icon name="phone" /> 예약 안내</h4>
                <p>레슨 예약은 전화 또는 네이버 예약 앱을 통해 가능합니다.</p>
                <ul>
                  <li>전화 예약: 054-XXX-XXXX</li>
                  <li>레슨 취소는 수업 24시간 전까지 가능합니다.</li>
                  <li>당일 취소 및 노쇼는 1회 차감됩니다.</li>
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
