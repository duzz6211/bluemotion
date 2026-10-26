'use client'

import { useEffect, useRef, useState } from 'react'
import { SPRING_EASING, reducedMotion } from '../spring'
import { img } from '../site'
import cases from '../../data/cases.json'
import programs from '../../data/programs.json'
import gallery from '../../data/gallery.json'

/* ---------- 이미지 (없으면 플레이스홀더) ---------- */
export function Img({ src: first, fallback, alt = '', ...rest }) {
  const [src, setSrc] = useState(first)
  const [bad, setBad] = useState(false)
  const ref = useRef(null)
  const fail = () => (fallback && src !== fallback ? setSrc(fallback) : setBad(true))
  // 하이드레이션 전에 이미 실패한 이미지는 onError가 오지 않으므로 마운트 후 직접 확인
  useEffect(() => {
    const el = ref.current
    if (el && el.complete && el.naturalWidth === 0) fail()
  }, [])
  if (bad) {
    return (
      <div className="ph" role="img" aria-label={alt || '사진 준비 중'}>
        <b>PHOTO</b><span>사진 준비 중</span><span>{src.split('/').pop()}</span>
      </div>
    )
  }
  return <img ref={ref} src={src} alt={alt} loading="lazy" decoding="async" onError={fail} {...rest} />
}

/* ---------- 등장 효과 ---------- */
export function Reveal({ as: Tag = 'div', className = '', children, ...props }) {
  const ref = useRef(null)
  const [shown, setShown] = useState(false)
  useEffect(() => {
    if (!('IntersectionObserver' in window)) { setShown(true); return }
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { setShown(true); io.disconnect() }
    }, { threshold: 0.12 })
    io.observe(ref.current)
    return () => io.disconnect()
  }, [])
  return <Tag ref={ref} className={`reveal${shown ? ' in' : ''} ${className}`.trim()} {...props}>{children}</Tag>
}

export const Todo = ({ children }) => <span className="todo">{children}</span>

/* ---------- 출강 사례 카드 (data/cases.json, 정적) ---------- */
export function Cases({ limit }) {
  const rows = limit ? cases.slice(0, limit) : cases
  return (
    <div className="grid grid-3">
      {rows.map((c) => (
        <Reveal className="card case" key={c.org}>
          <div className="media"><Img src={img(c.image)} alt={`${c.org} ${c.program}`} /></div>
          <span className="tag">{c.program}</span>
          <h3>{c.org}</h3>
          <p>{c.text}</p>
        </Reveal>
      ))}
    </div>
  )
}

/* ---------- 공통 조각 ---------- */
export function PageHero({ eyebrow, title, text }) {
  return (
    <section className="page-hero">
      <div className="container">
        <span className="eyebrow">{eyebrow}</span>
        <h1>{title}</h1>
        {text && <p>{text}</p>}
      </div>
    </section>
  )
}

export function Head({ eyebrow, title, text }) {
  return (
    <Reveal className="section-head">
      <span className="eyebrow">{eyebrow}</span>
      <h2>{title}</h2>
      {text && <p>{text}</p>}
    </Reveal>
  )
}

/* ---------- 프로그램 카드 (data/programs.json) : 대상 / 정원 / 시간 / 특징 ---------- */
export function ProgramCards() {
  return (
    <div className="grid grid-2 program-grid">
      {programs.map((p) => (
        <Reveal as="article" className="card program" id={p.id} key={p.id}>
          <div className="media wide"><Img src={img(p.image)} alt={p.title} /></div>
          <span className="tag">{p.tag}</span>
          <h3>{p.title}</h3>
          <dl className="spec">
            <div><dt>대상</dt><dd>{p.target}</dd></div>
            <div><dt>정원</dt><dd>{p.size}</dd></div>
            <div><dt>시간</dt><dd>{p.time}</dd></div>
          </dl>
          <ul className="checks">{p.points.map((t) => <li key={t}>{t}</li>)}</ul>
          {p.todo && <p><Todo>{p.todo}</Todo></p>}
        </Reveal>
      ))}
    </div>
  )
}

/* ---------- 갤러리 · 영상 (data/gallery.json) ---------- */
export function Gallery({ kind }) {
  const data = gallery
  return (
    <div className="gallery">
      {(data.photos[kind] || []).map((g) => <div className="media" key={g.src}><Img src={img(g.src)} alt={g.alt} /></div>)}
    </div>
  )
}
export function Videos({ kind }) {
  const data = gallery
  return (
    <div className="grid grid-2" style={{ marginTop: 20 }}>
      {(data.videos[kind] || []).map((v) => (
        <div className="video" key={v.title}>
          {v.id
            ? <iframe src={`https://www.youtube-nocookie.com/embed/${encodeURIComponent(v.id)}`} title={v.title} loading="lazy" allow="accelerometer; encrypted-media; picture-in-picture" allowFullScreen />
            : <div className="ph"><b>VIDEO</b><span>{v.title}</span><span>유튜브 영상 ID 입력 필요 (data/gallery.json)</span></div>}
        </div>
      ))}
    </div>
  )
}

/* ---------- 스크롤을 따라 이동하는 물결선 ---------- */
export function FlowLine({ children }) {
  const wrap = useRef(null)
  const base = useRef(null)
  const drawn = useRef(null)
  const dot = useRef(null)
  const halo = useRef(null)
  const [geo, setGeo] = useState({ w: 0, h: 0, d: '' })

  useEffect(() => {
    const build = () => {
      const w = wrap.current.offsetWidth
      const h = wrap.current.offsetHeight
      const narrow = w < 720
      const xl = w * (narrow ? 0.1 : 0.06)
      const xr = w * (narrow ? 0.9 : 0.94)
      const step = narrow ? 520 : 640
      let d = `M ${w / 2} 0`
      let y = 0
      let left = false
      while (y < h) {
        const ny = Math.min(y + step, h)
        const x = left ? xl : xr
        d += ` C ${w / 2} ${y + step * 0.45}, ${x} ${y + step * 0.2}, ${x} ${y + step * 0.5}`
        d += ` S ${w / 2} ${ny - step * 0.1}, ${w / 2} ${ny}`
        y = ny
        left = !left
      }
      setGeo({ w, h, d })
    }
    build()
    const ro = new ResizeObserver(build)
    ro.observe(wrap.current)
    return () => ro.disconnect()
  }, [])

  useEffect(() => {
    if (!geo.d) return
    const path = base.current
    const len = path.getTotalLength()
    const still = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    let raf = 0
    const update = () => {
      raf = 0
      const r = wrap.current.getBoundingClientRect()
      const p = still ? 0 : Math.min(1, Math.max(0, (window.innerHeight * 0.55 - r.top) / r.height))
      const pt = path.getPointAtLength(len * p)
      for (const el of [dot.current, halo.current]) { el.setAttribute('cx', pt.x); el.setAttribute('cy', pt.y) }
      drawn.current.style.strokeDasharray = len
      drawn.current.style.strokeDashoffset = len * (1 - p)
    }
    const onScroll = () => { if (!raf) raf = requestAnimationFrame(update) }
    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => { window.removeEventListener('scroll', onScroll); window.removeEventListener('resize', onScroll); cancelAnimationFrame(raf) }
  }, [geo])

  return (
    <div className="lp-flow" ref={wrap}>
      <svg className="lp-flow-svg" width={geo.w} height={geo.h} viewBox={`0 0 ${geo.w || 1} ${geo.h || 1}`} aria-hidden="true">
        <path ref={base} d={geo.d} className="base" />
        <path ref={drawn} d={geo.d} className="drawn" />
        <circle ref={halo} r="22" className="halo" cx="-50" cy="-50" />
        <circle ref={dot} r="9" className="dot" cx="-50" cy="-50" />
      </svg>
      {children}
    </div>
  )
}
