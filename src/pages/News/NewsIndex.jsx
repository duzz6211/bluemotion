import { useEffect, useMemo, useState } from 'react'
import Icon from '../../components/Icon/Icon'
import HeroSection from '../../components/HeroSection/HeroSection'
import PageSidebar from '../../components/Sidebar/PageSidebar'
import { SITE } from '../../data/site'

const PER_PAGE = 10

export default function NewsIndex() {
  const [items, setItems] = useState([])
  const [status, setStatus] = useState('loading')
  const [category, setCategory] = useState('전체')
  const [page, setPage] = useState(1)

  useEffect(() => {
    let cancelled = false
    fetch('/news.json')
      .then((res) => {
        if (!res.ok) throw new Error(res.status)
        return res.json()
      })
      .then((data) => {
        if (cancelled) return
        setItems(data)
        setStatus('ready')
      })
      .catch(() => {
        if (!cancelled) setStatus('error')
      })
    return () => {
      cancelled = true
    }
  }, [])

  const categories = useMemo(
    () => ['전체', ...Array.from(new Set(items.map((item) => item.category)))],
    [items],
  )

  const filtered = useMemo(
    () => (category === '전체' ? items : items.filter((item) => item.category === category)),
    [items, category],
  )

  const totalPages = Math.max(1, Math.ceil(filtered.length / PER_PAGE))
  const current = Math.min(page, totalPages)
  const visible = filtered.slice((current - 1) * PER_PAGE, current * PER_PAGE)

  const selectCategory = (next) => {
    setCategory(next)
    setPage(1)
  }

  return (
    <>
      <HeroSection
        title="전체소식"
        subtitle="블루모션트레이닝과 FMTA의 활동 기록"
        size="sm"
        breadcrumb={[
          { label: '홈', to: '/' },
          { label: '공지/뉴스', to: '/news' },
          { label: '전체소식' },
        ]}
      />

      <section className="section">
        <div className="container">
          <div className="content-with-sidebar">
            <main className="main-content">
              <p>
                센터의 수업, 교육과정, 지역 연계 활동 소식을 모았습니다.
                각 항목을 누르면 공식 블로그의 원문으로 이동합니다.
              </p>

              {status === 'loading' && <p className="text-muted mt-4">소식을 불러오는 중입니다.</p>}

              {status === 'error' && (
                <div className="info-box mt-4">
                  <h4 className="info-box-title">소식을 불러오지 못했습니다</h4>
                  <p>
                    잠시 후 다시 시도해 주세요. 최신 소식은
                    <a href={SITE.blog} target="_blank" rel="noreferrer noopener"> 공식 블로그</a>에서
                    바로 확인하실 수 있습니다.
                  </p>
                </div>
              )}

              {status === 'ready' && (
                <>
                  <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', margin: '1.5rem 0' }}>
                    {categories.map((name) => (
                      <button
                        key={name}
                        type="button"
                        className={`btn btn-sm ${category === name ? 'btn-primary' : 'btn-secondary'}`}
                        onClick={() => selectCategory(name)}
                      >
                        {name}
                      </button>
                    ))}
                  </div>

                  <p className="text-muted">총 {filtered.length}건</p>

                  <div className="table-wrapper mt-3">
                    <table className="table">
                      <thead>
                        <tr>
                          <th style={{ width: '90px' }}>분류</th>
                          <th>제목</th>
                          <th style={{ width: '110px' }}>날짜</th>
                        </tr>
                      </thead>
                      <tbody>
                        {visible.map((item) => (
                          <tr key={item.id}>
                            <td>{item.category}</td>
                            <td>
                              <a href={item.link} target="_blank" rel="noreferrer noopener">
                                {item.title}
                              </a>
                              <p className="text-muted" style={{ margin: '0.25rem 0 0', fontSize: 'var(--font-size-sm)' }}>
                                {item.summary}
                              </p>
                            </td>
                            <td>{item.date}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  {totalPages > 1 && (
                    <div className="pagination mt-4">
                      <button
                        type="button"
                        className={`pagination-btn${current === 1 ? ' disabled' : ''}`}
                        onClick={() => setPage((p) => Math.max(1, p - 1))}
                        disabled={current === 1}
                      >
                        이전
                      </button>
                      {Array.from({ length: totalPages }, (_, i) => i + 1).map((n) => (
                        <button
                          key={n}
                          type="button"
                          className={`pagination-btn${n === current ? ' active' : ''}`}
                          onClick={() => setPage(n)}
                        >
                          {n}
                        </button>
                      ))}
                      <button
                        type="button"
                        className={`pagination-btn${current === totalPages ? ' disabled' : ''}`}
                        onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
                        disabled={current === totalPages}
                      >
                        다음
                      </button>
                    </div>
                  )}
                </>
              )}

              <div className="info-box mt-5">
                <h4 className="info-box-title"><Icon name="externalLink" /> 더 많은 소식</h4>
                <p>
                  가장 빠른 소식은 인스타그램에, 자세한 기록은 네이버 블로그에 남기고 있습니다.
                </p>
                <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginTop: '0.75rem' }}>
                  <a href={SITE.instagram} target="_blank" rel="noreferrer noopener" className="btn btn-secondary btn-sm">
                    <Icon name="instagram" /> 인스타그램
                  </a>
                  <a href={SITE.blog} target="_blank" rel="noreferrer noopener" className="btn btn-secondary btn-sm">
                    네이버 블로그
                  </a>
                </div>
              </div>
            </main>

            <PageSidebar menu="news" />
          </div>
        </div>
      </section>
    </>
  )
}
