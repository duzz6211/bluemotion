import { Link } from 'react-router-dom'
import Icon from '../../components/Icon/Icon'
import HeroSection from '../../components/HeroSection/HeroSection'
import PageSidebar from '../../components/Sidebar/PageSidebar'
import { SITE } from '../../data/site'

const steps = [
  {
    step: 'STEP 01',
    title: '집합 · 오리엔테이션',
    desc: '울진해양레포츠센터에 모여 일정과 안전 수칙을 공유합니다. 고래 형상 플로팅 매트에 바람을 넣는 것부터 함께합니다. 단체 진행 시에는 2인 1조로 진행합니다.',
  },
  {
    step: 'STEP 02',
    title: '고래와 친해지기',
    desc: '지면에서 서서히 물 위로 옮겨가며 부력에 적응합니다. 수영을 못하거나 깊은 물이 무서운 분도 이 단계에서 대부분 긴장이 풀립니다.',
  },
  {
    step: 'STEP 03',
    title: '몸풀기 · 기본 동작',
    desc: '5m 풀장에서 흔들림에 맞춰 균형을 잡는 법을 익힙니다. 이상근 스트레칭처럼 물 위에서 효과가 커지는 동작부터 시작합니다.',
  },
  {
    step: 'STEP 04',
    title: '필라테스 동작 적용',
    desc: '사이드 플랭크, 티저 등 익숙한 필라테스 동작을 플로팅 매트 위에서 수행합니다. 약간의 흔들림이 코어를 계속 깨워둡니다.',
  },
  {
    step: 'STEP 05',
    title: '해양 세션 이동',
    desc: '오후에는 부구해변으로 이동합니다. 풀장보다 얕고 파도가 있어, 오전에 익힌 동작을 자연 조건에서 다시 수행합니다.',
  },
  {
    step: 'STEP 06',
    title: '마무리 · 정리',
    desc: '바다 위에 누워 호흡을 정리하며 마칩니다. 센터 앞 수돗가에서 모래를 씻고 정리한 뒤, 원하시면 실내 세션으로 이어집니다.',
  },
]

export default function FloatingProcess() {
  return (
    <>
      <HeroSection
        title="진행과정"
        subtitle="풀장에서 바다까지, 하루의 흐름"
        size="sm"
        breadcrumb={[
          { label: '홈', to: '/' },
          { label: '플로팅온더블루', to: '/floating' },
          { label: '진행과정' },
        ]}
      />

      <section className="section">
        <div className="container">
          <div className="content-with-sidebar">
            <main className="main-content">
              <p>
                플로팅 온 더 블루는 <strong>오전 수상 세션 → 오후 해양 세션</strong> 순으로 진행합니다.
                갑자기 바다로 나가지 않고, 통제된 풀장에서 충분히 적응한 뒤 실제 바다로 이동하는 구성이라
                물이 익숙하지 않은 분도 안전하게 참여할 수 있습니다.
              </p>

              <div className="timeline mt-4">
                {steps.map((item) => (
                  <div key={item.step} className="timeline-item">
                    <div className="timeline-year">{item.step}</div>
                    <div className="timeline-content">
                      <h4>{item.title}</h4>
                      <p>{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <h3 className="mt-5">안전 관리</h3>
              <div className="grid-2 mt-3">
                <div className="info-item">
                  <span className="info-icon"><Icon name="shieldCheck" /></span>
                  <div className="info-content">
                    <h4>빠지지 않는 매트</h4>
                    <p>고래 형상 플로팅 매트는 성인이 올라서도 가라앉지 않는 크기와 부력으로 제작했습니다.</p>
                  </div>
                </div>
                <div className="info-item">
                  <span className="info-icon"><Icon name="userCheck" /></span>
                  <div className="info-content">
                    <h4>전문 강사 동행</h4>
                    <p>블루모션 강사진이 전 세션에 함께합니다. 단체는 인솔자 선생님과 동행해 진행합니다.</p>
                  </div>
                </div>
                <div className="info-item">
                  <span className="info-icon"><Icon name="building" /></span>
                  <div className="info-content">
                    <h4>관리 시설 이용</h4>
                    <p>오전 세션은 울진해양레포츠센터를 정식 대관해 안전 관리가 되는 환경에서 진행합니다.</p>
                  </div>
                </div>
                <div className="info-item">
                  <span className="info-icon"><Icon name="waves" /></span>
                  <div className="info-content">
                    <h4>얕은 수심의 해양 세션</h4>
                    <p>부구해변 세션은 풀장보다 얕은 수심에서 진행하며, 파도 상황을 보고 일정을 조정합니다.</p>
                  </div>
                </div>
              </div>

              <h3 className="mt-5">준비물</h3>
              <div className="info-box mt-3">
                <ul>
                  <li>물에 젖어도 되는 운동복 또는 수영복 (반바지 · 래시가드 권장)</li>
                  <li>갈아입을 옷과 수건, 개인 세면도구</li>
                  <li>자외선 차단제, 시즌에 따라 방수 가능한 상의</li>
                  <li>모자와 굿즈는 프로그램에 따라 제공됩니다</li>
                </ul>
                <p className="mt-2">
                  센터 앞에 수돗가가 있어 모래를 씻고 정리한 뒤 이동하실 수 있습니다.
                </p>
              </div>

              <h3 className="mt-5">운영 시즌</h3>
              <p>
                여름 시즌을 중심으로 운영하지만, 11월 바다는 오히려 미지근해 늦가을 단체 프로그램도 진행합니다.
                날씨와 파도 상황에 따라 실내 세션으로 대체하거나 일정을 조정할 수 있으니
                단체 예약은 미리 상담해 주세요.
              </p>

              <div className="info-box mt-4" style={{ textAlign: 'center' }}>
                <h4>일정 문의</h4>
                <p>참여 인원과 희망 날짜를 알려주시면 가능한 일정을 안내드립니다.</p>
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
