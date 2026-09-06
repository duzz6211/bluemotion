import { useEffect, useState } from 'react'
import Icon from '../../components/Icon/Icon'
import HeroSection from '../../components/HeroSection/HeroSection'
import PageSidebar from '../../components/Sidebar/PageSidebar'
import { SITE } from '../../data/site'

export default function NewsSns() {
  const [recent, setRecent] = useState([])

  useEffect(() => {
    let cancelled = false
    fetch('/news.json')
      .then((res) => (res.ok ? res.json() : []))
      .then((data) => {
        if (!cancelled) setRecent(data.slice(0, 6))
      })
      .catch(() => {})
    return () => {
      cancelled = true
    }
  }, [])

  return (
    <>
      <HeroSection
        title="SNS"
        subtitle="가장 빠른 소식은 인스타그램에서"
        size="sm"
        breadcrumb={[
          { label: '홈', to: '/' },
          { label: '공지/뉴스', to: '/news' },
          { label: 'SNS' },
        ]}
      />

      <section className="section">
        <div className="container">
          <div className="content-with-sidebar">
            <main className="main-content">
              <p>
                블루모션트레이닝은 두 개의 채널을 운영합니다.
                <strong> 인스타그램</strong>에는 수업 현장과 소식을 가장 빠르게 올리고,
                <strong> 네이버 블로그</strong>에는 프로그램 후기와 교육과정 기록을 자세히 남깁니다.
              </p>

              <div className="grid-2 mt-4">
                <div className="info-item">
                  <span className="info-icon"><Icon name="instagram" /></span>
                  <div className="info-content">
                    <h4>인스타그램</h4>
                    <p>
                      @bluemotion_training<br />
                      울진필라테스 · 물리치료사 · 블루모션
                    </p>
                    <a
                      href={SITE.instagram}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="btn btn-primary btn-sm mt-2"
                    >
                      팔로우하기
                    </a>
                  </div>
                </div>
                <div className="info-item">
                  <span className="info-icon"><Icon name="fileText" /></span>
                  <div className="info-content">
                    <h4>네이버 블로그</h4>
                    <p>
                      [FMTA] 블루모션트레이닝<br />
                      블루모션 X FMTA 아카이브
                    </p>
                    <a
                      href={SITE.blog}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="btn btn-primary btn-sm mt-2"
                    >
                      블로그 방문하기
                    </a>
                  </div>
                </div>
                <div className="info-item">
                  <span className="info-icon"><Icon name="mapPin" /></span>
                  <div className="info-content">
                    <h4>네이버 플레이스</h4>
                    <p>블루모션트레이닝 · 길찾기와 방문자 리뷰를 확인하실 수 있습니다.</p>
                    <a
                      href={SITE.mapUrl}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="btn btn-secondary btn-sm mt-2"
                    >
                      지도에서 보기
                    </a>
                  </div>
                </div>
                <div className="info-item">
                  <span className="info-icon"><Icon name="messageCircle" /></span>
                  <div className="info-content">
                    <h4>전화 상담</h4>
                    <p>
                      {SITE.phone}<br />
                      언제든 상담 및 방문 환영합니다.
                    </p>
                    <a href={'tel:' + SITE.phone} className="btn btn-secondary btn-sm mt-2">전화하기</a>
                  </div>
                </div>
              </div>

              <h3 className="mt-5">최근 블로그 글</h3>
              <div className="grid-3 mt-3">
                {recent.map((item) => (
                  <article key={item.id} className="card">
                    <div className="card-body">
                      <span className="text-muted" style={{ fontSize: 'var(--font-size-sm)' }}>
                        {item.date} · {item.category}
                      </span>
                      <h4 className="card-title">{item.title}</h4>
                      <p className="card-text">{item.summary}</p>
                      <a
                        href={item.link}
                        target="_blank"
                        rel="noreferrer noopener"
                        className="btn btn-secondary btn-sm"
                      >
                        원문 보기
                      </a>
                    </div>
                  </article>
                ))}
              </div>

              <div className="info-box mt-5">
                <h4 className="info-box-title"><Icon name="link" /> 이런 태그로 검색하시면 찾기 쉽습니다</h4>
                <p className="text-muted">
                  #울진필라테스 #울진블루모션 #블루모션트레이닝 #북면필라테스 #부구필라테스
                  #울진임산부필라테스 #울진키즈필라테스 #울진시니어필라테스 #울진물리치료사
                  #울진필라테스지도자과정 #플로팅온더블루 #FMTA #기능적움직임트레이닝협회
                </p>
              </div>
            </main>

            <PageSidebar menu="news" />
          </div>
        </div>
      </section>
    </>
  )
}
