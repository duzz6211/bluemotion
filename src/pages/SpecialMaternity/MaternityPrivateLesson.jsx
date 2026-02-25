import { Link, useLocation } from 'react-router-dom'
import Icon from '../../components/Icon/Icon'
import HeroSection from '../../components/HeroSection/HeroSection'

export default function MaternityPrivateLesson() {
  const location = useLocation()

  return (
    <>
      <HeroSection
        title="개인 레슨"
        subtitle="1:1 맞춤형 산전·산후 전문 케어"
        size="sm"
        breadcrumb={[
          { label: '홈', to: '/' },
          { label: '스페셜 임산부', to: '/special-maternity' },
          { label: '개인 레슨' },
        ]}
      />

      <section className="section">
        <div className="container">
          <div className="content-with-sidebar">
            <main className="main-content">
              <h3>임산부 개인 레슨</h3>
              <p>
                FMTA 공인 산전·산후 전문 지도자와 1:1로 진행되는 맞춤형 레슨입니다.
                개인의 임신 주수, 건강 상태, 체형 특성을 세밀하게 분석하여
                최적의 운동 프로그램을 설계합니다. 가장 안전하고 효과적인 방법으로
                건강한 임신 기간을 유지하도록 돕습니다.
              </p>

              {/* 프로그램 장점 */}
              <h3 className="mt-4">개인 레슨의 장점</h3>
              <div className="grid-2 mb-4">
                <div className="info-box">
                  <h4 className="info-box-title"><Icon name="target" /> 완벽한 맞춤 설계</h4>
                  <p>임신 주수, 체형, 건강 상태를 종합적으로 분석하여 개인에게 최적화된 운동 프로그램을 설계합니다.</p>
                </div>
                <div className="info-box">
                  <h4 className="info-box-title"><Icon name="shield" /> 최고 수준의 안전</h4>
                  <p>지도자가 1:1로 밀착 관리하므로 실시간 모니터링과 즉각적인 대응이 가능합니다.</p>
                </div>
                <div className="info-box">
                  <h4 className="info-box-title"><Icon name="clock" /> 유연한 스케줄</h4>
                  <p>개인 일정에 맞춰 수업 시간을 조율할 수 있어 임산부의 컨디션에 맞게 진행할 수 있습니다.</p>
                </div>
                <div className="info-box">
                  <h4 className="info-box-title"><Icon name="trending" /> 빠른 효과</h4>
                  <p>집중적인 1:1 지도로 운동 효과를 극대화하고, 정확한 동작 수행을 보장합니다.</p>
                </div>
              </div>

              {/* 주수별 프로그램 */}
              <h3 className="mt-4">주수별 프로그램</h3>
              <div className="table-responsive mb-4">
                <table className="table">
                  <thead>
                    <tr>
                      <th>시기</th>
                      <th>주수</th>
                      <th>주요 내용</th>
                      <th>강도</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><strong>임신 초기</strong></td>
                      <td>~16주</td>
                      <td>호흡법 교육, 가벼운 스트레칭, 코어 안정화 기초</td>
                      <td>저강도</td>
                    </tr>
                    <tr>
                      <td><strong>임신 중기</strong></td>
                      <td>17~28주</td>
                      <td>골반저근 강화, 자세 교정, 근력 운동, 유연성 향상</td>
                      <td>중강도</td>
                    </tr>
                    <tr>
                      <td><strong>임신 후기</strong></td>
                      <td>29주~</td>
                      <td>순산 준비 운동, 이완법, 호흡법 심화, 부종 관리</td>
                      <td>저~중강도</td>
                    </tr>
                    <tr>
                      <td><strong>산후 초기</strong></td>
                      <td>출산 후 6~12주</td>
                      <td>복직근 이개 회복, 골반저근 재활, 기초 체력 회복</td>
                      <td>저강도</td>
                    </tr>
                    <tr>
                      <td><strong>산후 회복</strong></td>
                      <td>출산 후 3개월~</td>
                      <td>체형 교정, 근력 강화, 체력 증진, 다이어트 운동</td>
                      <td>중~고강도</td>
                    </tr>
                  </tbody>
                </table>
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
                      <td>개인 레슨 (1:1)</td>
                      <td>1회</td>
                      <td>80,000원</td>
                    </tr>
                    <tr>
                      <td>개인 레슨 (1:1)</td>
                      <td>10회</td>
                      <td>720,000원</td>
                    </tr>
                    <tr>
                      <td>개인 레슨 (1:1)</td>
                      <td>20회</td>
                      <td>1,360,000원</td>
                    </tr>
                    <tr>
                      <td>체험 레슨</td>
                      <td>1회</td>
                      <td>50,000원</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="text-center mt-4">
                <Link to="/shop/programs" className="btn btn-primary">수강 신청하기</Link>
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
