import { Link, useLocation } from 'react-router-dom'
import Icon from '../../components/Icon/Icon'
import HeroSection from '../../components/HeroSection/HeroSection'

export default function FunctionalPilates() {
  const location = useLocation()

  return (
    <>
      <HeroSection
        title="기능성필라테스 지도자 과정"
        subtitle="기능해부학 기반의 전문 필라테스 지도자 양성"
        size="sm"
        breadcrumb={[
          { label: '홈', to: '/' },
          { label: '교육과정', to: '/education' },
          { label: '기능성필라테스' },
        ]}
      />

      <section className="section">
        <div className="container">
          <div className="content-with-sidebar">
            <main className="main-content">
              <h3>기능성필라테스 지도자 과정</h3>
              <p>
                기능성필라테스 지도자 과정은 FMTA 교육체계의 핵심 심화 과정입니다.
                기능해부학적 이해를 바탕으로 필라테스 기구(리포머, 캐딜락, 체어, 바렐)와
                매트 운동을 체계적으로 지도할 수 있는 전문가를 양성합니다.
              </p>

              {/* 과정 개요 */}
              <h3 className="mt-4">과정 개요</h3>
              <div className="table-responsive mb-4">
                <table className="table">
                  <tbody>
                    <tr><th style={{ width: '30%' }}>과정명</th><td>기능성필라테스 지도자 과정</td></tr>
                    <tr><th>교육 기간</th><td>16주 (주 2회, 총 32회)</td></tr>
                    <tr><th>수업 시간</th><td>회당 3시간 (이론 1시간 + 실습 2시간)</td></tr>
                    <tr><th>정원</th><td>최대 10명</td></tr>
                    <tr><th>자격 요건</th><td>FMTA 기능해부학 이수자 또는 필라테스 1년 이상 경력자</td></tr>
                    <tr><th>취득 자격</th><td>FMTA 기능성필라테스 지도자 자격증</td></tr>
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
                    <tr><td>1~2주</td><td>필라테스 기초</td><td>필라테스 원리, 호흡법, 기본 매트 동작</td></tr>
                    <tr><td>3~4주</td><td>매트 필라테스</td><td>초급~중급 매트 동작, 소도구 활용법</td></tr>
                    <tr><td>5~8주</td><td>리포머</td><td>리포머 구조 이해, 기본~심화 동작, 프로그래밍</td></tr>
                    <tr><td>9~10주</td><td>캐딜락/체어</td><td>캐딜락, 원다체어 동작 및 활용법</td></tr>
                    <tr><td>11~12주</td><td>바렐/소도구</td><td>래더바렐, 다양한 소도구 활용 프로그래밍</td></tr>
                    <tr><td>13~14주</td><td>특수 대상 필라테스</td><td>시니어, 재활, 스포츠 선수 대상 프로그래밍</td></tr>
                    <tr><td>15~16주</td><td>실전 및 평가</td><td>모의 레슨 실습, 자격시험 준비, 최종 평가</td></tr>
                  </tbody>
                </table>
              </div>

              {/* 기구 실습 */}
              <h3 className="mt-4">기구 실습</h3>
              <div className="grid-4 mb-4">
                <div className="card text-center">
                  <div className="card-body">
                    <div className="placeholder-image" style={{ height: '100px', marginBottom: '0.5rem' }}>[리포머]</div>
                    <h4 className="card-title">리포머</h4>
                  </div>
                </div>
                <div className="card text-center">
                  <div className="card-body">
                    <div className="placeholder-image" style={{ height: '100px', marginBottom: '0.5rem' }}>[캐딜락]</div>
                    <h4 className="card-title">캐딜락</h4>
                  </div>
                </div>
                <div className="card text-center">
                  <div className="card-body">
                    <div className="placeholder-image" style={{ height: '100px', marginBottom: '0.5rem' }}>[체어]</div>
                    <h4 className="card-title">원다 체어</h4>
                  </div>
                </div>
                <div className="card text-center">
                  <div className="card-body">
                    <div className="placeholder-image" style={{ height: '100px', marginBottom: '0.5rem' }}>[바렐]</div>
                    <h4 className="card-title">래더 바렐</h4>
                  </div>
                </div>
              </div>

              {/* 수료 후 진로 */}
              <h3 className="mt-4">수료 후 진로</h3>
              <div className="info-box mb-4">
                <ul>
                  <li>필라테스 센터 전문 지도자</li>
                  <li>블루모션트레이닝 센터 소속 지도자 지원 가능</li>
                  <li>FMTA 심화 과정(결혼임신여성운동, 플로팅 전문가) 진학</li>
                  <li>개인 필라테스 스튜디오 운영</li>
                  <li>스포츠센터, 재활센터 전문 강사</li>
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
