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

export default function ShopLessons() {
  return (
    <>
      <HeroSection
        title="레슨 신청"
        subtitle="블루모션트레이닝 센터 레슨"
        size="sm"
        breadcrumb={[
          { label: '홈', to: '/' },
          { label: '수강신청', to: '/shop' },
          { label: '레슨' },
        ]}
      />
      <SubNav items={shopNavItems} />

      <section className="section">
        <div className="container">
          <h3>레슨 요금표</h3>
          <p>블루모션트레이닝 센터에서 운영하는 레슨 요금을 안내합니다.</p>

          {/* 개인 레슨 */}
          <div className="card mb-4 mt-4">
            <div className="card-body">
              <h4 className="card-title"><Icon name="user" /> 개인 레슨 (1:1)</h4>
              <p className="card-text">전문 지도자와 1:1로 진행되는 맞춤형 필라테스 레슨</p>
              <div className="table-responsive">
                <table className="table">
                  <thead>
                    <tr>
                      <th>상품</th>
                      <th>횟수</th>
                      <th>금액</th>
                      <th>회당 가격</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>개인 레슨 1회</td>
                      <td>1회</td>
                      <td><strong>80,000원</strong></td>
                      <td>80,000원</td>
                    </tr>
                    <tr>
                      <td>개인 레슨 10회</td>
                      <td>10회</td>
                      <td><strong>720,000원</strong></td>
                      <td>72,000원</td>
                    </tr>
                    <tr>
                      <td>개인 레슨 20회</td>
                      <td>20회</td>
                      <td><strong>1,360,000원</strong></td>
                      <td>68,000원</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* 그룹 레슨 */}
          <div className="card mb-4">
            <div className="card-body">
              <h4 className="card-title"><Icon name="users" /> 그룹 레슨 (2~4인)</h4>
              <p className="card-text">소그룹으로 진행되는 필라테스 레슨 (매트 + 기구)</p>
              <div className="table-responsive">
                <table className="table">
                  <thead>
                    <tr>
                      <th>상품</th>
                      <th>횟수</th>
                      <th>금액</th>
                      <th>회당 가격</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>그룹 레슨 1회</td>
                      <td>1회</td>
                      <td><strong>40,000원</strong></td>
                      <td>40,000원</td>
                    </tr>
                    <tr>
                      <td>그룹 레슨 10회</td>
                      <td>10회</td>
                      <td><strong>360,000원</strong></td>
                      <td>36,000원</td>
                    </tr>
                    <tr>
                      <td>그룹 레슨 20회</td>
                      <td>20회</td>
                      <td><strong>680,000원</strong></td>
                      <td>34,000원</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* 체험 레슨 */}
          <div className="card mb-4">
            <div className="card-body">
              <h4 className="card-title"><Icon name="star" /> 체험 레슨</h4>
              <p className="card-text">처음 방문하시는 분을 위한 체험 레슨 (1인 1회 한정)</p>
              <div className="table-responsive">
                <table className="table">
                  <tbody>
                    <tr>
                      <td>1:1 체험 레슨</td>
                      <td>1회</td>
                      <td><strong>50,000원</strong></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* 유의사항 */}
          <div className="info-box mt-4">
            <h4 className="info-box-title"><Icon name="clipboard" /> 이용 안내</h4>
            <ul>
              <li>모든 금액은 부가세 포함 금액입니다.</li>
              <li>레슨 유효기간: 1회권 1개월, 10회권 3개월, 20회권 5개월</li>
              <li>레슨 예약 취소는 수업 24시간 전까지 가능합니다.</li>
              <li>당일 취소 및 노쇼는 1회 차감됩니다.</li>
              <li>결제: 계좌이체 또는 센터 방문 결제</li>
            </ul>
          </div>

          <div className="text-center mt-4">
            <Link to="/news/contact" className="btn btn-primary">레슨 상담 문의</Link>
          </div>
        </div>
      </section>
    </>
  )
}
