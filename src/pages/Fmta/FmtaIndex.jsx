import { Link, useLocation } from 'react-router-dom'
import Icon from '../../components/Icon/Icon'
import HeroSection from '../../components/HeroSection/HeroSection'

export default function FmtaIndex() {
  const location = useLocation()

  return (
    <>
      <HeroSection
        title="FMTA 협회소개"
        subtitle="움직임 교육 전문 협회"
        size="sm"
        breadcrumb={[
          { label: '홈', to: '/' },
          { label: 'FMTA', to: '/fmta' },
          { label: '협회소개' },
        ]}
      />

      <section className="section">
        <div className="container">
          <div className="content-with-sidebar">
            <main className="main-content">
              {/* 비주얼 인용구 */}
              <div
                className="placeholder-image"
                style={{
                  width: '100%',
                  minHeight: '320px',
                  borderRadius: '12px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  textAlign: 'center',
                  padding: '2rem',
                  marginBottom: '2.5rem',
                }}
              >
                <p style={{ fontSize: '1.25rem', fontWeight: 500, lineHeight: 1.7, margin: 0 }}>
                  &ldquo;인체의 움직임을 분석하고 연구하기 전에,<br />
                  우리는 사람을 품고 마음으로 이해해야 합니다.&rdquo;
                </p>
              </div>

              {/* 협회 소개 */}
              <p>
                <strong>기능적움직임트레이닝협회(FMTA)</strong>는 물리치료사들이 모여 움직임에 대한
                깊이 있는 연구와 교육을 통해 사회에 선한 영향력을 끼치는 공동체입니다.
              </p>
              <p>
                사람과 사람을 잇는 더 건강한 내일을 함께 만들어가는 가치를 실현합니다.
              </p>

              {/* 인증 안내 */}
              <div className="info-box mt-4">
                <h4 className="info-box-title">
                  <Icon name="award" /> 문화체육관광부 인증 자격발급 교육기관
                </h4>
                <p>등록번호 2023-004136</p>
              </div>

              {/* CTA */}
              <div className="info-box mt-4" style={{ textAlign: 'center' }}>
                <h4>FMTA 교육 과정에 관심이 있으신가요?</h4>
                <p>다양한 교육 과정과 자격증 취득 과정을 확인해보세요.</p>
                <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                  <Link to="/education" className="btn btn-primary">교육과정 보기</Link>
                  <Link to="/news/contact" className="btn btn-secondary">문의하기</Link>
                </div>
              </div>
            </main>

            <aside className="sidebar">
              <nav className="sidebar-menu">
                <h3 className="sidebar-title">FMTA</h3>
                <Link to="/fmta" className={`sidebar-link${location.pathname === '/fmta' ? ' active' : ''}`}>협회소개</Link>
                <Link to="/fmta/greeting" className={`sidebar-link${location.pathname === '/fmta/greeting' ? ' active' : ''}`}>인사말</Link>
                <Link to="/fmta/history" className={`sidebar-link${location.pathname === '/fmta/history' ? ' active' : ''}`}>협회연혁</Link>
                <Link to="/fmta/partners" className={`sidebar-link${location.pathname === '/fmta/partners' ? ' active' : ''}`}>제휴업체</Link>
              </nav>
              <div className="info-box mt-3">
                <h4 className="info-box-title">문의</h4>
                <dl>
                  <dt><Icon name="phone" /></dt><dd>054-XXX-XXXX</dd>
                  <dt><Icon name="mail" /></dt><dd>info@bluemotion.co.kr</dd>
                </dl>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </>
  )
}
