'use client'

import { useEffect, useRef, useState } from 'react'
import { usePathname } from 'next/navigation'
import { SITE, NAV } from '../site'
import { Icon } from './icons'
import { initSmoothScroll, initScrollEffects, scrollToElement } from '../spring'

const Social = ({ className }) => (
  <div className={className}>
    <a href={SITE.blog} target="_blank" rel="noopener noreferrer" aria-label="네이버 블로그" title="네이버 블로그">
      <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M16.27 12.85 7.5 3H3v18h4.73V11.15L16.5 21H21V3h-4.73z" /></svg>
    </a>
    <a href={SITE.instagram} target="_blank" rel="noopener noreferrer" aria-label="인스타그램" title="인스타그램">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" /></svg>
    </a>
  </div>
)

/* 로고: 심볼(public/assets/logo.svg) + 오른쪽 글자 */
function Logo() {
  return (
    <a className="logo" href="/" aria-label="FMTA 블루모션 홈">
      <img src="/assets/logo.svg" alt="" width="40" height="40" />
      <span className="logo-text">BLUE MOTION<small>FMTA · ULJIN</small></span>
    </a>
  )
}
/* PC 고정 헤더의 [상담·출강 문의] 버튼 → 연락 방법 레이어 (폼 없음) */
function ContactLayer() {
  const [open, setOpen] = useState(false)
  const box = useRef(null)
  useEffect(() => {
    if (!open) return
    const onDown = (e) => { if (box.current && !box.current.contains(e.target)) setOpen(false) }
    const onKey = (e) => { if (e.key === 'Escape') setOpen(false) }
    document.addEventListener('pointerdown', onDown)
    document.addEventListener('keydown', onKey)
    return () => { document.removeEventListener('pointerdown', onDown); document.removeEventListener('keydown', onKey) }
  }, [open])
  return (
    <div className="contact-layer" ref={box}>
      <button className="btn btn-primary btn-sm header-cta" type="button" aria-expanded={open} aria-haspopup="true" onClick={() => setOpen(!open)}>상담·출강 문의</button>
      {open && (
        <div className="contact-pop" role="dialog" aria-label="연락 방법">
          <p>편하신 방법으로 연락해 주세요.<br /><small>평일 09:00~22:00 · 사전 예약제</small></p>
          <a href={SITE.phoneHref}>{Icon.phone}<span>전화<small>{SITE.phone}</small></span></a>
          <a href={SITE.smsHref}>{Icon.sms}<span>문자<small>{SITE.phone}</small></span></a>
          <a href={`mailto:${SITE.email}`}>{Icon.mail}<span>이메일<small>{SITE.email}</small></span></a>
          <a href={SITE.kakao} target="_blank" rel="noopener noreferrer">{Icon.kakao}<span>카카오톡<small>채널로 문의</small></span></a>
        </div>
      )}
    </div>
  )
}

function Header() {
  const page = usePathname()
  const [open, setOpen] = useState(false)
  useEffect(() => {
    document.body.classList.toggle('nav-open', open)
    return () => document.body.classList.remove('nav-open')
  }, [open])
  return (
    <header className="site-header">
      <div className="container">
        <Logo />
        <nav className="gnb" id="gnb" aria-label="주 메뉴">
          <ul>
            {NAV.map((n) => (
              <li key={n.href}>
                <a className={`top${page === n.href ? ' current' : ''}`} href={n.href} onClick={() => setOpen(false)}>{n.label}</a>
                <ul className="sub">
                  {n.children.map(([label, hash]) => (
                    <li key={hash}><a href={`${n.href}${hash}`} onClick={() => setOpen(false)}>{label}</a></li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </nav>
        <Social className="social header-sns" />
        <ContactLayer />
        <button className="nav-toggle" type="button" aria-label={open ? '메뉴 닫기' : '메뉴 열기'} aria-expanded={open} aria-controls="gnb" onClick={() => setOpen(!open)}>
          <span /><span /><span />
        </button>
      </div>
    </header>
  )
}

function Footer() {
  return (
    <>
      <section className="cta-band" id="contact">
        <div className="container">
          <h2>CONTACT</h2>
          <h3 className="lp-sub">상담·출강 문의</h3>
          <p>개인 레슨, 관공서·학교·기업 출강, 지도자 과정까지 편하게 문의해 주세요.<br />100% 사전 예약제 · 평일 09:00~22:00</p>
          <div className="btn-row">
            <a className="btn btn-light btn-ico" href={SITE.phoneHref} aria-label={`전화 ${SITE.phone}`}>{Icon.phone}전화하기</a>
            <a className="btn btn-outline btn-ico" href={SITE.smsHref} aria-label="문자 보내기">{Icon.sms}문자</a>
            <a className="btn btn-outline btn-ico" href={SITE.kakao} target="_blank" rel="noopener noreferrer" aria-label="카카오톡 채널">{Icon.kakao}카카오톡</a>
            <a className="btn btn-outline btn-ico" href={`mailto:${SITE.email}`} aria-label="이메일 보내기">{Icon.mail}이메일</a>
          </div>
        </div>
      </section>
      <footer className="site-footer">
        <div className="container">
          <div className="cols">
            <div>
              <h4>블루모션트레이닝센터</h4>
              <p>기능적움직임트레이닝협회(FMTA)<br />Functional Movement Training Association</p>
              <p>{SITE.address}<br />{SITE.hours} · {SITE.closed}<br />건물 앞 대형 주차 공간 무료</p>
            </div>
            <div>
              <h4>바로가기</h4>
              <ul>{NAV.map((n) => <li key={n.href}><a href={n.href}>{n.label}</a></li>)}</ul>
            </div>
            <div>
              <h4>연락처</h4>
              <ul>
                <li><a className="footer-ico" href={SITE.phoneHref}>{Icon.phone} {SITE.phone}</a></li>
                <li><a href={`mailto:${SITE.email}`}>{SITE.email}</a></li>
                <li><Social className="social" /></li>
              </ul>
            </div>
          </div>
          <p className="copy">© 2026 블루모션트레이닝센터 · FMTA 기능적움직임트레이닝협회. All rights reserved.</p>
        </div>
      </footer>
      <nav className="bottom-bar" aria-label="빠른 문의">
        <a href={SITE.phoneHref}>{Icon.phone}전화</a>
        <a href={SITE.smsHref}>{Icon.sms}문자</a>
        <a href={SITE.kakao} target="_blank" rel="noopener noreferrer">{Icon.kakao}카카오톡</a>
      </nav>
    </>
  )
}

/* 페이지 상단 섹션 바로가기 (sections: [{id, label}]) */
function AnchorBar({ sections }) {
  const [on, setOn] = useState('')
  useEffect(() => {
    if (!('IntersectionObserver' in window)) return
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => e.isIntersecting && setOn(e.target.id))
    }, { rootMargin: '-35% 0px -60% 0px' })
    sections.forEach((s) => { const el = document.getElementById(s.id); if (el) io.observe(el) })
    return () => io.disconnect()
  }, [sections])
  return (
    <div className="anchor-bar">
      <div className="container">
        {sections.map((s) => <a key={s.id} href={`#${s.id}`} className={on === s.id ? 'on' : undefined}>{s.label}</a>)}
      </div>
    </div>
  )
}

export default function Layout({ sections, hero, children }) {
  useEffect(() => {
    const offSmooth = initSmoothScroll()
    const offEffects = initScrollEffects()
    // #story 등 해시로 들어왔을 때 렌더링 후 해당 섹션으로 스프링 이동
    const id = decodeURIComponent(location.hash.slice(1))
    const t = id && setTimeout(() => {
      const el = document.getElementById(id)
      if (el) scrollToElement(el)
    }, 350)
    return () => { offSmooth(); offEffects(); clearTimeout(t) }
  }, [])
  return (
    <>
      <div className="scroll-progress" aria-hidden="true" />
      <Header />
      <main>
        {hero}
        {sections && <AnchorBar sections={sections} />}
        {children}
      </main>
      <Footer />
    </>
  )
}
