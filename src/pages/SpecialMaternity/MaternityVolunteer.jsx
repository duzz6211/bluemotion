import { Link, useLocation } from 'react-router-dom'
import Icon from '../../components/Icon/Icon'
import HeroSection from '../../components/HeroSection/HeroSection'

export default function MaternityVolunteer() {
  const location = useLocation()

  return (
    <>
      <HeroSection
        title="봉사활동"
        subtitle="지역사회를 위한 나눔 활동"
        size="sm"
        breadcrumb={[
          { label: '홈', to: '/' },
          { label: '스페셜 임산부', to: '/special-maternity' },
          { label: '봉사활동' },
        ]}
      />

      <section className="section">
        <div className="container">
          <div className="content-with-sidebar">
            <main className="main-content">
              <h3>봉사활동 소개</h3>
              <p>
                블루모션트레이닝 센터와 FMTA 협회는 지역사회 건강 증진을 위한
                다양한 봉사활동을 진행하고 있습니다. 특히 임산부 운동 교육이 필요하지만
                경제적·환경적 이유로 접근이 어려운 분들을 위해 무료 교육과
                출장 프로그램을 운영합니다.
              </p>

              {/* 주요 봉사활동 */}
              <h3 className="mt-4">주요 봉사활동</h3>
              <div className="grid-2 mb-4">
                <div className="card">
                  <div className="card-image placeholder-image">[봉사활동 이미지]</div>
                  <div className="card-body">
                    <h4 className="card-title"><Icon name="building" /> 복지시설 방문 교육</h4>
                    <p className="card-text">
                      지역 복지시설을 방문하여 임산부 대상 무료 운동 교육을 진행합니다.
                      기본적인 스트레칭, 호흡법, 골반저근 운동 등을 교육하여
                      시설 내에서도 자가 운동이 가능하도록 돕습니다.
                    </p>
                  </div>
                </div>
                <div className="card">
                  <div className="card-image placeholder-image">[봉사활동 이미지]</div>
                  <div className="card-body">
                    <h4 className="card-title"><Icon name="heart" /> 취약계층 무료 레슨</h4>
                    <p className="card-text">
                      경제적으로 어려운 임산부를 위한 무료 레슨 프로그램을 운영합니다.
                      보건소 및 건강가정지원센터와 연계하여 대상자를 선정하고,
                      정기적인 레슨을 무상으로 제공합니다.
                    </p>
                  </div>
                </div>
                <div className="card">
                  <div className="card-image placeholder-image">[봉사활동 이미지]</div>
                  <div className="card-body">
                    <h4 className="card-title"><Icon name="users" /> 다문화가정 지원</h4>
                    <p className="card-text">
                      다문화가정 임산부를 위한 맞춤형 운동 교육 프로그램을 운영합니다.
                      언어 장벽을 고려한 교육 자료와 통역 지원을 함께 제공하여
                      누구나 쉽게 참여할 수 있도록 합니다.
                    </p>
                  </div>
                </div>
                <div className="card">
                  <div className="card-image placeholder-image">[봉사활동 이미지]</div>
                  <div className="card-body">
                    <h4 className="card-title"><Icon name="book" /> 건강 교육 강연</h4>
                    <p className="card-text">
                      지역 주민 대상 임산부 건강관리 교육 강연을 정기적으로 진행합니다.
                      올바른 운동 방법, 영양 관리, 출산 준비 등에 관한
                      유익한 정보를 무료로 제공합니다.
                    </p>
                  </div>
                </div>
              </div>

              {/* 활동 실적 */}
              <h3 className="mt-4">활동 실적</h3>
              <div className="info-box mb-4">
                <div className="grid-3">
                  <div className="text-center">
                    <h4 style={{ color: 'var(--color-primary)', fontSize: '2rem' }}>12회</h4>
                    <p>봉사활동 횟수</p>
                  </div>
                  <div className="text-center">
                    <h4 style={{ color: 'var(--color-primary)', fontSize: '2rem' }}>150+</h4>
                    <p>수혜자 수</p>
                  </div>
                  <div className="text-center">
                    <h4 style={{ color: 'var(--color-primary)', fontSize: '2rem' }}>5개</h4>
                    <p>방문 기관</p>
                  </div>
                </div>
              </div>

              {/* 최근 활동 */}
              <h3 className="mt-4">최근 봉사활동</h3>
              <div className="card mb-3">
                <div className="card-body">
                  <span className="text-muted" style={{ fontSize: 'var(--font-size-sm)' }}>2024.05.05</span>
                  <h4 className="card-title">울진 사회복지관 방문 교육</h4>
                  <p className="card-text">울진 사회복지관을 방문하여 임산부 10명을 대상으로 산전 운동 교육을 진행했습니다. 기본 호흡법과 간단한 스트레칭을 교육하고 자가 운동 가이드를 배포했습니다.</p>
                </div>
              </div>
              <div className="card mb-3">
                <div className="card-body">
                  <span className="text-muted" style={{ fontSize: 'var(--font-size-sm)' }}>2024.03.15</span>
                  <h4 className="card-title">건강가정지원센터 연계 무료 레슨</h4>
                  <p className="card-text">울진 건강가정지원센터와 연계하여 다문화가정 임산부 5명에게 4주간 무료 그룹 레슨을 제공했습니다.</p>
                </div>
              </div>

              <div className="info-box mt-4" style={{ textAlign: 'center' }}>
                <h4>봉사활동 참여 및 요청</h4>
                <p>봉사활동 참여를 원하시거나, 기관에서 방문 교육을 요청하고 싶으시면 연락주세요.</p>
                <Link to="/news/contact" className="btn btn-primary">문의하기</Link>
              </div>
            </main>

            <aside className="sidebar">
              <nav className="sidebar-menu">
                <h3 className="sidebar-title">스페셜 임산부</h3>
                <Link to="/special-maternity" className={`sidebar-link${location.pathname === '/special-maternity' ? ' active' : ''}`}>프로그램 소개</Link>
                <Link to="/special-maternity/group" className={`sidebar-link${location.pathname === '/special-maternity/group' ? ' active' : ''}`}>그룹 레슨</Link>
                <Link to="/special-maternity/private" className={`sidebar-link${location.pathname === '/special-maternity/private' ? ' active' : ''}`}>개인 레슨</Link>
                <Link to="/special-maternity/couple" className={`sidebar-link${location.pathname === '/special-maternity/couple' ? ' active' : ''}`}>부부 레슨</Link>
                <Link to="/special-maternity/partners" className={`sidebar-link${location.pathname === '/special-maternity/partners' ? ' active' : ''}`}>협력 기관</Link>
                <Link to="/special-maternity/volunteer" className={`sidebar-link${location.pathname === '/special-maternity/volunteer' ? ' active' : ''}`}>봉사활동</Link>
                <Link to="/special-maternity/vision" className={`sidebar-link${location.pathname === '/special-maternity/vision' ? ' active' : ''}`}>비전</Link>
              </nav>
              <div className="info-box mt-3">
                <h4 className="info-box-title">상담 문의</h4>
                <dl>
                  <dt><Icon name="phone" /> 전화</dt><dd>054-XXX-XXXX</dd>
                  <dt><Icon name="mail" /> 이메일</dt><dd>info@bluemotion.co.kr</dd>
                </dl>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </>
  )
}
