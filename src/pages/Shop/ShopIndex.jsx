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

export default function ShopIndex() {
  return (
    <>
      <HeroSection
        title="수강신청"
        subtitle="블루모션의 프로그램과 레슨을 신청하세요"
        size="sm"
        breadcrumb={[
          { label: '홈', to: '/' },
          { label: '수강신청' },
        ]}
      />
      <SubNav items={shopNavItems} />

      <section className="section">
        <div className="container">
          <h3>전체 카테고리</h3>
          <p>원하시는 카테고리를 선택하여 상세 내용을 확인하세요.</p>

          <div className="grid-2 mb-4 mt-4">
            <Link to="/shop/programs" className="card" style={{ textDecoration: 'none' }}>
              <div className="card-image placeholder-image">[프로그램 이미지]</div>
              <div className="card-body text-center">
                <span className="feature-icon" style={{ fontSize: '2rem' }}><Icon name="sparkles" /></span>
                <h4 className="card-title">프로그램</h4>
                <p className="card-text">
                  스페셜 임산부 프로그램, 시니어 건강 프로그램 등
                  특화된 프로그램 패키지를 신청하세요.
                </p>
                <span className="btn btn-primary btn-sm">바로가기</span>
              </div>
            </Link>

            <Link to="/shop/lessons" className="card" style={{ textDecoration: 'none' }}>
              <div className="card-image placeholder-image">[레슨 이미지]</div>
              <div className="card-body text-center">
                <span className="feature-icon" style={{ fontSize: '2rem' }}><Icon name="user" /></span>
                <h4 className="card-title">레슨</h4>
                <p className="card-text">
                  개인 레슨, 그룹 레슨, 체험 레슨 등
                  블루모션트레이닝 센터의 다양한 레슨을 신청하세요.
                </p>
                <span className="btn btn-primary btn-sm">바로가기</span>
              </div>
            </Link>

            <Link to="/shop/instructor-courses" className="card" style={{ textDecoration: 'none' }}>
              <div className="card-image placeholder-image">[강사과정 이미지]</div>
              <div className="card-body text-center">
                <span className="feature-icon" style={{ fontSize: '2rem' }}><Icon name="graduationCap" /></span>
                <h4 className="card-title">강사과정</h4>
                <p className="card-text">
                  FMTA 공인 지도자 과정을 신청하세요.
                  기능해부학, 기능성필라테스, 전문가 과정 등을 수강할 수 있습니다.
                </p>
                <span className="btn btn-primary btn-sm">바로가기</span>
              </div>
            </Link>

            <Link to="/shop/floating" className="card" style={{ textDecoration: 'none' }}>
              <div className="card-image placeholder-image">[플로팅 이미지]</div>
              <div className="card-body text-center">
                <span className="feature-icon" style={{ fontSize: '2rem' }}><Icon name="waves" /></span>
                <h4 className="card-title">플로팅온더블루</h4>
                <p className="card-text">
                  바다에서 즐기는 특별한 체험 프로그램을 예약하세요.
                  플로팅 요가, 수중 필라테스, 스노클링 등을 신청할 수 있습니다.
                </p>
                <span className="btn btn-primary btn-sm">바로가기</span>
              </div>
            </Link>
          </div>

          {/* 안내 */}
          <div className="info-box mt-4">
            <h4 className="info-box-title"><Icon name="phone" /> 신청 안내</h4>
            <ul>
              <li>온라인 신청 후 전화 또는 이메일로 확인 연락을 드립니다.</li>
              <li>결제는 계좌이체 또는 센터 방문 결제가 가능합니다.</li>
              <li>궁금한 사항은 전화(054-XXX-XXXX) 또는 <Link to="/news/contact">문의 페이지</Link>를 이용해주세요.</li>
            </ul>
          </div>
        </div>
      </section>
    </>
  )
}
