import { Link } from 'react-router-dom'
import Icon from '../../components/Icon/Icon'
import HeroSection from '../../components/HeroSection/HeroSection'
import PageSidebar from '../../components/Sidebar/PageSidebar'
import { SITE } from '../../data/site'

export default function SpecialSportsClub() {
  return (
    <>
      <HeroSection
        title="스포츠클럽"
        subtitle="학교 연계 방문 레슨과 방과후 특별활동"
        size="sm"
        breadcrumb={[
          { label: '홈', to: '/' },
          { label: '특별활동', to: '/special/team-building' },
          { label: '스포츠클럽' },
        ]}
      />

      <section className="section">
        <div className="container">
          <div className="content-with-sidebar">
            <main className="main-content">
              <div className="activity-photos" style={{ marginBottom: '2rem' }}>
                <img className="activity-photo" src="/images/home/school-program-1.webp" alt="학교 연계 프로그램" />
                <img className="activity-photo" src="/images/home/school-program-2.webp" alt="스포츠클럽 필라테스부" />
              </div>

              <h3>학교와 함께합니다</h3>
              <p>
                아이들이 가장 많은 시간을 보내는 곳은 학교입니다.
                블루모션은 학교 인솔 아래 학생들이 센터를 방문해 집중 레슨을 받는
                <strong> 학교 연계 방문 레슨</strong>과, 학교로 나가는 <strong>출강</strong>을 함께 운영합니다.
                울진 · 삼척 · 영덕 지역의 초 · 중 · 고등학교라면 어디든 문의하실 수 있습니다.
              </p>

              <div className="table-wrapper mt-4">
                <table className="table">
                  <thead>
                    <tr><th>운영 형태</th><th>내용</th></tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>학기 중 방문 레슨</td>
                      <td>매주 정해진 요일에 학교 인솔로 센터를 방문해 진행하는 주기적 레슨</td>
                    </tr>
                    <tr>
                      <td>방학 중 단기 레슨</td>
                      <td>방학 기간에 집중적으로 진행하는 단기 프로그램</td>
                    </tr>
                    <tr>
                      <td>스포츠클럽 · 방과후</td>
                      <td>학교 스포츠클럽 필라테스부, 방과후 특별활동 운영</td>
                    </tr>
                    <tr>
                      <td>학교 출강</td>
                      <td>자세 · 키 성장 관련 교육을 학교로 찾아가 진행</td>
                    </tr>
                    <tr>
                      <td>체험형 프로그램</td>
                      <td>플로팅 온 더 블루 등 울진에서만 가능한 야외 체험 활동</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h3 className="mt-5">진행 사례 — 원덕중학교 스포츠클럽 필라테스부</h3>
              <p>
                원덕중 · 원덕고 출강이 인연이 되어 방문 레슨으로 이어졌습니다.
                호산에서 에듀버스를 타고 <strong>매주 수요일 오후</strong>에 찾아오는 아이들과
                한 학기 내내 함께합니다.
              </p>
              <div className="info-box mt-3">
                <ul>
                  <li>보수를 활용해 여섯 명이 함께하는 균형 · 코어 강화 동작</li>
                  <li>스파인코렉터로 스트레칭부터 전신운동까지 한 번에</li>
                  <li>둘씩 짝을 지어 바렐에서 진행하며 서로의 동작을 관찰하고 예습</li>
                  <li>자유롭게 질문하고 함께 고민하는, 수동적이지 않은 레슨</li>
                  <li>개인의 체형과 상태에 따라 부족한 부분을 채우고 협동심도 기르는 구성</li>
                </ul>
              </div>
              <p className="mt-3">
                아이돌 가수들이 필라테스를 많이 하다 보니 배우고 싶어하는 욕구가 강하고 집중력도 높습니다.
                활동량이 줄어들기 쉬운 시기의 학생들에게 적절한 운동량을 제공하면서,
                스스로 신체를 인식하고 움직임을 바르게 인지하는 능력을 기르는 시간이 됩니다.
              </p>

              <div className="info-box mt-4">
                <h4 className="info-box-title"><Icon name="waves" /> 플로팅 체험 프로그램</h4>
                <p>
                  중학교 스포츠클럽 학생들과 <strong>고래 형상 플로팅 매트 체험</strong>을 진행하기도 합니다.
                  2인 1조로 고래에 바람을 넣는 것부터 함께하고, 물 위에서 스쿼트와 중심잡기를 해봅니다.
                  11월 바다는 오히려 미지근해 늦가을에도 진행이 가능하며,
                  인솔자 선생님과 동행해 안전하게 운영합니다.
                  센터 앞 수돗가에서 모래를 씻고 정리까지 마칩니다.
                </p>
              </div>

              <h3 className="mt-5">문의 시 알려주세요</h3>
              <div className="grid-2 mt-3">
                <div className="info-item">
                  <span className="info-icon"><Icon name="users" /></span>
                  <div className="info-content">
                    <h4>학년 · 인원</h4>
                    <p>참여 학년과 인원에 따라 구성과 기구 배치를 조정합니다.</p>
                  </div>
                </div>
                <div className="info-item">
                  <span className="info-icon"><Icon name="calendar" /></span>
                  <div className="info-content">
                    <h4>희망 요일 · 기간</h4>
                    <p>학기 중 주기적 진행인지, 방학 중 단기인지 알려주세요.</p>
                  </div>
                </div>
                <div className="info-item">
                  <span className="info-icon"><Icon name="bus" /></span>
                  <div className="info-content">
                    <h4>이동 방법</h4>
                    <p>센터 방문인지 학교 출강인지에 따라 프로그램이 달라집니다.</p>
                  </div>
                </div>
                <div className="info-item">
                  <span className="info-icon"><Icon name="target" /></span>
                  <div className="info-content">
                    <h4>목표</h4>
                    <p>자세 교정, 성장, 체력, 체험 등 중점 목표를 알려주시면 맞춰 구성합니다.</p>
                  </div>
                </div>
              </div>

              <div className="info-box mt-4" style={{ textAlign: 'center' }}>
                <h4>출강 · 방문 레슨 문의</h4>
                <p>울진 · 삼척 · 영덕 지역 학교라면 언제든 환영합니다.</p>
                <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                  <a href={'tel:' + SITE.phone} className="btn btn-primary">{SITE.phone}</a>
                  <Link to="/programs/senior-kids" className="btn btn-secondary">키즈 프로그램</Link>
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
