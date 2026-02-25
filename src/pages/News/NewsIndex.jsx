import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import HeroSection from '../../components/HeroSection/HeroSection'
import SubNav from '../../components/SubNav/SubNav'

const newsNavItems = [
  { to: '/news', label: '전체 소식' },
  { to: '/news/sns', label: 'SNS' },
  { to: '/news/contact', label: '문의' },
]

const categoryColors = {
  '공지': '#3b82f6',
  '교육': '#10b981',
  '프로그램': '#8b5cf6',
  '이벤트': '#f59e0b',
  '제휴': '#ef4444',
}

const ITEMS_PER_PAGE = 10

export default function NewsIndex() {
  const [news, setNews] = useState([])
  const [page, setPage] = useState(1)
  const [filterCategory, setFilterCategory] = useState('전체')

  useEffect(() => {
    fetch('/news.json')
      .then((res) => res.json())
      .then((data) => setNews(data))
      .catch(() => setNews([]))
  }, [])

  const categories = ['전체', ...new Set(news.map((item) => item.category))]

  const filteredNews = filterCategory === '전체'
    ? news
    : news.filter((item) => item.category === filterCategory)

  const totalPages = Math.ceil(filteredNews.length / ITEMS_PER_PAGE)
  const paginatedNews = filteredNews.slice(
    (page - 1) * ITEMS_PER_PAGE,
    page * ITEMS_PER_PAGE
  )

  const handleCategoryChange = (cat) => {
    setFilterCategory(cat)
    setPage(1)
  }

  return (
    <>
      <HeroSection
        title="소식"
        subtitle="블루모션의 새로운 소식을 전합니다"
        size="sm"
        breadcrumb={[
          { label: '홈', to: '/' },
          { label: '소식' },
        ]}
      />
      <SubNav items={newsNavItems} />

      <section className="section">
        <div className="container">
          {/* 카테고리 필터 */}
          <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '2rem' }}>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => handleCategoryChange(cat)}
                className={`btn btn-sm ${filterCategory === cat ? 'btn-primary' : 'btn-secondary'}`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* 뉴스 테이블 */}
          <div className="table-responsive">
            <table className="table">
              <thead>
                <tr>
                  <th style={{ width: '60px' }}>번호</th>
                  <th style={{ width: '90px' }}>분류</th>
                  <th>제목</th>
                  <th style={{ width: '120px' }}>날짜</th>
                </tr>
              </thead>
              <tbody>
                {paginatedNews.length > 0 ? (
                  paginatedNews.map((item) => (
                    <tr key={item.id}>
                      <td>{item.id}</td>
                      <td>
                        <span
                          className="program-badge"
                          style={{
                            backgroundColor: categoryColors[item.category] || '#6b7280',
                            color: '#fff',
                            fontSize: 'var(--font-size-xs, 0.75rem)',
                          }}
                        >
                          {item.category}
                        </span>
                      </td>
                      <td>
                        <strong>{item.title}</strong>
                        <p className="text-muted" style={{ fontSize: 'var(--font-size-sm)', margin: '0.25rem 0 0' }}>
                          {item.summary}
                        </p>
                      </td>
                      <td className="text-muted" style={{ fontSize: 'var(--font-size-sm)' }}>{item.date}</td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={4} style={{ textAlign: 'center', padding: '2rem' }}>
                      소식이 없습니다.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>

          {/* 페이지네이션 */}
          {totalPages > 1 && (
            <div style={{ display: 'flex', justifyContent: 'center', gap: '0.5rem', marginTop: '2rem' }}>
              <button
                className="btn btn-secondary btn-sm"
                onClick={() => setPage((p) => Math.max(1, p - 1))}
                disabled={page === 1}
              >
                이전
              </button>
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
                <button
                  key={p}
                  className={`btn btn-sm ${page === p ? 'btn-primary' : 'btn-secondary'}`}
                  onClick={() => setPage(p)}
                >
                  {p}
                </button>
              ))}
              <button
                className="btn btn-secondary btn-sm"
                onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
                disabled={page === totalPages}
              >
                다음
              </button>
            </div>
          )}

          <p className="text-muted text-center mt-3" style={{ fontSize: 'var(--font-size-sm)' }}>
            총 {filteredNews.length}건의 소식이 있습니다.
          </p>
        </div>
      </section>
    </>
  )
}
