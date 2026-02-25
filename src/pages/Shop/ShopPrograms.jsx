import { Link } from 'react-router-dom'
import Icon from '../../components/Icon/Icon'
import HeroSection from '../../components/HeroSection/HeroSection'
import SubNav from '../../components/SubNav/SubNav'

const shopNavItems = [
  { to: '/shop', label: '전체' },
  { to: '/shop/programs', label: '프로그램' },
  { to: '/shop/lessons', label: '레슨' },
  { to: '/shop/instructor-courses', label: '강사과정' },
  { to: '/shop/floating', label: '플로팅온더블루' },
]

export default function ShopPrograms() {
  return (
    <>
      <HeroSection
        title="프로그램 신청"
        subtitle="특화 프로그램 패키지"
        size="sm"
        breadcrumb={[
          { label: '홈', to: '/' },
          { label: '수강신청', to: '/shop' },
          { label: '프로그램' },
        ]}
      />
      <SubNav items={shopNavItems} />

      <section className="section">
        <div className="container">
          <h3>프로그램 패키지</h3>
          <p>블루모션에서 운영하는 특화 프로그램 패키지를 소개합니다.</p>

          <div className="grid-2 mb-4 mt-4">
            {/* 임산부 개인 */}
            <div className="card">
              <div className="card-body">
                <span className="program-badge special">임산부</span>
                <h4 className="card-title">임산부 개인 레슨 패키지</h4>
                <p className="card-text">산전·산후 전문 지도자와 1:1 맞춤형 케어 프로그램</p>
                <div className="table-responsive">
                  <table className="table">
                    <tbody>
                      <tr><td>10회 패키지</td><td><strong>720,000원</strong></td></tr>
                      <tr><td>20회 패키지</td><td><strong>1,360,000원</strong></td></tr>
                    </tbody>
                  </table>
                </div>
                <Link to="/special-maternity/private" className="btn btn-secondary btn-sm">상세보기</Link>
              </div>
            </div>

            {/* 임산부 그룹 */}
            <div className="card">
              <div className="card-body">
                <span className="program-badge special">임산부</span>
                <h4 className="card-title">임산부 그룹 레슨 패키지</h4>
                <p className="card-text">2~4인 소그룹 임산부 전용 운동 프로그램</p>
                <div className="table-responsive">
                  <table className="table">
                    <tbody>
                      <tr><td>10회 패키지</td><td><strong>360,000원</strong></td></tr>
                      <tr><td>20회 패키지</td><td><strong>680,000원</strong></td></tr>
                    </tbody>
                  </table>
                </div>
                <Link to="/special-maternity/group" className="btn btn-secondary btn-sm">상세보기</Link>
              </div>
            </div>

            {/* 임산부 부부 */}
            <div className="card">
              <div className="card-body">
                <span className="program-badge special">임산부</span>
                <h4 className="card-title">부부 레슨 패키지</h4>
                <p className="card-text">배우자와 함께하는 출산 준비 운동 프로그램</p>
                <div className="table-responsive">
                  <table className="table">
                    <tbody>
                      <tr><td>5회 패키지</td><td><strong>450,000원</strong></td></tr>
                      <tr><td>10회 패키지</td><td><strong>850,000원</strong></td></tr>
                    </tbody>
                  </table>
                </div>
                <Link to="/special-maternity/couple" className="btn btn-secondary btn-sm">상세보기</Link>
              </div>
            </div>

            {/* 시니어 프로그램 */}
            <div className="card">
              <div className="card-body">
                <span className="program-badge education">건강</span>
                <h4 className="card-title">시니어 건강 프로그램</h4>
                <p className="card-text">65세 이상 시니어를 위한 건강 운동 프로그램</p>
                <div className="table-responsive">
                  <table className="table">
                    <tbody>
                      <tr><td>10회 패키지</td><td><strong>300,000원</strong></td></tr>
                      <tr><td>20회 패키지</td><td><strong>560,000원</strong></td></tr>
                    </tbody>
                  </table>
                </div>
                <span className="text-muted" style={{ fontSize: 'var(--font-size-sm)' }}>* 그룹 레슨 기준</span>
              </div>
            </div>
          </div>

          <div className="info-box mt-4" style={{ textAlign: 'center' }}>
            <h4>프로그램 상담</h4>
            <p>프로그램 선택이 어려우시다면 상담을 받아보세요.</p>
            <Link to="/news/contact" className="btn btn-primary">상담 문의</Link>
          </div>
        </div>
      </section>
    </>
  )
}
