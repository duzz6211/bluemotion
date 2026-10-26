import Layout from '../components/Layout'
import { Img, Reveal, Cases, FlowLine } from '../components/ui'
import { Icon } from '../components/icons'
import { img, SITE } from '../site'
import { pageMeta, localBusiness } from '../seo'

export const metadata = pageMeta({
  path: '/',
  title: '울진 필라테스 블루모션 · FMTA | 울진 필라테스 센터, 비치·플로팅 필라테스',
  description: '경북 울진의 필라테스 센터 블루모션트레이닝센터와 기능적움직임트레이닝협회(FMTA). 물리치료사 출신 원장 직강, 소그룹·개인·임산부 필라테스, 플로팅·비치 필라테스, 기관 출강과 지도자 과정을 안내합니다.',
  ogDescription: '울진 바다와 기능적 움직임 과학을 결합한 필라테스·해양 웰니스 센터.',
})

const shortcuts = [
  { href: '/programs', image: 'private-lesson.webp', small: 'PROGRAMS', title: '프로그램', text: '소그룹·개인·임산부·키즈·시니어 레슨' },
  { href: '/floating', image: 'floating-2.webp', small: 'FLOATING ON THE BLUE', title: '플로팅온더블루', text: '고래 플로팅매트 위에서 하는 필라테스' },
  { href: '/activities', image: 'teambuilding-1.webp', small: 'SPECIAL', title: '특별활동', text: '비치 필라테스, 팀빌딩·워크숍·출강' },
  { href: '/education', image: 'course-pilates.webp', small: 'EDUCATION', title: '교육과정', text: '기능성·플로팅 필라테스 지도자 과정' },
]

const strengths = [
  ['01', '물리치료사 원장 직강', '물리치료사 출신 원장이 움직임을 분석하고 직접 지도합니다.'],
  ['02', '60평 단독 센터', '단독 건물에 리포머·바렐·체어·캐딜락·TRX 기구를 갖췄고, 건물 앞 대형 주차 공간은 무료입니다.'],
  ['03', '바다와 자연', '동해 바다, 해변, 부력을 수업에 담았습니다. 울진에서만 가능한 움직임 경험입니다.'],
]

const signature = [
  { href: '/floating', image: 'floating-1.webp', title: '플로팅온더블루', text: '고래 플로팅매트에서 필라테스로 다져보는 내 몸' },
  { href: '/activities#beach', image: 'beach-pilates-2.webp', title: '비치 필라테스', text: '파도 소리와 함께하는 해변 필라테스' },
  { href: '/programs#prenatal', image: 'maternity.webp', title: '스페셜 임산부', text: '주수에 맞춘 안전 케어, 임산부운동처방사 지도' },
]

export default function Home() {
  return (
    <Layout>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusiness) }} />
      <section className="lp-hero">
        <div className="hero-bg"><Img src={img('hero-sea.webp')} alt="" loading="eager" fetchPriority="high" fallback={img('floating-1.webp')} /></div>
        <div className="container">
          <h1>Move with the Blue<em>울진 바다와 함께</em></h1>
          <p className="lead">동해 바다와 기능적 움직임 과학이 만나는 곳. 물리치료사 출신 원장이 직접 지도하는 필라테스·해양 웰니스 센터, 블루모션트레이닝센터입니다.</p>
        </div>
      </section>

      <section className="lp-facts lp-facts-section">
        <div className="container">
          <div><b>물리치료사 원장 직강</b>움직임 분석 기반 지도</div>
          <div><b>60평 단독 센터</b>대형 무료 주차 공간</div>
          <div><b>바다와 자연</b>플로팅·비치 필라테스</div>
          <div><b>100% 사전 예약제</b>평일 09:00~22:00</div>
        </div>
      </section>

      <FlowLine>
      <section className="lp-section">
        <div className="container">
          <Reveal className="lp-head">
            <h2>QUICK LINKS</h2>
            <h3 className="lp-sub">바로가기</h3>
          </Reveal>
          <div className="lp-entries lp-entries-4">
            {shortcuts.map((e) => (
              <Reveal as="a" className="lp-entry" href={e.href} key={e.href}>
                <div className="media"><Img src={img(e.image)} alt="" /></div>
                <div className="in"><small>{e.small}</small><h3>{e.title}</h3><p>{e.text}</p></div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="lp-section lp-merit">
        <div className="container">
          <div className="lp-merit-card lp-dark">
            <Reveal className="lp-head">
              <h2>MERIT</h2>
              <h3 className="lp-sub">블루모션의 핵심 강점</h3>
            </Reveal>
            <div className="lp-points lp-points-3">
              {strengths.map(([num, title, text]) => (
                <Reveal className="lp-point" key={num}><span className="num">{num}</span><h3>{title}</h3><p>{text}</p></Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="lp-section">
        <div className="container">
          <Reveal className="lp-head">
            <h2>SIGNATURE</h2>
            <h3 className="lp-sub">시그니처 프로그램</h3>
          </Reveal>
          <div className="lp-entries">
            {signature.map((e) => (
              <Reveal as="a" className="lp-entry" href={e.href} key={e.title}>
                <div className="media"><Img src={img(e.image)} alt="" /></div>
                <div className="in"><h3>{e.title}</h3><p>{e.text}</p></div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="lp-section lp-cases">
        <div className="container">
          <Reveal className="lp-head">
            <h2>CASES</h2>
            <h3 className="lp-sub">관공서·학교·기업 출강 프로그램</h3>
            <p>팀워크와 단합, 건강한 추억을 쌓는 90분 프로그램을 진행합니다.</p>
          </Reveal>
          <Cases limit={3} />
          <div className="btn-row" style={{ justifyContent: "center" }}><a className="btn btn-line" href="/activities#cases">출강 이력 보기</a></div>
        </div>
      </section>

      <section className="lp-section" id="home-contact">
        <div className="container">
          <Reveal className="home-contact">
            <h2>CONTACT</h2>
            <h3 className="lp-sub">상담·출강 문의</h3>
            <p>전화·문자·이메일·카카오톡으로 문의해 주세요. 100% 사전 예약제로 운영됩니다.</p>
            <div className="btn-row" style={{ justifyContent: "center" }}><a className="btn btn-primary btn-ico btn-call btn-wide" href={SITE.phoneHref} aria-label="전화하기">{Icon.phone}전화하기</a><a className="btn btn-line btn-ico btn-wide" href={`mailto:${SITE.email}`} aria-label="메일 보내기">{Icon.mail}메일 보내기</a></div>
          </Reveal>
        </div>
      </section>
      </FlowLine>
    </Layout>
  )
}
