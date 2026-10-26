const BASE = 'https://fmta.kr'

/* 페이지별 title/description/OG/canonical. 새 페이지는 여기에 맞춰 metadata를 만드세요. */
export function pageMeta({ path, title, description, ogTitle, ogDescription }) {
  return {
    title,
    description,
    alternates: { canonical: `${BASE}${path}` },
    openGraph: {
      type: 'website',
      siteName: 'FMTA 블루모션',
      locale: 'ko_KR',
      url: `${BASE}${path}`,
      title: ogTitle || title,
      description: ogDescription || description,
      images: [`${BASE}/assets/images/og-image.jpg`],
    },
    twitter: { card: 'summary_large_image' },
  }
}

/* 홈 화면 JSON-LD (지역 사업체 정보 + 운영시간) */
export const localBusiness = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "SportsActivityLocation"],
  "name": "블루모션트레이닝센터",
  "alternateName": ["블루모션", "FMTA", "기능적움직임트레이닝협회", "Functional Movement Training Association"],
  "url": "https://fmta.kr/",
  "image": "https://fmta.kr/assets/images/center.webp",
  "description": "경북 울진의 필라테스·해양 웰니스 센터 블루모션트레이닝센터와 지도자 양성 협회 FMTA",
  "telephone": "+82-10-5683-8525",
  "email": "bluemotion_training@naver.com",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "북면 장터길 51-4",
    "addressLocality": "울진군",
    "addressRegion": "경상북도",
    "addressCountry": "KR"
  },
  "openingHoursSpecification": [{
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    "opens": "09:00",
    "closes": "22:00"
  }],
  "sameAs": [
    "https://blog.naver.com/bluemotion_training",
    "https://www.instagram.com/bluemotion_training"
  ]
}
