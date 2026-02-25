import { Link, useLocation } from 'react-router-dom'
import Icon from '../../components/Icon/Icon'
import HeroSection from '../../components/HeroSection/HeroSection'

export default function FloatingPartners() {
  const location = useLocation()

  return (
    <>
      <HeroSection
        title="제휴 기관"
        subtitle="플로팅 온 더 블루 파트너십"
        size="sm"
        breadcrumb={[
          { label: '홈', to: '/' },
          { label: '플로팅온더블루', to: '/floating' },
          { label: '제휴 기관' },
        ]}
      />

      <section className="section">
        <div className="container">
          <div className="content-with-sidebar">
            <main className="main-content">
              <h3>제휴 기관 안내</h3>
              <p>
                플로팅 온 더 블루는 울진 지역 공공기관, 숙박시설, 관광 관련 기관들과
                다양한 파트너십을 맺고 있습니다. 제휴를 통해 더 풍성한 프로그램과
                혜택을 제공하고 있습니다.
              </p>

              {/* 공공기관 */}
              <h3 className="mt-4">공공기관 파트너</h3>
              <div className="grid-2 mb-4">
                <div className="card">
                  <div className="card-body">
                    <span className="feature-icon" style={{ fontSize: '2rem' }}><Icon name="building" /></span>
                    <h4 className="card-title">울진군청 관광과</h4>
                    <p className="card-text">
                      울진 웰니스 관광 활성화를 위한 협력 사업을 진행하고 있습니다.
                      관광과 연계한 프로그램 홍보 및 관광 패키지를 공동 개발합니다.
                    </p>
                    <span className="program-badge">협약 체결</span>
                  </div>
                </div>
                <div className="card">
                  <div className="card-body">
                    <span className="feature-icon" style={{ fontSize: '2rem' }}><Icon name="building" /></span>
                    <h4 className="card-title">울진군 체육회</h4>
                    <p className="card-text">
                      지역 주민 건강 증진을 위한 업무협약을 체결했습니다.
                      체육 프로그램 연계 및 체육인 대상 특별 프로그램을 운영합니다.
                    </p>
                    <span className="program-badge">업무협약</span>
                  </div>
                </div>
                <div className="card">
                  <div className="card-body">
                    <span className="feature-icon" style={{ fontSize: '2rem' }}><Icon name="heart" /></span>
                    <h4 className="card-title">울진군 보건소</h4>
                    <p className="card-text">
                      지역 주민 건강 관리 프로그램 연계 및 건강증진 사업을
                      협력하여 운영하고 있습니다.
                    </p>
                    <span className="program-badge">업무협약</span>
                  </div>
                </div>
                <div className="card">
                  <div className="card-body">
                    <span className="feature-icon" style={{ fontSize: '2rem' }}><Icon name="handshake" /></span>
                    <h4 className="card-title">울진 관광협회</h4>
                    <p className="card-text">
                      울진 관광 활성화를 위한 공동 프로모션과 관광 프로그램
                      연계 사업을 진행하고 있습니다.
                    </p>
                    <span className="program-badge">공동 프로모션</span>
                  </div>
                </div>
              </div>

              {/* 숙박 제휴 */}
              <h3 className="mt-4">숙박 제휴</h3>
              <div className="grid-3 mb-4">
                <div className="card">
                  <div className="card-image placeholder-image" style={{ height: '150px' }}>[숙소 이미지]</div>
                  <div className="card-body">
                    <h4 className="card-title">울진 관광호텔</h4>
                    <p className="card-text">숙박 + 플로팅 프로그램 패키지 할인</p>
                  </div>
                </div>
                <div className="card">
                  <div className="card-image placeholder-image" style={{ height: '150px' }}>[숙소 이미지]</div>
                  <div className="card-body">
                    <h4 className="card-title">울진 펜션 단지</h4>
                    <p className="card-text">가족 단위 숙박 + 체험 패키지</p>
                  </div>
                </div>
                <div className="card">
                  <div className="card-image placeholder-image" style={{ height: '150px' }}>[숙소 이미지]</div>
                  <div className="card-body">
                    <h4 className="card-title">울진 게스트하우스</h4>
                    <p className="card-text">배낭여행자 대상 체험 할인</p>
                  </div>
                </div>
              </div>

              {/* 제휴 문의 */}
              <div className="info-box mt-4" style={{ textAlign: 'center' }}>
                <h4 className="info-box-title">제휴 문의</h4>
                <p>플로팅 온 더 블루와의 파트너십에 관심이 있으신 기관은 아래로 문의해주세요.</p>
                <div className="grid-2" style={{ maxWidth: '400px', margin: '1rem auto' }}>
                  <div>
                    <dt><Icon name="phone" /> 전화</dt>
                    <dd>054-XXX-XXXX</dd>
                  </div>
                  <div>
                    <dt><Icon name="mail" /> 이메일</dt>
                    <dd>info@bluemotion.co.kr</dd>
                  </div>
                </div>
                <Link to="/news/contact" className="btn btn-primary mt-2">제휴 문의하기</Link>
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
