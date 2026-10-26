/* 연락처·메뉴를 바꿀 때는 이 파일만 수정하세요. */
export const SITE = {
  phone: '010-5683-8525',
  phoneHref: 'tel:01056838525',
  smsHref: 'sms:01056838525',
  email: 'bluemotion_training@naver.com',
  kakao: 'https://pf.kakao.com/_XXXXXX', // [고객 제공 필요] 카카오톡 채널 주소로 교체
  address: '경상북도 울진군 북면 장터길 51-4 (북면 119안전센터 옆)',
  addressShort: '경상북도 울진군 북면 장터길 51-4',
  hours: '평일 09:00~22:00',
  closed: '토·일·공휴일 휴무',
  blog: 'https://blog.naver.com/bluemotion_training',
  instagram: 'https://www.instagram.com/bluemotion_training',
  license: '등록 민간자격 (등록번호 제2023-004136호)',
}

/* GNB: 대목록 = 개별 페이지, 하위 메뉴 = 그 페이지 안의 섹션(앵커) */
export const NAV = [
  { label: 'FMTA협회', href: '/association', children: [['협회 소개', '#intro'], ['설립 이념', '#philosophy'], ['자격 정보', '#license']] },
  { label: '블루모션트레이닝센터', href: '/center', children: [['센터·원장 소개', '#about'], ['시설·기구', '#facility'], ['운영 안내', '#hours'], ['오시는 길', '#location']] },
  { label: '프로그램', href: '/programs', children: [['소그룹 레슨', '#small-group'], ['개인 레슨', '#private'], ['스페셜 임산부', '#prenatal'], ['키즈·성장', '#kids'], ['시니어·재활', '#senior']] },
  { label: '플로팅온더블루', href: '/floating', children: [['프로그램 소개', '#intro'], ['진행 안내', '#info'], ['현장 영상', '#gallery']] },
  { label: '특별활동', href: '/activities', children: [['비치 필라테스', '#beach'], ['팀빌딩·워크숍·출강', '#teambuilding'], ['출강 이력·사례', '#cases'], ['최신 활동 소식', '#news']] },
  { label: '교육과정', href: '/education', children: [['자격 과정', '#courses'], ['교육 철학', '#philosophy'], ['교육생 혜택', '#benefits'], ['민간자격 안내', '#license-info']] },
]

export const img = (name) => `/assets/images/${name}`

/* 지도: API 키가 필요 없는 주소 검색 방식 */
const q = encodeURIComponent('경상북도 울진군 북면 장터길 51-4')
export const MAP = {
  embed: `https://maps.google.com/maps?q=${q}&hl=ko&z=16&output=embed`,
  naver: `https://map.naver.com/p/search/${q}`,
  kakao: `https://map.kakao.com/?q=${q}`,
}
