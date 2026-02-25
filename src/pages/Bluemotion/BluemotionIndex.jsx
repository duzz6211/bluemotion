import { Link, useLocation } from 'react-router-dom'
import Icon from '../../components/Icon/Icon'
import HeroSection from '../../components/HeroSection/HeroSection'

export default function BluemotionIndex() {
  const location = useLocation()

  return (
    <>
      <HeroSection
        title="시설소개"
        subtitle="블루모션트레이닝 센터 시설 안내"
        size="sm"
        breadcrumb={[
          { label: '홈', to: '/' },
          { label: '블루모션트레이닝', to: '/bluemotion' },
          { label: '시설소개' },
        ]}
      />

      <section className="section">
        <div className="container">
          <div className="content-with-sidebar">
            <main className="main-content">
              <h3>블루모션트레이닝 센터</h3>
              <p>
                블루모션트레이닝 센터는 경상북도 울진에 위치한 전문 필라테스 센터로,
                FMTA 교육 철학을 현장에서 구현하는 공간입니다. 최신 기구와 쾌적한 환경에서
                개인 맞춤형 레슨부터 그룹 수업, 교육 실습까지 다양한 프로그램이 운영됩니다.
              </p>

              {/* 시설 안내 */}
              <h3 className="mt-4">공간 구성</h3>
              <div className="grid-3 mb-4">
                <div className="card">
                  <div className="card-image placeholder-image">[리포머룸 이미지]</div>
                  <div className="card-body">
                    <h4 className="card-title">리포머룸</h4>
                    <p className="card-text">
                      6대의 리포머가 설치된 메인 레슨 공간입니다. 개인 레슨과 소그룹 레슨이 진행되며,
                      넓은 창을 통해 자연광이 들어오는 쾌적한 환경을 자랑합니다.
                    </p>
                  </div>
                </div>
                <div className="card">
                  <div className="card-image placeholder-image">[매트룸 이미지]</div>
                  <div className="card-body">
                    <h4 className="card-title">매트룸</h4>
                    <p className="card-text">
                      매트 필라테스와 그룹 수업이 진행되는 공간입니다. 소도구를 활용한 다양한 프로그램이
                      운영되며, 교육 과정의 실습 공간으로도 활용됩니다.
                    </p>
                  </div>
                </div>
                <div className="card">
                  <div className="card-image placeholder-image">[개인룸 이미지]</div>
                  <div className="card-body">
                    <h4 className="card-title">1:1 개인룸</h4>
                    <p className="card-text">
                      프라이버시가 보장되는 개인 레슨 전용 공간입니다. 임산부 레슨, 재활 프로그램 등
                      개인 맞춤형 수업이 집중적으로 이루어집니다.
                    </p>
                  </div>
                </div>
              </div>

              {/* 주요 기구 */}
              <h3 className="mt-4">보유 기구</h3>
              <div className="grid-4 mb-4">
                <div className="card text-center">
                  <div className="card-body">
                    <div className="placeholder-image" style={{ height: '120px', marginBottom: '1rem' }}>[리포머]</div>
                    <h4 className="card-title">리포머</h4>
                    <p className="card-text">6대 보유</p>
                  </div>
                </div>
                <div className="card text-center">
                  <div className="card-body">
                    <div className="placeholder-image" style={{ height: '120px', marginBottom: '1rem' }}>[캐딜락]</div>
                    <h4 className="card-title">캐딜락</h4>
                    <p className="card-text">2대 보유</p>
                  </div>
                </div>
                <div className="card text-center">
                  <div className="card-body">
                    <div className="placeholder-image" style={{ height: '120px', marginBottom: '1rem' }}>[체어]</div>
                    <h4 className="card-title">원다 체어</h4>
                    <p className="card-text">4대 보유</p>
                  </div>
                </div>
                <div className="card text-center">
                  <div className="card-body">
                    <div className="placeholder-image" style={{ height: '120px', marginBottom: '1rem' }}>[바렐]</div>
                    <h4 className="card-title">래더 바렐</h4>
                    <p className="card-text">2대 보유</p>
                  </div>
                </div>
              </div>

              {/* 센터 특징 */}
              <h3 className="mt-4">센터 특징</h3>
              <div className="grid-2 mb-4">
                <div className="info-box">
                  <h4 className="info-box-title"><Icon name="award" /> FMTA 공인 센터</h4>
                  <p>FMTA 협회가 인증한 공식 교육 실습 센터로서 검증된 교육 품질을 보장합니다.</p>
                </div>
                <div className="info-box">
                  <h4 className="info-box-title"><Icon name="user" /> 맞춤형 프로그램</h4>
                  <p>개인의 체형, 건강 상태, 목표에 맞는 1:1 맞춤형 프로그램을 제공합니다.</p>
                </div>
                <div className="info-box">
                  <h4 className="info-box-title"><Icon name="building" /> 최신 시설</h4>
                  <p>최신 필라테스 기구와 쾌적한 환경을 갖춘 전문 센터에서 수업이 진행됩니다.</p>
                </div>
                <div className="info-box">
                  <h4 className="info-box-title"><Icon name="users" /> 소수 정원 운영</h4>
                  <p>그룹 레슨은 최대 4인까지 소수 정원으로 운영하여 세심한 지도가 가능합니다.</p>
                </div>
              </div>

              <div className="text-center mt-4">
                <Link to="/bluemotion/lesson" className="btn btn-primary">레슨 안내 보기</Link>
              </div>
            </main>

            <aside className="sidebar">
              <nav className="sidebar-menu">
                <h3 className="sidebar-title">블루모션트레이닝</h3>
                <Link to="/bluemotion" className={`sidebar-link${location.pathname === '/bluemotion' ? ' active' : ''}`}>시설소개</Link>
                <Link to="/bluemotion/lesson" className={`sidebar-link${location.pathname === '/bluemotion/lesson' ? ' active' : ''}`}>레슨안내</Link>
                <Link to="/bluemotion/location" className={`sidebar-link${location.pathname === '/bluemotion/location' ? ' active' : ''}`}>오시는길/정보</Link>
                <Link to="/bluemotion/vision" className={`sidebar-link${location.pathname === '/bluemotion/vision' ? ' active' : ''}`}>비전</Link>
              </nav>
              <div className="info-box mt-3">
                <h4 className="info-box-title">문의</h4>
                <dl>
                  <dt><Icon name="phone" /> 전화</dt><dd>054-XXX-XXXX</dd>
                  <dt><Icon name="clock" /> 운영시간</dt><dd>평일 09:00-21:00</dd>
                </dl>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </>
  )
}
