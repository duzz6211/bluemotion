import Layout from '../../components/Layout'
import { Icon } from '../../components/icons'
import { Img, Reveal, Head, PageHero, Todo, Gallery } from '../../components/ui'
import { img, SITE, MAP } from '../../site'
import { pageMeta } from '../../seo'

export const metadata = pageMeta({
  path: '/center',
  title: '블루모션트레이닝센터 | 울진 필라테스 센터 · 시설·운영·오시는 길',
  description: '울진 필라테스 센터 블루모션트레이닝센터. 물리치료사 출신 원장 직강, 60평 단독 건물, 리포머·바렐·체어·캐딜락·TRX. 평일 09:00~22:00 사전 예약제, 경북 울진군 북면 장터길 51-4.',
})

const sections = [{ id: 'about', label: '센터·원장 소개' }, { id: 'facility', label: '시설·기구' }, { id: 'hours', label: '운영 안내' }, { id: 'location', label: '오시는 길' }]
const gear = ['리포머 (Reformer)', '바렐 (Barrel)', '체어 (Chair)', '캐딜락 (Cadillac)', 'TRX Training Zone']

export default function Page() {
  return (
    <Layout sections={sections} hero={<PageHero eyebrow="BLUEMOTION TRAINING CENTER" title="블루모션트레이닝센터" text="울진 바다 가까이에서 움직임을 배우는 필라테스·해양 웰니스 센터" />}>
      <section className="section" id="about">
        <div className="container">
          <div className="split">
            <Reveal className="media"><Img src={img('center.webp')} alt="블루모션트레이닝센터 내부" /></Reveal>
            <Reveal>
              <Head eyebrow="ABOUT" title="센터 소개" />
              <p>블루모션트레이닝센터는 60평 단독 건물에서 소그룹과 개인 레슨을 운영하는 울진의 필라테스 센터입니다. 센터 수업과 함께 플로팅·비치 필라테스 같은 해양 웰니스 프로그램도 진행합니다.</p>
            </Reveal>
          </div>
          <div className="split reverse" style={{ marginTop: 56 }}>
            <Reveal className="media"><Img src={img('director.webp')} alt="대표 원장" /></Reveal>
            <Reveal>
              <span className="eyebrow">DIRECTOR</span>
              <h3>대표 원장 소개</h3>
              <p>물리치료사 출신 원장이 체형 분석과 움직임 테스트를 바탕으로 수업을 직접 지도합니다.</p>
              <p><Todo>[고객 제공 필요] 대표 이름·직함·약력, 인사말, 사진</Todo></p>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section alt" id="facility">
        <div className="container split">
          <Gallery kind="facility" />
          <div>
            <Head eyebrow="FACILITY" title="시설·기구" text="60평 단독 건물, 소규모 밀착 레슨에 맞춘 공간입니다." />
            <div className="grid grid-2">
              {gear.map((g) => <Reveal className="card" key={g}><h3>{g}</h3></Reveal>)}
              <Reveal className="card"><h3>무료 주차</h3></Reveal>
            </div>
          </div>
        </div>
      </section>

      <section className="section" id="hours">
        <div className="container">
          <Head eyebrow="INFORMATION" title="운영 안내" />
          <div className="table-wrap rounded">
            <table className="info">
              <tbody>
                <tr><th>운영 시간</th><td>평일 09:00~22:00</td></tr>
                <tr><th>휴무</th><td>토·일·공휴일</td></tr>
                <tr><th>예약</th><td>100% 사전 예약제 (전화·문자 문의)</td></tr>
                <tr><th>문의</th><td><a href={SITE.phoneHref}>{SITE.phone}</a></td></tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="section alt" id="location">
        <div className="container">
          <Head eyebrow="LOCATION" title="오시는 길" text={`${SITE.address}`} />
          <div className="split">
            <Reveal className="map"><iframe src={MAP.embed} title="블루모션트레이닝센터 위치 지도" loading="lazy" referrerPolicy="no-referrer-when-downgrade" /></Reveal>
            <Reveal>
              <ul className="checks star">
                <li>경상북도 울진군 북면 장터길 51-4</li>
                <li>북면 119안전센터 옆</li>
                <li>건물 앞 대형 주차 공간 무료</li>
              </ul>
              <div className="btn-row map-btns" style={{ marginTop: 20 }}>
                <a className="btn btn-line btn-ico" href={MAP.naver} target="_blank" rel="noopener noreferrer">{Icon.naverMap}네이버지도 열기</a>
                <a className="btn btn-line btn-ico" href={MAP.kakao} target="_blank" rel="noopener noreferrer">{Icon.kakaoMap}카카오 지도 열기</a>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </Layout>
  )
}
