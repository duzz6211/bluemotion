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

export default function ShopInstructorCourses() {
  return (
    <>
      <HeroSection
        title="강사과정 신청"
        subtitle="FMTA 공인 지도자 과정 수강 등록"
        size="sm"
        breadcrumb={[
          { label: '홈', to: '/' },
          { label: '수강신청', to: '/shop' },
          { label: '강사과정' },
        ]}
      />
      <SubNav items={shopNavItems} />

      <section className="section">
        <div className="container">
          <h3>강사과정 안내</h3>
          <p>FMTA에서 운영하는 전문 지도자 양성 과정을 신청하세요. 과정 상세 내용은 각 과정 페이지에서 확인할 수 있습니다.</p>

          <div className="grid-2 mb-4 mt-4">
            {/* 기능해부학 */}
            <div className="card">
              <div className="card-body">
                <span className="program-badge education">기초과정</span>
                <h4 className="card-title">기능해부학 지도자 과정</h4>
                <div className="table-responsive">
                  <table className="table">
                    <tbody>
                      <tr><th>기간</th><td>12주 (주 1~2회)</td></tr>
                      <tr><th>정원</th><td>최대 12명</td></tr>
                      <tr><th>자격</th><td>운동 전공자 / 관련 종사자</td></tr>
                      <tr><th>교육비</th><td>전화 문의</td></tr>
                    </tbody>
                  </table>
                </div>
                <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                  <Link to="/education/functional-anatomy" className="btn btn-secondary btn-sm">상세보기</Link>
                  <Link to="/news/contact" className="btn btn-primary btn-sm">수강 문의</Link>
                </div>
              </div>
            </div>

            {/* 기능성필라테스 */}
            <div className="card">
              <div className="card-body">
                <span className="program-badge education">심화과정</span>
                <h4 className="card-title">기능성필라테스 지도자 과정</h4>
                <div className="table-responsive">
                  <table className="table">
                    <tbody>
                      <tr><th>기간</th><td>16주 (주 2회)</td></tr>
                      <tr><th>정원</th><td>최대 10명</td></tr>
                      <tr><th>자격</th><td>기능해부학 이수 / 필라테스 경력자</td></tr>
                      <tr><th>교육비</th><td>전화 문의</td></tr>
                    </tbody>
                  </table>
                </div>
                <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                  <Link to="/education/functional-pilates" className="btn btn-secondary btn-sm">상세보기</Link>
                  <Link to="/news/contact" className="btn btn-primary btn-sm">수강 문의</Link>
                </div>
              </div>
            </div>

            {/* 결혼임신여성운동 */}
            <div className="card">
              <div className="card-body">
                <span className="program-badge special">전문과정</span>
                <h4 className="card-title">결혼임신여성운동 전문가 과정</h4>
                <div className="table-responsive">
                  <table className="table">
                    <tbody>
                      <tr><th>기간</th><td>8주 (주 1~2회)</td></tr>
                      <tr><th>정원</th><td>최대 8명</td></tr>
                      <tr><th>자격</th><td>필라테스/요가 지도자 자격 보유</td></tr>
                      <tr><th>교육비</th><td>전화 문의</td></tr>
                    </tbody>
                  </table>
                </div>
                <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                  <Link to="/education/marriage-pregnancy" className="btn btn-secondary btn-sm">상세보기</Link>
                  <Link to="/news/contact" className="btn btn-primary btn-sm">수강 문의</Link>
                </div>
              </div>
            </div>

            {/* 플로팅 전문가 */}
            <div className="card">
              <div className="card-body">
                <span className="program-badge floating">전문과정</span>
                <h4 className="card-title">플로팅 전문가 과정</h4>
                <div className="table-responsive">
                  <table className="table">
                    <tbody>
                      <tr><th>기간</th><td>4주 집중 (주 3~4회)</td></tr>
                      <tr><th>정원</th><td>최대 6명</td></tr>
                      <tr><th>자격</th><td>필라테스/요가 지도자, 수영 가능자</td></tr>
                      <tr><th>교육비</th><td>전화 문의</td></tr>
                    </tbody>
                  </table>
                </div>
                <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                  <Link to="/education/floating-expert" className="btn btn-secondary btn-sm">상세보기</Link>
                  <Link to="/news/contact" className="btn btn-primary btn-sm">수강 문의</Link>
                </div>
              </div>
            </div>
          </div>

          {/* 온라인 */}
          <div className="card mb-4">
            <div className="card-body">
              <span className="program-badge online">온라인</span>
              <h4 className="card-title">온라인 교육과정</h4>
              <p className="card-text">시간과 장소 제약 없이 학습할 수 있는 비대면 교육 프로그램</p>
              <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                <Link to="/education/online-course" className="btn btn-secondary btn-sm">상세보기</Link>
                <Link to="/news/contact" className="btn btn-primary btn-sm">수강 문의</Link>
              </div>
            </div>
          </div>

          <div className="info-box mt-4">
            <h4 className="info-box-title"><Icon name="phone" /> 수강 등록 안내</h4>
            <ul>
              <li>수강 신청은 전화 또는 이메일로 접수 후 안내를 받으실 수 있습니다.</li>
              <li>교육비는 과정 및 기수에 따라 상이할 수 있으므로 반드시 사전 문의 바랍니다.</li>
              <li>등록 시 신분증 사본과 자격증 사본(해당 시)을 제출해주세요.</li>
              <li>교육비 분할 납부가 가능합니다. (2~3회 분할)</li>
            </ul>
          </div>
        </div>
      </section>
    </>
  )
}
