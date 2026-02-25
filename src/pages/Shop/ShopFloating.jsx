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

export default function ShopFloating() {
  return (
    <>
      <HeroSection
        title="플로팅온더블루 예약"
        subtitle="바다에서 즐기는 특별한 체험 프로그램"
        size="sm"
        breadcrumb={[
          { label: '홈', to: '/' },
          { label: '수강신청', to: '/shop' },
          { label: '플로팅온더블루' },
        ]}
      />
      <SubNav items={shopNavItems} />

      <section className="section">
        <div className="container">
          <h3>플로팅온더블루 프로그램 예약</h3>
          <p>
            울진 바다에서 즐기는 특별한 움직임 체험 프로그램을 예약하세요.
            메인 시즌(5~9월)에 운영됩니다.
          </p>

          <div className="grid-2 mb-4 mt-4">
            {/* 플로팅 요가 */}
            <div className="card">
              <div className="card-image placeholder-image">[플로팅 요가]</div>
              <div className="card-body">
                <span className="program-badge floating">수중</span>
                <h4 className="card-title">플로팅 요가</h4>
                <p className="card-text">수면 위 플로팅 보드에서 즐기는 요가</p>
                <div className="table-responsive">
                  <table className="table">
                    <tbody>
                      <tr><td>소요시간</td><td>60분</td></tr>
                      <tr><td>정원</td><td>최대 8인</td></tr>
                      <tr><td>체험비</td><td><strong>50,000원/인</strong></td></tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            {/* 수중 필라테스 */}
            <div className="card">
              <div className="card-image placeholder-image">[수중 필라테스]</div>
              <div className="card-body">
                <span className="program-badge floating">수중</span>
                <h4 className="card-title">수중 필라테스</h4>
                <p className="card-text">물속에서 진행하는 필라테스 프로그램</p>
                <div className="table-responsive">
                  <table className="table">
                    <tbody>
                      <tr><td>소요시간</td><td>50분</td></tr>
                      <tr><td>정원</td><td>최대 6인</td></tr>
                      <tr><td>체험비</td><td><strong>60,000원/인</strong></td></tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            {/* 스노클링 */}
            <div className="card">
              <div className="card-image placeholder-image">[스노클링]</div>
              <div className="card-body">
                <span className="program-badge floating">체험</span>
                <h4 className="card-title">스노클링 체험</h4>
                <p className="card-text">울진 바다의 수중 세계를 탐험</p>
                <div className="table-responsive">
                  <table className="table">
                    <tbody>
                      <tr><td>소요시간</td><td>90분</td></tr>
                      <tr><td>정원</td><td>최대 10인</td></tr>
                      <tr><td>체험비</td><td><strong>45,000원/인</strong></td></tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            {/* 비치 무브먼트 */}
            <div className="card">
              <div className="card-image placeholder-image">[비치 무브먼트]</div>
              <div className="card-body">
                <span className="program-badge floating">해변</span>
                <h4 className="card-title">비치 무브먼트</h4>
                <p className="card-text">해변에서 즐기는 움직임 프로그램</p>
                <div className="table-responsive">
                  <table className="table">
                    <tbody>
                      <tr><td>소요시간</td><td>60분</td></tr>
                      <tr><td>정원</td><td>최대 15인</td></tr>
                      <tr><td>체험비</td><td><strong>35,000원/인</strong></td></tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>

          {/* 패키지 */}
          <h3 className="mt-4">패키지 상품</h3>
          <div className="grid-2 mb-4">
            <div className="info-box">
              <h4 className="info-box-title"><Icon name="star" /> 플로팅 풀 패키지</h4>
              <p>플로팅 요가 + 수중 필라테스 + 스노클링 (1일)</p>
              <p><strong style={{ fontSize: 'var(--font-size-xl)', color: 'var(--color-primary)' }}>130,000원/인</strong></p>
              <p className="text-muted" style={{ fontSize: 'var(--font-size-sm)' }}>개별 신청 대비 25,000원 할인</p>
            </div>
            <div className="info-box">
              <h4 className="info-box-title"><Icon name="sun" /> 하프데이 체험</h4>
              <p>플로팅 요가 + 비치 무브먼트 (반나절)</p>
              <p><strong style={{ fontSize: 'var(--font-size-xl)', color: 'var(--color-primary)' }}>75,000원/인</strong></p>
              <p className="text-muted" style={{ fontSize: 'var(--font-size-sm)' }}>개별 신청 대비 10,000원 할인</p>
            </div>
          </div>

          {/* 예약 안내 */}
          <div className="info-box mt-4">
            <h4 className="info-box-title"><Icon name="calendar" /> 예약 안내</h4>
            <ul>
              <li>운영 시즌: 5월 ~ 9월 (날씨에 따라 변동 가능)</li>
              <li>예약은 최소 3일 전까지 완료해주세요.</li>
              <li>10인 이상 단체 예약 시 할인이 적용됩니다.</li>
              <li>기상 악화 시 프로그램이 변경 또는 취소될 수 있으며, 전액 환불됩니다.</li>
              <li>예약 취소는 3일 전까지 전액 환불, 1일 전 50% 환불, 당일 취소 불가</li>
            </ul>
          </div>

          <div className="text-center mt-4">
            <Link to="/news/contact" className="btn btn-primary">예약 문의</Link>
          </div>
        </div>
      </section>
    </>
  )
}
