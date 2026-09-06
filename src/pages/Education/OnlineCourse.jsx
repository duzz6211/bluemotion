import { Link } from 'react-router-dom'
import Icon from '../../components/Icon/Icon'
import HeroSection from '../../components/HeroSection/HeroSection'
import PageSidebar from '../../components/Sidebar/PageSidebar'
import { SITE } from '../../data/site'

export default function OnlineCourse() {
  return (
    <>
      <HeroSection
        title="온라인 교육과정"
        subtitle="거리 때문에 포기하지 않도록"
        size="sm"
        breadcrumb={[
          { label: '홈', to: '/' },
          { label: '교육과정', to: '/education' },
          { label: '온라인 교육과정' },
        ]}
      />

      <section className="section">
        <div className="container">
          <div className="content-with-sidebar">
            <main className="main-content">
              <h3>왜 온라인인가</h3>
              <p>
                FMTA 지도자 과정에는 울진뿐 아니라 삼척 · 동해 · 강릉 · 영덕 · 봉화 · 포항에서도
                교육생이 찾아옵니다. 매주 왕복 몇 시간을 오가는 분들을 보며,
                <strong> 이론 파트만이라도 온라인으로 먼저 듣고 오실 수 있게</strong> 하자는 데서 시작했습니다.
              </p>
              <p>
                움직임 교육은 결국 몸으로 배워야 합니다. 그래서 블루모션의 온라인 과정은
                오프라인을 대체하지 않고, <strong>이론은 온라인 · 실기는 현장</strong>으로 나누는
                블렌디드 방식을 지향합니다.
              </p>

              <h3 className="mt-5">준비 중인 구성</h3>
              <div className="grid-2 mt-3">
                <div className="info-item">
                  <span className="info-icon"><Icon name="book" /></span>
                  <div className="info-content">
                    <h4>해부학 기초</h4>
                    <p>지도자 과정의 첫 관문인 해부학을 미리 듣고 반복 학습할 수 있도록 구성합니다.</p>
                  </div>
                </div>
                <div className="info-item">
                  <span className="info-icon"><Icon name="crosshair" /></span>
                  <div className="info-content">
                    <h4>기능해부학 · 동작분석</h4>
                    <p>구조와 기능을 잇는 이론 파트. 영상으로 여러 번 확인할 수 있는 형태가 적합합니다.</p>
                  </div>
                </div>
                <div className="info-item">
                  <span className="info-icon"><Icon name="play" /></span>
                  <div className="info-content">
                    <h4>동작 레퍼런스</h4>
                    <p>기구별 동작을 촬영해 수료생이 현장에서 다시 찾아볼 수 있는 자료로 정리합니다.</p>
                  </div>
                </div>
                <div className="info-item">
                  <span className="info-icon"><Icon name="userCheck" /></span>
                  <div className="info-content">
                    <h4>수료생 보수 교육</h4>
                    <p>이미 수료한 강사들이 최신 교육을 온라인으로 이어받을 수 있게 합니다.</p>
                  </div>
                </div>
              </div>

              <h3 className="mt-5">진행 상황</h3>
              <div className="timeline mt-3">
                <div className="timeline-item">
                  <div className="timeline-year">현재</div>
                  <div className="timeline-content">
                    오프라인 지도자 과정을 기수별로 운영하며 커리큘럼과 교재를 다듬고 있습니다.
                    온라인으로 옮길 이론 파트를 선별하는 단계입니다.
                  </div>
                </div>
                <div className="timeline-item">
                  <div className="timeline-year">다음</div>
                  <div className="timeline-content">
                    이론 모듈 촬영과 수강 환경 구축. 개설 시기가 정해지면 이 페이지와
                    블로그 · 인스타그램을 통해 공지합니다.
                  </div>
                </div>
              </div>

              <div className="info-box mt-4">
                <h4 className="info-box-title"><Icon name="messageCircle" /> 지금 바로 수강하고 싶다면</h4>
                <p>
                  온라인 과정이 열리기 전까지는 오프라인 과정으로 안내드립니다.
                  거리가 부담되신다면 <strong>주말반(토 / 일 / 토 · 일)</strong>이나
                  시간 협의가 가능한 반으로 조정해 드릴 수 있으니 상담 시 말씀해 주세요.
                </p>
                <Link to="/education/functional-pilates" className="btn btn-secondary btn-sm mt-2">
                  기능성필라테스 지도자 과정
                </Link>
              </div>

              <div className="info-box mt-4" style={{ textAlign: 'center' }}>
                <h4>개설 소식 먼저 받아보기</h4>
                <p>인스타그램과 블로그에 가장 먼저 공지합니다.</p>
                <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                  <a href={SITE.instagram} target="_blank" rel="noreferrer noopener" className="btn btn-primary">
                    <Icon name="instagram" /> 인스타그램
                  </a>
                  <a href={'tel:' + SITE.phone} className="btn btn-secondary">{SITE.phone}</a>
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
