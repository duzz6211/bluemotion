import { Link } from 'react-router-dom'
import Icon from '../../components/Icon/Icon'
import HeroSection from '../../components/HeroSection/HeroSection'
import PageSidebar from '../../components/Sidebar/PageSidebar'
import { SITE } from '../../data/site'

export default function SpecialTeamBuilding() {
  return (
    <>
      <HeroSection
        title="팀빌딩 · 워크샵"
        subtitle="회사를 벗어나 건강도 챙기고 추억도 쌓는 하루"
        size="sm"
        breadcrumb={[
          { label: '홈', to: '/' },
          { label: '특별활동', to: '/special/team-building' },
          { label: '팀빌딩 · 워크샵' },
        ]}
      />

      <section className="section">
        <div className="container">
          <div className="content-with-sidebar">
            <main className="main-content">
              <div className="activity-photos" style={{ marginBottom: '2rem' }}>
                <img className="activity-photo" src="/images/home/teambuilding-1.webp" alt="팀빌딩 워크샵" />
                <img className="activity-photo" src="/images/home/teambuilding-2.webp" alt="팀빌딩 워크샵 실내 세션" />
              </div>

              <h3>기업 · 기관 대상 원데이 프로그램</h3>
              <p>
                하루 종일 전화에 시달리고 민원 응대에 지친 직원들에게 필요한 건 강의가 아니라
                몸을 쓰는 시간입니다. 블루모션의 팀빌딩 프로그램은
                <strong> 바다에서의 야외 세션과 실내 체형별 맞춤 스트레칭</strong>을 묶어 진행합니다.
              </p>

              <div className="table-wrapper mt-4">
                <table className="table">
                  <thead>
                    <tr><th>항목</th><th>내용</th></tr>
                  </thead>
                  <tbody>
                    <tr><th>인원</th><td>10명 내외 (인원에 따라 구성 조정 가능)</td></tr>
                    <tr><th>소요 시간</th><td>약 90분 · 확장 시 반일 일정으로 운영</td></tr>
                    <tr><th>장소</th><td>블루모션트레이닝 실내 + 부구해변 야외 (선택)</td></tr>
                    <tr><th>구성</th><td>1부 야외 활동 · 2부 실내 체형별 스트레칭 교육</td></tr>
                    <tr><th>대상</th><td>기업 · 공공기관 · 단체 워크샵, 감정노동 직원 힐링데이</td></tr>
                  </tbody>
                </table>
              </div>

              <h3 className="mt-5">2부 구성 — 체형별 맞춤 스트레칭</h3>
              <p>
                같은 스트레칭도 체형에 맞게 해야 진짜 내 운동이 됩니다. 실내 세션에서는
                디스크 · 오십견 · 오다리처럼 자주 듣는 문제들이 <strong>어떤 기전에서 생기는지</strong>,
                어떻게 확인할 수 있는지, 그럴 때 무엇을 해야 하는지를 예를 들어 설명합니다.
              </p>
              <div className="info-box mt-3">
                <ul>
                  <li>짝을 지어 서로의 정렬을 체크하고 스티커로 표시하며 체형을 찾아봅니다.</li>
                  <li>폼롤러 · 짐볼처럼 집에서도 쓸 수 있는 도구로 동작을 익힙니다.</li>
                  <li>같은 동작을 체형에 따라 어떻게 다르게 적용할지 함께 정리합니다.</li>
                  <li>병원에서 못 물어봤던 고민을 서로 나누며 질문할 수 있는 시간을 둡니다.</li>
                </ul>
              </div>

              <h3 className="mt-5">진행 사례</h3>
              <div className="info-box mt-3">
                <h4 className="info-box-title"><Icon name="handshake" /> 한국수력원자력 한울본부 &lsquo;힐링 온 더 블루&rsquo;</h4>
                <p>
                  한울본부 총무부가 <strong>감정노동 직원을 대상으로 기획한 힐링데이</strong>를
                  블루모션이 맡아 2회차에 걸쳐 진행했습니다.
                  1부는 부구해변에서 비치 필라테스로, 2부는 실내에서 체형별 맞춤 스트레칭과 운동으로 구성했습니다.
                  멀리서 눈으로만 보던 바다를 온몸으로 느껴보는 시간이었다는 반응이 많았습니다.
                </p>
              </div>

              <h3 className="mt-5">확장 옵션</h3>
              <div className="grid-2 mt-3">
                <div className="info-item">
                  <span className="info-icon"><Icon name="waves" /></span>
                  <div className="info-content">
                    <h4>플로팅 온 더 블루</h4>
                    <p>고래 형상 플로팅 매트를 활용한 수상 세션을 팀빌딩 일정에 넣을 수 있습니다.</p>
                  </div>
                </div>
                <div className="info-item">
                  <span className="info-icon"><Icon name="sun" /></span>
                  <div className="info-content">
                    <h4>비치 필라테스</h4>
                    <p>봄 · 여름 · 가을 시즌 부구해변에서 진행하는 야외 세션.</p>
                  </div>
                </div>
                <div className="info-item">
                  <span className="info-icon"><Icon name="building" /></span>
                  <div className="info-content">
                    <h4>실내 원데이</h4>
                    <p>날씨가 어렵거나 겨울 시즌이면 실내 프로그램만으로도 원데이 진행이 가능합니다.</p>
                  </div>
                </div>
                <div className="info-item">
                  <span className="info-icon"><Icon name="camera" /></span>
                  <div className="info-content">
                    <h4>단체 사진</h4>
                    <p>바다를 배경으로 한 단체 · 인생샷 촬영을 일정에 포함할 수 있습니다.</p>
                  </div>
                </div>
              </div>

              <div className="info-box mt-4" style={{ textAlign: 'center' }}>
                <h4>워크샵 일정을 잡고 계신가요?</h4>
                <p>인원 · 희망 날짜 · 예산 범위를 알려주시면 구성안을 만들어 드립니다.</p>
                <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                  <a href={'tel:' + SITE.phone} className="btn btn-primary">{SITE.phone}</a>
                  <Link to="/news/contact" className="btn btn-secondary">문의하기</Link>
                </div>
              </div>
            </main>

            <PageSidebar menu="special" />
          </div>
        </div>
      </section>
    </>
  )
}
