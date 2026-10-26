import Layout from '../../components/Layout'
import { Img, Reveal, Head, PageHero, Gallery, Cases } from '../../components/ui'
import { Icon } from '../../components/icons'
import { img, SITE } from '../../site'
import { pageMeta } from '../../seo'

export const metadata = pageMeta({
  path: '/activities',
  title: '특별활동 | 비치 필라테스 · 기관 출강 필라테스 · 팀빌딩 워크숍',
  description: '파도 소리와 함께하는 비치 필라테스, 기업·기관·학교 대상 90분 팀빌딩·워크숍 출강 프로그램. 센터 방문 또는 출장 진행, 울진 기관 출강 필라테스 문의.',
})

const sections = [{ id: 'beach', label: '비치 필라테스' }, { id: 'teambuilding', label: '팀빌딩·워크숍·출강' }, { id: 'cases', label: '출강 이력·사례' }, { id: 'news', label: '최신 활동 소식' }]

export default function Page() {
  return (
    <Layout sections={sections} hero={<PageHero eyebrow="SPECIAL ACTIVITIES" title="특별활동" text="바다와 해변, 기관과 학교로 찾아가는 움직임 프로그램" />}>
      <section className="section" id="beach">
        <div className="container">
          <div className="split">
            <Gallery kind="beach" />
            <Reveal>
              <Head eyebrow="BEACH PILATES" title="비치 필라테스" />
              <p className="quote">“매트만 있으면 언제 어디서든 가능!<br />파도 소리와 함께하는 해변 필라테스”</p>
              <ul className="checks">
                <li><b>대상</b> 누구나 (대규모 수용 가능)</li>
                <li><b>시즌</b> 4~6월, 9~11월</li>
                <li><b>장소</b> 바다 인근, 모래사장, 해변 솔밭 등</li>
                <li><b>방식</b> 소도구와 매트를 활용한 야외 레슨</li>
              </ul>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section alt" id="teambuilding">
        <div className="container">
          <Head eyebrow="TEAM BUILDING" title="팀빌딩·워크숍·출강" text="90분간의 팀워크, 단합 및 건강한 추억 쌓기 프로그램" />
          <div className="grid grid-4">
            <Reveal className="card no-border"><span className="tag">대상</span><h3>기업·기관·학교</h3></Reveal>
            <Reveal className="card no-border"><span className="tag">장소</span><h3>센터 방문 또는 출장</h3></Reveal>
            <Reveal className="card no-border"><span className="tag">인원</span><h3>10명 내외</h3></Reveal>
            <Reveal className="card no-border"><span className="tag">시간</span><h3>90분</h3></Reveal>
          </div>
          <div style={{ maxWidth: 760, margin: '32px auto 0' }}><Gallery kind="group" /></div>
          <h3 style={{ margin: '40px 0 16px' }}>진행 흐름</h3>
          <ol className="steps no-border">
            <li><div><b>문의</b><span>전화·문자·이메일·카카오톡으로 문의해 주세요.</span></div></li>
            <li><div><b>일정·인원 협의</b><span>기관의 일정과 대상에 맞춰 협의합니다.</span></div></li>
            <li><div><b>진행</b><span>협의된 일정에 맞춰 프로그램을 진행합니다.</span></div></li>
          </ol>
          <div className="btn-row" style={{ justifyContent: 'center' }}><a className="btn btn-primary btn-ico btn-call btn-wide" href={SITE.phoneHref} aria-label="전화하기">{Icon.phone}전화하기</a><a className="btn btn-line no-border btn-ico btn-wide" href={`mailto:${SITE.email}`} aria-label="메일 보내기">{Icon.mail}메일 보내기</a></div>
        </div>
      </section>

      <section className="section" id="cases">
        <div className="container">
          <Head eyebrow="CASES" title="출강 이력·사례" />
          <Cases />
        </div>
      </section>

      <section className="section alt" id="news">
        <div className="container centered">
          <Head eyebrow="NEWS" title="최신 활동 소식" text="최신 활동은 블로그와 인스타그램에서 확인하세요." />
          <div className="btn-row" style={{ justifyContent: 'center' }}>
            <a className="btn btn-primary" href={SITE.blog} target="_blank" rel="noopener noreferrer">네이버 블로그</a>
            <a className="btn btn-line" href={SITE.instagram} target="_blank" rel="noopener noreferrer">인스타그램</a>
          </div>
        </div>
      </section>
    </Layout>
  )
}
