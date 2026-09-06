import { Link } from 'react-router-dom'
import Icon from '../../components/Icon/Icon'
import HeroSection from '../../components/HeroSection/HeroSection'
import PageSidebar from '../../components/Sidebar/PageSidebar'
import { SITE } from '../../data/site'

export default function FloatingVision() {
  return (
    <>
      <HeroSection
        title="비전"
        subtitle="바다를 스튜디오로, 지역을 일자리로"
        size="sm"
        breadcrumb={[
          { label: '홈', to: '/' },
          { label: '플로팅온더블루', to: '/floating' },
          { label: '비전' },
        ]}
      />

      <section className="section">
        <div className="container">
          <div className="content-with-sidebar">
            <main className="main-content">
              <div className="info-box" style={{ textAlign: 'center' }}>
                <p style={{ fontSize: '1.25rem', fontWeight: 500, lineHeight: 1.7, margin: 0 }}>
                  &ldquo;세상에 없는 것을 만들고,<br />
                  그것으로 수익을 내며, 일자리도 창출하라.&rdquo;
                </p>
                <p className="text-muted mt-3" style={{ margin: 0 }}>
                  2025년 경북 동해권 지역 연계일자리 사업 과제
                </p>
              </div>

              <h3 className="mt-5">시작</h3>
              <p>
                두바이의 한 고급 리조트가 인공 해변에 플로팅 보드를 띄우고 운동을 하는 영상 하나가 출발점이었습니다.
                인공 해변을 만들 필요조차 없는 곳, 바다가 바로 문 앞인 울진에서 못 할 이유가 없었습니다.
              </p>
              <p>
                <strong>인구소멸지역인 울진군과 영덕군</strong>이 함께 추진한 2025년 경북 동해권 지역 연계일자리 사업의
                지원 모델로 선정되어, 5월부터 9월까지 프로그램을 설계하고 실행했습니다.
                세상에 없는 형태였기에 매트 디자인부터 새로 만들어야 했고,
                구상을 형태로 옮기는 과정과 제작 업체 선정을 거쳐 아홉 마리의 고래가 울진에 도착했습니다.
              </p>

              <h3 className="mt-5">성과</h3>
              <div className="grid-2 mt-3">
                <div className="info-item">
                  <span className="info-icon"><Icon name="award" /></span>
                  <div className="info-content">
                    <h4>우수사례 선정</h4>
                    <p>2025년 경북 동해권 지역 연계일자리 사업 성과공유회에서 우수사례로 선정되었습니다.</p>
                  </div>
                </div>
                <div className="info-item">
                  <span className="info-icon"><Icon name="waves" /></span>
                  <div className="info-content">
                    <h4>고래 아홉 마리</h4>
                    <p>단체 프로그램을 동시에 운영할 수 있는 규모의 플로팅 매트를 확보했습니다.</p>
                  </div>
                </div>
                <div className="info-item">
                  <span className="info-icon"><Icon name="users" /></span>
                  <div className="info-content">
                    <h4>대상층 확장</h4>
                    <p>전국 체험단, 중학교 스포츠클럽, 기업 워크샵까지 다양한 대상으로 운영했습니다.</p>
                  </div>
                </div>
                <div className="info-item">
                  <span className="info-icon"><Icon name="handshake" /></span>
                  <div className="info-content">
                    <h4>지역 협업</h4>
                    <p>(사)지역과소셜비즈, 영덕 (주)호아 등 지역 파트너와 함께 사업을 수행했습니다.</p>
                  </div>
                </div>
              </div>

              <h3 className="mt-5">앞으로</h3>
              <div className="timeline mt-3">
                <div className="timeline-item">
                  <div className="timeline-year">회원 정규 클래스</div>
                  <div className="timeline-content">
                    여름 시즌에 맞춰 블루모션 회원들도 참여할 수 있는 플로팅 클래스를 정규 운영합니다.
                  </div>
                </div>
                <div className="timeline-item">
                  <div className="timeline-year">지역 관광 연계</div>
                  <div className="timeline-content">
                    울진 · 영덕을 찾는 여행객이 참여할 수 있는 원데이 프로그램으로 확장해
                    체류형 관광 콘텐츠로 자리 잡게 합니다.
                  </div>
                </div>
                <div className="timeline-item">
                  <div className="timeline-year">교육 · 일자리</div>
                  <div className="timeline-content">
                    플로팅 지도 인력을 지역에서 양성해, 프로그램이 커질수록 지역 일자리가 늘어나는
                    구조를 만듭니다.
                  </div>
                </div>
                <div className="timeline-item">
                  <div className="timeline-year">다른 바다로</div>
                  <div className="timeline-content">
                    울진에서 검증한 운영 방식을 다른 해안 지역으로 옮길 수 있도록 정리합니다.
                    아홉 마리의 고래가 다음에는 어느 바다에서 헤엄치게 될지 준비하고 있습니다.
                  </div>
                </div>
              </div>

              <div className="info-box mt-4" style={{ textAlign: 'center' }}>
                <h4>함께 만들어갈 파트너를 찾습니다</h4>
                <p>지자체 · 기관 · 관광 사업체와의 협업 제안을 환영합니다.</p>
                <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                  <a href={'tel:' + SITE.phone} className="btn btn-primary">{SITE.phone}</a>
                  <Link to="/news/contact" className="btn btn-secondary">문의하기</Link>
                </div>
              </div>
            </main>

            <PageSidebar menu="floating" />
          </div>
        </div>
      </section>
    </>
  )
}
