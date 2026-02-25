import { Link, useLocation } from 'react-router-dom'
import Icon from '../../components/Icon/Icon'
import HeroSection from '../../components/HeroSection/HeroSection'

export default function FloatingExpert() {
  const location = useLocation()

  return (
    <>
      <HeroSection
        title="플로팅 전문가 과정"
        subtitle="수중 움직임 프로그램 전문 지도자 양성"
        size="sm"
        breadcrumb={[
          { label: '홈', to: '/' },
          { label: '교육과정', to: '/education' },
          { label: '플로팅 전문가' },
        ]}
      />

      <section className="section">
        <div className="container">
          <div className="content-with-sidebar">
            <main className="main-content">
              <h3>플로팅 전문가 과정</h3>
              <p>
                플로팅 전문가 과정은 수중 환경에서의 움직임 프로그램을 기획하고 안전하게
                진행할 수 있는 전문가를 양성하는 집중 과정입니다. 수중 운동의 원리, 부력 활용법,
                안전 관리 등을 체계적으로 학습하며, 플로팅온더블루 프로그램을 직접 지도할 수 있는
                역량을 배양합니다.
              </p>

              {/* 과정 개요 */}
              <h3 className="mt-4">과정 개요</h3>
              <div className="table-responsive mb-4">
                <table className="table">
                  <tbody>
                    <tr><th style={{ width: '30%' }}>과정명</th><td>플로팅 전문가 과정</td></tr>
                    <tr><th>교육 기간</th><td>4주 집중 과정 (주 3~4회, 총 14회)</td></tr>
                    <tr><th>수업 시간</th><td>회당 4시간 (이론 1시간 + 실습 3시간)</td></tr>
                    <tr><th>정원</th><td>최대 6명</td></tr>
                    <tr><th>자격 요건</th><td>필라테스/요가 지도자 자격 보유, 수영 가능자</td></tr>
                    <tr><th>취득 자격</th><td>FMTA 플로팅 전문가 자격증</td></tr>
                    <tr><th>교육 시기</th><td>4~5월 (메인 시즌 전 집중 교육)</td></tr>
                    <tr><th>교육비</th><td>별도 문의</td></tr>
                  </tbody>
                </table>
              </div>

              {/* 커리큘럼 */}
              <h3 className="mt-4">커리큘럼</h3>
              <div className="table-responsive mb-4">
                <table className="table">
                  <thead>
                    <tr><th>주차</th><th>주제</th><th>내용</th></tr>
                  </thead>
                  <tbody>
                    <tr><td>1주</td><td>수중 운동 이론</td><td>수중 환경의 물리적 특성, 부력/저항 이해, 수중 운동 효과, 안전 관리 기초</td></tr>
                    <tr><td>2주</td><td>플로팅 기초 실습</td><td>플로팅 장비 사용법, 플로팅 요가 기본 동작, 수중 필라테스 기초</td></tr>
                    <tr><td>3주</td><td>프로그램 심화</td><td>스노클링 안전 교육, 비치 무브먼트 지도법, 프로그램 기획 실습</td></tr>
                    <tr><td>4주</td><td>현장 실습 및 평가</td><td>실제 바다/수영장에서 프로그램 진행 실습, 안전 사고 대응 훈련, 최종 평가</td></tr>
                  </tbody>
                </table>
              </div>

              {/* 실습 환경 */}
              <h3 className="mt-4">실습 환경</h3>
              <div className="grid-2 mb-4">
                <div className="info-box">
                  <h4 className="info-box-title"><Icon name="waves" /> 수영장 실습</h4>
                  <p>실내 수영장에서 기본 수중 운동 기술을 안전하게 습득합니다. 수온 관리된 환경에서 반복 실습이 가능합니다.</p>
                </div>
                <div className="info-box">
                  <h4 className="info-box-title"><Icon name="sun" /> 해변 실습</h4>
                  <p>울진 해변에서 실제 프로그램 환경과 동일한 조건에서 현장 실습을 진행합니다. 해양 안전 교육이 포함됩니다.</p>
                </div>
              </div>

              {/* 취득 후 활동 */}
              <h3 className="mt-4">자격 취득 후 활동</h3>
              <div className="info-box mb-4">
                <ul>
                  <li>플로팅온더블루 프로그램 전문 지도자 활동</li>
                  <li>블루모션트레이닝 센터 플로팅 프로그램 소속 지도자 지원</li>
                  <li>수중 웰니스 프로그램 기획 및 운영</li>
                  <li>리조트, 호텔 등 숙박시설 수중 프로그램 강사</li>
                  <li>해양 레저 체험 프로그램 지도자</li>
                </ul>
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
