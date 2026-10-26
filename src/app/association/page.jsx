import Layout from '../../components/Layout'
import { Img, Reveal, Head, PageHero, Todo } from '../../components/ui'
import { img } from '../../site'
import { pageMeta } from '../../seo'

export const metadata = pageMeta({
  path: '/association',
  title: 'FMTA협회 | 기능적움직임트레이닝협회 · 울진 필라테스 지도자 양성',
  description: '기능적움직임트레이닝협회(FMTA, Functional Movement Training Association) 소개, 설립 이념, 등록 민간자격(등록번호 제2023-004136호) 정보를 안내합니다.',
})

const sections = [{ id: 'intro', label: '협회 소개' }, { id: 'philosophy', label: '설립 이념' }, { id: 'license', label: '자격 정보' }]

export default function Page() {
  return (
    <Layout sections={sections} hero={<PageHero eyebrow="FMTA ASSOCIATION" title="FMTA협회" text="기능적움직임트레이닝협회 (Functional Movement Training Association)" />}>
      <section className="section" id="intro">
        <div className="container split">
          <Reveal className="media"><Img src={img('course-pilates.webp')} alt="FMTA 협회 교육 장면" /></Reveal>
          <Reveal>
            <Head eyebrow="ABOUT" title="협회 소개" />
            <p><b>기능적움직임트레이닝협회(FMTA)</b>는 경북 울진의 블루모션트레이닝센터를 기반으로, 기능적 움직임을 이해하고 지도할 수 있는 지도자를 양성하는 협회입니다.</p>
            <p>물리치료사 출신 원장이 임상 중심의 움직임 지식을 바탕으로 교육을 이끌며, 센터와 협회가 함께 지역 주민과 국민의 건강 증진에 기여하고자 합니다.</p>
          </Reveal>
        </div>
      </section>

      <section className="section alt" id="philosophy">
        <div className="container">
          <Head eyebrow="PHILOSOPHY" title="설립 이념" text="울진의 자연환경과 임상 중심의 기능적 움직임 과학을 결합해 지역 주민과 국민의 건강을 증진합니다." />
          <div className="grid grid-3">
            <Reveal className="card no-border"><span className="tag">NATURE</span><h3>울진의 자연</h3><p>동해 바다, 해변, 부력을 운동 환경으로 활용합니다.</p></Reveal>
            <Reveal className="card no-border"><span className="tag">SCIENCE</span><h3>기능적 움직임 과학</h3><p>임상 중심의 움직임 이해를 바탕으로 몸을 분석하고 지도합니다.</p></Reveal>
            <Reveal className="card no-border"><span className="tag">HEALTH</span><h3>건강 증진</h3><p>지역 주민과 국민이 일상에서 건강하게 움직일 수 있도록 돕습니다.</p></Reveal>
          </div>
        </div>
      </section>

      <section className="section" id="license">
        <div className="container">
          <Head eyebrow="LICENSE" title="자격 정보" />
          <div className="table-wrap rounded">
            <table className="info">
              <tbody>
                <tr><th>구분</th><td>등록 민간자격</td></tr>
                <tr><th>등록번호</th><td>제2023-004136호</td></tr>
                <tr><th>자격 종류</th><td>기능성 필라테스 지도자 / 플로팅 필라테스 지도자 <Todo>[고객 확인 필요] 등록된 정식 자격명</Todo></td></tr>
                <tr><th>자격관리기관</th><td><Todo>[고객 제공 필요]</Todo></td></tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </Layout>
  )
}
