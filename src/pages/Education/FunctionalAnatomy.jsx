import { Link, useLocation } from 'react-router-dom'
import Icon from '../../components/Icon/Icon'
import HeroSection from '../../components/HeroSection/HeroSection'

export default function FunctionalAnatomy() {
  const location = useLocation()

  return (
    <>
      <HeroSection
        title="기능해부학 지도자 과정"
        subtitle="움직임 교육의 기초, 인체의 구조와 기능 이해"
        size="sm"
        breadcrumb={[
          { label: '홈', to: '/' },
          { label: '교육과정', to: '/education' },
          { label: '기능해부학' },
        ]}
      />

      <section className="section">
        <div className="container">
          <div className="content-with-sidebar">
            <main className="main-content">
              <h3>기능해부학 지도자 과정</h3>
              <p>
                기능해부학 지도자 과정은 FMTA 교육체계의 기초가 되는 핵심 과정입니다.
                인체의 근골격계 구조와 기능을 이해하고, 움직임의 원리를 과학적으로 분석하는
                능력을 배양합니다. 이 과정을 통해 안전하고 효과적인 운동 지도의 기반을 마련합니다.
              </p>

              {/* 과정 개요 */}
              <h3 className="mt-4">과정 개요</h3>
              <div className="table-responsive mb-4">
                <table className="table">
                  <tbody>
                    <tr><th style={{ width: '30%' }}>과정명</th><td>기능해부학 지도자 과정</td></tr>
                    <tr><th>교육 기간</th><td>12주 (주 1~2회, 총 24회)</td></tr>
                    <tr><th>수업 시간</th><td>회당 3시간 (이론 1.5시간 + 실습 1.5시간)</td></tr>
                    <tr><th>정원</th><td>최대 12명</td></tr>
                    <tr><th>자격 요건</th><td>체육학/물리치료 전공자 또는 운동 관련 종사자</td></tr>
                    <tr><th>취득 자격</th><td>FMTA 기능해부학 지도자 자격증</td></tr>
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
                    <tr><td>1~2주</td><td>해부학 기초</td><td>인체의 면과 축, 해부학적 자세, 기본 용어 정리</td></tr>
                    <tr><td>3~4주</td><td>근골격계 구조</td><td>뼈, 관절, 근육의 구조와 기능, 결합조직의 이해</td></tr>
                    <tr><td>5~6주</td><td>척추와 코어</td><td>척추의 구조, 코어 근육군, 안정화 메커니즘</td></tr>
                    <tr><td>7~8주</td><td>상지 기능해부학</td><td>어깨, 팔꿈치, 손목 관절의 구조와 움직임</td></tr>
                    <tr><td>9~10주</td><td>하지 기능해부학</td><td>고관절, 무릎, 발목 관절의 구조와 움직임</td></tr>
                    <tr><td>11~12주</td><td>통합 및 평가</td><td>움직임 분석 실습, 자격시험 준비, 최종 평가</td></tr>
                  </tbody>
                </table>
              </div>

              {/* 교육 특징 */}
              <h3 className="mt-4">교육 특징</h3>
              <div className="grid-2 mb-4">
                <div className="info-box">
                  <h4 className="info-box-title"><Icon name="book" /> 이론+실습 통합</h4>
                  <p>매 수업마다 이론 강의 후 즉시 실습으로 연결하여 학습 효과를 극대화합니다.</p>
                </div>
                <div className="info-box">
                  <h4 className="info-box-title"><Icon name="crosshair" /> 실전 중심 교육</h4>
                  <p>실제 운동 지도 현장에서 바로 활용 가능한 실전 위주의 교육을 진행합니다.</p>
                </div>
                <div className="info-box">
                  <h4 className="info-box-title"><Icon name="users" /> 소수 정원</h4>
                  <p>최대 12명의 소수 정원으로 개인별 세밀한 지도와 피드백을 제공합니다.</p>
                </div>
                <div className="info-box">
                  <h4 className="info-box-title"><Icon name="award" /> 자격증 발급</h4>
                  <p>과정 수료 및 시험 합격 시 FMTA 공인 기능해부학 지도자 자격증을 발급합니다.</p>
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
