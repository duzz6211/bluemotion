import Icon from '../../components/Icon/Icon'
import HeroSection from '../../components/HeroSection/HeroSection'
import PageSidebar from '../../components/Sidebar/PageSidebar'

export default function FmtaGreeting() {
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

              <div className="info-box mt-5">
                <h4 className="info-box-title"><Icon name="user" /> 약력</h4>
                <ul>
                  <li>기능적움직임트레이닝협회(FMTA) 협회장</li>
                  <li>블루모션트레이닝 대표원장</li>
                  <li>물리치료사</li>
                  <li>2019년 힐라테스 센터 개원, 2023년 블루모션트레이닝으로 확장 이전</li>
                  <li>FMTA 기능성필라테스 지도자 과정 직강</li>
                  <li>맘스바디케어 임산부 운동처방사(PEC) 39기 수료</li>
                  <li>울진군보건소 · 울진군가족센터 · 원덕중고등학교 · 한국수력원자력 한울본부 연계 프로그램 진행</li>
                </ul>
              </div>

              <div className="info-box mt-4" style={{ textAlign: 'center' }}>
                <p style={{ fontSize: '1.125rem', fontWeight: 500, lineHeight: 1.7, margin: 0 }}>
                  &ldquo;당신이 빛날 수 있는 곳에서 함께 하세요.<br />
                  그 빛은 또 다른 누군가를 이끌 수 있는 빛이 될 거예요.&rdquo;
                </p>
              </div>
            </main>

            <PageSidebar menu="fmta" />
          </div>
        </div>
      </section>
    </>
  )
}
