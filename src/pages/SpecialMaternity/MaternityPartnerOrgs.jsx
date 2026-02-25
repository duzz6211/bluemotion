import { Link, useLocation } from 'react-router-dom'
import Icon from '../../components/Icon/Icon'
import HeroSection from '../../components/HeroSection/HeroSection'

export default function MaternityPartnerOrgs() {
  const location = useLocation()

  return (
    <>
      <HeroSection
        title="협력 기관"
        subtitle="스페셜 임산부 프로그램 파트너"
        size="sm"
        breadcrumb={[
          { label: '홈', to: '/' },
          { label: '스페셜 임산부', to: '/special-maternity' },
          { label: '협력 기관' },
        ]}
      />

      <section className="section">
        <div className="container">
          <div className="content-with-sidebar">
            <main className="main-content">
              <h3>협력 기관 안내</h3>
              <p>
                스페셜 임산부 프로그램은 지역 의료기관, 복지기관, 공공기관과 긴밀하게 협력하여
                임산부에게 보다 안전하고 전문적인 서비스를 제공합니다.
              </p>

              {/* 의료기관 */}
              <h3 className="mt-4">의료기관 협력</h3>
              <div className="grid-2 mb-4">
                <div className="card">
                  <div className="card-body">
                    <span className="feature-icon" style={{ fontSize: '2rem' }}><Icon name="heart" /></span>
                    <h4 className="card-title">울진 산부인과</h4>
                    <p className="card-text">
                      임산부 운동 프로그램 자문 및 의료 연계 서비스를 제공합니다.
                      운동 참여 전 건강 상태 확인 및 고위험 임산부 관리를 협력합니다.
                    </p>
                    <span className="program-badge">의료 자문</span>
                  </div>
                </div>
                <div className="card">
                  <div className="card-body">
                    <span className="feature-icon" style={{ fontSize: '2rem' }}><Icon name="building" /></span>
                    <h4 className="card-title">울진군 보건소 모자보건팀</h4>
                    <p className="card-text">
                      임산부 건강관리 사업과 연계하여 프로그램을 운영합니다.
                      보건소 등록 임산부 대상 할인 혜택을 제공합니다.
                    </p>
                    <span className="program-badge">업무협약</span>
                  </div>
                </div>
              </div>

              {/* 복지기관 */}
              <h3 className="mt-4">복지기관 연계</h3>
              <div className="grid-2 mb-4">
                <div className="card">
                  <div className="card-body">
                    <span className="feature-icon" style={{ fontSize: '2rem' }}><Icon name="handshake" /></span>
                    <h4 className="card-title">울진 건강가정지원센터</h4>
                    <p className="card-text">
                      다문화가정 및 취약계층 임산부를 위한 무료 프로그램 운영에 협력합니다.
                      임산부 교육 프로그램의 강사 파견을 지원합니다.
                    </p>
                    <span className="program-badge">협약 체결</span>
                  </div>
                </div>
                <div className="card">
                  <div className="card-body">
                    <span className="feature-icon" style={{ fontSize: '2rem' }}><Icon name="users" /></span>
                    <h4 className="card-title">울진군 육아종합지원센터</h4>
                    <p className="card-text">
                      산전·산후 프로그램 정보 공유 및 참여자 연계를 진행합니다.
                      부모교육 프로그램과 연계한 통합 서비스를 제공합니다.
                    </p>
                    <span className="program-badge">정보 연계</span>
                  </div>
                </div>
              </div>

              {/* 협력 내용 */}
              <h3 className="mt-4">주요 협력 내용</h3>
              <div className="info-box mb-4">
                <ul>
                  <li><strong>의료 자문:</strong> 산부인과 전문의로부터 프로그램 안전성 자문 및 참여자 건강 상태 확인</li>
                  <li><strong>참여자 연계:</strong> 보건소, 복지기관 등록 임산부 대상 프로그램 안내 및 참여 연계</li>
                  <li><strong>비용 지원:</strong> 취약계층 임산부 대상 프로그램 비용 일부 또는 전액 지원</li>
                  <li><strong>전문가 파견:</strong> 복지시설, 보건소 대상 출장 교육 및 강사 파견</li>
                  <li><strong>공동 연구:</strong> 임산부 운동 효과에 관한 공동 연구 및 데이터 수집</li>
                </ul>
              </div>

              <div className="info-box mt-4" style={{ textAlign: 'center' }}>
                <h4>협력 기관 문의</h4>
                <p>스페셜 임산부 프로그램과의 협력에 관심이 있는 기관은 언제든 문의해주세요.</p>
                <Link to="/news/contact" className="btn btn-primary">협력 문의하기</Link>
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
