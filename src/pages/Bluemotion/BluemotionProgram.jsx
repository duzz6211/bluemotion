import { Link } from 'react-router-dom'
import Icon from '../../components/Icon/Icon'
import HeroSection from '../../components/HeroSection/HeroSection'
import PageSidebar from '../../components/Sidebar/PageSidebar'
import { SITE } from '../../data/site'

const regular = [
  {
    icon: 'users',
    title: '그룹 레슨',
    to: '/programs/group-private',
    detail: '리포머 · 체어 · 바렐을 사용하는 3:1 소수정예 그룹 레슨. 최소 2인이 모이면 반이 개설됩니다.',
  },
  {
    icon: 'user',
    title: '개인 레슨',
    to: '/programs/group-private',
    detail: '프라이빗 룸의 캐딜락을 활용한 1:1 레슨. 체형분석과 움직임 테스트로 시작해 개인 맞춤으로 진행합니다.',
  },
  {
    icon: 'baby',
    title: '스페셜 임산부',
    to: '/programs/maternity',
    detail: '임산부 운동처방사(PEC) 자격을 갖춘 강사가 진행하는 산전 · 산후 클래스. 주 2회 오전 · 오후반 운영.',
  },
  {
    icon: 'smile',
    title: '키즈 · 성장',
    to: '/programs/senior-kids',
    detail: '저학년(2~4학년) · 고학년(5~6학년, 중학생) · 청소년으로 나뉜 3:1 키즈반. 자세교정과 성장 중심.',
  },
  {
    icon: 'heart',
    title: '시니어',
    to: '/programs/senior-kids',
    detail: '관절에 부담 없는 점진적 저항운동과 균형감각 훈련. 수술 후 재활 문의도 함께 받습니다.',
  },
  {
    icon: 'shieldCheck',
    title: '재활 · 선수',
    to: '/programs/rehab-athlete',
    detail: '물리치료사가 직접 보는 수술 후 재활, 측만 · 체형교정, 선수 컨디셔닝과 부상 예방 테이핑.',
  },
]

const special = [
  { title: '플로팅 온 더 블루', to: '/floating', detail: '고래 형상 플로팅 매트 위에서 진행하는 울진 유일의 수상 필라테스.' },
  { title: '비치 필라테스', to: '/special/beach-pilates', detail: '부구해변에서 파도 소리와 함께하는 야외 필라테스. 봄 · 여름 · 가을 시즌.' },
  { title: '팀빌딩 · 워크샵', to: '/special/team-building', detail: '기업 · 기관 대상 원데이 프로그램. 체형별 스트레칭 교육과 실내외 활동으로 구성.' },
  { title: '스포츠클럽 · 학교 연계', to: '/special/sports-club', detail: '울진 · 삼척 · 영덕 지역 초 · 중 · 고 스포츠클럽 및 방과후 특별활동 출강과 방문 레슨.' },
]

export default function BluemotionProgram() {
  return (
    <>
      <HeroSection
        title="프로그램"
        subtitle="키즈부터 시니어까지, 블루모션의 모든 수업"
        size="sm"
        breadcrumb={[
          { label: '홈', to: '/' },
          { label: '블루모션트레이닝센터', to: '/bluemotion' },
          { label: '프로그램' },
        ]}
      />

      <section className="section">
        <div className="container">
          <div className="content-with-sidebar">
            <main className="main-content">
              <p>
                블루모션트레이닝은 <strong>저학년 키즈부터 시니어까지, 남녀 구분 없이</strong> 운동 경험이 있든 없든
                누구나 찾아오는 센터입니다. 모든 수업은 물리치료사 출신 대표원장과 재활 · 교정 전문 강사진이
                회원의 체형과 상태를 확인한 뒤 구성합니다.
              </p>

              <h3 className="mt-4">정규 클래스</h3>
              <div className="grid-2 mt-3">
                {regular.map((item) => (
                  <div key={item.title} className="info-item">
                    <span className="info-icon"><Icon name={item.icon} /></span>
                    <div className="info-content">
                      <h4>{item.title}</h4>
                      <p>{item.detail}</p>
                      <Link to={item.to} className="btn btn-secondary btn-sm mt-2">자세히 보기</Link>
                    </div>
                  </div>
                ))}
              </div>

              <h3 className="mt-5">특별 활동 프로그램</h3>
              <div className="grid-2 mt-3">
                {special.map((item) => (
                  <div key={item.title} className="info-box">
                    <h4 className="info-box-title">{item.title}</h4>
                    <p>{item.detail}</p>
                    <Link to={item.to} className="btn btn-secondary btn-sm mt-2">자세히 보기</Link>
                  </div>
                ))}
              </div>

              <h3 className="mt-5">수업 진행 방식</h3>
              <div className="table-wrapper mt-3">
                <table className="table">
                  <thead>
                    <tr><th>단계</th><th>내용</th></tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1. 상담</td>
                      <td>전화 또는 방문 상담으로 목표와 통증 · 질환 이력, 운동 경험을 확인합니다.</td>
                    </tr>
                    <tr>
                      <td>2. 평가</td>
                      <td>체형분석과 TRX MAPS 움직임 검사로 관절 가동 범위 · 근육 활성도 · 대칭성을 점수화합니다.</td>
                    </tr>
                    <tr>
                      <td>3. 프로그램 설계</td>
                      <td>평가 결과를 바탕으로 그룹 · 개인 여부와 사용할 기구, 진행 강도를 정합니다.</td>
                    </tr>
                    <tr>
                      <td>4. 레슨</td>
                      <td>3:1 그룹 또는 1:1 개인 레슨으로 진행하고, 개인 레슨은 전 · 후 비교사진을 제공합니다.</td>
                    </tr>
                    <tr>
                      <td>5. 재평가</td>
                      <td>일정 기간 후 다시 측정해 변화를 확인하고, 개인 레슨에서 그룹 레슨으로의 전환을 목표로 합니다.</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="info-box mt-4">
                <h4 className="info-box-title"><Icon name="clock" /> 예약 안내</h4>
                <p>
                  모든 클래스는 <strong>어플 예약제</strong>로 운영됩니다. 시간표와 잔여 자리는 어플에서 확인하실 수 있으며,
                  처음 방문하시는 분은 <a href={'tel:' + SITE.phone}>{SITE.phone}</a>로 먼저 상담해 주세요.
                  {' '}{SITE.hoursNote}
                </p>
              </div>
            </main>

            <PageSidebar menu="bluemotion" />
          </div>
        </div>
      </section>
    </>
  )
}
