import { Link } from 'react-router-dom'
import Icon from '../../components/Icon/Icon'
import HeroSection from '../../components/HeroSection/HeroSection'
import PageSidebar from '../../components/Sidebar/PageSidebar'
import { SITE } from '../../data/site'

export default function FloatingIndex() {
  return (
    <>
      <HeroSection
        title="활동소개"
        subtitle="울진에만 있는 고래, 플로팅 온 더 블루"
        size="sm"
        breadcrumb={[
          { label: '홈', to: '/' },
          { label: '플로팅온더블루', to: '/floating' },
          { label: '활동소개' },
        ]}
      />

      <section className="section">
        <div className="container">
          <div className="content-with-sidebar">
            <main className="main-content">
              <div className="activity-photos" style={{ marginBottom: '2rem' }}>
                <img className="activity-photo" src="/images/home/floating-1.webp" alt="플로팅 온 더 블루 - 고래 플로팅 매트" />
                <img className="activity-photo" src="/images/home/floating-2.webp" alt="플로팅 온 더 블루 - 바다 세션" />
              </div>

              <h3>물 위에서 하는 필라테스</h3>
              <p>
                <strong>플로팅 온 더 블루</strong>는 물에 뜨는 매트 위에서 필라테스 동작을 수행하는 프로그램입니다.
                보이지 않는 흔들림이 계속되기 때문에 매 순간 코어가 개입하고,
                땅 위에서는 쉽게 넘어가던 동작도 몸 전체를 다시 쓰게 만듭니다.
              </p>
              <p>
                두바이의 한 리조트가 인공 해변에 플로팅 보드를 띄워 운동하는 영상에서 시작된 기획입니다.
                &lsquo;바다가 바로 앞인데 우리라고 못 할 게 없다&rsquo;는 생각으로,
                울진 앞바다를 그대로 스튜디오로 삼았습니다.
              </p>

              <div className="info-box mt-4">
                <h4 className="info-box-title"><Icon name="waves" /> 아홉 마리의 고래</h4>
                <p>
                  플로팅 매트는 <strong>고래 형상으로 특별 제작</strong>했습니다. 세상에 없던 모양이라
                  AI와 오랜 대화를 거쳐 형태를 잡고, 제작이 가능한 업체를 찾아 실물로 만들어냈습니다.
                  현재 총 <strong>아홉 마리</strong>의 고래가 울진에 있습니다.
                  수영을 못해도 절대 빠지지 않는 크기와 부력이라 물이 무서운 분도 참여할 수 있습니다.
                </p>
              </div>

              <h3 className="mt-5">이런 분께 권합니다</h3>
              <div className="grid-2 mt-3">
                <div className="info-item">
                  <span className="info-icon"><Icon name="users" /></span>
                  <div className="info-content">
                    <h4>가족 · 연인 · 부부</h4>
                    <p>둘이 짝을 지어 진행하는 동작이 많아 함께 오시면 더 즐겁습니다.</p>
                  </div>
                </div>
                <div className="info-item">
                  <span className="info-icon"><Icon name="graduationCap" /></span>
                  <div className="info-content">
                    <h4>학교 스포츠클럽 · 방과후</h4>
                    <p>울진 · 삼척 · 영덕 지역 초 · 중 · 고 단체 체험으로 운영합니다.</p>
                  </div>
                </div>
                <div className="info-item">
                  <span className="info-icon"><Icon name="building" /></span>
                  <div className="info-content">
                    <h4>기업 · 기관 워크샵</h4>
                    <p>팀빌딩과 힐링데이 프로그램으로 구성해 진행할 수 있습니다.</p>
                  </div>
                </div>
                <div className="info-item">
                  <span className="info-icon"><Icon name="sun" /></span>
                  <div className="info-content">
                    <h4>울진을 찾은 여행객</h4>
                    <p>원데이 클래스로 참여 가능합니다. 필라테스 경험이 없어도 괜찮습니다.</p>
                  </div>
                </div>
              </div>

              <h3 className="mt-5">진행 장소</h3>
              <div className="table-wrapper mt-3">
                <table className="table">
                  <thead>
                    <tr><th>세션</th><th>장소</th><th>내용</th></tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>오전 · 수상 세션</td>
                      <td>울진해양레포츠센터<br />(울진군 매화면 오산항길 59)</td>
                      <td>5m 풀장을 대관해 고래에 적응하고 기본 동작을 익힙니다.</td>
                    </tr>
                    <tr>
                      <td>오후 · 해양 세션</td>
                      <td>부구해변<br />(센터 바로 앞)</td>
                      <td>실제 바다에서 오전에 익힌 동작을 파도와 함께 수행합니다.</td>
                    </tr>
                    <tr>
                      <td>실내 세션</td>
                      <td>블루모션트레이닝<br />({SITE.roadAddress})</td>
                      <td>TRX MAPS 움직임 검사와 실내 기구 운동. 원데이로도 운영 가능합니다.</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="info-box mt-4">
                <h4 className="info-box-title"><Icon name="award" /> 2025년 경북 동해권 연계일자리 사업 우수사례</h4>
                <p>
                  인구소멸지역인 울진군과 영덕군이 함께 추진한 <strong>2025년 경북 동해권 지역 연계일자리 사업</strong>에서
                  블루모션트레이닝의 &lsquo;플로팅 온 더 블루&rsquo;가 우수사례로 선정되었습니다.
                  세상에 없는 것을 만들고, 수익을 내며, 일자리까지 창출한다는 과제를 반년에 걸쳐 수행한 결과입니다.
                </p>
              </div>

              <div className="info-box mt-4" style={{ textAlign: 'center' }}>
                <h4>고래를 타보고 싶다면</h4>
                <p>진행 시즌과 일정은 그때그때 다릅니다. 편하게 문의해 주세요.</p>
                <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                  <Link to="/floating/process" className="btn btn-primary">진행 과정 보기</Link>
                  <a href={'tel:' + SITE.phone} className="btn btn-secondary">{SITE.phone}</a>
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
