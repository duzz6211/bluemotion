import { Link } from 'react-router-dom'
import Icon from '../../components/Icon/Icon'
import HeroSection from '../../components/HeroSection/HeroSection'
import PageSidebar from '../../components/Sidebar/PageSidebar'

const pillars = [
  {
    icon: 'award',
    title: '양질의 수업',
    desc: '3:1 소수정예와 1:1 개인 레슨을 고집합니다. 인원을 늘리는 대신 한 사람의 움직임을 제대로 보는 쪽을 택합니다.',
  },
  {
    icon: 'graduationCap',
    title: '지역 인재 양성',
    desc: '지역에서 강사를 길러내 지역에서 일하게 합니다. FMTA 지도자 과정을 통해 취업 · 창업까지 연계합니다.',
  },
  {
    icon: 'handshake',
    title: '지역사회 연계',
    desc: '보건소 · 학교 · 가족센터 · 공기업과 손잡고 센터 밖에서도 움직임 교육을 이어갑니다.',
  },
  {
    icon: 'sparkles',
    title: '세상에 없던 프로그램',
    desc: '울진의 바다라는 조건을 그대로 살려 플로팅 온 더 블루처럼 이곳에서만 가능한 프로그램을 만듭니다.',
  },
]

export default function BluemotionVision() {
  return (
    <>
      <HeroSection
        title="비전"
        subtitle="지역에서 나고 자라 지역을 바꾸는 움직임"
        size="sm"
        breadcrumb={[
          { label: '홈', to: '/' },
          { label: '블루모션트레이닝센터', to: '/bluemotion' },
          { label: '비전' },
        ]}
      />

      <section className="section">
        <div className="container">
          <div className="content-with-sidebar">
            <main className="main-content">
              <div className="info-box" style={{ textAlign: 'center' }}>
                <p style={{ fontSize: '1.25rem', fontWeight: 500, lineHeight: 1.7, margin: 0 }}>
                  &ldquo;당신이 빛날 수 있는 곳에서 함께 하세요.<br />
                  그 빛은 또 다른 누군가를 이끌 수 있는 빛이 될 거예요.&rdquo;
                </p>
                <p className="text-muted mt-3" style={{ margin: 0 }}>
                  FMTA 협회장 · 블루모션트레이닝 원장 김하나
                </p>
              </div>

              <h3 className="mt-5">우리가 서 있는 자리</h3>
              <p>
                울진은 인구소멸 위험지역으로 분류되는 지역입니다. 그만큼 운동을 배우고 싶어도 배울 곳이 없고,
                자격을 갖추고 싶어도 교육기관이 없어 도시로 나가야 했습니다.
                블루모션트레이닝은 그 간극을 좁히기 위해 <strong>센터 · 협회 · 지역사업</strong>을 한 몸으로 운영합니다.
                수업으로 지역 주민의 삶의 질을 높이고, 교육으로 지역 강사를 길러내며,
                그 강사들이 다시 지역에서 일할 수 있게 만드는 순환 구조입니다.
              </p>

              <h3 className="mt-5">네 가지 축</h3>
              <div className="grid-2 mt-3">
                {pillars.map((item) => (
                  <div key={item.title} className="info-item">
                    <span className="info-icon"><Icon name={item.icon} /></span>
                    <div className="info-content">
                      <h4>{item.title}</h4>
                      <p>{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <h3 className="mt-5">지금까지 만든 것</h3>
              <div className="timeline mt-3">
                <div className="timeline-item">
                  <div className="timeline-year">2019</div>
                  <div className="timeline-content">
                    전신인 힐라테스 센터 개원. 물리치료사 출신 원장이 직접 운영을 시작했습니다.
                  </div>
                </div>
                <div className="timeline-item">
                  <div className="timeline-year">2023</div>
                  <div className="timeline-content">
                    부구리 장터길로 확장 이전, 60평 이상 1층 단독건물 대형 센터로 리브랜딩.
                    임산부 그룹 클래스와 키즈반을 런칭했습니다.
                  </div>
                </div>
                <div className="timeline-item">
                  <div className="timeline-year">2024</div>
                  <div className="timeline-content">
                    기능적움직임트레이닝협회(FMTA) 설립. 필라테스 지도자 1 · 2기 배출,
                    원덕중 · 원덕고 출강을 시작했습니다.
                  </div>
                </div>
                <div className="timeline-item">
                  <div className="timeline-year">2025</div>
                  <div className="timeline-content">
                    울진군가족센터와 결혼이민여성 대상 K-필라테스 강사과정 운영,
                    울진군보건소 출산준비교실 출강, 한수원 한울본부 힐링데이 진행.
                    경북 동해권 연계일자리 사업에서 <strong>&lsquo;플로팅 온 더 블루&rsquo;가 우수사례로 선정</strong>되었습니다.
                  </div>
                </div>
                <div className="timeline-item">
                  <div className="timeline-year">2026</div>
                  <div className="timeline-content">
                    아홉 마리의 고래와 함께 플로팅 프로그램의 운영 범위를 넓히고,
                    회원 대상 여름 시즌 플로팅 클래스를 정규화합니다.
                  </div>
                </div>
              </div>

              <h3 className="mt-5">앞으로</h3>
              <p>
                단순한 운동센터를 넘어 지역 회원들의 교류처가 되고, 사람과 사람 사이의 정과 따뜻함을 나누는
                공간이 되는 것. 그리고 이곳에서 배운 사람이 이곳에서 일자리를 얻는 것.
                블루모션트레이닝이 계속 움직이는 이유입니다.
              </p>

              <div className="info-box mt-4" style={{ textAlign: 'center' }}>
                <h4>함께 움직일 분을 기다립니다</h4>
                <p>회원으로, 교육생으로, 강사로 — 어떤 자리든 좋습니다.</p>
                <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                  <Link to="/education" className="btn btn-primary">교육과정 보기</Link>
                  <Link to="/news/contact" className="btn btn-secondary">문의하기</Link>
                </div>
              </div>
            </main>

            <PageSidebar menu="bluemotion" />
          </div>
        </div>
      </section>
    </>
  )
}
