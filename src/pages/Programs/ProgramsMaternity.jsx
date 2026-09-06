import { Link } from 'react-router-dom'
import Icon from '../../components/Icon/Icon'
import HeroSection from '../../components/HeroSection/HeroSection'
import PageSidebar from '../../components/Sidebar/PageSidebar'
import { SITE } from '../../data/site'

export default function ProgramsMaternity() {
  return (
    <>
      <HeroSection
        title="스페셜 임산부"
        subtitle="임산부 운동처방사와 함께하는 산전 · 산후 클래스"
        size="sm"
        breadcrumb={[
          { label: '홈', to: '/' },
          { label: '프로그램', to: '/programs/group-private' },
          { label: '스페셜 임산부' },
        ]}
      />

      <section className="section">
        <div className="container">
          <div className="content-with-sidebar">
            <main className="main-content">
              <img
                src="/images/home/maternity.webp"
                alt="스페셜 임산부 클래스"
                style={{ width: '100%', borderRadius: '12px', marginBottom: '2rem' }}
              />

              <h3>3년째 한 번도 끊기지 않은 클래스</h3>
              <p>
                블루모션의 임산부 그룹 클래스는 런칭 이후 <strong>한 번도 사이클이 끊긴 적이 없습니다.</strong>
                한 분이 만삭이 되어 출산하러 가시면 또 다른 분이 안정기에 들어 새로 합류하고,
                초기에 함께하던 회원이 둘째를 가져 다시 돌아오시기도 합니다.
                현재 주 2회, 오전 · 오후반으로 운영합니다.
              </p>

              <div className="info-box mt-4">
                <h4 className="info-box-title"><Icon name="award" /> 임산부 운동처방사(PEC) 과정 이수</h4>
                <p>
                  대표원장은 2025년 10월 11일부터 12월 6일까지 5주에 걸쳐
                  <strong> 맘스바디케어 임산부 운동처방사(PEC) 39기</strong> 과정을 이수했습니다.
                  매주 서울까지 오가며 이론과 실습을 반복한 과정으로,
                  임산부 회원의 상태를 학문적으로 이해하고 그에 맞는 솔루션을 제시하기 위한 선택이었습니다.
                  임산부 전담 물리치료사가 함께 클래스를 봅니다.
                </p>
              </div>

              <h3 className="mt-5">수업 구성</h3>
              <div className="table-wrapper mt-3">
                <table className="table">
                  <thead>
                    <tr><th>항목</th><th>내용</th></tr>
                  </thead>
                  <tbody>
                    <tr><th>대상</th><td>안정기에 들어선 임산부 (14주 이상 권장) · 임신을 준비 중인 분 · 산후 회복 중인 분</td></tr>
                    <tr><th>형태</th><td>3:1 그룹 레슨 (최소 2인 개설) 또는 1:1 개인 레슨</td></tr>
                    <tr><th>운영</th><td>주 2회 · 오전반 / 오후반</td></tr>
                    <tr><th>진행</th><td>주 수에 맞춰 강도와 동작을 조정하며 진행합니다</td></tr>
                    <tr><th>사용 도구</th><td>고프론, 폼롤러, 짐볼, 밴드 등 임산부에게 부담이 적은 소도구 중심</td></tr>
                  </tbody>
                </table>
              </div>

              <h3 className="mt-5">이런 순서로 진행합니다</h3>
              <div className="timeline mt-3">
                <div className="timeline-item">
                  <div className="timeline-year">호흡</div>
                  <div className="timeline-content">
                    임산부에게 가장 중요한 호흡 교육으로 시작합니다. 출산 과정과 직결되는 부분입니다.
                  </div>
                </div>
                <div className="timeline-item">
                  <div className="timeline-year">상체 스트레칭</div>
                  <div className="timeline-content">
                    무거워지는 가슴과 앞으로 말리는 어깨, 목 주변의 긴장을 풀어줍니다.
                  </div>
                </div>
                <div className="timeline-item">
                  <div className="timeline-year">흉추 움직임</div>
                  <div className="timeline-content">
                    폼롤러를 이용해 굳기 쉬운 등을 움직여 호흡이 편해지도록 만듭니다.
                  </div>
                </div>
                <div className="timeline-item">
                  <div className="timeline-year">하체 · 순환</div>
                  <div className="timeline-content">
                    골반 주변 근육을 쓰고, 종아리 마사지로 부종과 순환 문제를 관리하며 마무리합니다.
                  </div>
                </div>
              </div>

              <h3 className="mt-5">울진군보건소 출산준비교실</h3>
              <p>
                울진군보건소는 모자보건팀에 등록된 예비맘을 대상으로 분기별 출산운동교실과 명상교실을 운영합니다.
                블루모션트레이닝은 이 프로그램의 운동 파트를 맡아
                <strong> 울진군 평생학습관에서 4주 과정</strong>으로 진행했습니다.
                10명의 산모를 위해 고프론과 폼롤러를 준비해 이동했고,
                주차가 지날수록 난이도를 높여가는 구성으로 마쳤습니다.
              </p>

              <div className="info-box mt-4">
                <h4 className="info-box-title"><Icon name="heart" /> 왜 임산부 운동이 필요한가</h4>
                <ul>
                  <li>체중 증가와 무게중심 변화로 생기는 허리 · 골반 통증을 관리합니다.</li>
                  <li>호흡과 골반저 근육을 미리 훈련해 출산 과정에 대비합니다.</li>
                  <li>순환을 도와 부종과 다리 저림을 줄입니다.</li>
                  <li>산후 회복 속도를 앞당기고, 출산 후 복귀 운동으로 이어집니다.</li>
                </ul>
              </div>

              <div className="info-box mt-4" style={{ textAlign: 'center' }}>
                <h4>먼저 상담부터 받아보세요</h4>
                <p>주 수와 몸 상태에 따라 가능한 범위가 달라집니다. 자세히 설명드리겠습니다.</p>
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
