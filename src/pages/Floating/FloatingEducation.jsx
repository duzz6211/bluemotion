import { Link } from 'react-router-dom'
import Icon from '../../components/Icon/Icon'
import HeroSection from '../../components/HeroSection/HeroSection'
import PageSidebar from '../../components/Sidebar/PageSidebar'
import { SITE } from '../../data/site'

export default function FloatingEducation() {
  return (
    <>
      <HeroSection
        title="교육과정"
        subtitle="플로팅 필라테스를 가르치는 사람을 기릅니다"
        size="sm"
        breadcrumb={[
          { label: '홈', to: '/' },
          { label: '플로팅온더블루', to: '/floating' },
          { label: '교육과정' },
        ]}
      />

      <section className="section">
        <div className="container">
          <div className="content-with-sidebar">
            <main className="main-content">
              <img
                src="/images/home/course-floating.webp"
                alt="플로팅 필라테스 지도자 과정"
                style={{ width: '100%', borderRadius: '12px', marginBottom: '2rem' }}
              />

              <h3>왜 별도의 교육이 필요한가</h3>
              <p>
                물 위에서는 지면 위와 전혀 다른 일이 벌어집니다. 지지면이 계속 흔들리기 때문에
                같은 동작이라도 개입하는 근육과 위험 구간이 달라지고, 큐잉과 보조 방법도 바뀌어야 합니다.
                여기에 수상 환경의 안전 관리까지 더해지므로,
                플로팅 필라테스는 <strong>기존 필라테스 지도 역량 위에 얹는 별도의 과정</strong>으로 다룹니다.
              </p>

              <h3 className="mt-5">과정 구성</h3>
              <div className="table-wrapper mt-3">
                <table className="table">
                  <thead>
                    <tr><th>모듈</th><th>내용</th></tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>부력과 움직임의 이해</td>
                      <td>불안정 지지면에서 일어나는 자세 조절 전략과 코어 반응, 지면과의 차이를 이해합니다.</td>
                    </tr>
                    <tr>
                      <td>플로팅 매트 운용</td>
                      <td>고래 형상 매트의 설치 · 공기압 관리 · 회수, 인원 배치와 대열 구성 방법을 익힙니다.</td>
                    </tr>
                    <tr>
                      <td>동작 변형과 큐잉</td>
                      <td>매트 · 리포머에서 쓰던 동작을 수상 환경에 맞게 변형하고 지도하는 언어를 훈련합니다.</td>
                    </tr>
                    <tr>
                      <td>수상 안전 관리</td>
                      <td>수심별 위험 요소, 물 공포가 있는 참가자 대응, 날씨 · 파도에 따른 일정 판단 기준.</td>
                    </tr>
                    <tr>
                      <td>단체 프로그램 운영</td>
                      <td>학교 스포츠클럽 · 기업 워크샵 · 여행객 원데이 등 대상별 프로그램 설계와 진행 실습.</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h3 className="mt-5">교육 대상</h3>
              <div className="grid-2 mt-3">
                <div className="info-item">
                  <span className="info-icon"><Icon name="graduationCap" /></span>
                  <div className="info-content">
                    <h4>FMTA 지도자 과정 수료자</h4>
                    <p>기능성필라테스 지도자 과정을 이수한 분은 곧바로 수상 모듈로 이어집니다.</p>
                  </div>
                </div>
                <div className="info-item">
                  <span className="info-icon"><Icon name="userCheck" /></span>
                  <div className="info-content">
                    <h4>현직 필라테스 · 운동 지도자</h4>
                    <p>이미 현장에서 지도 중이며 수상 프로그램을 추가하고 싶은 분.</p>
                  </div>
                </div>
                <div className="info-item">
                  <span className="info-icon"><Icon name="handshake" /></span>
                  <div className="info-content">
                    <h4>지역 관광 · 레저 종사자</h4>
                    <p>해양 레포츠 시설이나 지역 관광 프로그램에 접목하려는 기관 담당자.</p>
                  </div>
                </div>
                <div className="info-item">
                  <span className="info-icon"><Icon name="building" /></span>
                  <div className="info-content">
                    <h4>기관 · 지자체 담당자</h4>
                    <p>지역 일자리 사업이나 주민 프로그램으로 도입을 검토하는 담당자.</p>
                  </div>
                </div>
              </div>

              <div className="info-box mt-4">
                <h4 className="info-box-title"><Icon name="calendar" /> 개설 안내</h4>
                <p>
                  플로팅 교육은 <strong>수상 환경이 확보되는 시즌에 맞춰 비정기적으로 개설</strong>됩니다.
                  개설 시기와 정원, 비용은 문의 시점에 따라 달라지므로
                  <a href={'tel:' + SITE.phone}> {SITE.phone}</a>로 상담해 주세요.
                  기관 · 단체 대상 위탁 교육과 외부 출강도 협의 가능합니다.
                </p>
              </div>

              <div className="info-box mt-4" style={{ textAlign: 'center' }}>
                <h4>먼저 체험해보시겠어요?</h4>
                <p>지도자 과정 전에 프로그램을 직접 경험해보시길 권합니다.</p>
                <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                  <Link to="/floating" className="btn btn-primary">플로팅 온 더 블루</Link>
                  <Link to="/education/functional-pilates" className="btn btn-secondary">기능성필라테스 과정</Link>
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
