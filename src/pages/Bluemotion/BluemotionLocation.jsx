import { Link, useLocation } from 'react-router-dom'
import Icon from '../../components/Icon/Icon'
import HeroSection from '../../components/HeroSection/HeroSection'

export default function BluemotionLocation() {
  const location = useLocation()

  return (
    <>
      <HeroSection
        title="오시는길/정보"
        subtitle="블루모션트레이닝 센터 위치 및 이용 정보"
        size="sm"
        breadcrumb={[
          { label: '홈', to: '/' },
          { label: '블루모션트레이닝', to: '/bluemotion' },
          { label: '오시는길/정보' },
        ]}
      />

      <section className="section">
        <div className="container">
          <div className="content-with-sidebar">
            <main className="main-content">
              {/* 주소 및 지도 */}
              <h3>오시는 길</h3>
              <div className="info-box mb-4">
                <div className="info-item">
                  <span className="info-icon"><Icon name="mapPin" /></span>
                  <div className="info-text">
                    <strong>주소</strong>
                    <p>경상북도 울진군 울진읍 (상세주소)</p>
                  </div>
                </div>
              </div>

              <div className="placeholder-image mb-4" style={{ height: '400px', borderRadius: '12px' }}>
                [지도 영역 - 카카오맵/네이버맵 연동 예정]
              </div>

              {/* 교통편 안내 */}
              <h3 className="mt-4">교통편 안내</h3>
              <div className="grid-2 mb-4">
                <div className="info-box">
                  <h4 className="info-box-title"><Icon name="car" /> 자가용</h4>
                  <ul>
                    <li><strong>서울 방면:</strong> 중앙고속도로 → 영덕IC → 7번 국도 → 울진 방면 약 40분</li>
                    <li><strong>부산 방면:</strong> 경부고속도로 → 울진IC → 울진읍 방면 약 20분</li>
                    <li><strong>대구 방면:</strong> 중앙고속도로 → 영덕IC → 7번 국도 → 울진 방면 약 50분</li>
                  </ul>
                </div>
                <div className="info-box">
                  <h4 className="info-box-title"><Icon name="bus" /> 대중교통</h4>
                  <ul>
                    <li><strong>시외버스:</strong> 울진시외버스터미널 하차 → 도보 약 10분</li>
                    <li><strong>시내버스:</strong> 울진읍 방면 시내버스 → 울진읍사무소 정류장 하차</li>
                    <li><strong>KTX:</strong> 울진역(예정) → 택시 약 10분</li>
                  </ul>
                </div>
              </div>

              {/* 운영 정보 */}
              <h3 className="mt-4">운영 정보</h3>
              <div className="table-responsive mb-4">
                <table className="table">
                  <tbody>
                    <tr>
                      <th style={{ width: '30%' }}><Icon name="clock" /> 운영시간</th>
                      <td>
                        평일 09:00 - 21:00<br/>
                        토요일 09:00 - 18:00<br/>
                        일요일/공휴일 휴무
                      </td>
                    </tr>
                    <tr>
                      <th><Icon name="phone" /> 전화</th>
                      <td>054-XXX-XXXX</td>
                    </tr>
                    <tr>
                      <th><Icon name="mail" /> 이메일</th>
                      <td>info@bluemotion.co.kr</td>
                    </tr>
                    <tr>
                      <th><Icon name="car" /> 주차</th>
                      <td>건물 내 무료 주차장 이용 가능 (약 20대 주차 가능)</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* 편의 시설 */}
              <h3 className="mt-4">편의 시설</h3>
              <div className="grid-4 mb-4">
                <div className="card text-center">
                  <div className="card-body">
                    <span className="feature-icon" style={{ fontSize: '2rem' }}><Icon name="car" /></span>
                    <h4 className="card-title">주차장</h4>
                    <p className="card-text">무료 주차</p>
                  </div>
                </div>
                <div className="card text-center">
                  <div className="card-body">
                    <span className="feature-icon" style={{ fontSize: '2rem' }}><Icon name="user" /></span>
                    <h4 className="card-title">탈의실</h4>
                    <p className="card-text">남녀 분리</p>
                  </div>
                </div>
                <div className="card text-center">
                  <div className="card-body">
                    <span className="feature-icon" style={{ fontSize: '2rem' }}><Icon name="smile" /></span>
                    <h4 className="card-title">휴게 공간</h4>
                    <p className="card-text">음료 제공</p>
                  </div>
                </div>
                <div className="card text-center">
                  <div className="card-body">
                    <span className="feature-icon" style={{ fontSize: '2rem' }}><Icon name="shield" /></span>
                    <h4 className="card-title">개인 보관함</h4>
                    <p className="card-text">귀중품 보관</p>
                  </div>
                </div>
              </div>
            </main>

            <aside className="sidebar">
              <nav className="sidebar-menu">
                <h3 className="sidebar-title">블루모션트레이닝</h3>
                <Link to="/bluemotion" className={`sidebar-link${location.pathname === '/bluemotion' ? ' active' : ''}`}>시설소개</Link>
                <Link to="/bluemotion/lesson" className={`sidebar-link${location.pathname === '/bluemotion/lesson' ? ' active' : ''}`}>레슨안내</Link>
                <Link to="/bluemotion/location" className={`sidebar-link${location.pathname === '/bluemotion/location' ? ' active' : ''}`}>오시는길/정보</Link>
                <Link to="/bluemotion/vision" className={`sidebar-link${location.pathname === '/bluemotion/vision' ? ' active' : ''}`}>비전</Link>
              </nav>
              <div className="info-box mt-3">
                <h4 className="info-box-title">문의</h4>
                <dl>
                  <dt><Icon name="phone" /> 전화</dt><dd>054-XXX-XXXX</dd>
                  <dt><Icon name="clock" /> 운영시간</dt><dd>평일 09:00-21:00</dd>
                </dl>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </>
  )
}
