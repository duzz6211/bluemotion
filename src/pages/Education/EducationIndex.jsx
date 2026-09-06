import { Link } from 'react-router-dom'
import Icon from '../../components/Icon/Icon'
import HeroSection from '../../components/HeroSection/HeroSection'
import PageSidebar from '../../components/Sidebar/PageSidebar'
import { SITE } from '../../data/site'

const courses = [
  {
    to: '/education/functional-pilates',
    image: '/images/home/course-pilates.webp',
    title: '기능성필라테스 지도자 과정',
    desc: '해부학부터 매트 · 리포머 · 바렐 · 체어 · 캐딜락까지. FMTA의 대표 자격 과정으로, 대표원장 직강과 멘티-멘토 케어로 진행합니다.',
  },
  {
    to: '/education/global-pilates',
    image: '/images/home/course-global.webp',
    title: '글로벌필라테스 (K-필라테스 강사과정)',
    desc: '울진군가족센터와 연계한 결혼이민여성 취업지원 프로그램. 5개월 80시간 과정으로 필기 · 실기 테스트를 거쳐 수료합니다.',
  },
  {
    to: '/education/floating-pilates',
    image: '/images/home/course-floating.webp',
    title: '플로팅 필라테스 지도자 과정',
    desc: '물 위에서의 움직임과 수상 안전 관리를 다루는 특화 과정. 수상 환경이 확보되는 시즌에 맞춰 개설합니다.',
  },
]

export default function EducationIndex() {
  return (
    <>
      <HeroSection
        title="교육과정"
        subtitle="문화체육관광부 인증 자격발급 교육기관 FMTA"
        size="sm"
        breadcrumb={[
          { label: '홈', to: '/' },
          { label: '교육과정', to: '/education' },
        ]}
      />

      <section className="section">
        <div className="container">
          <div className="content-with-sidebar">
            <main className="main-content">
              <div className="info-box">
                <h4 className="info-box-title"><Icon name="award" /> {SITE.registration}</h4>
                <p>
                  기능적움직임트레이닝협회(FMTA)가 주관하고 발급하는 자격입니다.
                  실질적인 지식과 실무 능력 향상에 집중된 커리큘럼을
                  <strong> 물리치료사 출신 대표원장의 직강</strong>과 멘티-멘토 관리로 이수할 수 있습니다.
                </p>
              </div>

              <h3 className="mt-5">개설 과정</h3>
              <div className="instructor-courses mt-3">
                {courses.map((course) => (
                  <div key={course.to} className="instructor-course-card">
                    <img className="instructor-course-image" src={course.image} alt={course.title} />
                    <div className="instructor-course-body">
                      <h4 className="instructor-course-title">{course.title}</h4>
                      <p className="instructor-course-desc">{course.desc}</p>
                      <Link to={course.to} className="btn btn-secondary btn-sm">상세보기</Link>
                    </div>
                  </div>
                ))}
              </div>

              <div className="info-box mt-4">
                <h4 className="info-box-title"><Icon name="play" /> 온라인 교육과정</h4>
                <p>
                  거리 때문에 오프라인 참여가 어려운 분을 위한 온라인 과정을 준비하고 있습니다.
                  개설 시기와 수강 방식은 별도 페이지에서 안내드립니다.
                </p>
                <Link to="/education/online-course" className="btn btn-secondary btn-sm mt-2">온라인 과정 보기</Link>
              </div>

              <h3 className="mt-5">교육 철학</h3>
              <div className="grid-2 mt-3">
                <div className="info-item">
                  <span className="info-icon"><Icon name="book" /></span>
                  <div className="info-content">
                    <h4>이론과 실기가 연결되는 과정</h4>
                    <p>동작을 따라 하는 데서 멈추지 않고, 왜 그렇게 움직이는지를 이해한 뒤 몸으로 옮깁니다.</p>
                  </div>
                </div>
                <div className="info-item">
                  <span className="info-icon"><Icon name="userCheck" /></span>
                  <div className="info-content">
                    <h4>물리치료사 원장 직강</h4>
                    <p>주관 · 강의 · 평가를 대표원장이 직접 맡고, 외부 전문 강사를 초빙해 보완합니다.</p>
                  </div>
                </div>
                <div className="info-item">
                  <span className="info-icon"><Icon name="crosshair" /></span>
                  <div className="info-content">
                    <h4>움직임의 이해 · 분석 · 연구</h4>
                    <p>기능해부학과 동작분석을 축으로 삼아 스스로 판단할 수 있는 지도자를 기릅니다.</p>
                  </div>
                </div>
                <div className="info-item">
                  <span className="info-icon"><Icon name="handshake" /></span>
                  <div className="info-content">
                    <h4>취업 · 창업까지</h4>
                    <p>수료로 끝나지 않고 취업 연계와 창업 가이드까지 이어집니다.</p>
                  </div>
                </div>
              </div>

              <h3 className="mt-5">교육생 혜택</h3>
              <div className="table-wrapper mt-3">
                <table className="table">
                  <tbody>
                    <tr><td>1</td><td>그룹 레슨권 10회 제공</td></tr>
                    <tr><td>2</td><td>취업 희망 시 연계 가능</td></tr>
                    <tr><td>3</td><td>자율적인 개인 연습 공간 제공</td></tr>
                    <tr><td>4</td><td>멘티-멘토 케어 시스템</td></tr>
                    <tr><td>5</td><td>지속적인 최신 교육 주최</td></tr>
                    <tr><td>6</td><td>교육생 자격으로 수업 참관</td></tr>
                  </tbody>
                </table>
              </div>

              <h3 className="mt-5">교육 이력</h3>
              <div className="timeline mt-3">
                <div className="timeline-item">
                  <div className="timeline-year">2024</div>
                  <div className="timeline-content">
                    필라테스 지도자 1기 · 2기 수료. 울진 외에도 삼척 · 동해 · 강릉 · 봉화 · 영덕 · 포항에서
                    교육생이 찾아왔습니다.
                  </div>
                </div>
                <div className="timeline-item">
                  <div className="timeline-year">2025</div>
                  <div className="timeline-content">
                    지도자 3기 테스트 진행 및 4기 모집. 울진군가족센터와 연계한
                    결혼이민여성 K-필라테스 강사과정 개설.
                  </div>
                </div>
                <div className="timeline-item">
                  <div className="timeline-year">진행 중</div>
                  <div className="timeline-content">
                    강사 양성 사업과 지역사회 연계 일자리 창출 사업을 함께 확대하고 있습니다.
                  </div>
                </div>
              </div>

              <div className="info-box mt-4" style={{ textAlign: 'center' }}>
                <h4>어떤 과정이 맞을지 상담해 드립니다</h4>
                <p>현재 상황과 목표를 알려주시면 적합한 과정을 안내드리겠습니다.</p>
                <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                  <a href={'tel:' + SITE.phone} className="btn btn-primary">{SITE.phone}</a>
                  <Link to="/news/contact" className="btn btn-secondary">문의하기</Link>
                </div>
              </div>
            </main>

            <PageSidebar menu="education" />
          </div>
        </div>
      </section>
    </>
  )
}
