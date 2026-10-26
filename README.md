# 블루모션트레이닝센터 & FMTA 공식 홈페이지

Next.js(정적 export) 기반 소개 사이트입니다. 서버·DB·로그인·폼·외부 API 키가 없고, 빌드 결과(`out/`)는 순수 정적 파일입니다. 도메인은 `fmta.kr`.

## 실행 (Node.js 20 이상)

```bash
npm install        # 최초 1회
npm run dev        # 개발 서버 → http://localhost:3000
npm run build      # 배포용 빌드 → out/
npm start          # 빌드 결과 미리보기 (out/)
```

## 사이트 구성

| 주소 | 페이지 | 섹션(앵커) |
|---|---|---|
| `/` | 메인 | 히어로 · 바로가기 · 핵심 강점 · 시그니처 · 사례 · 문의 |
| `/association` | FMTA협회 | `#intro` `#philosophy` `#license` |
| `/center` | 블루모션트레이닝센터 | `#about` `#facility` `#hours` `#location` |
| `/programs` | 프로그램 | `#small-group` `#private` `#prenatal` `#kids` `#senior` |
| `/floating` | 플로팅온더블루 | `#intro` `#info` `#gallery` |
| `/activities` | 특별활동 | `#beach` `#teambuilding` `#cases` `#news` |
| `/education` | 교육과정 | `#courses` `#philosophy` `#benefits` `#license-info` |

GNB 드롭다운의 하위 항목은 해당 페이지 섹션으로 부드럽게 스크롤됩니다.

## 폴더 구조

```
├─ next.config.mjs       output: 'export'
├─ src/
│  ├─ site.js            연락처·카카오 채널·주소·지도 링크·메뉴(NAV)  ← 여기서 수정
│  ├─ seo.js             페이지별 title/description/OG 함수, LocalBusiness JSON-LD(운영시간)
│  ├─ app/               페이지 (폴더 이름 = 주소). 문구는 각 page.jsx 안에 있음
│  │  └─ layout.jsx      <head>(Pretendard)·검증 메타·favicon
│  ├─ components/        Layout(헤더·문의 레이어·푸터·하단 바), ui(이미지·카드·갤러리)
│  └─ styles/style.css   전체 스타일
├─ data/                 programs.json  cases.json  gallery.json
└─ public/               그대로 배포되는 파일
   ├─ assets/images/     WebP 사진, og-image.jpg
   └─ robots.txt sitemap.xml favicon.svg CNAME
```

## 문구·사진 수정 위치

- 연락처, 카카오톡 채널 주소, 주소, SNS, 메뉴: `src/site.js`
- 각 페이지 문구: `src/app/<페이지>/page.jsx`
- 프로그램 카드(대상/정원/시간/특징): `data/programs.json`
- 출강 사례 카드: `data/cases.json` (`org`, `program`, `text`, `image`)
- 현장 사진·유튜브 영상 ID: `data/gallery.json` (`videos.*[].id`에 `watch?v=` 뒤 값)
- 페이지별 title/description: 각 `page.jsx` 위쪽 `pageMeta(...)`
- 검색엔진 인증 코드: `src/app/layout.jsx`의 `NAVER_VERIFICATION_CODE`, `GOOGLE_VERIFICATION_CODE`
- `<Todo>[고객 제공 필요]</Todo>` 배지: 내용이 확정되면 배지를 지우고 문구로 교체

## 사진 파일명 규칙

WebP, 소문자·영문·하이픈, 가로 1600px 이하, 300KB 내외 권장. 모든 이미지는 `loading="lazy"`가 적용되어 있고(메인 히어로 제외), 파일이 없으면 파일명이 적힌 플레이스홀더가 표시됩니다. 표시된 이름으로 `public/assets/images/`에 저장하면 교체됩니다.

| 파일명 | 위치 | 상태 |
|---|---|---|
| `hero-sea.webp` | 메인 히어로 (없으면 floating-1 사용) | 제공 필요 |
| `og-image.jpg` | 공유 썸네일 1200×630 (임시본: floating-1 크롭) | 임시 |
| `center.webp` / `facility-1~2.webp` | 센터·시설 | center만 있음 |
| `director.webp` | 대표 원장 | 제공 필요 |
| `group-lesson` / `private-lesson` / `maternity` / `kids-growth` / `senior` `.webp` | 프로그램 카드 (16:9 크롭) | senior 제공 필요 |
| `floating-1~3.webp` | 플로팅 갤러리 | floating-3 제공 필요 |
| `beach-pilates-1~3.webp` | 비치 필라테스 갤러리 | beach-pilates-3 제공 필요 |
| `teambuilding-1~2`, `school-program-1~2` `.webp` | 팀빌딩 갤러리 | 있음 |
| `case-1~3.webp` | 출강 사례 카드 | 제공 필요 |
| `course-pilates.webp` / `course-floating.webp` | 자격 과정 카드 | 있음 |

## 배포

`npm run build`로 만든 `out/` 폴더의 내용을 정적 호스팅 루트에 올리면 됩니다. `main` 브랜치에 push하면 `.github/workflows/deploy.yml`이 GitHub Pages에 자동 배포하도록 설정되어 있습니다(`public/CNAME`의 도메인 사용).

배포 후:
1. 네이버 서치어드바이저·구글 서치콘솔 인증 코드 교체 후 재배포
2. 두 곳에 `https://fmta.kr/sitemap.xml` 제출

## 표기 원칙

- 자격은 "등록 민간자격 (등록번호 제2023-004136호)"로만 표기하고 "문화체육관광부 인증"은 쓰지 않습니다.
- "치료·완치·통증 완화" 같은 의료 효과 표현을 쓰지 않습니다(직함 "물리치료사"는 제외). 운동 설명은 "통증 케어 운동", "체형 관리" 등으로 씁니다.
- 확인되지 않은 수치·사례·기관명은 `[고객 제공 필요]`, 효과 보장 가능 표현은 `[고객 확인 필요]`로 표시합니다.
- 전체 목록: `TODO-고객제공필요.md`

## 참고

- 지도는 API 키가 필요 없는 주소 검색 임베드(`maps.google.com/maps?q=주소&output=embed`)입니다. 네이버·카카오 버튼은 주소 검색 링크입니다.
- 이전 초안(5페이지 구성)은 저장소 밖 `fmta_legacy_draft_20261026/` 폴더에 백업되어 있습니다.
