import { Link, useLocation } from 'react-router-dom'
import Icon from '../../components/Icon/Icon'
import HeroSection from '../../components/HeroSection/HeroSection'

export default function OnlineCourse() {
  const location = useLocation()

  return (
    <>
      <HeroSection
        title="온라인 교육과정"
        subtitle="시간과 장소 제약 없는 비대면 교육"
        size="sm"
        breadcrumb={[
          { label: '홈', to: '/' },
          { label: '교육과정', to: '/education' },
          { label: '온라인 교육' },
        ]}
      />

      <section className="section">
        <div className="container">
          <div className="content-with-sidebar">
            <main className="main-content">
              <h3>온라인 교육과정</h3>
              <p>
                FMTA 온라인 교육과정은 시간과 장소의 제약 없이 학습할 수 있는 비대면 교육 프로그램입니다.
                고화질 영상 강의, 실습 가이드, 온라인 평가 시스템을 통해 체계적으로 학습할 수 있으며,
                이론 과목을 온라인으로 이수한 후 실습 과목은 오프라인 워크샵으로 보완합니다.
              </p>

              {/* 온라인 과정 목록 */}
              <h3 className="mt-4">제공 과정</h3>
              <div className="grid-2 mb-4">
                <div className="card">
                  <div className="card-body">
                    <span className="program-badge online">온라인 이론</span>
                    <h4 className="card-title">기능해부학 이론과정</h4>
                    <p className="card-text">
                      기능해부학 지도자 과정의 이론 파트를 온라인으로 학습합니다.
                      영상 강의 24개, 학습 자료 및 퀴즈가 포함됩니다.
                    </p>
                    <ul>
                      <li>강의 수: 24강</li>
                      <li>총 학습 시간: 약 36시간</li>
                      <li>수강 기간: 등록일로부터 6개월</li>
                    </ul>
                  </div>
                </div>
                <div className="card">
                  <div className="card-body">
                    <span className="program-badge online">온라인 이론</span>
                    <h4 className="card-title">필라테스 이론과정</h4>
                    <p className="card-text">
                      기능성필라테스 지도자 과정의 이론 파트를 온라인으로 학습합니다.
                      필라테스 원리, 기구 이해, 동작 분석 등을 다룹니다.
                    </p>
                    <ul>
                      <li>강의 수: 20강</li>
                      <li>총 학습 시간: 약 30시간</li>
                      <li>수강 기간: 등록일로부터 6개월</li>
                    </ul>
                  </div>
                </div>
                <div className="card">
                  <div className="card-body">
                    <span className="program-badge online">온라인 특강</span>
                    <h4 className="card-title">보수교육 온라인</h4>
                    <p className="card-text">
                      FMTA 자격 보유자를 위한 보수교육 온라인 과정입니다.
                      최신 운동 트렌드, 연구 결과, 신규 프로그램 등을 학습합니다.
                    </p>
                    <ul>
                      <li>강의 수: 8강</li>
                      <li>총 학습 시간: 약 12시간</li>
                      <li>수강 기간: 등록일로부터 3개월</li>
                    </ul>
                  </div>
                </div>
                <div className="card">
                  <div className="card-body">
                    <span className="program-badge online">무료 공개</span>
                    <h4 className="card-title">입문자 기초 강의</h4>
                    <p className="card-text">
                      운동 지도에 관심 있는 분들을 위한 무료 공개 강의입니다.
                      움직임 교육의 기본 개념과 FMTA 교육 체계를 소개합니다.
                    </p>
                    <ul>
                      <li>강의 수: 5강</li>
                      <li>총 학습 시간: 약 5시간</li>
                      <li>수강 기간: 무제한</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* 학습 방법 */}
              <h3 className="mt-4">학습 방법</h3>
              <div className="grid-3 mb-4">
                <div className="info-box text-center">
                  <span className="feature-icon" style={{ fontSize: '2rem' }}><Icon name="play" /></span>
                  <h4>영상 강의</h4>
                  <p>전문 강사의 고화질 강의 영상을 원하는 시간에 반복 학습</p>
                </div>
                <div className="info-box text-center">
                  <span className="feature-icon" style={{ fontSize: '2rem' }}><Icon name="fileText" /></span>
                  <h4>학습 자료</h4>
                  <p>강의 교재, 실습 가이드, 참고 자료 PDF 제공</p>
                </div>
                <div className="info-box text-center">
                  <span className="feature-icon" style={{ fontSize: '2rem' }}><Icon name="checkCircle" /></span>
                  <h4>온라인 평가</h4>
                  <p>각 단원별 퀴즈와 과제를 통한 학습 진도 확인</p>
                </div>
              </div>

              <div className="info-box mt-4" style={{ textAlign: 'center' }}>
                <h4>온라인 교육과정 수강</h4>
                <p>지금 바로 시작할 수 있습니다. 무료 입문 강의부터 확인해보세요.</p>
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
