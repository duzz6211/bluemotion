import { Link, useLocation } from 'react-router-dom'
import Icon from '../../components/Icon/Icon'
import HeroSection from '../../components/HeroSection/HeroSection'

export default function MaternityGroupLesson() {
  const location = useLocation()

  return (
    <>
      <HeroSection
        title="그룹 레슨"
        subtitle="함께하는 임산부 소그룹 운동 프로그램"
        size="sm"
        breadcrumb={[
          { label: '홈', to: '/' },
          { label: '스페셜 임산부', to: '/special-maternity' },
          { label: '그룹 레슨' },
        ]}
      />

      <section className="section">
        <div className="container">
          <div className="content-with-sidebar">
            <main className="main-content">
              <h3>임산부 그룹 레슨</h3>
              <p>
                비슷한 시기의 임산부 2~4명이 함께하는 소그룹 레슨입니다. 같은 경험을 공유하는
                동료들과 함께 운동하며 정서적 교류도 나눌 수 있어 높은 만족도를 보이고 있습니다.
                FMTA 공인 전문 지도자가 안전하게 수업을 진행합니다.
              </p>

              {/* 수업 구성 */}
              <h3 className="mt-4">수업 구성</h3>
              <div className="table-responsive mb-4">
                <table className="table">
                  <thead>
                    <tr>
                      <th>구분</th>
                      <th>내용</th>
                      <th>시간</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><strong>워밍업</strong></td>
                      <td>호흡법, 관절 가동 범위 운동, 가벼운 스트레칭</td>
                      <td>10분</td>
                    </tr>
                    <tr>
                      <td><strong>본 운동</strong></td>
                      <td>임신 주수별 맞춤 필라테스, 골반저근 운동, 근력 강화</td>
                      <td>30분</td>
                    </tr>
                    <tr>
                      <td><strong>쿨다운</strong></td>
                      <td>이완 운동, 부종 완화 마사지, 명상</td>
                      <td>10분</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* 클래스 안내 */}
              <h3 className="mt-4">클래스 안내</h3>
              <div className="grid-2 mb-4">
                <div className="info-box">
                  <h4 className="info-box-title">산전 클래스</h4>
                  <ul>
                    <li><strong>대상:</strong> 임신 16주 이후 ~ 출산 전</li>
                    <li><strong>정원:</strong> 2~4명</li>
                    <li><strong>시간:</strong> 50분 수업</li>
                    <li><strong>횟수:</strong> 주 1~2회 권장</li>
                    <li><strong>내용:</strong> 골반저근 강화, 호흡법, 자세 교정, 체력 관리</li>
                  </ul>
                </div>
                <div className="info-box">
                  <h4 className="info-box-title">산후 클래스</h4>
                  <ul>
                    <li><strong>대상:</strong> 출산 후 6주 이후 (의사 확인 필요)</li>
                    <li><strong>정원:</strong> 2~4명</li>
                    <li><strong>시간:</strong> 50분 수업</li>
                    <li><strong>횟수:</strong> 주 2~3회 권장</li>
                    <li><strong>내용:</strong> 복부 회복, 골반 교정, 체형 회복, 체력 증진</li>
                  </ul>
                </div>
              </div>

              {/* 요금 */}
              <h3 className="mt-4">요금 안내</h3>
              <div className="table-responsive mb-4">
                <table className="table">
                  <thead>
                    <tr>
                      <th>구분</th>
                      <th>회차</th>
                      <th>금액</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>그룹 레슨 (2~4인)</td>
                      <td>1회</td>
                      <td>40,000원</td>
                    </tr>
                    <tr>
                      <td>그룹 레슨 (2~4인)</td>
                      <td>10회</td>
                      <td>360,000원</td>
                    </tr>
                    <tr>
                      <td>그룹 레슨 (2~4인)</td>
                      <td>20회</td>
                      <td>680,000원</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* 유의사항 */}
              <div className="info-box mt-4">
                <h4 className="info-box-title"><Icon name="shield" /> 참여 유의사항</h4>
                <ul>
                  <li>임신 16주 이후부터 참여 가능하며, 담당 산부인과 전문의 운동 허가가 필요합니다.</li>
                  <li>고위험 임신(전치태반, 자궁경부무력증 등)의 경우 의사 상담 후 참여를 결정합니다.</li>
                  <li>운동 중 이상 증상(통증, 출혈, 어지럼증 등) 발생 시 즉시 중단하고 지도자에게 알려주세요.</li>
                  <li>편안한 운동복과 미끄럼 방지 양말을 준비해주세요.</li>
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
