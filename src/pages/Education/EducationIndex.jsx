import { Link, useLocation } from 'react-router-dom'
import Icon from '../../components/Icon/Icon'
import HeroSection from '../../components/HeroSection/HeroSection'

export default function EducationIndex() {
  const location = useLocation()

  return (
    <>
      <HeroSection
        title="교육과정"
        subtitle="FMTA 공인 전문 지도자 양성 교육"
        size="sm"
        breadcrumb={[
          { label: '홈', to: '/' },
          { label: '교육과정', to: '/education' },
          { label: '과정 안내' },
        ]}
      />

      <section className="section">
        <div className="container">
          <div className="content-with-sidebar">
            <main className="main-content">
              <h3>FMTA 교육과정 안내</h3>
              <p>
                FMTA는 기능적 움직임에 대한 깊은 이해를 바탕으로 전문 지도자를 양성하는
                체계적인 교육과정을 운영합니다. 기능해부학부터 기능성필라테스, 전문 분야 과정까지
                단계별로 구성된 커리큘럼을 통해 최고 수준의 움직임 전문가를 양성합니다.
              </p>

              {/* 교육 과정 카드 */}
              <h3 className="mt-4">교육 과정 목록</h3>
              <div className="grid-2 mb-4">
                <div className="card">
                  <div className="card-image placeholder-image">[기능해부학 이미지]</div>
                  <div className="card-body">
                    <span className="program-badge education">기초과정</span>
                    <h4 className="card-title">기능해부학 지도자 과정</h4>
                    <p className="card-text">
                      12주 과정. 인체의 구조와 기능을 이해하고, 움직임의 원리를 학습하는 기초 과정입니다.
                      모든 FMTA 자격과정의 기본이 되는 필수 과정입니다.
                    </p>
                    <Link to="/education/functional-anatomy" className="btn btn-primary btn-sm">상세보기</Link>
                  </div>
                </div>
                <div className="card">
                  <div className="card-image placeholder-image">[기능성필라테스 이미지]</div>
                  <div className="card-body">
                    <span className="program-badge education">심화과정</span>
                    <h4 className="card-title">기능성필라테스 지도자 과정</h4>
                    <p className="card-text">
                      16주 과정. 기능해부학적 이해를 바탕으로 필라테스 기구와 매트 운동을 지도하는 전문가를 양성합니다.
                    </p>
                    <Link to="/education/functional-pilates" className="btn btn-primary btn-sm">상세보기</Link>
                  </div>
                </div>
                <div className="card">
                  <div className="card-image placeholder-image">[결혼임신여성 이미지]</div>
                  <div className="card-body">
                    <span className="program-badge special">전문과정</span>
                    <h4 className="card-title">결혼임신여성운동 전문가 과정</h4>
                    <p className="card-text">
                      8주 과정. 산전·산후 여성의 특성을 이해하고 안전한 운동 프로그램을 지도하는 전문가를 양성합니다.
                    </p>
                    <Link to="/education/marriage-pregnancy" className="btn btn-primary btn-sm">상세보기</Link>
                  </div>
                </div>
                <div className="card">
                  <div className="card-image placeholder-image">[플로팅 전문가 이미지]</div>
                  <div className="card-body">
                    <span className="program-badge floating">전문과정</span>
                    <h4 className="card-title">플로팅 전문가 과정</h4>
                    <p className="card-text">
                      4주 집중 과정. 수중 환경에서의 움직임 프로그램을 기획하고 진행하는 전문가를 양성합니다.
                    </p>
                    <Link to="/education/floating-expert" className="btn btn-primary btn-sm">상세보기</Link>
                  </div>
                </div>
              </div>

              {/* 온라인 과정 */}
              <div className="card mb-4">
                <div className="card-body" style={{ display: 'flex', alignItems: 'center', gap: '2rem', flexWrap: 'wrap' }}>
                  <div style={{ flex: 1, minWidth: '250px' }}>
                    <span className="program-badge online">온라인</span>
                    <h4 className="card-title">온라인 교육과정</h4>
                    <p className="card-text">
                      시간과 장소의 제약 없이 학습할 수 있는 비대면 교육 프로그램입니다.
                      이론 강의 영상, 실습 가이드, 온라인 평가를 통해 체계적으로 학습합니다.
                    </p>
                    <Link to="/education/online-course" className="btn btn-primary btn-sm">상세보기</Link>
                  </div>
                  <div className="placeholder-image" style={{ width: '200px', height: '150px', borderRadius: '8px' }}>[온라인 교육 이미지]</div>
                </div>
              </div>

              {/* 교육 과정 비교 */}
              <h3 className="mt-4">과정 비교</h3>
              <div className="table-responsive mb-4">
                <table className="table">
                  <thead>
                    <tr>
                      <th>과정명</th>
                      <th>기간</th>
                      <th>자격요건</th>
                      <th>자격증</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>기능해부학 지도자</td>
                      <td>12주</td>
                      <td>운동 전공자 / 관련 종사자</td>
                      <td>FMTA 기능해부학 지도자</td>
                    </tr>
                    <tr>
                      <td>기능성필라테스 지도자</td>
                      <td>16주</td>
                      <td>기능해부학 이수 / 필라테스 경력자</td>
                      <td>FMTA 기능성필라테스 지도자</td>
                    </tr>
                    <tr>
                      <td>결혼임신여성운동 전문가</td>
                      <td>8주</td>
                      <td>필라테스 지도자 자격 보유</td>
                      <td>FMTA 결혼임신여성운동 전문가</td>
                    </tr>
                    <tr>
                      <td>플로팅 전문가</td>
                      <td>4주</td>
                      <td>필라테스/요가 지도자 자격 보유</td>
                      <td>FMTA 플로팅 전문가</td>
                    </tr>
                    <tr>
                      <td>온라인 교육과정</td>
                      <td>자율</td>
                      <td>제한 없음</td>
                      <td>수료증</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="text-center mt-4">
                <Link to="/shop/instructor-courses" className="btn btn-primary">수강 신청하기</Link>
              </div>
            </main>

            <aside className="sidebar">
              <nav className="sidebar-menu">
                <h3 className="sidebar-title">교육과정</h3>
                <Link to="/education" className={`sidebar-link${location.pathname === '/education' ? ' active' : ''}`}>과정 안내</Link>
                <Link to="/education/functional-anatomy" className={`sidebar-link${location.pathname === '/education/functional-anatomy' ? ' active' : ''}`}>기능해부학</Link>
                <Link to="/education/functional-pilates" className={`sidebar-link${location.pathname === '/education/functional-pilates' ? ' active' : ''}`}>기능성필라테스</Link>
                <Link to="/education/marriage-pregnancy" className={`sidebar-link${location.pathname === '/education/marriage-pregnancy' ? ' active' : ''}`}>결혼임신여성운동</Link>
                <Link to="/education/online-course" className={`sidebar-link${location.pathname === '/education/online-course' ? ' active' : ''}`}>온라인 교육</Link>
                <Link to="/education/floating-expert" className={`sidebar-link${location.pathname === '/education/floating-expert' ? ' active' : ''}`}>플로팅 전문가</Link>
              </nav>
              <div className="info-box mt-3">
                <h4 className="info-box-title">교육 문의</h4>
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
