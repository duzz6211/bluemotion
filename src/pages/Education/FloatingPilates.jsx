import { Link } from 'react-router-dom'
import Icon from '../../components/Icon/Icon'
import HeroSection from '../../components/HeroSection/HeroSection'
import PageSidebar from '../../components/Sidebar/PageSidebar'
import { SITE } from '../../data/site'

export default function FloatingPilates() {
  return (
    <>
      <HeroSection
        title="플로팅필라테스"
        subtitle="물 위에서 가르치기 위한 지도자 과정"
        size="sm"
        breadcrumb={[
          { label: '홈', to: '/' },
          { label: '교육과정', to: '/education' },
          { label: '플로팅필라테스' },
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

              <h3>지면과 물 위는 다릅니다</h3>
              <p>
                플로팅 매트 위에서는 지지면이 계속 흔들립니다. 같은 동작이라도 개입하는 근육과
                위험 구간이 달라지고, 큐잉과 보조 방법도 바뀌어야 합니다.
                여기에 수상 환경의 안전 관리가 더해지므로, 플로팅 필라테스는
                <strong> 기존 지도 역량 위에 얹는 별도의 과정</strong>으로 다룹니다.
              </p>

              <h3 className="mt-5">과정 구성</h3>
              <div className="table-wrapper mt-3">
                <table className="table">
                  <thead>
                    <tr><th>모듈</th><th>내용</th></tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>부력과 움직임</td>
                      <td>불안정 지지면에서 일어나는 자세 조절 전략과 코어 반응. 지면 운동과의 차이를 이해합니다.</td>
                    </tr>
                    <tr>
                      <td>플로팅 매트 운용</td>
                      <td>고래 형상 매트의 설치 · 공기압 관리 · 회수, 인원 배치와 대열 구성.</td>
                    </tr>
                    <tr>
                      <td>동작 변형 · 큐잉</td>
                      <td>매트 · 리포머 동작을 수상 환경에 맞게 변형하고 지도하는 언어를 훈련합니다.</td>
                    </tr>
                    <tr>
                      <td>수상 안전 관리</td>
                      <td>수심별 위험 요소, 물 공포가 있는 참가자 대응, 날씨 · 파도에 따른 일정 판단.</td>
                    </tr>
                    <tr>
                      <td>프로그램 운영</td>
                      <td>학교 단체 · 기업 워크샵 · 여행객 원데이 등 대상별 설계와 진행 실습.</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h3 className="mt-5">실습 환경</h3>
              <div className="grid-2 mt-3">
                <div className="info-item">
                  <span className="info-icon"><Icon name="building" /></span>
                  <div className="info-content">
                    <h4>울진해양레포츠센터</h4>
                    <p>5m 풀장을 대관해 통제된 환경에서 기본 운용을 익힙니다.</p>
                  </div>
                </div>
                <div className="info-item">
                  <span className="info-icon"><Icon name="waves" /></span>
                  <div className="info-content">
                    <h4>부구해변</h4>
                    <p>실제 바다에서 파도와 조류를 고려한 진행을 실습합니다.</p>
                  </div>
                </div>
                <div className="info-item">
                  <span className="info-icon"><Icon name="dumbbell" /></span>
                  <div className="info-content">
                    <h4>고래 아홉 마리</h4>
                    <p>단체 규모의 실습이 가능한 플로팅 매트를 보유하고 있습니다.</p>
                  </div>
                </div>
                <div className="info-item">
                  <span className="info-icon"><Icon name="userCheck" /></span>
                  <div className="info-content">
                    <h4>운영 경험 공유</h4>
                    <p>실제 프로그램을 설계 · 운영한 경험을 그대로 전달합니다.</p>
                  </div>
                </div>
              </div>

              <h3 className="mt-5">교육 대상</h3>
              <div className="info-box mt-3">
                <ul>
                  <li>FMTA 기능성필라테스 지도자 과정 수료자</li>
                  <li>현직 필라테스 · 운동 지도자로서 수상 프로그램을 추가하려는 분</li>
                  <li>해양 레포츠 · 지역 관광 프로그램 종사자</li>
                  <li>지역 일자리 사업이나 주민 프로그램 도입을 검토하는 기관 담당자</li>
                </ul>
              </div>

              <div className="info-box mt-4">
                <h4 className="info-box-title"><Icon name="calendar" /> 개설 안내</h4>
                <p>
                  플로팅 교육은 <strong>수상 환경이 확보되는 시즌에 맞춰 비정기적으로 개설</strong>됩니다.
                  개설 시기 · 정원 · 비용은 문의 시점에 따라 달라지므로 상담해 주세요.
                  기관 · 단체 대상 위탁 교육과 외부 출강도 협의 가능합니다.
                </p>
              </div>

              <div className="info-box mt-4" style={{ textAlign: 'center' }}>
                <h4>먼저 직접 타보시길 권합니다</h4>
                <p>프로그램을 경험해본 뒤에 과정을 결정하셔도 늦지 않습니다.</p>
                <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                  <Link to="/floating" className="btn btn-primary">플로팅 온 더 블루</Link>
                  <a href={'tel:' + SITE.phone} className="btn btn-secondary">{SITE.phone}</a>
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
