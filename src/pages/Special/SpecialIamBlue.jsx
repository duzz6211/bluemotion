import { Link } from 'react-router-dom'
import Icon from '../../components/Icon/Icon'
import HeroSection from '../../components/HeroSection/HeroSection'
import PageSidebar from '../../components/Sidebar/PageSidebar'
import { SITE } from '../../data/site'

export default function SpecialIamBlue() {
  return (
    <>
      <HeroSection
        title="나는 블루"
        subtitle="운동센터를 넘어, 지역의 교류처로"
        size="sm"
        breadcrumb={[
          { label: '홈', to: '/' },
          { label: '특별활동', to: '/special/team-building' },
          { label: '나는 블루' },
        ]}
      />

      <section className="section">
        <div className="container">
          <div className="content-with-sidebar">
            <main className="main-content">
              <div className="info-box" style={{ textAlign: 'center' }}>
                <p style={{ fontSize: '1.25rem', fontWeight: 500, lineHeight: 1.7, margin: 0 }}>
                  &ldquo;단순한 운동센터를 넘어<br />
                  사람과의 정과 따뜻함을 나누는 공간이 되도록.&rdquo;
                </p>
              </div>

              <h3 className="mt-5">회원과 함께 만드는 문화</h3>
              <p>
                &lsquo;나는 블루&rsquo;는 블루모션 회원이라면 누구나 참여하는 센터 안의 문화입니다.
                수업만 하고 돌아가는 곳이 아니라, 한 지역에서 오래 얼굴을 보는 사이가 되는 것.
                그것이 블루모션이 지향하는 센터의 모습입니다.
              </p>

              <div className="grid-2 mt-4">
                <div className="info-item">
                  <span className="info-icon"><Icon name="star" /></span>
                  <div className="info-content">
                    <h4>이 달의 회원</h4>
                    <p>
                      매달 이 달의 회원을 선정합니다. 선정된 회원께는 정성스러운 메시지를 부탁드리고,
                      그 글은 월간블루에 함께 실립니다.
                    </p>
                  </div>
                </div>
                <div className="info-item">
                  <span className="info-icon"><Icon name="fileText" /></span>
                  <div className="info-content">
                    <h4>월간블루</h4>
                    <p>
                      한 달간의 센터 소식을 모아 발행하는 소식지입니다.
                      바쁠 때는 분기블루가 되기도 하지만, 빠짐없이 기록을 남기고 있습니다.
                    </p>
                  </div>
                </div>
                <div className="info-item">
                  <span className="info-icon"><Icon name="book" /></span>
                  <div className="info-content">
                    <h4>블루모션 스터디 데이</h4>
                    <p>
                      강사진이 함께 모여 공부하는 날입니다. 지금까지 네 차례 진행했고,
                      배운 내용은 곧바로 회원들의 수업에 반영됩니다.
                    </p>
                  </div>
                </div>
                <div className="info-item">
                  <span className="info-icon"><Icon name="heart" /></span>
                  <div className="info-content">
                    <h4>시즌 이벤트</h4>
                    <p>
                      크리스마스 장식과 점심반 회원들과의 식사, 키즈반 아이들 선물처럼
                      계절마다 소소한 이벤트가 이어집니다.
                    </p>
                  </div>
                </div>
              </div>

              <h3 className="mt-5">블루모션의 사람들</h3>
              <p>
                밥을 거르고도 운동하러 오시는 점심반 회원, 손수 만든 쿠키를 부끄럽게 쥐어주시는 분,
                둘째 산전 운동을 다시 맡기러 오시는 예비맘, 방학마다 타지에서 찾아오는 아이들.
                블루모션은 이런 분들로 채워져 있습니다.
              </p>
              <p>
                울진은 인구소멸 위험지역으로 분류되지만, 자연 속에서 화목한 가정이 많아
                아이도 많이 태어나는 특별한 지역입니다.
                그 안에서 세대를 가리지 않고 한 공간에 모이는 곳을 만드는 것이 저희 일입니다.
              </p>

              <h3 className="mt-5">언어는 달라도 움직임은 같다</h3>
              <div className="info-box mt-3">
                <p>
                  블루모션의 슬로건입니다. 결혼이민여성 대상 K-필라테스 강사과정을 진행하며
                  각국에서 온 교육생들과 하나의 의미로 묶기 위해 정한 문장이지만,
                  센터 전체에도 그대로 적용됩니다.
                  저학년 키즈부터 시니어까지, 남녀 구분 없이, 운동을 처음 하든 아니든
                  결국 중요한 것은 <strong>그 사람의 움직임</strong>이기 때문입니다.
                </p>
                <Link to="/education/global-pilates" className="btn btn-secondary btn-sm mt-2">
                  글로벌필라테스 과정 보기
                </Link>
              </div>

              <h3 className="mt-5">소식 받아보기</h3>
              <p>
                가장 빠른 소식은 인스타그램에, 자세한 기록은 블로그에 남깁니다.
              </p>
              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginTop: '1rem' }}>
                <a href={SITE.instagram} target="_blank" rel="noreferrer noopener" className="btn btn-primary">
                  <Icon name="instagram" /> 인스타그램
                </a>
                <a href={SITE.blog} target="_blank" rel="noreferrer noopener" className="btn btn-secondary">
                  <Icon name="externalLink" /> 네이버 블로그
                </a>
                <Link to="/news" className="btn btn-secondary">소식 전체보기</Link>
              </div>
            </main>

            <PageSidebar menu="special" />
          </div>
        </div>
      </section>
    </>
  )
}
