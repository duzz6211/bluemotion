import Icon from '../../components/Icon/Icon'
import HeroSection from '../../components/HeroSection/HeroSection'
import PageSidebar from '../../components/Sidebar/PageSidebar'
import { SITE } from '../../data/site'

/* 네이버 플레이스 기준 좌표 (블루모션트레이닝) */
const MAP_EMBED =
  'https://map.naver.com/p/entry/place/1091289673?placePath=%2Fhome'

export default function BluemotionLocation() {
  return (
    <>
      <HeroSection
        title="오시는길"
        subtitle="울진군 북면 장터길 51-4 · 북면 119안전센터 바로 옆"
        size="sm"
        breadcrumb={[
          { label: '홈', to: '/' },
          { label: '블루모션트레이닝센터', to: '/bluemotion' },
          { label: '오시는길' },
        ]}
      />

      <section className="section">
        <div className="container">
          <div className="content-with-sidebar">
            <main className="main-content">
              <div className="info-grid">
                <div className="info-item">
                  <span className="info-icon"><Icon name="mapPin" /></span>
                  <div className="info-content">
                    <h4>주소</h4>
                    <p>
                      도로명 : {SITE.roadAddress}<br />
                      지번 : {SITE.lotAddress}
                    </p>
                  </div>
                </div>
                <div className="info-item">
                  <span className="info-icon"><Icon name="phone" /></span>
                  <div className="info-content">
                    <h4>전화</h4>
                    <p><a href={'tel:' + SITE.phone}>{SITE.phone}</a></p>
                  </div>
                </div>
                <div className="info-item">
                  <span className="info-icon"><Icon name="clock" /></span>
                  <div className="info-content">
                    <h4>운영</h4>
                    <p>{SITE.hours}<br />{SITE.hoursNote}</p>
                  </div>
                </div>
                <div className="info-item">
                  <span className="info-icon"><Icon name="car" /></span>
                  <div className="info-content">
                    <h4>주차</h4>
                    <p>1층 단독건물로 건물 앞 자체 주차 공간을 이용하실 수 있습니다.</p>
                  </div>
                </div>
              </div>

              <h3 className="mt-5">지도</h3>
              <p>
                아래 버튼을 누르면 네이버 지도에서 &lsquo;블루모션트레이닝&rsquo;으로 바로 길찾기가 가능합니다.
              </p>
              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginTop: '1rem' }}>
                <a
                  className="btn btn-primary"
                  href={SITE.mapUrl}
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <Icon name="mapPin" /> 네이버 지도로 길찾기
                </a>
                <a
                  className="btn btn-secondary"
                  href={MAP_EMBED}
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <Icon name="externalLink" /> 플레이스 상세보기
                </a>
              </div>

              <h3 className="mt-5">찾아오시는 길</h3>
              <div className="info-box mt-3">
                <h4 className="info-box-title"><Icon name="crosshair" /> 주요 랜드마크</h4>
                <ul>
                  <li><strong>북면 119안전센터 바로 옆</strong> 건물입니다.</li>
                  <li>부구해변이 센터 바로 앞에 있습니다. 해변 방향에서 장터길로 진입하세요.</li>
                  <li>한국수력원자력 한울본부(발전소)와 가까운 부구리 시내 구역입니다.</li>
                </ul>
              </div>

              <div className="grid-2 mt-3">
                <div className="info-box">
                  <h4 className="info-box-title"><Icon name="car" /> 자가용</h4>
                  <p>
                    7번 국도(동해대로)를 이용해 울진 북면 부구리로 진입한 뒤,
                    북면 119안전센터를 기준으로 장터길로 들어오시면 됩니다.
                    삼척 · 동해 방향과 울진읍 · 영덕 방향 양쪽에서 접근하기 좋습니다.
                  </p>
                </div>
                <div className="info-box">
                  <h4 className="info-box-title"><Icon name="bus" /> 대중교통</h4>
                  <p>
                    부구터미널(부구 시외 · 농어촌버스 정류장)에서 도보로 이동 가능한 거리입니다.
                    버스 시간과 정류장 위치는 방문 전 전화로 문의해 주시면 안내드리겠습니다.
                  </p>
                </div>
              </div>

              <div className="info-box mt-4">
                <h4 className="info-box-title"><Icon name="handshake" /> 함께 이용하는 시설</h4>
                <p>
                  플로팅 온 더 블루 프로그램의 실내 세션은
                  <strong> 울진해양레포츠센터(경상북도 울진군 매화면 오산항길 59)</strong>를 대관해 진행합니다.
                  프로그램별로 집합 장소가 다르므로 예약 시 안내에 따라 이동해 주세요.
                </p>
              </div>

              <div className="info-box mt-4" style={{ textAlign: 'center' }}>
                <h4>방문 상담은 언제든 환영합니다</h4>
                <p>도착이 어려우시면 전화 주세요. 위치를 직접 안내해 드리겠습니다.</p>
                <a href={'tel:' + SITE.phone} className="btn btn-primary">{SITE.phone}</a>
              </div>
            </main>

            <PageSidebar menu="bluemotion" />
          </div>
        </div>
      </section>
    </>
  )
}
