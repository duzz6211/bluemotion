import { Link, useLocation } from 'react-router-dom'
import Icon from '../../components/Icon/Icon'
import HeroSection from '../../components/HeroSection/HeroSection'

export default function FloatingActivity() {
  const location = useLocation()

  return (
    <>
      <HeroSection
        title="활동 갤러리"
        subtitle="플로팅 온 더 블루의 생생한 활동 모습"
        size="sm"
        breadcrumb={[
          { label: '홈', to: '/' },
          { label: '플로팅온더블루', to: '/floating' },
          { label: '활동 갤러리' },
        ]}
      />

      <section className="section">
        <div className="container">
          <div className="content-with-sidebar">
            <main className="main-content">
              <h3>활동 갤러리</h3>
              <p>
                플로팅 온 더 블루의 다양한 프로그램 활동 사진을 소개합니다.
                울진의 아름다운 바다에서 진행된 생생한 현장의 모습을 확인하세요.
              </p>

              {/* 갤러리 그리드 */}
              <div className="grid-3 mb-4">
                <div className="card">
                  <div className="card-image placeholder-image" style={{ height: '200px' }}>[플로팅 요가 활동 1]</div>
                  <div className="card-body">
                    <span className="program-badge floating">플로팅 요가</span>
                    <p className="card-text">2024 여름 시즌 플로팅 요가</p>
                  </div>
                </div>
                <div className="card">
                  <div className="card-image placeholder-image" style={{ height: '200px' }}>[수중 필라테스 활동 1]</div>
                  <div className="card-body">
                    <span className="program-badge floating">수중 필라테스</span>
                    <p className="card-text">수중 필라테스 그룹 세션</p>
                  </div>
                </div>
                <div className="card">
                  <div className="card-image placeholder-image" style={{ height: '200px' }}>[스노클링 활동 1]</div>
                  <div className="card-body">
                    <span className="program-badge floating">스노클링</span>
                    <p className="card-text">울진 바다 스노클링 체험</p>
                  </div>
                </div>
                <div className="card">
                  <div className="card-image placeholder-image" style={{ height: '200px' }}>[비치 무브먼트 활동 1]</div>
                  <div className="card-body">
                    <span className="program-badge floating">비치 무브먼트</span>
                    <p className="card-text">해변 움직임 프로그램</p>
                  </div>
                </div>
                <div className="card">
                  <div className="card-image placeholder-image" style={{ height: '200px' }}>[그룹 활동 1]</div>
                  <div className="card-body">
                    <span className="program-badge floating">그룹 활동</span>
                    <p className="card-text">단체 플로팅 체험 프로그램</p>
                  </div>
                </div>
                <div className="card">
                  <div className="card-image placeholder-image" style={{ height: '200px' }}>[선셋 프로그램]</div>
                  <div className="card-body">
                    <span className="program-badge floating">특별 프로그램</span>
                    <p className="card-text">선셋 플로팅 요가 스페셜</p>
                  </div>
                </div>
              </div>

              {/* 최근 활동 */}
              <h3 className="mt-4">최근 활동</h3>
              <div className="mb-4">
                <div className="info-box mb-3">
                  <h4 className="info-box-title">2024년 여름 시즌 활동 요약</h4>
                  <div className="grid-4">
                    <div className="text-center">
                      <h4 style={{ color: 'var(--color-primary)', fontSize: '2rem' }}>320+</h4>
                      <p>총 참여자 수</p>
                    </div>
                    <div className="text-center">
                      <h4 style={{ color: 'var(--color-primary)', fontSize: '2rem' }}>48회</h4>
                      <p>프로그램 운영</p>
                    </div>
                    <div className="text-center">
                      <h4 style={{ color: 'var(--color-primary)', fontSize: '2rem' }}>4.8</h4>
                      <p>평균 만족도</p>
                    </div>
                    <div className="text-center">
                      <h4 style={{ color: 'var(--color-primary)', fontSize: '2rem' }}>92%</h4>
                      <p>재참여 의향</p>
                    </div>
                  </div>
                </div>

                <div className="card mb-3">
                  <div className="card-body">
                    <span className="text-muted" style={{ fontSize: 'var(--font-size-sm)' }}>2024.08.20</span>
                    <h4 className="card-title">여름 시즌 마무리 특별 프로그램 진행</h4>
                    <p className="card-text">
                      2024년 여름 시즌을 마무리하며 특별 선셋 플로팅 요가와 비치 파티 프로그램을 진행했습니다.
                      약 30명의 참가자분들이 함께하여 잊지 못할 추억을 만들었습니다.
                    </p>
                  </div>
                </div>
                <div className="card mb-3">
                  <div className="card-body">
                    <span className="text-muted" style={{ fontSize: 'var(--font-size-sm)' }}>2024.07.15</span>
                    <h4 className="card-title">울진 관광협회 공동 프로모션 참여</h4>
                    <p className="card-text">
                      울진 관광협회와 함께하는 여름 관광 프로모션에 참여하여 플로팅 온 더 블루 체험 부스를 운영했습니다.
                      많은 관광객분들이 관심을 보여주셨습니다.
                    </p>
                  </div>
                </div>
                <div className="card mb-3">
                  <div className="card-body">
                    <span className="text-muted" style={{ fontSize: 'var(--font-size-sm)' }}>2024.06.20</span>
                    <h4 className="card-title">2024 시즌 오프닝 이벤트 성료</h4>
                    <p className="card-text">
                      2024년 플로팅 온 더 블루 시즌 오프닝 이벤트를 성공적으로 마쳤습니다.
                      할인 이벤트와 함께 첫 참가자 대상 무료 체험 프로그램을 운영했습니다.
                    </p>
                  </div>
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
