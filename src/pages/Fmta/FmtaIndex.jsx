import { Link } from 'react-router-dom'
import Icon from '../../components/Icon/Icon'
import HeroSection from '../../components/HeroSection/HeroSection'
import PageSidebar from '../../components/Sidebar/PageSidebar'
import { SITE } from '../../data/site'

export default function FmtaIndex() {
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
              <div className="info-box" style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
                <p style={{ fontSize: '1.25rem', fontWeight: 500, lineHeight: 1.7, margin: 0 }}>
                  &ldquo;인체의 움직임을 분석하고 연구하기 전에,<br />
                  우리는 사람을 품고 마음으로 이해해야 합니다.&rdquo;
                </p>
              </div>

              {/* 협회 소개 */}
              <p>
                <strong>기능적움직임트레이닝협회(FMTA, Functional Movement Training Association)</strong>는
                물리치료사들이 모여 움직임에 대한 깊이 있는 연구와 교육을 통해
                사회에 선한 영향력을 끼치는 공동체입니다.
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

              <h3 className="mt-5">협회가 하는 일</h3>
              <div className="grid-2 mt-3">
                <div className="info-item">
                  <span className="info-icon"><Icon name="fileText" /></span>
                  <div className="info-content">
                    <h4>커리큘럼 개발</h4>
                    <p>해부학에서 시작해 기능해부학 · 동작분석, 매트와 대기구로 이어지는 교육 과정을 설계합니다.</p>
                  </div>
                </div>
                <div className="info-item">
                  <span className="info-icon"><Icon name="graduationCap" /></span>
                  <div className="info-content">
                    <h4>지도자 양성 · 자격 발급</h4>
                    <p>기능성필라테스 지도자 과정을 기수별로 운영하고, 필기 · 실기 평가를 거쳐 자격을 발급합니다.</p>
                  </div>
                </div>
                <div className="info-item">
                  <span className="info-icon"><Icon name="userCheck" /></span>
                  <div className="info-content">
                    <h4>취업 · 창업 연계</h4>
                    <p>수료로 끝나지 않고 지역 내 취업 연계와 창업 가이드까지 이어갑니다.</p>
                  </div>
                </div>
                <div className="info-item">
                  <span className="info-icon"><Icon name="handshake" /></span>
                  <div className="info-content">
                    <h4>지역사회 사업</h4>
                    <p>보건소 · 학교 · 가족센터 · 공기업과 연계한 교육과 일자리 창출 사업을 수행합니다.</p>
                  </div>
                </div>
              </div>

              <h3 className="mt-5">협회와 센터</h3>
              <p>
                FMTA는 <strong>교육 철학과 커리큘럼을 개발하는 협회</strong>이고,
                블루모션트레이닝은 <strong>그 철학이 실제 레슨과 교육으로 구현되는 현장</strong>입니다.
                협회의 전속 교육센터로서 이론 수업과 실습, 수업 참관이 한곳에서 이루어집니다.
              </p>

              {/* CTA */}
              <div className="info-box mt-4" style={{ textAlign: 'center' }}>
                <h4>FMTA 교육 과정에 관심이 있으신가요?</h4>
                <p>다양한 교육 과정과 자격증 취득 과정을 확인해보세요.</p>
                <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                  <Link to="/education" className="btn btn-primary">교육과정 보기</Link>
                  <a href={'tel:' + SITE.phone} className="btn btn-secondary">{SITE.phone}</a>
                </div>
              </div>
            </main>

            <PageSidebar menu="fmta" />
          </div>
        </div>
      </section>
    </>
  )
}
