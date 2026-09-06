import Icon from '../../components/Icon/Icon'
import HeroSection from '../../components/HeroSection/HeroSection'
import PageSidebar from '../../components/Sidebar/PageSidebar'
import { SITE } from '../../data/site'

const partners = [
  {
    name: '울진군보건소',
    type: '공공기관',
    icon: 'shieldCheck',
    detail: '모자보건팀 등록 예비맘 대상 분기별 출산준비교실 · 출산운동교실 운영 협력.',
  },
  {
    name: '울진해양레포츠센터',
    type: '체육시설',
    icon: 'waves',
    detail: '플로팅 온 더 블루 수상 세션 진행을 위한 풀장 대관 협력.',
  },
  {
    name: '울진군가족센터',
    type: '공공기관',
    icon: 'globe',
    detail: '결혼이민여성 취업지원 K-필라테스 강사과정 공동 운영.',
  },
  {
    name: '원덕중고등학교',
    type: '교육기관',
    icon: 'graduationCap',
    detail: '스포츠클럽 필라테스부 방문 레슨 및 학교 출강.',
  },
  {
    name: '한국수력원자력 (한울본부)',
    type: '공기업',
    icon: 'building',
    detail: '감정노동 직원 대상 힐링데이 · 원데이 워크샵 프로그램 진행.',
  },
  {
    name: '한국프리다이빙협회',
    type: '협회',
    icon: 'award',
    detail: '수상 활동 및 해양 프로그램 관련 협력.',
  },
  {
    name: '(사)지역과소셜비즈',
    type: '사회적경제',
    icon: 'handshake',
    detail: '경북 동해권 지역 연계일자리 사업 수행 파트너.',
  },
  {
    name: '(주)호아',
    type: '기업',
    icon: 'trending',
    detail: '영덕 지역 파트너로 연계일자리 사업 공동 수행.',
  },
  {
    name: '디로그디자인그룹',
    type: '디자인',
    icon: 'sparkles',
    detail: '브랜드 · 프로그램 디자인 협업.',
  },
]

export default function FmtaPartners() {
  return (
    <>
      <HeroSection
        title="제휴업체"
        subtitle="FMTA와 함께하는 파트너"
        size="sm"
        breadcrumb={[
          { label: '홈', to: '/' },
          { label: 'FMTA', to: '/fmta' },
          { label: '제휴업체' },
        ]}
      />

      <section className="section">
        <div className="container">
          <div className="content-with-sidebar">
            <main className="main-content">
              <p>
                FMTA와 블루모션트레이닝은 지역의 기관 · 학교 · 기업과 손잡고
                센터 밖에서도 움직임 교육을 이어가고 있습니다.
                함께 지역사회의 건강한 움직임을 만들어가는 제휴 기관을 소개합니다.
              </p>

              <div className="grid-2 mt-4">
                {partners.map((partner) => (
                  <div key={partner.name} className="info-item">
                    <span className="info-icon"><Icon name={partner.icon} /></span>
                    <div className="info-content">
                      <h4>{partner.name}</h4>
                      <p>
                        <span className="text-muted">{partner.type}</span><br />
                        {partner.detail}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="info-box mt-5">
                <h4 className="info-box-title"><Icon name="handshake" /> 제휴 · 협업 제안</h4>
                <p>
                  기관 출강, 지역 연계 사업, 위탁 교육, 프로그램 공동 기획 등
                  어떤 형태의 협업이든 환영합니다.
                  제안 내용과 일정을 알려주시면 담당자가 검토 후 연락드리겠습니다.
                </p>
                <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginTop: '0.75rem' }}>
                  <a href={'tel:' + SITE.phone} className="btn btn-primary btn-sm">{SITE.phone}</a>
                  <a href={'mailto:' + SITE.email} className="btn btn-secondary btn-sm">{SITE.email}</a>
                </div>
              </div>
            </main>

            <PageSidebar menu="fmta" />
          </div>
        </div>
      </section>
    </>
  )
}
