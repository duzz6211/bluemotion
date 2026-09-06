import { Link } from 'react-router-dom'
import Icon from '../../components/Icon/Icon'
import HeroSection from '../../components/HeroSection/HeroSection'
import PageSidebar from '../../components/Sidebar/PageSidebar'
import { SITE } from '../../data/site'

const curriculum = [
  { step: '01', title: '해부학', desc: '모든 과정의 첫 스타트. 인체에 관한 학문은 해부학에서 출발해야 이해가 빠릅니다. 외부 전문 교육강사를 초빙해 진행합니다.' },
  { step: '02', title: '기능해부학 · 동작분석', desc: '구조를 넘어 기능으로. 관절과 근육이 실제 동작에서 어떻게 협응하는지 분석합니다.' },
  { step: '03', title: '매트', desc: '기구 없이 몸으로 익히는 기본 동작. 폼롤러 등 소도구를 활용한 변형까지 다룹니다.' },
  { step: '04', title: '리포머', desc: '스프링 저항의 원리와 15단계 강도 조정, 동작별 세팅과 큐잉을 이론 · 실기 병행으로 배웁니다.' },
  { step: '05', title: '바렐', desc: '척추 신전과 유연성 향상 동작. 사다리 높이와 거리 조절로 회원에 맞추는 법을 익힙니다.' },
  { step: '06', title: '체어', desc: '균형감각과 하체 근력 강화 동작. 손잡이 조절과 발판 분리 활용법을 다룹니다.' },
  { step: '07', title: '캐딜락', desc: '80가지 이상의 동작이 가능한 기구. 재활 목적의 활용과 1:1 세션 운영을 이론 · 실기로 진행합니다.' },
  { step: '08', title: '필기 · 실기 TEST', desc: '전 과정을 마친 뒤 필기와 실기 테스트를 거칩니다. 최종 테스트 합격자에게 수료증과 자격이 발급됩니다.' },
]

export default function FunctionalPilates() {
  return (
    <>
      <HeroSection
        title="기능성필라테스"
        subtitle="FMTA 기능성필라테스 지도자 과정"
        size="sm"
        breadcrumb={[
          { label: '홈', to: '/' },
          { label: '교육과정', to: '/education' },
          { label: '기능성필라테스' },
        ]}
      />

      <section className="section">
        <div className="container">
          <div className="content-with-sidebar">
            <main className="main-content">
              <img
                src="/images/home/course-pilates.webp"
                alt="FMTA 기능성필라테스 지도자 과정"
                style={{ width: '100%', borderRadius: '12px', marginBottom: '2rem' }}
              />

              <div className="info-box">
                <h4 className="info-box-title"><Icon name="award" /> {SITE.registration}</h4>
                <p>
                  기능적움직임트레이닝협회(FMTA, Functional Movement Training Association)가
                  주관하고 발급하는 자격입니다.
                </p>
              </div>

              <h3 className="mt-5">과정 목적</h3>
              <p>
                움직임 지도자로서의 필수적인 지식을 습득하고 개인의 역량을 키울 수 있도록
                체계적인 커리큘럼을 제공합니다.
                <strong> 이론과 실기가 연결되는 교육</strong>을 원칙으로 하며,
                수료 후 취업 연계와 창업 가이드까지 이어집니다.
              </p>

              <h3 className="mt-5">커리큘럼</h3>
              <div className="timeline mt-3">
                {curriculum.map((item) => (
                  <div key={item.step} className="timeline-item">
                    <div className="timeline-year">{item.step} · {item.title}</div>
                    <div className="timeline-content">{item.desc}</div>
                  </div>
                ))}
              </div>

              <h3 className="mt-5">모집 안내</h3>
              <div className="table-wrapper mt-3">
                <table className="table">
                  <tbody>
                    <tr>
                      <th>교육 장소</th>
                      <td>블루모션트레이닝 ({SITE.roadAddress} · 북면 119안전센터 옆)</td>
                    </tr>
                    <tr>
                      <th>반 구성</th>
                      <td>
                        평일반 (월수 / 화목 / 금)<br />
                        주말반 (토 / 일 / 토 · 일)<br />
                        시간 협의 가능 · 모집 현황에 따라 반이 결정됩니다
                      </td>
                    </tr>
                    <tr>
                      <th>강사</th>
                      <td>물리치료사 출신 대표원장 직강 + 외부 전문 교육강사 초빙</td>
                    </tr>
                    <tr>
                      <th>등록비</th>
                      <td>
                        <strong>총 350만원</strong><br />
                        교재비 · 자격증 발급비 · 강사 프로필 촬영비 포함
                      </td>
                    </tr>
                    <tr>
                      <th>수료 요건</th>
                      <td>전 과정 이수 후 필기 · 실기 테스트 합격</td>
                    </tr>
                    <tr>
                      <th>문의</th>
                      <td><a href={'tel:' + SITE.phone}>{SITE.phone}</a> · 언제든 상담 및 방문 환영</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h3 className="mt-5">교육생 혜택</h3>
              <div className="grid-2 mt-3">
                <div className="info-item">
                  <span className="info-icon"><Icon name="dumbbell" /></span>
                  <div className="info-content">
                    <h4>그룹 레슨권 10회</h4>
                    <p>배운 것을 회원 입장에서 직접 경험해볼 수 있도록 제공합니다.</p>
                  </div>
                </div>
                <div className="info-item">
                  <span className="info-icon"><Icon name="handshake" /></span>
                  <div className="info-content">
                    <h4>취업 연계</h4>
                    <p>희망 시 센터 근무 또는 지역 내 취업으로 연결합니다.</p>
                  </div>
                </div>
                <div className="info-item">
                  <span className="info-icon"><Icon name="building" /></span>
                  <div className="info-content">
                    <h4>자율 연습 공간</h4>
                    <p>교육 시간 외에도 기구를 활용해 스스로 연습할 수 있습니다.</p>
                  </div>
                </div>
                <div className="info-item">
                  <span className="info-icon"><Icon name="users" /></span>
                  <div className="info-content">
                    <h4>멘티-멘토 케어</h4>
                    <p>담당 멘토 선생님이 과정 전반을 함께 관리합니다.</p>
                  </div>
                </div>
                <div className="info-item">
                  <span className="info-icon"><Icon name="sparkles" /></span>
                  <div className="info-content">
                    <h4>최신 교육 주최</h4>
                    <p>수료 후에도 협회가 주최하는 보수 교육에 참여할 수 있습니다.</p>
                  </div>
                </div>
                <div className="info-item">
                  <span className="info-icon"><Icon name="camera" /></span>
                  <div className="info-content">
                    <h4>수업 참관</h4>
                    <p>교육생 자격으로 실제 회원 수업을 참관하며 현장을 익힙니다.</p>
                  </div>
                </div>
              </div>

              <h3 className="mt-5">지원 대상</h3>
              <div className="info-box mt-3">
                <ul>
                  <li>필라테스 지도자로 취업 또는 창업을 준비하는 분</li>
                  <li>체육 · 물리치료 · 작업치료 · 간호 등 관련 학과 출신</li>
                  <li>타 운동 강사 자격이 있거나 필라테스 지도에 관심이 있는 분</li>
                  <li>취미로 오래 필라테스를 해왔고 이를 업으로 삼고 싶은 분</li>
                </ul>
                <p className="mt-2">
                  울진뿐 아니라 삼척 · 동해 · 강릉 · 영덕 · 봉화 · 포항에서도 교육생이 찾아오고 있습니다.
                </p>
              </div>

              <div className="info-box mt-4" style={{ textAlign: 'center' }}>
                <h4>다음 기수 모집 문의</h4>
                <p>기수별 개강 시기와 반 구성은 모집 현황에 따라 결정됩니다.</p>
                <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                  <a href={'tel:' + SITE.phone} className="btn btn-primary">{SITE.phone}</a>
                  <Link to="/news/contact" className="btn btn-secondary">문의하기</Link>
                </div>
              </div>
            </main>

            <PageSidebar menu="education" />
          </div>
        </div>
      </section>
    </>
  )
}
