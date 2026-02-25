import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          {/* Brand Info */}
          <div className="footer-brand">
            <div className="logo-text">BLUEMOTION</div>
            <p className="mt-3">
              FMTA 협회 · 블루모션트레이닝 · 플로팅온더블루<br />
              움직임 교육과 웰니스의 전문 브랜드
            </p>
            <p className="mt-3">
              경상북도 울진군 (상세주소)<br />
              Tel. 054-XXX-XXXX<br />
              Email. info@bluemotion.co.kr
            </p>
          </div>

          {/* FMTA Links */}
          <div>
            <h4 className="footer-title">FMTA</h4>
            <ul className="footer-links">
              <li><Link to="/fmta">협회소개</Link></li>
              <li><Link to="/fmta/greeting">인사말</Link></li>
              <li><Link to="/fmta/history">연혁</Link></li>
              <li><Link to="/fmta/info">정보</Link></li>
            </ul>
          </div>

          {/* Center Links */}
          <div>
            <h4 className="footer-title">블루모션트레이닝</h4>
            <ul className="footer-links">
              <li><Link to="/bluemotion">시설소개</Link></li>
              <li><Link to="/bluemotion/lesson">레슨안내</Link></li>
              <li><Link to="/bluemotion/location">오시는길</Link></li>
              <li><Link to="/bluemotion/vision">비전</Link></li>
            </ul>
          </div>

          {/* Program Links */}
          <div>
            <h4 className="footer-title">프로그램</h4>
            <ul className="footer-links">
              <li><Link to="/floating">플로팅온더블루</Link></li>
              <li><Link to="/special-maternity">스페셜임산부</Link></li>
              <li><Link to="/education">강사과정</Link></li>
              <li><Link to="/shop">이용안내</Link></li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} BLUEMOTION. All rights reserved.</p>
          <div className="footer-bottom-links">
            <Link to="#">개인정보처리방침</Link>
            <Link to="#">이용약관</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
