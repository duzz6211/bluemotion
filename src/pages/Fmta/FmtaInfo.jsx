import { Link, useLocation } from 'react-router-dom'
import Icon from '../../components/Icon/Icon'
import HeroSection from '../../components/HeroSection/HeroSection'

export default function FmtaInfo() {
  const location = useLocation()

  return (
    <>
      <HeroSection
        title="정보"
        subtitle="FMTA 협회 기본 정보"
        size="sm"
        breadcrumb={[
          { label: '홈', to: '/' },
          { label: 'FMTA', to: '/fmta' },
          { label: '정보' },
        ]}
      />

      <section className="section">
        <div className="container">
          <div className="content-with-sidebar">
            <main className="main-content">
              {/* 기본 정보 */}
              <h3>협회 기본 정보</h3>
              <div className="info-box mb-4">
                <div className="table-responsive">
                  <table className="table">
                    <tbody>
                      <tr>
                        <th style={{ width: '30%' }}>협회명</th>
                        <td>FMTA (Functional Movement Training Association)</td>
                      </tr>
                      <tr>
                        <th>설립일</th>
                        <td>2022년 03월</td>
                      </tr>
                      <tr>
                        <th>대표</th>
                        <td>홍길동</td>
                      </tr>
                      <tr>
                        <th>연락처</th>
                        <td>054-XXX-XXXX</td>
                      </tr>
                      <tr>
                        <th>이메일</th>
                        <td>info@bluemotion.co.kr</td>
                      </tr>
                      <tr>
                        <th>운영시간</th>
                        <td>평일 09:00 - 18:00 (토·일·공휴일 휴무)</td>
                      </tr>
                      <tr>
                        <th>주소</th>
                        <td>경상북도 울진군 울진읍 (상세주소)</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* 계좌 정보 */}
              <h3 className="mt-4">계좌 정보</h3>
              <div className="info-box mb-4">
                <div className="table-responsive">
                  <table className="table">
                    <tbody>
                      <tr>
                        <th style={{ width: '30%' }}>은행명</th>
                        <td>농협은행</td>
                      </tr>
                      <tr>
                        <th>계좌번호</th>
                        <td>XXX-XXXX-XXXX-XX</td>
                      </tr>
                      <tr>
                        <th>예금주</th>
                        <td>FMTA</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="text-muted" style={{ fontSize: 'var(--font-size-sm)', marginTop: '0.5rem' }}>
                  * 교육비 입금 시 수강생 이름으로 입금 부탁드립니다.
                </p>
              </div>

              {/* 관련 링크 */}
              <h3 className="mt-4">관련 링크</h3>
              <div className="grid-2 mb-4">
                <Link to="/education" className="card" style={{ textDecoration: 'none' }}>
                  <div className="card-body">
                    <span className="feature-icon"><Icon name="graduationCap" /></span>
                    <h4 className="card-title">교육과정 안내</h4>
                    <p className="card-text">FMTA에서 운영하는 다양한 교육 과정을 확인하세요.</p>
                  </div>
                </Link>
                <Link to="/bluemotion" className="card" style={{ textDecoration: 'none' }}>
                  <div className="card-body">
                    <span className="feature-icon"><Icon name="building" /></span>
                    <h4 className="card-title">블루모션트레이닝 센터</h4>
                    <p className="card-text">교육이 실현되는 블루모션 센터를 둘러보세요.</p>
                  </div>
                </Link>
                <Link to="/shop" className="card" style={{ textDecoration: 'none' }}>
                  <div className="card-body">
                    <span className="feature-icon"><Icon name="star" /></span>
                    <h4 className="card-title">수강 신청</h4>
                    <p className="card-text">교육 과정 및 프로그램 수강 신청은 여기에서.</p>
                  </div>
                </Link>
                <Link to="/news/contact" className="card" style={{ textDecoration: 'none' }}>
                  <div className="card-body">
                    <span className="feature-icon"><Icon name="messageCircle" /></span>
                    <h4 className="card-title">문의하기</h4>
                    <p className="card-text">궁금한 사항은 언제든 문의해주세요.</p>
                  </div>
                </Link>
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
