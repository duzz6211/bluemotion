import { Link } from 'react-router-dom'
import Icon from '../../components/Icon/Icon'

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <h1 className="hero-title">움직임 교육의 새로운 기준</h1>
            <p className="hero-subtitle">교육·시설·프로그램이 하나로 연결된 통합 움직임 플랫폼</p>
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <Link to="/fmta" className="btn btn-outline btn-lg">FMTA 협회</Link>
              <Link to="/bluemotion" className="btn btn-outline btn-lg">블루모션 센터</Link>
            </div>
          </div>
        </div>
      </section>

      {/* 협회 vs 센터 비교 섹션 */}
      <section className="section bg-light">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">협회와 센터</h2>
            <p className="section-subtitle">FMTA 협회와 블루모션트레이닝 센터는 각각 다른 역할을 수행합니다</p>
          </div>
          <div className="comparison-wrapper">
            <div className="comparison-card comparison-association">
              <div className="comparison-header">
                <span className="comparison-badge">협회 (Association)</span>
                <h3 className="comparison-title">FMTA</h3>
                <p className="comparison-subtitle">Functional Movement Training Association</p>
              </div>
              <div className="comparison-body">
                <p className="comparison-desc">
                  <strong>기능적움직임트레이닝 교육 전문 협회</strong>로서 교육 철학과 커리큘럼을 개발
                </p>
                <ul className="comparison-list">
                  <li><span className="feature-icon"><Icon name="award" /></span><span>문화체육관광부 인증 자격 발급 교육기관</span></li>
                  <li><span className="feature-icon"><Icon name="graduationCap" /></span><span>기능성필라테스/기능성움직임 지도자과정</span></li>
                  <li><span className="feature-icon"><Icon name="fileText" /></span><span>교육 커리큘럼 개발 및 강의</span></li>
                  <li><span className="feature-icon"><Icon name="userCheck" /></span><span>강사 양성 및 지도자 인증</span></li>
                </ul>
                <Link to="/fmta" className="btn btn-primary">협회 소개 보기</Link>
              </div>
            </div>
            <div className="comparison-divider"><span className="divider-text">&times;</span></div>
            <div className="comparison-card comparison-center">
              <div className="comparison-header">
                <span className="comparison-badge">센터 (Center)</span>
                <h3 className="comparison-title">블루모션트레이닝</h3>
                <p className="comparison-subtitle">Bluemotion Training Center</p>
              </div>
              <div className="comparison-body">
                <p className="comparison-desc">
                  <strong>FMTA 교육 철학을 구현하는</strong> 현장으로, <strong>레슨과 교육</strong>이 이루어지는 공간
                </p>
                <ul className="comparison-list">
                  <li><span className="feature-icon"><Icon name="building" /></span><span>울진 소재 대형 필라테스 센터</span></li>
                  <li><span className="feature-icon"><Icon name="users" /></span><span>그룹 ∙ 개인 ∙ 임산부 ∙ 키즈 ∙ 시니어 ∙ 재활</span></li>
                  <li><span className="feature-icon"><Icon name="graduationCap" /></span><span>필라테스 지도자과정 교육 기관</span></li>
                  <li><span className="feature-icon"><Icon name="handshake" /></span><span>학교 ∙ 보건소 ∙ 공기업 출강 및 연계 프로그램</span></li>
                </ul>
                <Link to="/bluemotion" className="btn btn-primary">센터 둘러보기</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========== 주요 프로그램 1 - 그룹 / 개인 레슨 ========== */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">주요 프로그램</h2>
            <p className="section-subtitle">블루모션에서 운영하는 다양한 프로그램을 만나보세요</p>
          </div>
          <div className="lesson-pair">
            {/* 그룹 레슨 */}
            <div className="lesson-card">
              <div className="lesson-card-image placeholder-image">[그룹레슨 사진 - 리포머, 여]</div>
              <div className="lesson-card-body">
                <h3 className="lesson-card-title">그룹 레슨</h3>
                <p className="lesson-card-desc">나를 위한 소중한 시간, 소규모 인원으로 진행되어 양질의 레슨이 가능합니다.</p>
                <ul className="lesson-card-list">
                  <li><Icon name="checkCircle" /> 리포머 / 바렐 / 체어</li>
                  <li><Icon name="checkCircle" /> TRX TRAINING ZONE</li>
                  <li><Icon name="checkCircle" /> 3대1 소그룹 레슨</li>
                </ul>
                <Link to="/bluemotion/lesson" className="btn btn-primary btn-sm">자세히 보기</Link>
              </div>
            </div>
            {/* 개인 레슨 */}
            <div className="lesson-card">
              <div className="lesson-card-image placeholder-image">[개인레슨 사진]</div>
              <div className="lesson-card-body">
                <h3 className="lesson-card-title">개인 레슨</h3>
                <p className="lesson-card-desc">조금씩 찾아가는 바른 자세, 체형분석과 움직임 테스트로 시작합니다.</p>
                <ul className="lesson-card-list">
                  <li><Icon name="checkCircle" /> 개인 맞춤 케어 프로그램</li>
                  <li><Icon name="checkCircle" /> 레슨 전/후 비교사진 제공</li>
                  <li><Icon name="checkCircle" /> 추후 그룹레슨 전환 목표</li>
                </ul>
                <Link to="/bluemotion/lesson" className="btn btn-primary btn-sm">자세히 보기</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========== 주요 프로그램 2 - 추가 레슨 ========== */}
      <section className="section bg-light">
        <div className="container">
          <div className="lesson-pair">
            {/* 왼쪽 */}
            <div className="lesson-card">
              <div className="lesson-card-image placeholder-image">[프로그램 사진]</div>
              <div className="lesson-card-body">
                <h3 className="lesson-card-title">스페셜 임산부</h3>
                <p className="lesson-card-desc">임산부운동처방사와 함께 주 수에 맞춰 진행되는 안전한 그룹 레슨입니다.</p>
                <ul className="lesson-card-list">
                  <li><Icon name="checkCircle" /> 14주 이상 임산부</li>
                  <li><Icon name="checkCircle" /> 임산부 그룹/개인 레슨</li>
                  <li><Icon name="checkCircle" /> 빠른 회복 ∙ 건강한 출산</li>
                </ul>
                <Link to="/bluemotion/lesson" className="btn btn-primary btn-sm">자세히 보기</Link>
              </div>
            </div>
            {/* 오른쪽 */}
            <div className="lesson-card">
              <div className="lesson-card-image placeholder-image">[프로그램 사진]</div>
              <div className="lesson-card-body">
                <h3 className="lesson-card-title">키즈 ∙ 성장</h3>
                <p className="lesson-card-desc">버른 자세에서 시작되는 집중력과 신체적 자신감은 시기에 맞는 성장을 도와줍니다.</p>
                <ul className="lesson-card-list">
                  <li><Icon name="checkCircle" /> 저학년/고학년/청소년</li>
                  <li><Icon name="checkCircle" /> 성장판 자극 자세교정</li>
                  <li><Icon name="checkCircle" /> 바른 학습자세 교육</li>
                </ul>
                <Link to="/bluemotion/lesson" className="btn btn-primary btn-sm">자세히 보기</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========== 특별 활동 프로그램 ========== */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">특별 활동 프로그램</h2>
            <p className="section-subtitle">블루모션에서만 만날 수 있는 특별한 활동 프로그램</p>
          </div>

          {/* Row 1: 왼쪽 사진 두 개 / 오른쪽 설명 */}
          <div className="activity-row">
            <div className="activity-photos">
              <div className="activity-photo placeholder-image">[활동 사진 1]</div>
              <div className="activity-photo placeholder-image">[활동 사진 2]</div>
            </div>
            <div className="activity-info">
              <h3 className="activity-title">플로팅 온 더 블루</h3>
              <p className="activity-desc">울진의 아름다운 자연속에서 부력을 활용한 특별한 움직임을 경험하며 몸과 마음의 균형을 찾아갑니다.</p>
              <ul className="activity-list">
                <li><Icon name="checkCircle" /> 고래와 함께 힐링 타임</li>
                <li><Icon name="checkCircle" /> 부력 활용 플로팅 필라테스</li>
                <li><Icon name="checkCircle" /> 전문강사 지도 프로그램</li>
              </ul>
              <Link to="/floating" className="btn btn-primary btn-sm">자세히 보기</Link>
            </div>
          </div>

          {/* Row 2: 왼쪽 설명 / 오른쪽 사진 두 개 */}
          <div className="activity-row">
            <div className="activity-info">
              <h3 className="activity-title">팀빌딩 ∙ 워크샵</h3>
              <p className="activity-desc">오늘은 회사를 벗어나 팀원과 함께 건강도 챙기고 추억도 쌓아봅니다.</p>
              <ul className="activity-list">
                <li><Icon name="checkCircle" /> 10명 내외 인원 가능</li>
                <li><Icon name="checkCircle" /> 약 90분간 진행</li>
                <li><Icon name="checkCircle" /> 체형별 스트레칭 교육</li>
              </ul>
              <Link to="/floating" className="btn btn-primary btn-sm">자세히 보기</Link>
            </div>
            <div className="activity-photos">
              <div className="activity-photo placeholder-image">[활동 사진 3]</div>
              <div className="activity-photo placeholder-image">[활동 사진 4]</div>
            </div>
          </div>

          {/* Row 3: 왼쪽 사진 두 개 / 오른쪽 설명 */}
          <div className="activity-row">
            <div className="activity-photos">
              <div className="activity-photo placeholder-image">[활동 사진 5]</div>
              <div className="activity-photo placeholder-image">[활동 사진 6]</div>
            </div>
            <div className="activity-info">
              <h3 className="activity-title">비치 필라테스</h3>
              <p className="activity-desc">가까이 있기에 소중함을 몰랐던 해변에서 파도소리 가득한 필라테스 레슨입니다.</p>
              <ul className="activity-list">
                <li><Icon name="checkCircle" /> 소도구 활용 야외 필라테스</li>
                <li><Icon name="checkCircle" /> 남녀노소 누구나 참여 가능</li>
                <li><Icon name="checkCircle" /> 봄 ∙ 여름 ∙ 가을 시즌</li>
              </ul>
              <Link to="/floating/activity" className="btn btn-primary btn-sm">자세히 보기</Link>
            </div>
          </div>

          {/* Row 4: 왼쪽 설명 / 오른쪽 사진 두 개 */}
          <div className="activity-row">
            <div className="activity-info">
              <h3 className="activity-title">학교 연계 프로그램</h3>
              <p className="activity-desc">아이들이 가장 많은 시간을 보내고 있는 학교 인솔하에 센터를 방문하여 집중레슨을 받습니다.</p>
              <ul className="activity-list">
                <li><Icon name="checkCircle" /> 학기 중 주기적 방문 레슨</li>
                <li><Icon name="checkCircle" /> 방학 중 단기적 방문 레슨</li>
                <li><Icon name="checkCircle" /> 자세 ∙ 키 성장 관련 출강</li>
              </ul>
              <Link to="/special-maternity" className="btn btn-primary btn-sm">자세히 보기</Link>
            </div>
            <div className="activity-photos">
              <div className="activity-photo placeholder-image">[활동 사진 7]</div>
              <div className="activity-photo placeholder-image">[활동 사진 8]</div>
            </div>
          </div>
        </div>
      </section>

      {/* ========== 강사 양성 교육과정 ========== */}
      <section className="section bg-light">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">강사 양성 교육과정</h2>
            <p className="section-subtitle">FMTA의 교육 철학이 녹아든 커리큘럼</p>
          </div>
          <div className="instructor-courses">
            <div className="instructor-course-card">
              <div className="instructor-course-image placeholder-image">[필라테스 지도자 과정 사진]</div>
              <div className="instructor-course-body">
                <h4 className="instructor-course-title">필라테스 지도자 과정</h4>
                <p className="instructor-course-desc">기능성필라테스 지도자 과정</p>
                <Link to="/education/functional-pilates" className="btn btn-secondary btn-sm">상세보기</Link>
              </div>
            </div>
            <div className="instructor-course-card">
              <div className="instructor-course-image placeholder-image">[글로벌 필라테스]</div>
              <div className="instructor-course-body">
                <h4 className="instructor-course-title">글로벌 필라테스</h4>
                <p className="instructor-course-desc">결혼 이민 여성 취업 지원</p>
                <Link to="/education/floating-expert" className="btn btn-secondary btn-sm">상세보기</Link>
              </div>
            </div>
            <div className="instructor-course-card">
              <div className="instructor-course-image placeholder-image">[플로팅 필라테스]</div>
              <div className="instructor-course-body">
                <h4 className="instructor-course-title">플로팅 필라테스</h4>
                <p className="instructor-course-desc">플로팅 필라테스 지도자 과정</p>
                <Link to="/education/marriage-pregnancy" className="btn btn-secondary btn-sm">상세보기</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 통합 가치 */}
      <section className="section bg-light">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">교육 · 시설 · 프로그램의 통합</h2>
            <p className="section-subtitle">협회의 전문성, 센터의 시설, 프로그램의 차별화가 하나로</p>
          </div>
          <div className="value-integration">
            <div className="value-item">
              <div className="value-icon"><span className="feature-icon"><Icon name="clipboard" /></span></div>
              <div className="value-content">
                <h4 className="value-title">교육의 전문성</h4>
                <p className="value-desc">FMTA 협회가 개발한 체계적인 커리큘럼과 검증된 교육 시스템으로 민간자격을 발급합니다.</p>
              </div>
            </div>
            <div className="value-connector"></div>
            <div className="value-item">
              <div className="value-icon"><span className="feature-icon"><Icon name="building" /></span></div>
              <div className="value-content">
                <h4 className="value-title">시설의 구현</h4>
                <p className="value-desc">블루모션트레이닝 센터에서 이론과 실습이 통합된 현장 교육을 제공합니다.</p>
              </div>
            </div>
            <div className="value-connector"></div>
            <div className="value-item">
              <div className="value-icon"><span className="feature-icon"><Icon name="waves" /></span></div>
              <div className="value-content">
                <h4 className="value-title">프로그램의 차별화</h4>
                <p className="value-desc">플로팅온더블루와 스페셜 임산부 등 특화 프로그램으로 차별화된 경험을 제공합니다.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 센터 정보 */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">블루모션트레이닝 센터</h2>
            <p className="section-subtitle">울진에 위치한 블루모션 실물 센터를 소개합니다</p>
          </div>
          <div className="center-info-wrapper">
            <div className="center-info-image placeholder-image" style={{ minHeight: '350px', borderRadius: '12px' }}>[센터 외관/내부 이미지]</div>
            <div className="center-info-details">
              <div className="info-item">
                <span className="info-icon"><Icon name="mapPin" /></span>
                <div className="info-text"><strong>주소</strong><p>경상북도 울진군 울진읍 (상세주소)</p></div>
              </div>
              <div className="info-item">
                <span className="info-icon"><Icon name="phone" /></span>
                <div className="info-text"><strong>전화</strong><p>054-XXX-XXXX</p></div>
              </div>
              <div className="info-item">
                <span className="info-icon"><Icon name="clock" /></span>
                <div className="info-text"><strong>운영시간</strong><p>평일 09:00 - 21:00<br/>토요일 09:00 - 18:00<br/>일요일/공휴일 휴무</p></div>
              </div>
              <div className="info-item">
                <span className="info-icon"><Icon name="car" /></span>
                <div className="info-text"><strong>주차</strong><p>건물 내 주차장 이용 가능</p></div>
              </div>
              <div className="center-info-buttons">
                <Link to="/bluemotion/location" className="btn btn-primary">오시는 길</Link>
                <Link to="/news/contact" className="btn btn-secondary">문의하기</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 최신 소식 */}
      <section className="section bg-light">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">최신 소식</h2>
            <p className="section-subtitle">블루모션의 새로운 소식을 확인하세요</p>
          </div>
          <div className="grid-3">
            <article className="card">
              <div className="card-image placeholder-image">[뉴스 이미지]</div>
              <div className="card-body">
                <span className="text-muted" style={{ fontSize: 'var(--font-size-sm)' }}>2024.01.15</span>
                <h4 className="card-title">2024년 상반기 지도자 과정 모집 안내</h4>
                <p className="card-text">FMTA 필라테스 지도자 과정 상반기 모집을 시작합니다...</p>
                <Link to="/news" className="btn btn-secondary btn-sm">자세히 보기</Link>
              </div>
            </article>
            <article className="card">
              <div className="card-image placeholder-image">[뉴스 이미지]</div>
              <div className="card-body">
                <span className="text-muted" style={{ fontSize: 'var(--font-size-sm)' }}>2024.01.10</span>
                <h4 className="card-title">플로팅온더블루 시즌 프로그램 오픈</h4>
                <p className="card-text">봄 시즌을 맞아 새로운 수중 프로그램을 선보입니다...</p>
                <Link to="/news" className="btn btn-secondary btn-sm">자세히 보기</Link>
              </div>
            </article>
            <article className="card">
              <div className="card-image placeholder-image">[뉴스 이미지]</div>
              <div className="card-body">
                <span className="text-muted" style={{ fontSize: 'var(--font-size-sm)' }}>2024.01.05</span>
                <h4 className="card-title">울진군 건강증진센터 협약 체결</h4>
                <p className="card-text">지역사회 건강 증진을 위한 업무협약을 체결했습니다...</p>
                <Link to="/news" className="btn btn-secondary btn-sm">자세히 보기</Link>
              </div>
            </article>
          </div>
          <div className="text-center mt-4">
            <Link to="/news" className="btn btn-secondary">전체 소식 보기</Link>
          </div>
        </div>
      </section>
    </>
  )
}
