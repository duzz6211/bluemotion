import { Link } from 'react-router-dom'
import Icon from '../../components/Icon/Icon'
import HeroSection from '../../components/HeroSection/HeroSection'
import PageSidebar from '../../components/Sidebar/PageSidebar'
import { SITE } from '../../data/site'

export default function ProgramsGroupPrivate() {
  return (
    <>
      <HeroSection
        title="그룹 · 개인"
        subtitle="3:1 소수정예 그룹 레슨과 1:1 개인 레슨"
        size="sm"
        breadcrumb={[
          { label: '홈', to: '/' },
          { label: '프로그램', to: '/programs/group-private' },
          { label: '그룹 · 개인' },
        ]}
      />

      <section className="section">
        <div className="container">
          <div className="content-with-sidebar">
            <main className="main-content">
              <div className="lesson-pair">
                <div className="lesson-card">
                  <img className="lesson-card-image" src="/images/home/group-lesson.webp" alt="그룹 레슨" />
                  <div className="lesson-card-body">
                    <h3 className="lesson-card-title">그룹 레슨</h3>
                    <p className="lesson-card-desc">
                      나를 위한 소중한 시간. 강사 한 명이 최대 세 명을 보는 3:1 구성이라
                      그룹이어도 개인 동작을 잡아드릴 수 있습니다.
                    </p>
                    <ul className="lesson-card-list">
                      <li><Icon name="checkCircle" /> 리포머 · 바렐 · 체어</li>
                      <li><Icon name="checkCircle" /> TRX 트레이닝 존</li>
                      <li><Icon name="checkCircle" /> 3:1 소수정예 · 최소 2인 개설</li>
                    </ul>
                  </div>
                </div>
                <div className="lesson-card">
                  <img className="lesson-card-image" src="/images/home/private-lesson.webp" alt="개인 레슨" />
                  <div className="lesson-card-body">
                    <h3 className="lesson-card-title">개인 레슨</h3>
                    <p className="lesson-card-desc">
                      조금씩 찾아가는 바른 자세. 체형분석과 움직임 테스트로 시작해
                      프라이빗 룸의 캐딜락까지 활용합니다.
                    </p>
                    <ul className="lesson-card-list">
                      <li><Icon name="checkCircle" /> 개인 맞춤 케어 프로그램</li>
                      <li><Icon name="checkCircle" /> 레슨 전 · 후 비교사진 제공</li>
                      <li><Icon name="checkCircle" /> 추후 그룹레슨 전환 목표</li>
                    </ul>
                  </div>
                </div>
              </div>

              <h3 className="mt-5">그룹과 개인, 어느 쪽이 맞을까요</h3>
              <div className="table-wrapper mt-3">
                <table className="table">
                  <thead>
                    <tr><th></th><th>그룹 레슨</th><th>개인 레슨</th></tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th>구성</th>
                      <td>강사 1명 : 회원 최대 3명</td>
                      <td>강사 1명 : 회원 1명</td>
                    </tr>
                    <tr>
                      <th>사용 기구</th>
                      <td>리포머 · 체어 · 바렐 · TRX · 소도구</td>
                      <td>캐딜락을 포함한 전 기구</td>
                    </tr>
                    <tr>
                      <th>이런 분께</th>
                      <td>운동 경험이 있고 꾸준한 루틴을 원하는 분</td>
                      <td>통증 · 체형 문제가 있거나 처음 시작하는 분</td>
                    </tr>
                    <tr>
                      <th>개설 조건</th>
                      <td>최소 2인이 모이면 반이 개설됩니다</td>
                      <td>상담 후 시간 협의</td>
                    </tr>
                    <tr>
                      <th>기록</th>
                      <td>주기적 재평가</td>
                      <td>레슨 전 · 후 비교사진 제공</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h3 className="mt-5">첫 수업 전에 하는 일</h3>
              <div className="grid-3 mt-3">
                <div className="feature-item">
                  <div className="feature-icon"><Icon name="clipboard" /></div>
                  <h4 className="feature-title">상담</h4>
                  <p className="feature-desc">통증 이력, 수술력, 운동 경험, 목표를 확인합니다.</p>
                </div>
                <div className="feature-item">
                  <div className="feature-icon"><Icon name="crosshair" /></div>
                  <h4 className="feature-title">체형 분석</h4>
                  <p className="feature-desc">정렬 상태를 확인하고 좌우 · 전후 불균형을 찾습니다.</p>
                </div>
                <div className="feature-item">
                  <div className="feature-icon"><Icon name="activity" /></div>
                  <h4 className="feature-title">TRX MAPS</h4>
                  <p className="feature-desc">관절 가동성, 활성도, 자세, 대칭성을 점수로 확인합니다.</p>
                </div>
              </div>

              <div className="info-box mt-4">
                <h4 className="info-box-title"><Icon name="users" /> 함께 오시는 경우</h4>
                <p>
                  부부, 자매, 친구, 직장 동료 등 아는 사이끼리 그룹을 구성해도 좋습니다.
                  2인이면 반이 개설되므로 원하는 시간대에 맞춰 짜기가 수월합니다.
                  교대근무자를 위한 시간대 조정도 상담 시 함께 논의합니다.
                </p>
              </div>

              <div className="info-box mt-4" style={{ textAlign: 'center' }}>
                <h4>어느 쪽이 맞을지 모르겠다면</h4>
                <p>상담부터 하시면 됩니다. 평가 결과를 보고 함께 정합니다.</p>
                <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                  <a href={'tel:' + SITE.phone} className="btn btn-primary">{SITE.phone}</a>
                  <Link to="/bluemotion" className="btn btn-secondary">시설 둘러보기</Link>
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
