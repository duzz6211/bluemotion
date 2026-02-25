import { Link } from 'react-router-dom'
import Icon from '../../components/Icon/Icon'
import HeroSection from '../../components/HeroSection/HeroSection'
import SubNav from '../../components/SubNav/SubNav'

const newsNavItems = [
  { to: '/news', label: '전체 소식' },
  { to: '/news/sns', label: 'SNS' },
  { to: '/news/contact', label: '문의' },
]

export default function NewsContact() {
  return (
    <>
      <HeroSection
        title="문의"
        subtitle="블루모션에 문의하세요"
        size="sm"
        breadcrumb={[
          { label: '홈', to: '/' },
          { label: '소식', to: '/news' },
          { label: '문의' },
        ]}
      />
      <SubNav items={newsNavItems} />

      <section className="section">
        <div className="container">
          <div className="grid-2 mb-4">
            {/* 연락처 정보 */}
            <div>
              <h3>연락처 정보</h3>
              <div className="info-box mb-3">
                <div className="info-item" style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start', marginBottom: '1.5rem' }}>
                  <span className="info-icon" style={{ fontSize: '1.5rem' }}><Icon name="phone" /></span>
                  <div>
                    <strong>전화</strong>
                    <p>054-XXX-XXXX</p>
                    <p className="text-muted" style={{ fontSize: 'var(--font-size-sm)' }}>평일 09:00 - 18:00</p>
                  </div>
                </div>

                <div className="info-item" style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start', marginBottom: '1.5rem' }}>
                  <span className="info-icon" style={{ fontSize: '1.5rem' }}><Icon name="mail" /></span>
                  <div>
                    <strong>이메일</strong>
                    <p>info@bluemotion.co.kr</p>
                    <p className="text-muted" style={{ fontSize: 'var(--font-size-sm)' }}>24시간 접수 (영업일 기준 1~2일 내 답변)</p>
                  </div>
                </div>

                <div className="info-item" style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start', marginBottom: '1.5rem' }}>
                  <span className="info-icon" style={{ fontSize: '1.5rem' }}><Icon name="mapPin" /></span>
                  <div>
                    <strong>주소</strong>
                    <p>경상북도 울진군 울진읍 (상세주소)</p>
                  </div>
                </div>

                <div className="info-item" style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start', marginBottom: '1.5rem' }}>
                  <span className="info-icon" style={{ fontSize: '1.5rem' }}><Icon name="clock" /></span>
                  <div>
                    <strong>운영시간</strong>
                    <p>
                      평일 09:00 - 21:00<br/>
                      토요일 09:00 - 18:00<br/>
                      일요일/공휴일 휴무
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* 문의 분야 안내 */}
            <div>
              <h3>문의 분야별 안내</h3>
              <div className="card mb-3">
                <div className="card-body">
                  <h4 className="card-title"><Icon name="user" /> 레슨 문의</h4>
                  <p className="card-text">개인/그룹 필라테스 레슨, 체험 레슨, 임산부 프로그램 등</p>
                  <p><strong>전화:</strong> 054-XXX-XXXX</p>
                </div>
              </div>
              <div className="card mb-3">
                <div className="card-body">
                  <h4 className="card-title"><Icon name="graduationCap" /> 교육과정 문의</h4>
                  <p className="card-text">FMTA 지도자 과정, 온라인 교육, 자격증 관련 문의</p>
                  <p><strong>이메일:</strong> info@bluemotion.co.kr</p>
                </div>
              </div>
              <div className="card mb-3">
                <div className="card-body">
                  <h4 className="card-title"><Icon name="waves" /> 플로팅 프로그램 문의</h4>
                  <p className="card-text">플로팅온더블루 예약, 단체 프로그램, 시즌 안내</p>
                  <p><strong>전화:</strong> 054-XXX-XXXX</p>
                </div>
              </div>
              <div className="card mb-3">
                <div className="card-body">
                  <h4 className="card-title"><Icon name="handshake" /> 제휴/협력 문의</h4>
                  <p className="card-text">기관 제휴, 단체 프로그램, 협약 관련 문의</p>
                  <p><strong>이메일:</strong> info@bluemotion.co.kr</p>
                </div>
              </div>
            </div>
          </div>

          {/* SNS 바로가기 */}
          <div className="info-box mt-4" style={{ textAlign: 'center' }}>
            <h4>SNS로도 문의하실 수 있습니다</h4>
            <p>인스타그램 DM 또는 네이버 블로그 댓글로도 문의 가능합니다.</p>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link to="/news/sns" className="btn btn-secondary">SNS 채널 보기</Link>
              <Link to="/bluemotion/location" className="btn btn-secondary">오시는 길</Link>
            </div>
          </div>

          {/* 계좌 정보 */}
          <div className="info-box mt-4">
            <h4 className="info-box-title"><Icon name="clipboard" /> 입금 계좌 안내</h4>
            <p><strong>농협은행 XXX-XXXX-XXXX-XX (예금주: FMTA)</strong></p>
            <p className="text-muted" style={{ fontSize: 'var(--font-size-sm)' }}>
              * 교육비/레슨비 입금 시 수강생 이름으로 입금 부탁드립니다.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
