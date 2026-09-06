import { Link } from 'react-router-dom'
import Icon from '../../components/Icon/Icon'
import HeroSection from '../../components/HeroSection/HeroSection'
import PageSidebar from '../../components/Sidebar/PageSidebar'
import { SITE } from '../../data/site'

const equipment = [
  {
    name: 'REFORMER · 리포머',
    desc: '재활과 척추 · 근육 균형 조절 운동의 핵심 기구입니다. 스프링은 강 1(red) · 중 3(blue) · 약 1(yellow)로 구성되어 15단계의 강도 조정이 가능하고, 헤드레스트는 3단계로 조절됩니다.',
  },
  {
    name: 'CHAIR · 체어',
    desc: '균형감각과 하체 근력 강화에 최적화된 기구입니다. 손잡이 높이를 체형에 맞게 조절할 수 있고, 발판을 분리해 한쪽 다리씩 운동할 수 있습니다.',
  },
  {
    name: 'BARREL · 바렐',
    desc: '유연성 향상과 척추 신전, 자세 교정에 활용합니다. 바렐과 사다리의 거리 · 높이를 조절해 회원 개개인의 신체 상황에 맞출 수 있습니다.',
  },
  {
    name: 'CADILLAC · 캐딜락',
    desc: '프라이빗 룸에 배치된 1:1 개인 수업 전용 기구입니다. 80가지 이상의 동작이 가능하며 척추 · 복부 · 허리 · 어깨 주위 근육 강화와 신체 불균형 교정에 효과적입니다.',
  },
]

export default function BluemotionIndex() {
  return (
    <>
      <HeroSection
        title="시설소개"
        subtitle="울진 북면, 부구해변 앞 60평 대형 필라테스 센터"
        size="sm"
        breadcrumb={[
          { label: '홈', to: '/' },
          { label: '블루모션트레이닝센터', to: '/bluemotion' },
          { label: '시설소개' },
        ]}
      />

      <section className="section">
        <div className="container">
          <div className="content-with-sidebar">
            <main className="main-content">
              <img
                src="/images/home/center.webp"
                alt="블루모션트레이닝 센터 내부"
                style={{ width: '100%', borderRadius: '12px', marginBottom: '2rem' }}
              />

              <h3>바다 앞 단독건물, 넉넉한 움직임의 공간</h3>
              <p>
                블루모션트레이닝은 경상북도 울진군 북면 부구리, 부구해변 바로 앞에 자리한
                <strong> 60평 이상의 1층 단독건물 대형 센터</strong>입니다. 2019년 전신인 힐라테스 센터로 시작해
                2023년 지금의 자리로 확장 이전하며 &lsquo;블루모션트레이닝&rsquo;으로 리브랜딩했습니다.
              </p>
              <p>
                계단 없는 1층 구조라 시니어 회원과 임산부 회원도 부담 없이 오갈 수 있고,
                넓은 층고와 개방된 동선 덕분에 그룹 레슨 중에도 회원 간 간섭이 적습니다.
                센터 앞에는 모래를 씻어낼 수 있는 수돗가가 있어 비치 필라테스와 플로팅 프로그램을 마친 뒤
                바로 정리하고 실내 수업으로 이어질 수 있습니다.
              </p>

              <div className="info-grid mt-4">
                <div className="info-item">
                  <span className="info-icon"><Icon name="building" /></span>
                  <div className="info-content">
                    <h4>대형 그룹 존</h4>
                    <p>리포머 · 체어 · 바렐이 배치된 메인 홀. 3:1 소수정예 그룹 레슨이 진행됩니다.</p>
                  </div>
                </div>
                <div className="info-item">
                  <span className="info-icon"><Icon name="user" /></span>
                  <div className="info-content">
                    <h4>프라이빗 룸</h4>
                    <p>캐딜락이 놓인 1:1 개인 레슨 전용 공간. 재활 · 교정 세션에 사용합니다.</p>
                  </div>
                </div>
                <div className="info-item">
                  <span className="info-icon"><Icon name="activity" /></span>
                  <div className="info-content">
                    <h4>TRX 트레이닝 존</h4>
                    <p>TRX 서스펜션 트레이닝과 TRX MAPS 움직임 검사를 진행하는 기능성 훈련 구역.</p>
                  </div>
                </div>
                <div className="info-item">
                  <span className="info-icon"><Icon name="waves" /></span>
                  <div className="info-content">
                    <h4>바다 스튜디오</h4>
                    <p>센터 앞 부구해변은 계절에 따라 비치 필라테스 · 플로팅 프로그램의 야외 스튜디오가 됩니다.</p>
                  </div>
                </div>
              </div>

              <h3 className="mt-5">보유 기구</h3>
              <p>
                국내 필라테스 기구 시장을 이끄는 <strong>(주)인투필라테스</strong> 제품으로 구성했습니다.
                그룹 수업에는 리포머 · 체어 · 바렐을, 1:1 개인 수업에는 캐딜락을 사용합니다.
              </p>

              <div className="grid-2 mt-3">
                {equipment.map((item) => (
                  <div key={item.name} className="info-box">
                    <h4 className="info-box-title">{item.name}</h4>
                    <p>{item.desc}</p>
                  </div>
                ))}
              </div>

              <div className="info-box mt-4">
                <h4 className="info-box-title"><Icon name="dumbbell" /> 소도구 · 측정 장비</h4>
                <p>
                  스파인코렉터, MOTR(모터), 보수, TRX, 폼롤러, 짐볼, 고프론, 각종 밴드와 소도구를 갖추고 있으며
                  회원의 상태와 목표에 따라 대기구와 조합해 프로그램을 구성합니다.
                  첫 상담에서는 <strong>TRX MAPS 움직임 검사</strong>로 관절 가동 범위, 근육 활성도, 자세, 좌우 대칭성을
                  점수로 확인한 뒤 레슨 방향을 잡습니다.
                </p>
              </div>

              <h3 className="mt-5">이용 안내</h3>
              <div className="table-wrapper mt-3">
                <table className="table">
                  <tbody>
                    <tr><th>주소</th><td>{SITE.roadAddress} ({SITE.landmark})</td></tr>
                    <tr><th>규모</th><td>60평 이상 1층 단독건물</td></tr>
                    <tr><th>운영</th><td>{SITE.hours}</td></tr>
                    <tr><th>예약</th><td>어플 예약제 · 전화 상담 후 방문 상담 가능</td></tr>
                    <tr><th>주차</th><td>건물 앞 자체 주차 공간 이용</td></tr>
                    <tr><th>문의</th><td><a href={'tel:' + SITE.phone}>{SITE.phone}</a></td></tr>
                  </tbody>
                </table>
              </div>

              <div className="info-box mt-4" style={{ textAlign: 'center' }}>
                <h4>센터를 직접 보고 싶으신가요?</h4>
                <p>언제든 상담 및 방문을 환영합니다. 전화 주시면 시간 맞춰 안내드리겠습니다.</p>
                <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                  <Link to="/bluemotion/location" className="btn btn-primary">오시는 길</Link>
                  <Link to="/bluemotion/program" className="btn btn-secondary">프로그램 보기</Link>
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
