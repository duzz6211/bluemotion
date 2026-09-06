import HeroSection from '../../components/HeroSection/HeroSection'
import PageSidebar from '../../components/Sidebar/PageSidebar'

const history = [
  {
    year: '2025',
    title: '지역 연계 사업 확대',
    events: [
      '2025년 경북 동해권 지역 연계일자리 사업 참여 — ‘플로팅 온 더 블루’ 우수사례 선정',
      '울진군가족센터 연계 결혼이민여성 K-필라테스 강사과정 개설 (5개월 80시간, 3명 수료)',
      '울진군보건소 출산준비교실 출강 (울진군 평생학습관, 4주 과정)',
      '한국수력원자력 한울본부 감정노동 직원 힐링데이 2회차 진행',
      '필라테스 지도자 3기 최종 테스트 · 4기 모집',
      '전문 강사 양성 사업 및 지역사회 연계 일자리 창출 사업 확대',
    ],
  },
  {
    year: '2024',
    title: 'FMTA 설립과 첫 기수 배출',
    events: [
      '기능적움직임트레이닝협회(FMTA) 설립',
      '문화체육관광부 인증 자격발급 교육기관 등록 (등록번호 2023-004136)',
      'FMTA 필라테스 지도자 1기 수료식',
      '필라테스 지도자 2기 수료식 — 울진 · 봉화 · 영덕 · 삼척 · 동해 교육생 배출',
      '원덕중 · 원덕고 출강 시작',
    ],
  },
  {
    year: '2023',
    title: '블루모션트레이닝 센터 확장 이전',
    events: [
      '울진군 북면 장터길로 확장 이전 및 ‘블루모션트레이닝’ 리브랜딩',
      '60평 이상 1층 단독건물 대형 센터 개원',
      '임산부 그룹 클래스 · 키즈반 런칭',
    ],
  },
  {
    year: '2019',
    title: '전신 센터 설립',
    events: [
      '블루모션의 전신 ‘힐라테스 센터’ 설립 및 운영',
    ],
  },
]

export default function FmtaHistory() {
  return (
    <>
      <HeroSection
        title="협회연혁"
        subtitle="FMTA 협회의 발자취"
        size="sm"
        breadcrumb={[
          { label: '홈', to: '/' },
          { label: 'FMTA', to: '/fmta' },
          { label: '협회연혁' },
        ]}
      />

      <section className="section">
        <div className="container">
          <div className="content-with-sidebar">
            <main className="main-content">
              <div className="timeline">
                {history.map((entry) => (
                  <div key={entry.year} className="timeline-item">
                    <div className="timeline-year">{entry.year}</div>
                    <div className="timeline-content">
                      <h4>{entry.title}</h4>
                      <ul>
                        {entry.events.map((event) => (
                          <li key={event}>{event}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </main>

            <PageSidebar menu="fmta" />
          </div>
        </div>
      </section>
    </>
  )
}
