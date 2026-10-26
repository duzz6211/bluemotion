import Layout from '../../components/Layout'
import { Img, Reveal, Head, PageHero, Gallery, Videos } from '../../components/ui'
import { img } from '../../site'
import { pageMeta } from '../../seo'

export const metadata = pageMeta({
  path: '/floating',
  title: '플로팅온더블루 | 울진 플로팅 필라테스 · 고래 플로팅매트',
  description: '자연과 하나 되는 건강한 몸. 고래 플로팅매트에서 즐기는 울진 플로팅 필라테스. 누구나 참여 가능, 적정 시즌 5~10월, 부력을 활용한 플로팅 매트.',
})

const sections = [{ id: 'intro', label: '프로그램 소개' }, { id: 'info', label: '진행 안내' }, { id: 'gallery', label: '현장 사진·영상' }]

export default function Page() {
  return (
    <Layout sections={sections} hero={<PageHero eyebrow="FLOATING ON THE BLUE" title="플로팅온더블루" text="자연과 하나 되는 건강한 몸" />}>
      <section className="section" id="intro">
        <div className="container split">
          <Reveal className="media"><Img src={img('floating-1.webp')} alt="고래 플로팅매트 필라테스" /></Reveal>
          <Reveal>
            <Head eyebrow="INTRO" title="프로그램 소개" />
            <p className="quote">“자연과 하나 되는 건강한 몸!<br />고래 플로팅매트에서 필라테스로 다져보는 내 몸”</p>
            <p>물 위에서 흔들리는 매트를 중심으로 몸 전체를 사용하는 필라테스입니다. 부력을 활용해 균형과 코어를 사용하는 새로운 경험을 합니다.</p>
          </Reveal>
        </div>
      </section>

      <section className="section alt" id="info">
        <div className="container">
          <Head eyebrow="INFORMATION" title="진행 안내" />
          <div className="grid grid-3">
            <Reveal className="card"><span className="tag">대상</span><h3>누구나</h3><p>물이 있는 곳 어디든 진행할 수 있습니다.</p></Reveal>
            <Reveal className="card"><span className="tag">시즌</span><h3>5월 ~ 10월</h3><p>적정 시즌에 운영합니다.</p></Reveal>
            <Reveal className="card"><span className="tag">장비</span><h3>플로팅 매트</h3><p>부력을 활용한 플로팅 매트를 사용합니다.</p></Reveal>
          </div>
        </div>
      </section>

      <section className="section" id="gallery">
        <div className="container">
          <Head eyebrow="GALLERY" title="현장 사진·영상" />
          <Gallery kind="floating" />
          <Videos kind="floating" />
        </div>
      </section>
    </Layout>
  )
}
