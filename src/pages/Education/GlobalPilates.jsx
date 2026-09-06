import { Link } from 'react-router-dom'
import Icon from '../../components/Icon/Icon'
import HeroSection from '../../components/HeroSection/HeroSection'
import PageSidebar from '../../components/Sidebar/PageSidebar'
import { SITE } from '../../data/site'

export default function GlobalPilates() {
  return (
    <>
      <HeroSection
        title="글로벌필라테스"
        subtitle="언어는 달라도 움직임은 같다 — K-필라테스 강사과정"
        size="sm"
        breadcrumb={[
          { label: '홈', to: '/' },
          { label: '교육과정', to: '/education' },
          { label: '글로벌필라테스' },
        ]}
      />

      <section className="section">
        <div className="container">
          <div className="content-with-sidebar">
            <main className="main-content">
              <img
                src="/images/home/course-global.webp"
                alt="K-필라테스 강사과정"
                style={{ width: '100%', borderRadius: '12px', marginBottom: '2rem' }}
              />

              <div className="info-box" style={{ textAlign: 'center' }}>
                <p style={{ fontSize: '1.25rem', fontWeight: 500, lineHeight: 1.7, margin: 0 }}>
                  &ldquo;언어는 달라도 움직임은 같다&rdquo;
                </p>
              </div>

              <h3 className="mt-5">결혼이민여성 취업지원 프로그램</h3>
              <p>
                <strong>울진군가족센터</strong>와 연계해 울진군 내에 거주하는 결혼이민여성을 대상으로 개설한
                취업지원 프로그램입니다. 울진군가족센터는 그동안 다양한 운동 프로그램과 교육을 진행해 왔지만,
                실제로 관내에서 수업을 할 수 있는 <strong>강사 역량까지 길러줄 교육기관</strong>이 필요했고
                블루모션에 연락을 주셨습니다.
              </p>
              <p>
                단순히 동작을 따라 하는 수준이 아니라 움직임을 이해하고 분석하는 데 초점을 맞춘 과정으로,
                수료 후 실제 강사로 활동할 수 있는 역량을 목표로 합니다.
              </p>

              <h3 className="mt-5">과정 개요</h3>
              <div className="table-wrapper mt-3">
                <table className="table">
                  <tbody>
                    <tr><th>주관 · 연계</th><td>블루모션트레이닝 · FMTA / 울진군가족센터</td></tr>
                    <tr><th>대상</th><td>울진군 거주 결혼이민여성 (한국 생활 5년 이상)</td></tr>
                    <tr><th>기간</th><td>5개월 · 총 80시간</td></tr>
                    <tr><th>강사</th><td>대표원장 직강</td></tr>
                    <tr><th>교재</th><td>한국어로 된 FMTA 협회 지도자과정 교재를 그대로 사용</td></tr>
                    <tr><th>평가</th><td>필기 · 실기 테스트 합격 시 수료증 발급</td></tr>
                    <tr><th>목표</th><td>필라테스를 통한 전문성 확보와 자립의 기회 제공</td></tr>
                  </tbody>
                </table>
              </div>

              <h3 className="mt-5">교육 내용</h3>
              <div className="info-box mt-3">
                <ul>
                  <li>해부학 — 한국 사람도 어려워하는 용어를 하나하나 뜻부터 파헤쳐 갑니다.</li>
                  <li>기능해부학 · 동작분석 — 움직임을 관찰하고 설명하는 법을 익힙니다.</li>
                  <li>지도 언어 훈련 — 입에 붙여보고 부드럽게 수업을 끌어가는 말하기까지 연습합니다.</li>
                  <li>실습 — 서로의 몸을 관찰하고 함께 호흡하며 신뢰를 쌓아갑니다.</li>
                </ul>
                <p className="mt-2">
                  모르는 단어와 뉘앙스는 각자 따로 공부해 오며, 교재에 담긴 의미를 이해하고 해석하는
                  과정을 함께 거칩니다.
                </p>
              </div>

              <h3 className="mt-5">진행 경과</h3>
              <div className="timeline mt-3">
                <div className="timeline-item">
                  <div className="timeline-year">2025년 4월</div>
                  <div className="timeline-content">
                    K-필라테스 강사과정 개설. 열정적인 네 분의 교육생으로 시작했습니다.
                  </div>
                </div>
                <div className="timeline-item">
                  <div className="timeline-year">2025년 중반</div>
                  <div className="timeline-content">
                    과정 절반 진행. 언어의 벽과 문화의 차이, 일상의 바쁨에도 배움을 이어갔습니다.
                  </div>
                </div>
                <div className="timeline-item">
                  <div className="timeline-year">2025년 하반기</div>
                  <div className="timeline-content">
                    최종 테스트를 거쳐 <strong>세 분의 강사가 수료</strong>했습니다.
                    베트남에서 오신 두 분과 중국에서 오신 한 분입니다.
                  </div>
                </div>
                <div className="timeline-item">
                  <div className="timeline-year">다음 단계</div>
                  <div className="timeline-content">
                    수료하신 분들과 함께 봉사활동을 진행하고,
                    2차 프로그램에서 보조 강사로 활동할 예정입니다.
                  </div>
                </div>
              </div>

              <div className="info-box mt-4">
                <h4 className="info-box-title"><Icon name="globe" /> 왜 이 슬로건인가</h4>
                <p>
                  각국에서 모인 결혼이민여성들을 하나의 의미로 묶고 싶었습니다.
                  블루모션 센터에도 저학년 키즈부터 시니어까지, 남녀 구분 없이,
                  운동을 처음 하든 아니든 다양한 분들이 모입니다.
                  결국 중요한 것은 <strong>그 사람의 움직임</strong>이기에 언어는 크게 중요하지 않다고 생각했습니다.
                </p>
              </div>

              <div className="info-box mt-4" style={{ textAlign: 'center' }}>
                <h4>다음 기수 · 기관 연계 문의</h4>
                <p>지자체 · 가족센터 · 기관과의 연계 프로그램 개설을 환영합니다.</p>
                <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                  <a href={'tel:' + SITE.phone} className="btn btn-primary">{SITE.phone}</a>
                  <Link to="/education/functional-pilates" className="btn btn-secondary">정규 지도자 과정</Link>
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
