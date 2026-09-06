import { Link } from 'react-router-dom'
import Icon from '../../components/Icon/Icon'
import HeroSection from '../../components/HeroSection/HeroSection'
import PageSidebar from '../../components/Sidebar/PageSidebar'
import { SITE } from '../../data/site'

const inquiries = [
  {
    icon: 'dumbbell',
    title: '레슨 등록 · 상담',
    detail: '그룹 · 개인 · 임산부 · 키즈 · 시니어 · 재활 레슨 문의. 통증이나 수술 이력이 있으시면 함께 말씀해 주세요.',
  },
  {
    icon: 'graduationCap',
    title: '지도자 과정',
    detail: 'FMTA 기능성필라테스 지도자 과정 기수 모집, 반 구성, 등록비, 취업 연계 관련 문의.',
  },
  {
    icon: 'waves',
    title: '플로팅 · 비치 프로그램',
    detail: '플로팅 온 더 블루, 비치 필라테스 시즌 일정과 단체 예약 문의.',
  },
  {
    icon: 'handshake',
    title: '출강 · 기관 협업',
    detail: '학교 · 보건소 · 가족센터 · 기업 대상 출강, 팀빌딩 워크샵, 지역 연계 사업 제안.',
  },
  {
    icon: 'userCheck',
    title: '채용',
    detail: '정직원 · 파트타이머 지원. 자율 양식 이력서를 메일로 보내신 뒤 문자를 남겨주세요.',
  },
  {
    icon: 'camera',
    title: '취재 · 촬영',
    detail: '언론 취재, 협업 콘텐츠 촬영 관련 문의.',
  },
]

export default function NewsContact() {
  return (
    <>
      <HeroSection
        title="문의"
        subtitle="언제든 상담 및 방문 환영합니다"
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
              <div className="info-grid">
                <div className="info-item">
                  <span className="info-icon"><Icon name="phone" /></span>
                  <div className="info-content">
                    <h4>전화 상담</h4>
                    <p>
                      <a href={'tel:' + SITE.phone}>{SITE.phone}</a><br />
                      가장 빠르고 확실한 방법입니다.
                    </p>
                  </div>
                </div>
                <div className="info-item">
                  <span className="info-icon"><Icon name="mail" /></span>
                  <div className="info-content">
                    <h4>이메일</h4>
                    <p>
                      <a href={'mailto:' + SITE.email}>{SITE.email}</a><br />
                      이력서 접수와 서면 문의에 사용합니다.
                    </p>
                  </div>
                </div>
                <div className="info-item">
                  <span className="info-icon"><Icon name="mapPin" /></span>
                  <div className="info-content">
                    <h4>방문 상담</h4>
                    <p>
                      {SITE.roadAddress}<br />
                      {SITE.landmark}
                    </p>
                  </div>
                </div>
                <div className="info-item">
                  <span className="info-icon"><Icon name="clock" /></span>
                  <div className="info-content">
                    <h4>운영</h4>
                    <p>
                      {SITE.hours}<br />
                      {SITE.hoursNote}
                    </p>
                  </div>
                </div>
              </div>

              <h3 className="mt-5">문의 유형</h3>
              <div className="grid-2 mt-3">
                {inquiries.map((item) => (
                  <div key={item.title} className="info-item">
                    <span className="info-icon"><Icon name={item.icon} /></span>
                    <div className="info-content">
                      <h4>{item.title}</h4>
                      <p>{item.detail}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="info-box mt-5">
                <h4 className="info-box-title"><Icon name="clipboard" /> 상담 시 알려주시면 좋은 것</h4>
                <ul>
                  <li>희망하시는 프로그램 (그룹 / 개인 / 임산부 / 키즈 / 시니어 / 재활 / 교육과정)</li>
                  <li>가능한 시간대 — 교대근무나 학교 일정이 있다면 함께 말씀해 주세요</li>
                  <li>통증 · 수술 이력, 병원에서 제한받은 동작</li>
                  <li>임산부의 경우 현재 주 수</li>
                  <li>단체 · 출강이라면 인원, 희망 날짜, 장소</li>
                </ul>
              </div>

              <h3 className="mt-5">채용 지원 안내</h3>
              <div className="info-box mt-3">
                <p>
                  자율 양식 이력서를 <a href={'mailto:' + SITE.email}>{SITE.email}</a>로 보내주신 뒤,
                  <strong> {SITE.phone}로 문자를 남겨주시면</strong> 면접 가능 일자를 안내드립니다.
                </p>
                <p className="mt-2">
                  필라테스 지도자 과정을 이수했거나 센터 근무 경력이 있는 분,
                  타 운동 강사 자격이 있는 분, 체육 · 물리치료 · 작업치료 · 간호 등 관련 학과 출신,
                  취미로 필라테스를 오래 해오신 분 모두 지원 가능합니다.
                  자격과정을 함께 이수하며 취업 연계를 원하시는 분도 환영합니다.
                </p>
              </div>

              <h3 className="mt-5">온라인 채널</h3>
              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginTop: '1rem' }}>
                <a href={SITE.instagram} target="_blank" rel="noreferrer noopener" className="btn btn-primary">
                  <Icon name="instagram" /> 인스타그램
                </a>
                <a href={SITE.blog} target="_blank" rel="noreferrer noopener" className="btn btn-secondary">
                  네이버 블로그
                </a>
                <a href={SITE.mapUrl} target="_blank" rel="noreferrer noopener" className="btn btn-secondary">
                  <Icon name="mapPin" /> 네이버 지도
                </a>
                <Link to="/bluemotion/location" className="btn btn-secondary">오시는 길</Link>
              </div>
            </main>

            <PageSidebar menu="news" />
          </div>
        </div>
      </section>
    </>
  )
}
