import '../styles/style.css'

export const metadata = {
  metadataBase: new URL('https://fmta.kr'),
  icons: { icon: '/favicon.svg' },
  keywords: '울진 필라테스, 울진 해양 웰니스, 비치 필라테스, 기관 출강 필라테스, FMTA, 블루모션, 플로팅 온 더 블루',
  // 검색엔진 소유 확인: 발급받은 코드로 교체하세요
  verification: {
    google: 'GOOGLE_VERIFICATION_CODE',
    other: { 'naver-site-verification': 'NAVER_VERIFICATION_CODE' },
  },
}

export const viewport = { themeColor: '#081a33' }

export default function RootLayout({ children }) {
  return (
    <html lang="ko" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://cdn.jsdelivr.net" crossOrigin="anonymous" />
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable-dynamic-subset.min.css" />
        {/* 스크립트가 실행되는 환경에서만 등장 효과(.js .reveal)를 켠다 */}
        <script dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.add('js')" }} />
      </head>
      <body>{children}</body>
    </html>
  )
}
