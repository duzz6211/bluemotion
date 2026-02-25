import { Link, useLocation } from 'react-router-dom'
import Icon from '../../components/Icon/Icon'
import HeroSection from '../../components/HeroSection/HeroSection'

export default function FloatingIndex() {
  const location = useLocation()

  return (
    <>
      <HeroSection
        title="플로팅 온 더 블루"
        subtitle="바다와 자연 속에서 즐기는 특별한 움직임 체험"
        size="sm"
        breadcrumb={[
          { label: '홈', to: '/' },
          { label: '플로팅온더블루', to: '/floating' },
          { label: '프로그램 소개' },
        ]}
      />

      <section className="section">
        <div className="container">
          <div className="content-with-sidebar">
            <main className="main-content">
              <h3>플로팅 온 더 블루란?</h3>
              <p>
                플로팅 온 더 블루는 울진의 아름다운 바다와 자연환경을 활용한 특별한 수중·해변 체험 프로그램입니다.
                부력을 활용한 이완과 움직임, 수중에서의 필라테스, 스노클링, 해변 운동 등
                다양한 활동을 통해 일상에서 벗어나 몸과 마음의 균형을 찾아갑니다.
              </p>

              {/* 프로그램 소개 */}
              <h3 className="mt-4">프로그램 소개</h3>
              <div className="grid-2 mb-4">
                <div className="card">
                  <div className="card-image placeholder-image">[플로팅 요가 이미지]</div>
                  <div className="card-body">
                    <span className="program-badge floating">수중</span>
                    <h4 className="card-title">플로팅 요가</h4>
                    <p className="card-text">
                      수면 위 플로팅 보드에서 진행하는 요가 프로그램입니다. 부력을 활용하여
                      관절에 무리 없이 깊은 이완과 스트레칭을 경험할 수 있습니다.
                      파도 소리와 함께하는 명상으로 심신 안정 효과가 뛰어납니다.
                    </p>
                    <ul>
                      <li>소요시간: 약 60분</li>
                      <li>정원: 최대 8인</li>
                      <li>난이도: 초급</li>
                    </ul>
                  </div>
                </div>
                <div className="card">
                  <div className="card-image placeholder-image">[수중 필라테스 이미지]</div>
                  <div className="card-body">
                    <span className="program-badge floating">수중</span>
                    <h4 className="card-title">수중 필라테스</h4>
                    <p className="card-text">
                      물속에서 진행하는 필라테스 프로그램입니다. 수중의 저항을 활용하여
                      근력 강화와 유연성 향상을 동시에 달성할 수 있으며,
                      관절 부담이 적어 재활 목적으로도 효과적입니다.
                    </p>
                    <ul>
                      <li>소요시간: 약 50분</li>
                      <li>정원: 최대 6인</li>
                      <li>난이도: 초~중급</li>
                    </ul>
                  </div>
                </div>
                <div className="card">
                  <div className="card-image placeholder-image">[스노클링 이미지]</div>
                  <div className="card-body">
                    <span className="program-badge floating">체험</span>
                    <h4 className="card-title">스노클링 체험</h4>
                    <p className="card-text">
                      울진 바다의 맑은 수중 세계를 탐험하는 스노클링 프로그램입니다.
                      안전 교육 후 전문 가이드와 함께 진행되며,
                      초보자도 안전하게 참여할 수 있습니다.
                    </p>
                    <ul>
                      <li>소요시간: 약 90분</li>
                      <li>정원: 최대 10인</li>
                      <li>난이도: 초급 (수영 가능자)</li>
                    </ul>
                  </div>
                </div>
                <div className="card">
                  <div className="card-image placeholder-image">[비치 무브먼트 이미지]</div>
                  <div className="card-body">
                    <span className="program-badge floating">해변</span>
                    <h4 className="card-title">비치 무브먼트</h4>
                    <p className="card-text">
                      해변에서 진행하는 움직임 프로그램입니다. 모래사장 위에서의 맨발 운동,
                      해변 요가, 기능성 움직임 훈련 등 자연과 함께하는
                      활력 넘치는 프로그램입니다.
                    </p>
                    <ul>
                      <li>소요시간: 약 60분</li>
                      <li>정원: 최대 15인</li>
                      <li>난이도: 전 연령 가능</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* 프로그램 특징 */}
              <h3 className="mt-4">프로그램 특징</h3>
              <div className="grid-3 mb-4">
                <div className="info-box text-center">
                  <span className="feature-icon" style={{ fontSize: '2rem' }}><Icon name="waves" /></span>
                  <h4>자연 속 체험</h4>
                  <p>울진의 청정 바다와 해변에서 자연과 하나되는 경험</p>
                </div>
                <div className="info-box text-center">
                  <span className="feature-icon" style={{ fontSize: '2rem' }}><Icon name="shield" /></span>
                  <h4>안전 관리</h4>
                  <p>전문 안전요원 상주, 안전 장비 완비, 사전 안전 교육 실시</p>
                </div>
                <div className="info-box text-center">
                  <span className="feature-icon" style={{ fontSize: '2rem' }}><Icon name="userCheck" /></span>
                  <h4>전문 지도</h4>
                  <p>FMTA 공인 지도자가 직접 프로그램을 기획하고 진행</p>
                </div>
              </div>

              {/* 시즌 안내 */}
              <h3 className="mt-4">시즌 안내</h3>
              <div className="info-box mb-4">
                <div className="table-responsive">
                  <table className="table">
                    <thead>
                      <tr>
                        <th>구분</th>
                        <th>기간</th>
                        <th>운영 프로그램</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td><strong>메인 시즌</strong></td>
                        <td>5월 ~ 9월</td>
                        <td>플로팅 요가, 수중 필라테스, 스노클링, 비치 무브먼트 전 프로그램</td>
                      </tr>
                      <tr>
                        <td><strong>어깨 시즌</strong></td>
                        <td>4월, 10월</td>
                        <td>플로팅 요가, 비치 무브먼트 (날씨에 따라 변동)</td>
                      </tr>
                      <tr>
                        <td><strong>비수기</strong></td>
                        <td>11월 ~ 3월</td>
                        <td>실내 대체 프로그램 운영 (실내 수영장 수중 프로그램)</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* 예약 */}
              <div className="info-box mt-4" style={{ textAlign: 'center' }}>
                <h4>플로팅 온 더 블루 예약</h4>
                <p>특별한 자연 속 움직임 체험을 시작하세요.</p>
                <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                  <Link to="/shop/floating" className="btn btn-primary">예약하기</Link>
                  <Link to="/news/contact" className="btn btn-secondary">문의하기</Link>
                </div>
              </div>
            </main>

            <aside className="sidebar">
              <nav className="sidebar-menu">
                <h3 className="sidebar-title">플로팅온더블루</h3>
                <Link to="/floating" className={`sidebar-link${location.pathname === '/floating' ? ' active' : ''}`}>프로그램 소개</Link>
                <Link to="/floating/activity" className={`sidebar-link${location.pathname === '/floating/activity' ? ' active' : ''}`}>활동 갤러리</Link>
                <Link to="/floating/partners" className={`sidebar-link${location.pathname === '/floating/partners' ? ' active' : ''}`}>제휴 기관</Link>
                <Link to="/floating/vision" className={`sidebar-link${location.pathname === '/floating/vision' ? ' active' : ''}`}>비전</Link>
              </nav>
              <div className="info-box mt-3">
                <h4 className="info-box-title">시즌 안내</h4>
                <p>메인 시즌: 5월~9월</p>
                <p><Icon name="phone" /> 054-XXX-XXXX</p>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </>
  )
}
