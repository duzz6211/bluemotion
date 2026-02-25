import { Link, useLocation } from 'react-router-dom'
import Icon from '../../components/Icon/Icon'
import HeroSection from '../../components/HeroSection/HeroSection'

export default function MarriagePregnancy() {
  const location = useLocation()

  return (
    <>
      <HeroSection
        title="결혼임신여성운동 전문가 과정"
        subtitle="산전·산후 여성 운동 전문 지도자 양성"
        size="sm"
        breadcrumb={[
          { label: '홈', to: '/' },
          { label: '교육과정', to: '/education' },
          { label: '결혼임신여성운동' },
        ]}
      />

      <section className="section">
        <div className="container">
          <div className="content-with-sidebar">
            <main className="main-content">
              <h3>결혼임신여성운동 전문가 과정</h3>
              <p>
                결혼임신여성운동 전문가 과정은 결혼 준비 여성, 임산부, 산후 여성을 대상으로
                안전하고 효과적인 운동 프로그램을 지도할 수 있는 전문가를 양성하는 과정입니다.
                여성 생애주기별 신체 변화를 이해하고, 각 단계에 맞는 맞춤형 운동을 설계할 수 있습니다.
              </p>

              {/* 과정 개요 */}
              <h3 className="mt-4">과정 개요</h3>
              <div className="table-responsive mb-4">
                <table className="table">
                  <tbody>
                    <tr><th style={{ width: '30%' }}>과정명</th><td>결혼임신여성운동 전문가 과정</td></tr>
                    <tr><th>교육 기간</th><td>8주 (주 1~2회, 총 16회)</td></tr>
                    <tr><th>수업 시간</th><td>회당 3시간 (이론 1.5시간 + 실습 1.5시간)</td></tr>
                    <tr><th>정원</th><td>최대 8명</td></tr>
                    <tr><th>자격 요건</th><td>필라테스/요가 지도자 자격 보유자</td></tr>
                    <tr><th>취득 자격</th><td>FMTA 결혼임신여성운동 전문가 자격증</td></tr>
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
                    <tr><td>1주</td><td>여성 생리학</td><td>여성 생애주기별 신체 변화, 호르몬 변화의 이해</td></tr>
                    <tr><td>2주</td><td>임신 생리학</td><td>임신 기간별 신체 변화, 자궁/골반/근골격 변화</td></tr>
                    <tr><td>3주</td><td>산전 운동 이론</td><td>임신 주수별 운동 가이드라인, 금기 사항, 안전 수칙</td></tr>
                    <tr><td>4주</td><td>산전 운동 실습</td><td>임신 초·중·후기 맞춤 운동 프로그램 실습</td></tr>
                    <tr><td>5주</td><td>분만 준비</td><td>분만 과정 이해, 호흡법, 이완법, 골반저근 훈련</td></tr>
                    <tr><td>6주</td><td>산후 회복 이론</td><td>산후 신체 변화, 복직근 이개, 골반저근 재활</td></tr>
                    <tr><td>7주</td><td>산후 회복 실습</td><td>산후 단계별 회복 운동 프로그램 실습</td></tr>
                    <tr><td>8주</td><td>실전 및 평가</td><td>모의 레슨, 프로그램 설계 발표, 최종 평가</td></tr>
                  </tbody>
                </table>
              </div>

              {/* 대상별 프로그램 */}
              <h3 className="mt-4">대상별 프로그램 설계</h3>
              <div className="grid-3 mb-4">
                <div className="card text-center">
                  <div className="card-body">
                    <span className="feature-icon" style={{ fontSize: '2rem' }}><Icon name="heart" /></span>
                    <h4 className="card-title mt-2">결혼 준비 여성</h4>
                    <p className="card-text">체형 관리, 피로 회복, 스트레스 관리를 위한 맞춤 프로그램</p>
                  </div>
                </div>
                <div className="card text-center">
                  <div className="card-body">
                    <span className="feature-icon" style={{ fontSize: '2rem' }}><Icon name="baby" /></span>
                    <h4 className="card-title mt-2">임산부</h4>
                    <p className="card-text">주수별 안전한 운동, 순산 준비, 불편 증상 완화 프로그램</p>
                  </div>
                </div>
                <div className="card text-center">
                  <div className="card-body">
                    <span className="feature-icon" style={{ fontSize: '2rem' }}><Icon name="activity" /></span>
                    <h4 className="card-title mt-2">산후 여성</h4>
                    <p className="card-text">체형 회복, 근력 재건, 체력 증진을 위한 단계별 프로그램</p>
                  </div>
                </div>
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
