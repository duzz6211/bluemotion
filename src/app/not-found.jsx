export const metadata = {
  title: '페이지를 찾을 수 없습니다 | FMTA 블루모션',
  robots: { index: false },
}

export default function NotFound() {
  return (
    <div style={{ minHeight: '100vh', display: 'grid', placeContent: 'center', textAlign: 'center', color: '#16202e', wordBreak: 'keep-all' }}>
      <div>
        <small style={{ color: '#1a56e0', fontWeight: 700, letterSpacing: '.14em' }}>404</small>
        <h1 style={{ color: '#081a33', margin: '.4em 0' }}>페이지를 찾을 수 없습니다</h1>
        <p>주소가 바뀌었거나 삭제된 페이지입니다.</p>
        <a href="/" style={{ display: 'inline-block', marginTop: '1rem', padding: '.8rem 1.6rem', borderRadius: 999, background: '#1a56e0', color: '#fff', textDecoration: 'none', fontWeight: 600 }}>홈으로</a>
      </div>
    </div>
  )
}
