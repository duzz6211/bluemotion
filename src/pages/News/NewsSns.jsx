import { Link } from 'react-router-dom'
import Icon from '../../components/Icon/Icon'
import HeroSection from '../../components/HeroSection/HeroSection'
import SubNav from '../../components/SubNav/SubNav'

const newsNavItems = [
  { to: '/news', label: '전체 소식' },
  { to: '/news/sns', label: 'SNS' },
  { to: '/news/contact', label: '문의' },
]

export default function NewsSns() {
  return (
    <>
      <HeroSection
        title="SNS"
        subtitle="블루모션의 다양한 SNS 채널"
        size="sm"
        breadcrumb={[
          { label: '홈', to: '/' },
          { label: '소식', to: '/news' },
          { label: 'SNS' },
        ]}
      />
      <SubNav items={newsNavItems} />

      <section className="section">
        <div className="container">
          <h3>SNS 채널</h3>
          <p>블루모션의 소식을 가장 빠르게 만날 수 있는 SNS 채널을 소개합니다. 팔로우하고 최신 소식을 받아보세요.</p>

          <div className="grid-3 mb-4 mt-4">
            {/* 인스타그램 */}
            <div className="card text-center">
              <div className="card-body">
                <span className="feature-icon" style={{ fontSize: '3rem', color: '#E1306C' }}><Icon name="instagram" /></span>
                <h4 className="card-title mt-2">Instagram</h4>
                <p className="card-text">
                  블루모션의 일상, 레슨 현장, 프로그램 후기 등
                  생생한 사진과 영상을 만나보세요.
                </p>
                <p style={{ fontWeight: 600 }}>@bluemotion_training</p>
                <a
                  href="https://www.instagram.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary btn-sm"
                >
                  팔로우하기
                </a>
              </div>
            </div>

            {/* 블로그 */}
            <div className="card text-center">
              <div className="card-body">
                <span className="feature-icon" style={{ fontSize: '3rem', color: '#03C75A' }}><Icon name="fileText" /></span>
                <h4 className="card-title mt-2">네이버 블로그</h4>
                <p className="card-text">
                  교육 정보, 운동 팁, 프로그램 소식 등
                  유익한 콘텐츠를 블로그에서 확인하세요.
                </p>
                <p style={{ fontWeight: 600 }}>blog.naver.com/bluemotion</p>
                <a
                  href="https://blog.naver.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary btn-sm"
                >
                  블로그 방문
                </a>
              </div>
            </div>

            {/* 유튜브 */}
            <div className="card text-center">
              <div className="card-body">
                <span className="feature-icon" style={{ fontSize: '3rem', color: '#FF0000' }}><Icon name="youtube" /></span>
                <h4 className="card-title mt-2">YouTube</h4>
                <p className="card-text">
                  교육 영상, 프로그램 소개, 운동 가이드 등
                  다양한 영상 콘텐츠를 구독해보세요.
                </p>
                <p style={{ fontWeight: 600 }}>블루모션트레이닝</p>
                <a
                  href="https://www.youtube.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary btn-sm"
                >
                  구독하기
                </a>
              </div>
            </div>
          </div>

          {/* SNS 활용 안내 */}
          <div className="info-box mt-4">
            <h4 className="info-box-title">SNS 소통 안내</h4>
            <ul>
              <li>SNS를 통해 프로그램 예약 및 상담이 가능합니다. (인스타그램 DM)</li>
              <li>블로그에서 교육과정 상세 후기와 지도자 인터뷰를 확인할 수 있습니다.</li>
              <li>유튜브에서 무료 운동 가이드 영상을 시청할 수 있습니다.</li>
              <li>해시태그 <strong>#블루모션트레이닝 #FMTA #플로팅온더블루</strong> 로 검색해보세요.</li>
            </ul>
          </div>
        </div>
      </section>
    </>
  )
}
