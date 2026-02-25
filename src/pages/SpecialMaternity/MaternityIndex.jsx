import { Link, useLocation } from 'react-router-dom'
import Icon from '../../components/Icon/Icon'
import HeroSection from '../../components/HeroSection/HeroSection'

export default function MaternityIndex() {
  const location = useLocation()

  return (
    <>
      <HeroSection
        title="스페셜 임산부 프로그램"
        subtitle="안전하고 전문적인 산전·산후 맞춤 운동"
        size="sm"
        breadcrumb={[
          { label: '홈', to: '/' },
          { label: '스페셜 임산부', to: '/special-maternity' },
          { label: '프로그램 소개' },
        ]}
      />

      <section className="section">
        <div className="container">
          <div className="content-with-sidebar">
            <main className="main-content">
              <h3>스페셜 임산부 프로그램이란?</h3>
              <p>
                스페셜 임산부 프로그램은 임신 기간과 출산 후 여성을 위한 전문 운동 프로그램입니다.
                FMTA 공인 산전·산후 전문 지도자가 임신 주수와 개인 상태에 맞춘
                안전하고 효과적인 운동을 지도합니다.
              </p>
              <p>
                건강한 임신 기간 유지, 순산 준비, 산후 빠른 회복을 목표로
                개인 레슨, 그룹 레슨, 부부 레슨 등 다양한 형태로 운영됩니다.
              </p>

              {/* 프로그램 유형 */}
              <h3 className="mt-4">레슨 유형</h3>
              <div className="grid-3 mb-4">
                <div className="card">
                  <div className="card-image placeholder-image">[개인 레슨 이미지]</div>
                  <div className="card-body text-center">
                    <span className="feature-icon" style={{ fontSize: '2rem' }}><Icon name="user" /></span>
                    <h4 className="card-title">개인 레슨</h4>
                    <p className="card-text">
                      1:1 맞춤형 산전·산후 케어 프로그램. 개인별 임신 주수와 건강 상태에 따른
                      세밀한 프로그램 설계가 가능합니다.
                    </p>
                    <Link to="/special-maternity/private" className="btn btn-primary btn-sm">상세보기</Link>
                  </div>
                </div>
                <div className="card">
                  <div className="card-image placeholder-image">[그룹 레슨 이미지]</div>
                  <div className="card-body text-center">
                    <span className="feature-icon" style={{ fontSize: '2rem' }}><Icon name="users" /></span>
                    <h4 className="card-title">그룹 레슨</h4>
                    <p className="card-text">
                      2~4인 소그룹으로 진행되는 임산부 전용 수업.
                      같은 시기 임산부들과 교류하며 함께 운동할 수 있습니다.
                    </p>
                    <Link to="/special-maternity/group" className="btn btn-primary btn-sm">상세보기</Link>
                  </div>
                </div>
                <div className="card">
                  <div className="card-image placeholder-image">[부부 레슨 이미지]</div>
                  <div className="card-body text-center">
                    <span className="feature-icon" style={{ fontSize: '2rem' }}><Icon name="heart" /></span>
                    <h4 className="card-title">부부 레슨</h4>
                    <p className="card-text">
                      배우자와 함께하는 임산부 운동 프로그램.
                      출산 준비를 함께하며 유대감을 높일 수 있습니다.
                    </p>
                    <Link to="/special-maternity/couple" className="btn btn-primary btn-sm">상세보기</Link>
                  </div>
                </div>
              </div>

              {/* 프로그램 특징 */}
              <h3 className="mt-4">프로그램 특징</h3>
              <div className="grid-2 mb-4">
                <div className="info-box">
                  <h4 className="info-box-title"><Icon name="shield" /> 안전 최우선</h4>
                  <p>산부인과 전문의 자문을 바탕으로 안전한 운동 가이드라인을 준수합니다. 모든 운동은 임신 주수에 맞게 강도를 조절합니다.</p>
                </div>
                <div className="info-box">
                  <h4 className="info-box-title"><Icon name="userCheck" /> 전문 지도자</h4>
                  <p>FMTA 공인 결혼임신여성운동 전문가 자격을 보유한 지도자가 직접 수업을 진행합니다.</p>
                </div>
                <div className="info-box">
                  <h4 className="info-box-title"><Icon name="baby" /> 주수별 맞춤 케어</h4>
                  <p>초기(~16주), 중기(17~28주), 후기(29주~) 각 시기에 맞는 프로그램을 제공합니다.</p>
                </div>
                <div className="info-box">
                  <h4 className="info-box-title"><Icon name="activity" /> 산후 회복 프로그램</h4>
                  <p>출산 후 체형 회복과 체력 증진을 위한 단계별 산후 프로그램을 운영합니다.</p>
                </div>
              </div>

              {/* 기대 효과 */}
              <h3 className="mt-4">기대 효과</h3>
              <div className="info-box mb-4">
                <ul>
                  <li>임신 중 체력 유지 및 체중 관리</li>
                  <li>요통, 골반 통증 등 임신 관련 불편 증상 완화</li>
                  <li>순산을 위한 골반 및 근력 강화</li>
                  <li>산후 빠른 체형 회복 및 체력 증진</li>
                  <li>정서적 안정 및 스트레스 해소</li>
                  <li>부부 유대감 강화 (부부 레슨)</li>
                </ul>
              </div>

              <div className="text-center mt-4">
                <Link to="/shop/programs" className="btn btn-primary">수강 신청하기</Link>
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
