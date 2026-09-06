import { Link } from 'react-router-dom'
import Icon from '../../components/Icon/Icon'
import HeroSection from '../../components/HeroSection/HeroSection'
import PageSidebar from '../../components/Sidebar/PageSidebar'
import { SITE } from '../../data/site'

export default function ProgramsSeniorKids() {
  return (
    <>
      <HeroSection
        title="시니어 · 키즈"
        subtitle="성장기의 아이부터 관절이 달라진 어른까지"
        size="sm"
        breadcrumb={[
          { label: '홈', to: '/' },
          { label: '프로그램', to: '/programs/group-private' },
          { label: '시니어 · 키즈' },
        ]}
      />

      <section className="section">
        <div className="container">
          <div className="content-with-sidebar">
            <main className="main-content">
              <img
                src="/images/home/kids-growth.webp"
                alt="키즈 · 성장 필라테스"
                style={{ width: '100%', borderRadius: '12px', marginBottom: '2rem' }}
              />

              <h3>키즈 · 성장</h3>
              <p>
                물리치료사 시절 아이들을 치료했던 경험을 토대로 키즈반을 시작해 벌써 2년이 넘었습니다.
                저학년부터 고학년, 성장기를 맞은 청소년까지 다양하게 찾아오고 있고,
                방학마다 타지에서 오는 친구들도 있습니다.
              </p>

              <div className="table-wrapper mt-3">
                <table className="table">
                  <thead>
                    <tr><th>반</th><th>대상</th><th>중점</th></tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>저학년반</td>
                      <td>초등 2 · 3 · 4학년</td>
                      <td>균형과 신체 인지, 게임과 미션으로 집중력 기르기</td>
                    </tr>
                    <tr>
                      <td>고학년반</td>
                      <td>초등 5 · 6학년 · 중학생</td>
                      <td>굽은 자세 교정, 후면사슬 강화, 성장기 자세 관리</td>
                    </tr>
                    <tr>
                      <td>청소년 · 고3</td>
                      <td>중 · 고등학생</td>
                      <td>장시간 앉은 자세로 굳은 몸 풀기, 체중 관리, 입시 후 집중 관리</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="info-box mt-3">
                <h4 className="info-box-title"><Icon name="smile" /> 키즈반은 이렇게 진행합니다</h4>
                <ul>
                  <li>가벼운 물건을 든 런지로 굽은 흉추를 펴줍니다.</li>
                  <li>위험하지 않은 범위에서 점프 파워를 조절해 유산소 능력을 올립니다.</li>
                  <li>보수(BOSU) 위 균형 훈련을 게임과 미션 형태로 진행합니다.</li>
                  <li>MOTR를 활용해 코어 근육과 움직임 조절 능력을 함께 기릅니다.</li>
                  <li>어깨 · 등 · 반대쪽 엉덩이를 잇는 후면사슬 운동을 반드시 포함합니다.</li>
                  <li>3:1 소수정예로 진행하며, 자매나 친구끼리 함께 등록해도 됩니다.</li>
                </ul>
              </div>

              <p className="mt-3">
                수능이 끝난 뒤에는 고3 친구들의 문의가 많습니다.
                그동안 관리하지 못했던 체중과 굽어진 자세를 잡기에 3월 입학 전까지가 최적의 시기입니다.
                달리기 대회를 앞둔 학생에게 발목 부상 방지 테이핑을 해드리는 것처럼,
                필요한 순간에 필요한 처치를 함께합니다.
              </p>

              <h3 className="mt-5">시니어</h3>
              <p>
                정형외과에 가도 결국 처방은 운동입니다. 문제는 &lsquo;어떤 운동을&rsquo;입니다.
                현재의 관절 상태와 근력에 맞지 않는 운동은 오히려 관절에 무리를 줍니다.
                블루모션에는 <strong>물리치료사를 찾아 울진 북면까지 오시는 시니어 회원</strong>들이 계십니다.
              </p>

              <div className="grid-2 mt-3">
                <div className="info-item">
                  <span className="info-icon"><Icon name="activity" /></span>
                  <div className="info-content">
                    <h4>점진적 저항운동</h4>
                    <p>각종 기구를 활용해 관절에 부담 없이 강도를 조금씩 올립니다.</p>
                  </div>
                </div>
                <div className="info-item">
                  <span className="info-icon"><Icon name="crosshair" /></span>
                  <div className="info-content">
                    <h4>균형감각 향상</h4>
                    <p>낙상 위험을 줄이기 위한 균형 훈련을 꾸준히 포함합니다.</p>
                  </div>
                </div>
                <div className="info-item">
                  <span className="info-icon"><Icon name="shieldCheck" /></span>
                  <div className="info-content">
                    <h4>수술 후 재활</h4>
                    <p>최근 시니어 수술재활 문의가 늘고 있습니다. 질환에 따른 운동도 함께 봅니다.</p>
                  </div>
                </div>
                <div className="info-item">
                  <span className="info-icon"><Icon name="leaf" /></span>
                  <div className="info-content">
                    <h4>발과 아치 관리</h4>
                    <p>오래 서서 일하며 무너진 발 아치와 약해진 내재근을 따로 다룹니다.</p>
                  </div>
                </div>
              </div>

              <div className="info-box mt-4">
                <h4 className="info-box-title"><Icon name="clock" /> 시간 조정</h4>
                <p>
                  주 2회 방문이 어려운 경우 하루에 2타임을 연달아 진행하시는 분들도 계십니다.
                  거리나 일정 때문에 고민되신다면 상담 때 말씀해 주세요. 함께 방법을 찾습니다.
                </p>
              </div>

              <h3 className="mt-5">학교 연계 프로그램</h3>
              <p>
                학기 중에는 주기적으로, 방학 중에는 단기 집중으로 학교 인솔 아래 센터를 방문해
                레슨을 받는 프로그램을 운영합니다. 자세와 키 성장 관련 출강도 함께 진행합니다.
                자세한 내용은 <Link to="/special/sports-club">스포츠클럽</Link> 페이지를 참고해 주세요.
              </p>

              <div className="info-box mt-4" style={{ textAlign: 'center' }}>
                <h4>아이도 부모님도 함께</h4>
                <p>연령대에 맞는 반을 안내해 드립니다. 편하게 문의해 주세요.</p>
                <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                  <a href={'tel:' + SITE.phone} className="btn btn-primary">{SITE.phone}</a>
                  <Link to="/bluemotion/program" className="btn btn-secondary">전체 프로그램</Link>
                </div>
              </div>
            </main>

            <PageSidebar menu="programs" />
          </div>
        </div>
      </section>
    </>
  )
}
