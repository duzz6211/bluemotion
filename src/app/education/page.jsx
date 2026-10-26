import Layout from '../../components/Layout'
import { Img, Reveal, Head, PageHero, Todo } from '../../components/ui'
import { img, SITE } from '../../site'
import { pageMeta } from '../../seo'

export const metadata = pageMeta({
  path: '/education',
  title: '교육과정 | 기능성 필라테스·플로팅 필라테스 지도자 과정 (FMTA)',
  description: 'FMTA 지도자 교육과정. 기능성 필라테스 지도자 과정, 플로팅 필라테스 지도자 과정. 물리치료사 원장 직강, 이론과 실기가 연결되는 교육. 등록 민간자격 제2023-004136호.',
})

const sections = [{ id: 'courses', label: '자격 과정' }, { id: 'philosophy', label: '교육 철학' }, { id: 'benefits', label: '교육생 혜택' }, { id: 'license-info', label: '민간자격 안내' }]

export default function Page() {
  return (
    <Layout sections={sections} hero={<PageHero eyebrow="EDUCATION" title="교육과정" text="움직임을 이해하고 지도하는 FMTA 지도자 과정" />}>
      <section className="section" id="courses">
        <div className="container">
          <Head eyebrow="COURSES" title="자격 과정" />
          <div className="grid grid-2">
            <Reveal className="card">
              <div className="media wide"><Img src={img('course-pilates.webp')} alt="기능성 필라테스 지도자 과정" /></div>
              <span className="tag">COURSE 1</span>
              <h3>기능성 필라테스 지도자 과정</h3>
              <p>움직임 이해와 분석을 바탕으로 한 필라테스 지도 과정입니다.</p>
            </Reveal>
            <Reveal className="card">
              <div className="media wide"><Img src={img('course-floating.webp')} alt="플로팅 필라테스 지도자 과정" /></div>
              <span className="tag">COURSE 2</span>
              <h3>플로팅 필라테스 지도자 과정</h3>
              <p>부력과 플로팅 매트를 활용한 필라테스 지도 과정입니다.</p>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section alt" id="philosophy">
        <div className="container">
          <Head eyebrow="PHILOSOPHY" title="교육 철학" />
          <div className="grid grid-3">
            <Reveal className="card"><h3>물리치료사 원장 직강</h3><p>물리치료사 출신 원장이 직접 가르칩니다.</p></Reveal>
            <Reveal className="card"><h3>이론과 실기의 연결</h3><p>배운 이론을 실기에서 바로 확인하는 교육 과정입니다.</p></Reveal>
            <Reveal className="card"><h3>이해·분석·연구·연결</h3><p>움직임을 이해하고 분석하고 연구하고 연결하는 훈련을 합니다.</p></Reveal>
          </div>
        </div>
      </section>

      <section className="section" id="benefits">
        <div className="container">
          <Head eyebrow="BENEFITS" title="교육생 혜택" />
          <ul className="checks benefit-list">
            <li>그룹수업 레슨권 제공</li>
            <li>자율 연습 공간 제공</li>
            <li>멘토링 시스템</li>
            <li>실제 수업 관찰과 참여</li>
            <li>지속적인 교육과 세미나</li>
          </ul>
          <p><Todo>[고객 확인 필요] 혜택별 제공 조건·횟수</Todo></p>
        </div>
      </section>

      <section className="section alt" id="license-info">
        <div className="container">
          <Head eyebrow="LICENSE" title="민간자격 안내" />
          <div className="table-wrap">
            <table className="info">
              <tbody>
                <tr><th>자격 구분</th><td>{SITE.license}</td></tr>
                <tr><th>자격관리기관</th><td><Todo>[고객 제공 필요]</Todo></td></tr>
                <tr><th>교육 비용</th><td><Todo>[고객 제공 필요]</Todo></td></tr>
                <tr><th>환불 안내</th><td><Todo>[고객 제공 필요]</Todo></td></tr>
                <tr><th>교육 기간·일정</th><td><Todo>[고객 제공 필요]</Todo></td></tr>
              </tbody>
            </table>
          </div>
          <div className="btn-row"><a className="btn btn-primary" href={SITE.phoneHref}>교육 문의 {SITE.phone}</a></div>
        </div>
      </section>
    </Layout>
  )
}
