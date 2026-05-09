import { Link, useLocation } from 'react-router-dom'
import Icon from '../../components/Icon/Icon'
import HeroSection from '../../components/HeroSection/HeroSection'

export default function NewsContact() {
  const location = useLocation()

  return (
    <>
      <HeroSection
        title="문의"
        subtitle="블루모션 문의 안내"
        size="sm"
        breadcrumb={[
          { label: '홈', to: '/' },
          { label: '공지/뉴스', to: '/news' },
          { label: '문의' },
        ]}
      />

      <section className="section">
        <div className="container">
          <div className="content-with-sidebar">
            <main className="main-content">
              <div className="placeholder-section" style={{ padding: '4rem 0', textAlign: 'center' }}>
                <h3>페이지를 구성하는 중입니다</h3>
                <p className="mt-3">곧 자세한 내용을 안내드리겠습니다.</p>
              </div>
            </main>

            <aside className="sidebar">
              <nav className="sidebar-menu">
                <h3 className="sidebar-title">공지/뉴스</h3>
                <Link to="/news" className={`sidebar-link${location.pathname === '/news' ? ' active' : ''}`}>전체소식</Link>
                <Link to="/news/notice" className={`sidebar-link${location.pathname === '/news/notice' ? ' active' : ''}`}>공지사항</Link>
                <Link to="/news/sns" className={`sidebar-link${location.pathname === '/news/sns' ? ' active' : ''}`}>SNS</Link>
                <Link to="/news/contact" className={`sidebar-link${location.pathname === '/news/contact' ? ' active' : ''}`}>문의</Link>
              </nav>
              <div className="info-box mt-3">
                <h4 className="info-box-title">문의</h4>
                <dl>
                  <dt><Icon name="phone" /></dt><dd>054-XXX-XXXX</dd>
                  <dt><Icon name="mail" /></dt><dd>info@bluemotion.co.kr</dd>
                </dl>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </>
  )
}
