import { Link } from 'react-router-dom'
import Icon from '../../components/Icon/Icon'
import HeroSection from '../../components/HeroSection/HeroSection'
import PageSidebar from '../../components/Sidebar/PageSidebar'
import { SITE } from '../../data/site'

export default function SpecialBeachPilates() {
  return (
    <>
      <HeroSection
        title="비치필라테스"
        subtitle="파도 소리 가득한 부구해변에서"
        size="sm"
        breadcrumb={[
          { label: '홈', to: '/' },
          { label: '특별활동', to: '/special/team-building' },
          { label: '비치필라테스' },
        ]}
      />

      <section className="section">
        <div className="container">
          <div className="content-with-sidebar">
            <main className="main-content">
              <div className="activity-photos" style={{ marginBottom: '2rem' }}>
                <img className="activity-photo" src="/images/home/beach-pilates-1.webp" alt="비치 필라테스" />
                <img className="activity-photo" src="/images/home/beach-pilates-2.webp" alt="비치 필라테스 소도구 세션" />
              </div>

              <h3>바다 또한 스튜디오입니다</h3>
              <p>
                블루모션트레이닝은 <strong>부구해변 바로 앞</strong>에 있습니다.
                가까이 있기에 오히려 소중함을 몰랐던 해변을,
                봄 · 여름 · 가을 시즌에는 그대로 야외 스튜디오로 씁니다.
              </p>
              <p>
                파도 소리를 들으며 하늘을 보고 땅을 밟는 것만으로 실내 수업과는 다른 감각이 열립니다.
                아무렇게나 굴러다니던 폼롤러가 다르게 느껴지고,
                무심코 지나치던 갈매기까지 반가워지는 시간입니다.
              </p>

              <h3 className="mt-5">프로그램 안내</h3>
              <div className="table-wrapper mt-3">
                <table className="table">
                  <thead>
                    <tr><th>항목</th><th>내용</th></tr>
                  </thead>
                  <tbody>
                    <tr><th>장소</th><td>청정 부구해변 (센터 바로 앞)</td></tr>
                    <tr><th>시즌</th><td>봄 · 여름 · 가을 (날씨에 따라 일정 조정)</td></tr>
                    <tr><th>대상</th><td>남녀노소 누구나 · 필라테스 경험이 없어도 참여 가능</td></tr>
                    <tr><th>구성</th><td>소도구를 활용한 매트 중심 야외 필라테스</td></tr>
                    <tr><th>운영 형태</th><td>회원 대상 시즌 클래스 · 원데이 이벤트 · 단체 워크샵</td></tr>
                    <tr><th>예약</th><td>어플 예약 또는 전화 예약</td></tr>
                  </tbody>
                </table>
              </div>

              <div className="info-box mt-4">
                <h4 className="info-box-title"><Icon name="sun" /> 진행 예시 — 블루비치 필라테스</h4>
                <p>
                  2025년 5월 23일 금요일, 오전 9시 40분과 오후 1시 두 타임 중 선택하는
                  원데이 클래스로 운영했습니다. 혼자 오셔도 좋지만 지인이나 동료와 함께 오시면
                  짝을 지어 진행하는 동작이 더해집니다.
                  바다를 배경으로 한 사진 촬영도 함께 진행했습니다.
                </p>
              </div>

              <h3 className="mt-5">준비하면 좋은 것</h3>
              <div className="grid-2 mt-3">
                <div className="info-item">
                  <span className="info-icon"><Icon name="sun" /></span>
                  <div className="info-content">
                    <h4>자외선 차단</h4>
                    <p>모자와 선크림을 챙겨오세요. 해변은 생각보다 햇살이 강합니다.</p>
                  </div>
                </div>
                <div className="info-item">
                  <span className="info-icon"><Icon name="activity" /></span>
                  <div className="info-content">
                    <h4>편한 운동복</h4>
                    <p>모래가 묻어도 괜찮은 편한 옷차림이면 충분합니다.</p>
                  </div>
                </div>
                <div className="info-item">
                  <span className="info-icon"><Icon name="waves" /></span>
                  <div className="info-content">
                    <h4>수건 · 여벌 옷</h4>
                    <p>센터 앞 수돗가에서 모래를 씻고 정리할 수 있습니다.</p>
                  </div>
                </div>
                <div className="info-item">
                  <span className="info-icon"><Icon name="users" /></span>
                  <div className="info-content">
                    <h4>동행 알려주기</h4>
                    <p>함께 오실 분이 있다면 미리 말씀해 주세요. 준비를 맞춰 두겠습니다.</p>
                  </div>
                </div>
              </div>

              <div className="info-box mt-4">
                <h4 className="info-box-title"><Icon name="waves" /> 한 발 더 나가면</h4>
                <p>
                  해변 위가 아니라 물 위에서 하고 싶다면
                  <Link to="/floating"> 플로팅 온 더 블루</Link>를 살펴보세요.
                  고래 형상 플로팅 매트 위에서 진행하는 울진 유일의 수상 필라테스 프로그램입니다.
                </p>
              </div>

              <div className="info-box mt-4" style={{ textAlign: 'center' }}>
                <h4>다음 시즌 일정 문의</h4>
                <p>시즌 클래스는 자리가 빠르게 찹니다. 미리 문의해 주세요.</p>
                <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                  <a href={'tel:' + SITE.phone} className="btn btn-primary">{SITE.phone}</a>
                  <a href={SITE.instagram} target="_blank" rel="noreferrer noopener" className="btn btn-secondary">
                    <Icon name="instagram" /> 인스타그램
                  </a>
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
