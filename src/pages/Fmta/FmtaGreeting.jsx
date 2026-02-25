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
                <h3>안녕하십니까,<br/>FMTA 협회장 홍길동입니다.</h3>
                <p>
                  FMTA(Functional Movement Training Association) 홈페이지를 방문해 주신 여러분께
                  진심으로 감사드립니다.
                </p>
                <p>
                  저희 FMTA는 &ldquo;움직임 교육의 새로운 기준&rdquo;을 만들어가기 위해 설립된 전문 교육 협회입니다.
                  현대인들은 생활 패턴의 변화로 인해 점점 움직임의 질이 저하되고 있으며,
                  이에 따라 올바른 움직임 교육의 필요성은 그 어느 때보다 높아지고 있습니다.
                </p>
                <p>
                  FMTA는 이러한 시대적 요구에 부응하여, 기능해부학적 이해를 바탕으로 한 과학적이고
                  체계적인 움직임 교육 커리큘럼을 개발하고 있습니다. 단순히 운동 동작을 가르치는 것이 아니라,
                  인체의 구조와 기능을 깊이 이해하고, 각 개인의 상황에 맞는 안전하고 효과적인
                  움직임을 지도할 수 있는 전문가를 양성하는 것이 저희의 목표입니다.
                </p>
                <p>
                  특히 블루모션트레이닝 센터와의 협력을 통해 이론과 실습이 통합된 현장 중심의
                  교육을 실현하고 있으며, 플로팅온더블루, 스페셜 임산부 프로그램 등 차별화된
                  특화 프로그램을 개발하여 움직임 교육의 새로운 가능성을 열어가고 있습니다.
                </p>
                <p>
                  앞으로도 FMTA는 교육의 질적 향상과 지도자의 전문성 강화를 위해 끊임없이
                  노력하겠습니다. 움직임 교육에 관심이 있는 모든 분들과 함께 성장해 나가길
                  희망합니다.
                </p>
                <p>감사합니다.</p>
                <p style={{ textAlign: 'right', marginTop: '2rem' }}>
                  <strong>FMTA 협회장 홍길동</strong>
                </p>
              </div>
            </main>

            <aside className="sidebar">
              <nav className="sidebar-menu">
                <h3 className="sidebar-title">FMTA</h3>
                <Link to="/fmta" className={`sidebar-link${location.pathname === '/fmta' ? ' active' : ''}`}>협회소개</Link>
                <Link to="/fmta/greeting" className={`sidebar-link${location.pathname === '/fmta/greeting' ? ' active' : ''}`}>인사말</Link>
                <Link to="/fmta/history" className={`sidebar-link${location.pathname === '/fmta/history' ? ' active' : ''}`}>연혁</Link>
                <Link to="/fmta/info" className={`sidebar-link${location.pathname === '/fmta/info' ? ' active' : ''}`}>정보</Link>
              </nav>
              <div className="info-box mt-3">
                <h4 className="info-box-title">문의</h4>
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
