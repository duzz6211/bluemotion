import { Link, useLocation } from 'react-router-dom'
import Icon from '../../components/Icon/Icon'
import HeroSection from '../../components/HeroSection/HeroSection'

export default function MaternityCoupleLesson() {
  const location = useLocation()

  return (
    <>
      <HeroSection
        title="부부 레슨"
        subtitle="배우자와 함께하는 출산 준비 프로그램"
        size="sm"
        breadcrumb={[
          { label: '홈', to: '/' },
          { label: '스페셜 임산부', to: '/special-maternity' },
          { label: '부부 레슨' },
        ]}
      />

      <section className="section">
        <div className="container">
          <div className="content-with-sidebar">
            <main className="main-content">
              <h3>부부 레슨</h3>
              <p>
                임산부와 배우자가 함께 참여하는 특별한 운동 프로그램입니다.
                출산 준비 과정을 부부가 함께 경험하며, 운동 파트너로서 서로를 돕고
                유대감을 강화할 수 있습니다. 배우자는 임산부를 보조하는 방법을 배우고,
                함께 호흡법과 이완법을 익혀 출산 과정에서도 큰 힘이 됩니다.
              </p>

              {/* 프로그램 구성 */}
              <h3 className="mt-4">프로그램 구성</h3>
              <div className="grid-3 mb-4">
                <div className="card text-center">
                  <div className="card-body">
                    <span className="feature-icon" style={{ fontSize: '2rem' }}><Icon name="activity" /></span>
                    <h4 className="card-title mt-2">파트너 스트레칭</h4>
                    <p className="card-text">배우자가 보조하는 스트레칭과 마사지 기법을 배웁니다. 임산부의 근육 긴장 완화에 효과적입니다.</p>
                  </div>
                </div>
                <div className="card text-center">
                  <div className="card-body">
                    <span className="feature-icon" style={{ fontSize: '2rem' }}><Icon name="heart" /></span>
                    <h4 className="card-title mt-2">호흡법 연습</h4>
                    <p className="card-text">출산 과정에서 활용할 수 있는 호흡법을 부부가 함께 연습합니다. 라마즈 호흡법 등을 익힙니다.</p>
                  </div>
                </div>
                <div className="card text-center">
                  <div className="card-body">
                    <span className="feature-icon" style={{ fontSize: '2rem' }}><Icon name="dumbbell" /></span>
                    <h4 className="card-title mt-2">파트너 운동</h4>
                    <p className="card-text">부부가 함께하는 운동 프로그램으로 임산부의 체력 유지와 배우자의 건강 관리를 동시에 합니다.</p>
                  </div>
                </div>
              </div>

              {/* 수업 흐름 */}
              <h3 className="mt-4">수업 흐름</h3>
              <div className="table-responsive mb-4">
                <table className="table">
                  <thead>
                    <tr>
                      <th>순서</th>
                      <th>내용</th>
                      <th>시간</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>부부 함께 워밍업 - 가벼운 스트레칭과 호흡 정리</td>
                      <td>10분</td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td>파트너 스트레칭 - 배우자 보조 스트레칭 및 마사지</td>
                      <td>15분</td>
                    </tr>
                    <tr>
                      <td>3</td>
                      <td>파트너 운동 - 부부 함께하는 필라테스 기반 운동</td>
                      <td>15분</td>
                    </tr>
                    <tr>
                      <td>4</td>
                      <td>호흡법/이완법 - 출산 준비 호흡법 연습 및 명상</td>
                      <td>10분</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* 요금 */}
              <h3 className="mt-4">요금 안내</h3>
              <div className="table-responsive mb-4">
                <table className="table">
                  <thead>
                    <tr>
                      <th>구분</th>
                      <th>회차</th>
                      <th>금액 (2인 기준)</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>부부 레슨</td>
                      <td>1회</td>
                      <td>100,000원</td>
                    </tr>
                    <tr>
                      <td>부부 레슨</td>
                      <td>5회</td>
                      <td>450,000원</td>
                    </tr>
                    <tr>
                      <td>부부 레슨</td>
                      <td>10회</td>
                      <td>850,000원</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* 참가 후기 */}
              <h3 className="mt-4">참여 후기</h3>
              <div className="info-box mb-3">
                <p>&ldquo;남편과 함께 운동하니 출산에 대한 불안감이 많이 줄었어요. 특히 호흡법을 같이 연습한 것이 실제 출산 때 큰 도움이 되었습니다.&rdquo;</p>
                <p className="text-muted" style={{ fontSize: 'var(--font-size-sm)' }}>- 김OO님 (임신 32주 참여)</p>
              </div>
              <div className="info-box mb-3">
                <p>&ldquo;아내의 운동을 도와주는 방법을 배울 수 있어서 좋았습니다. 집에서도 배운 대로 스트레칭을 해주고 있어요.&rdquo;</p>
                <p className="text-muted" style={{ fontSize: 'var(--font-size-sm)' }}>- 박OO님 (배우자 참여)</p>
              </div>

              <div className="text-center mt-4">
                <Link to="/shop/programs" className="btn btn-primary">수강 신청하기</Link>
              </div>
            </main>

            <aside className="sidebar">
              <nav className="sidebar-menu">
                <h3 className="sidebar-title">스페셜 임산부</h3>
                <Link to="/special-maternity" className={`sidebar-link${location.pathname === '/special-maternity' ? ' active' : ''}`}>프로그램 소개</Link>
                <Link to="/special-maternity/group" className={`sidebar-link${location.pathname === '/special-maternity/group' ? ' active' : ''}`}>그룹 레슨</Link>
                <Link to="/special-maternity/private" className={`sidebar-link${location.pathname === '/special-maternity/private' ? ' active' : ''}`}>개인 레슨</Link>
                <Link to="/special-maternity/couple" className={`sidebar-link${location.pathname === '/special-maternity/couple' ? ' active' : ''}`}>부부 레슨</Link>
                <Link to="/special-maternity/partners" className={`sidebar-link${location.pathname === '/special-maternity/partners' ? ' active' : ''}`}>협력 기관</Link>
                <Link to="/special-maternity/volunteer" className={`sidebar-link${location.pathname === '/special-maternity/volunteer' ? ' active' : ''}`}>봉사활동</Link>
                <Link to="/special-maternity/vision" className={`sidebar-link${location.pathname === '/special-maternity/vision' ? ' active' : ''}`}>비전</Link>
              </nav>
              <div className="info-box mt-3">
                <h4 className="info-box-title">상담 문의</h4>
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
