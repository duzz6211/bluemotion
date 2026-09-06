import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Icon from '../../components/Icon/Icon'
import HeroSection from '../../components/HeroSection/HeroSection'
import PageSidebar from '../../components/Sidebar/PageSidebar'
import { SITE } from '../../data/site'

/* 공지사항: 모집 · 채용 · 이벤트 성격의 소식만 추립니다. */
const NOTICE_CATEGORIES = ['교육', '채용', '이벤트']

export default function NewsNotice() {
  const [items, setItems] = useState([])
  const [status, setStatus] = useState('loading')

  useEffect(() => {
    let cancelled = false
    fetch('/news.json')
      .then((res) => {
        if (!res.ok) throw new Error(res.status)
        return res.json()
      })
      .then((data) => {
        if (cancelled) return
        setItems(data.filter((item) => NOTICE_CATEGORIES.includes(item.category)))
        setStatus('ready')
      })
      .catch(() => {
        if (!cancelled) setStatus('error')
      })
    return () => {
      cancelled = true
    }
  }, [])

  return (
    <>
      <HeroSection
        title="공지사항"
        subtitle="교육생 모집 · 강사 채용 · 시즌 이벤트 안내"
        size="sm"
        breadcrumb={[
          { label: '홈', to: '/' },
          { label: '공지/뉴스', to: '/news' },
          { label: '공지사항' },
        ]}
      />

      <section className="section">
        <div className="container">
          <div className="content-with-sidebar">
            <main className="main-content">
              <div className="info-box">
                <h4 className="info-box-title"><Icon name="award" /> 상시 안내</h4>
                <ul>
                  <li>
                    <strong>FMTA 기능성필라테스 지도자 과정</strong>은 기수별로 모집합니다.
                    평일반(월수 / 화목 / 금)과 주말반(토 / 일 / 토 · 일)으로 나뉘며,
                    모집 현황에 따라 반 구성이 결정됩니다.
                    <Link to="/education/functional-pilates"> 과정 상세보기</Link>
                  </li>
                  <li>
                    <strong>강사 채용</strong>은 정직원과 파트타이머(오전 / 오후 / 저녁)로 모집하며,
                    평일 주 5일 근무(주말 · 공휴일 휴무)입니다.
                    이력서는 <a href={'mailto:' + SITE.email}>{SITE.email}</a>로 보내주신 뒤
                    문자를 남겨주시면 면접 일정을 안내드립니다.
                  </li>
                  <li>
                    <strong>비치 필라테스 · 플로팅 온 더 블루</strong>는 시즌제로 운영되며
                    일정은 그때그때 공지합니다. 자리가 빠르게 차니 미리 문의해 주세요.
                  </li>
                  <li>
                    센터는 <strong>{SITE.hours}</strong>로 운영됩니다. {SITE.hoursNote}
                  </li>
                </ul>
              </div>

              <h3 className="mt-5">지난 공지</h3>

              {status === 'loading' && <p className="text-muted">불러오는 중입니다.</p>}

              {status === 'error' && (
                <p className="text-muted">
                  목록을 불러오지 못했습니다.
                  <a href={SITE.blog} target="_blank" rel="noreferrer noopener"> 공식 블로그</a>에서 확인해 주세요.
                </p>
              )}

              {status === 'ready' && (
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
                      {items.map((item) => (
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
              )}

              <div className="info-box mt-4" style={{ textAlign: 'center' }}>
                <h4>공지 내용이 궁금하시다면</h4>
                <p>모집 일정과 조건은 시점에 따라 달라집니다. 전화 주시면 바로 안내드립니다.</p>
                <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                  <a href={'tel:' + SITE.phone} className="btn btn-primary">{SITE.phone}</a>
                  <Link to="/news" className="btn btn-secondary">전체소식 보기</Link>
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
