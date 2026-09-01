# BLUEMOTION

플로팅 피트니스 · 필라테스 브랜드 **BLUEMOTION / FMTA** 공식 웹사이트.

- **배포 주소**: https://fmta.kr
- **스택**: React 19 · React Router 7 · Vite 7 · CSS Modules
- **호스팅**: GitHub Pages (main 브랜치 push 시 자동 배포)

---

## 초기 세팅

### 1. 사전 준비

| 항목 | 버전 |
|------|------|
| Node.js | 20 이상 (권장: 22 LTS) |
| npm | 10 이상 |

Node 버전 확인:

```bash
node -v
npm -v
```

### 2. 클론 & 설치 & 실행

아래 블록을 그대로 복사해서 터미널에 붙여넣으면 됩니다.

```bash
git clone https://github.com/duzz6211/bluemotion.git
cd bluemotion
npm install
npm run dev
```

실행되면 터미널에 뜨는 주소(기본 http://localhost:5173)로 접속합니다.

### 3. 이미 클론해둔 경우 (최신화)

```bash
git pull
npm install
npm run dev
```

> `node_modules`는 저장소에 포함되지 않습니다. 클론 직후에는 **반드시 `npm install`** 을 먼저 실행하세요.

---

## 명령어

| 명령어 | 설명 |
|--------|------|
| `npm run dev` | 개발 서버 실행 (HMR 지원, http://localhost:5173) |
| `npm run build` | 프로덕션 빌드 → `dist/` 생성 |
| `npm run preview` | 빌드 결과물을 로컬에서 미리보기 |
| `npm run lint` | ESLint 검사 |

배포 전 점검용 한 줄:

```bash
npm run lint && npm run build && npm run preview
```

---

## 프로젝트 구조

```
bluemotion/
├─ .github/workflows/deploy.yml   # GitHub Pages 자동 배포
├─ public/
│  ├─ 404.html                    # SPA 라우팅 fallback
│  ├─ CNAME                       # 커스텀 도메인 (fmta.kr)
│  ├─ news.json                   # 공지사항 데이터
│  └─ images/                     # 정적 이미지 (webp)
├─ src/
│  ├─ main.jsx                    # 엔트리
│  ├─ App.jsx                     # 전체 라우트 정의 (lazy import)
│  ├─ layouts/                    # MainLayout, SubPageLayout
│  ├─ components/                 # Header, Footer, SubNav, HeroSection 등
│  ├─ pages/                      # 페이지 단위 컴포넌트
│  └─ styles/global.css           # 전역 스타일
├─ index.html
└─ vite.config.js
```

---

## 배포

`main` 브랜치에 push하면 GitHub Actions(`.github/workflows/deploy.yml`)가
`npm ci` → `npm run build` → GitHub Pages 업로드를 자동 수행합니다.

```bash
git add .
git commit -m "작업 내용"
git push origin main
```

배포 진행 상황은 GitHub 저장소의 **Actions** 탭에서 확인할 수 있습니다.

> 커스텀 도메인은 `public/CNAME`으로 관리됩니다. 도메인을 바꾸려면 이 파일을 수정하세요.

---

## 자주 겪는 문제

**`vite: command not found` / 모듈을 못 찾음**
```bash
rm -rf node_modules package-lock.json
npm install
```

**포트 5173이 이미 사용 중**
```bash
npm run dev -- --port 3000
```

**빌드는 되는데 배포 후 새로고침 시 404**
→ `public/404.html`(SPA fallback)이 빌드에 포함됐는지 확인하세요.
