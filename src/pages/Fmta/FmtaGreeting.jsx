import { Link, useLocation } from 'react-router-dom'
import Icon from '../../components/Icon/Icon'
import HeroSection from '../../components/HeroSection/HeroSection'

export default function FmtaGreeting() {
  const location = useLocation()

  return (
    <>
      <HeroSection
        title="인사말"
        subtitle="FMTA 협회장 인사"
        size="sm"
        breadcrumb={[
          { label: '홈', to: '/' },
          { label: 'FMTA', to: '/fmta' },
          { label: '인사말' },
        ]}
      />

      <section className="section">
        <div className="container">
          <div className="content-with-sidebar">
            <main className="main-content">
              <div className="greeting-section">
                <div className="placeholder-image" style={{ width: '200px', height: '250px', borderRadius: '12px', float: 'left', marginRight: '2rem', marginBottom: '1rem' }}>
                  [협회장 사진]
                </div>
                <h3>안녕하세요,<br/>FMTA 협회장 김하나입니다.</h3>
                <p>
                  우리는 살아가며 수많은 사람과 만나고 또 헤어집니다. 하지만 그 짧은 만남 속에서도
                  &lsquo;건강한 움직임&rsquo;을 되찾아준 기억은 삶을 지탱하는 큰 힘이 되곤 합니다.
                </p>
                <p>
                  저는 지난 18년간 현장에서 수만 명의 몸을 마주하며 깨달았습니다.
                  단순한 테크닉보다 중요한 것은 한 사람의 삶을 깊이 이해하려는 마음이라는 것을요.
                  FMTA는 바로 그 마음에서 시작되었습니다.
                </p>
                <p>
                  물리치료사들의 전문적인 식견을 바탕으로, 단순한 운동을 넘어 삶의 질을 바꾸는
                  &lsquo;기능적 움직임&rsquo;을 연구합니다. 강사를 양성하고 지역사회와 호흡하며,
                  우리가 전달하는 움직임이 누군가에게는 새로운 시작이 될 수 있도록 진심을 다해 정진하겠습니다.
                </p>
                <p>
                  여러분의 건강한 여정에 FMTA가 든든한 동반자가 되겠습니다. 감사합니다.
                </p>
                <p style={{ textAlign: 'right', marginTop: '2rem' }}>
                  <strong>FMTA 협회장 김하나</strong>
                </p>
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
