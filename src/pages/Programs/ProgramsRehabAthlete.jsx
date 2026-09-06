import { Link } from 'react-router-dom'
import Icon from '../../components/Icon/Icon'
import HeroSection from '../../components/HeroSection/HeroSection'
import PageSidebar from '../../components/Sidebar/PageSidebar'
import { SITE } from '../../data/site'

export default function ProgramsRehabAthlete() {
  return (
    <>
      <HeroSection
        title="재활 · 선수"
        subtitle="물리치료사가 직접 보는 재활과 컨디셔닝"
        size="sm"
        breadcrumb={[
          { label: '홈', to: '/' },
          { label: '프로그램', to: '/programs/group-private' },
          { label: '재활 · 선수' },
        ]}
      />

      <section className="section">
        <div className="container">
          <div className="content-with-sidebar">
            <main className="main-content">
              <p>
                블루모션트레이닝은 <strong>물리치료사 출신 대표원장이 직접 운영</strong>하며,
                재활 · 교정 전문 물리치료사가 상주하는 센터입니다.
                병원 치료가 끝난 뒤 &lsquo;이제 운동하세요&rsquo;라는 말만 남았을 때,
                그 다음을 이어받는 자리라고 생각합니다.
              </p>

              <h3 className="mt-4">이런 경우에 오십니다</h3>
              <div className="grid-2 mt-3">
                <div className="info-item">
                  <span className="info-icon"><Icon name="shieldCheck" /></span>
                  <div className="info-content">
                    <h4>수술 후 재활</h4>
                    <p>수술 부위의 회복 단계에 맞춰 가동 범위 회복부터 근력 재획득까지 단계적으로 진행합니다.</p>
                  </div>
                </div>
                <div className="info-item">
                  <span className="info-icon"><Icon name="crosshair" /></span>
                  <div className="info-content">
                    <h4>체형 · 측만 교정</h4>
                    <p>좌우 비대칭과 척추 정렬 문제를 평가하고, 원인이 되는 움직임 패턴부터 바꿔갑니다.</p>
                  </div>
                </div>
                <div className="info-item">
                  <span className="info-icon"><Icon name="activity" /></span>
                  <div className="info-content">
                    <h4>만성 통증 관리</h4>
                    <p>디스크, 오십견, 오다리 등 흔한 문제의 발생 기전을 설명하고 그에 맞는 운동을 처방합니다.</p>
                  </div>
                </div>
                <div className="info-item">
                  <span className="info-icon"><Icon name="target" /></span>
                  <div className="info-content">
                    <h4>선수 · 부상 예방</h4>
                    <p>대회를 앞둔 학생 선수의 컨디셔닝과 발목 등 취약 부위 테이핑을 지원합니다.</p>
                  </div>
                </div>
                <div className="info-item">
                  <span className="info-icon"><Icon name="dumbbell" /></span>
                  <div className="info-content">
                    <h4>교대근무 · 직업성 통증</h4>
                    <p>발전소 · 병원 등 교대근무자와 장시간 서서 일하는 분의 누적 피로를 관리합니다.</p>
                  </div>
                </div>
                <div className="info-item">
                  <span className="info-icon"><Icon name="leaf" /></span>
                  <div className="info-content">
                    <h4>운동 복귀</h4>
                    <p>오래 쉬었다가 다시 시작하는 분이 무리 없이 강도를 올릴 수 있도록 설계합니다.</p>
                  </div>
                </div>
              </div>

              <h3 className="mt-5">평가 도구</h3>
              <div className="info-box mt-3">
                <h4 className="info-box-title"><Icon name="clipboard" /> TRX MAPS 움직임 검사</h4>
                <p>
                  관절별 움직임 정도, 근육 활성화 정도, 자세, 좌우 대칭성을 항목별 점수로 확인합니다.
                  결과는 메일로 받아보실 수 있어 레슨 전 · 후 변화를 숫자로 비교할 수 있습니다.
                  체형분석과 함께 재활 프로그램의 출발점이 됩니다.
                </p>
              </div>

              <h3 className="mt-5">진행 방식</h3>
              <div className="table-wrapper mt-3">
                <table className="table">
                  <thead>
                    <tr><th>단계</th><th>내용</th></tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1. 병력 확인</td>
                      <td>진단명, 수술 시기, 병원에서 받은 제한 사항을 먼저 확인합니다.</td>
                    </tr>
                    <tr>
                      <td>2. 평가</td>
                      <td>체형분석 · TRX MAPS · 관절별 가동 범위 확인으로 현재 상태를 기록합니다.</td>
                    </tr>
                    <tr>
                      <td>3. 1:1 세션</td>
                      <td>프라이빗 룸의 캐딜락과 소도구를 활용해 통증 없는 범위에서 시작합니다.</td>
                    </tr>
                    <tr>
                      <td>4. 강도 조정</td>
                      <td>회복 정도에 따라 리포머 · 체어 · 바렐로 확장하고 저항을 단계적으로 올립니다.</td>
                    </tr>
                    <tr>
                      <td>5. 그룹 전환</td>
                      <td>충분히 회복되면 3:1 그룹 레슨으로 전환해 꾸준한 루틴으로 이어갑니다.</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="info-box mt-4">
                <h4 className="info-box-title"><Icon name="messageCircle" /> 상담 시 알려주세요</h4>
                <ul>
                  <li>진단명과 수술 여부, 수술 시점</li>
                  <li>병원에서 제한하라고 안내받은 동작</li>
                  <li>통증이 심해지는 자세나 시간대</li>
                  <li>복귀하고 싶은 활동이나 대회 일정</li>
                </ul>
              </div>

              <div className="info-box mt-4" style={{ textAlign: 'center' }}>
                <h4>조심스럽지만, 즐겁게</h4>
                <p>재활도 운동입니다. 지치지 않게 끌고 가는 것이 저희 역할입니다.</p>
                <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                  <a href={'tel:' + SITE.phone} className="btn btn-primary">{SITE.phone}</a>
                  <Link to="/news/contact" className="btn btn-secondary">문의하기</Link>
                </div>
              </div>
            </main>

            <PageSidebar menu="programs" />
          </div>
        </div>
      </section>
    </>
  )
}
