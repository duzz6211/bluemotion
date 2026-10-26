/* 튕기지 않는(임계감쇠) 스프링 — CSS와 JS가 같은 곡선을 쓴다.
 *   x(t) = target + (A + B·t)·e^(-ω·t),  A = x0 - target,  B = v0 + ω·A
 * 오버슈트가 없고, 목표가 바뀌어도 속도를 이어받아 부드럽게 방향을 바꾼다.
 */
export const SPRING_EASING =
  'linear(0, 0.0418, 0.1362, 0.2511, 0.3681, 0.4774, 0.5743, 0.6575, 0.727, 0.7843, 0.8307, 0.8678, 0.8974, 0.9207, 0.9389, 0.9531, 0.9641, 0.9726, 0.9792, 0.9842, 0.988, 0.9909, 0.9931, 0.9948, 0.9961, 0.9971, 0.9978, 0.9984, 1)'

export const reducedMotion = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches

/** 값 하나를 목표로 끌어당기는 스프링. onUpdate(value) 로 매 프레임 값을 받는다. */
export function createSpring({ value = 0, omega = 10, onUpdate, onRest }) {
  let x = value, target = value, v = 0, raf = 0, last = 0

  function frame(now) {
    const dt = Math.min((now - last) / 1000, 0.05)
    last = now
    const A = x - target
    const B = v + omega * A
    const e = Math.exp(-omega * dt)
    x = target + (A + B * dt) * e
    v = (B - omega * (A + B * dt)) * e
    if (Math.abs(x - target) < 0.05 && Math.abs(v) < 0.5) {
      x = target; v = 0; raf = 0
      onUpdate(x); onRest && onRest()
      return
    }
    onUpdate(x)
    raf = requestAnimationFrame(frame)
  }

  return {
    get value() { return x },
    get target() { return target },
    get active() { return raf !== 0 },
    to(t) {
      target = t
      if (!raf) { last = performance.now(); raf = requestAnimationFrame(frame) }
    },
    set(val) { cancelAnimationFrame(raf); raf = 0; x = target = val; v = 0; onUpdate(x) },
    reset(val) { if (!raf) { x = target = val; v = 0 } }, // 화면 갱신 없이 내부 값만 맞춤
    stop() { cancelAnimationFrame(raf); raf = 0; target = x; v = 0 },
  }
}

/* ---------- 페이지 스크롤 (앵커 이동 · 마우스 휠) ---------- */
const maxScroll = () => document.documentElement.scrollHeight - window.innerHeight

const scroller = createSpring({
  value: 0,
  omega: 11,
  onUpdate: (y) => window.scrollTo(0, y),
})

export function scrollToY(y) {
  const target = Math.max(0, Math.min(y, maxScroll()))
  if (reducedMotion()) { window.scrollTo(0, target); return }
  scroller.reset(window.scrollY)
  scroller.to(target)
}

/** 헤더(+섹션 바로가기 바)에 가리지 않는 위치로 요소까지 스크롤 */
export function scrollToElement(el) {
  const header = parseFloat(getComputedStyle(document.documentElement).getPropertyValue('--header-h')) || 64
  const bar = document.querySelector('.anchor-bar')?.offsetHeight || 0
  scrollToY(el.getBoundingClientRect().top + window.scrollY - header - bar + 1)
}

/** 마우스 휠 스무딩, 앵커 클릭 이동, 키보드·스크롤바 조작과의 동기화 */
export function initSmoothScroll() {
  if (reducedMotion()) return () => {}
  const onWheel = (e) => {
    // 트랙패드·터치 관성 스크롤은 기기 고유 감각을 그대로 둔다(마우스 휠 노치만 스프링 처리)
    const mouse = e.deltaMode === 1 || (Math.abs(e.deltaY) >= 50 && Number.isInteger(e.deltaY))
    if (!mouse || e.ctrlKey || Math.abs(e.deltaX) > Math.abs(e.deltaY) || document.body.classList.contains('nav-open')) return
    e.preventDefault()
    const delta = e.deltaMode === 1 ? e.deltaY * 40 : e.deltaY
    scroller.reset(window.scrollY)
    scroller.to(Math.max(0, Math.min(scroller.target + delta, maxScroll())))
  }

  const sync = () => scroller.reset(window.scrollY)
  const stop = () => scroller.stop()

  const onClick = (e) => {
    const a = e.target.closest && e.target.closest('a[href*="#"]')
    if (!a || e.defaultPrevented || e.metaKey || e.ctrlKey || e.shiftKey || a.target === '_blank') return
    const url = new URL(a.href, location.href)
    const norm = (p) => p.replace(/index\.html$/, '')
    if (url.origin !== location.origin || norm(url.pathname) !== norm(location.pathname) || !url.hash) return
    const el = document.getElementById(decodeURIComponent(url.hash.slice(1)))
    if (!el) return
    e.preventDefault()
    history.pushState(null, '', url.hash)
    scrollToElement(el)
  }

  window.addEventListener('wheel', onWheel, { passive: false })
  window.addEventListener('scroll', sync, { passive: true })
  window.addEventListener('touchstart', stop, { passive: true })
  window.addEventListener('keydown', stop)
  document.addEventListener('click', onClick)
  return () => {
    window.removeEventListener('wheel', onWheel)
    window.removeEventListener('scroll', sync)
    window.removeEventListener('touchstart', stop)
    window.removeEventListener('keydown', stop)
    document.removeEventListener('click', onClick)
  }
}

/* ---------- 스크롤 연동 효과 (진행 바 · 히어로 패럴랙스 · 헤더) ---------- */
export function initScrollEffects() {
  const root = document.documentElement
  const header = document.querySelector('.site-header')
  const hero = document.querySelector('.lp-hero, .page-hero')
  // 스크롤 위치를 스프링으로 따라가게 해서 효과가 뚝뚝 끊기지 않게 한다
  const follow = createSpring({
    value: window.scrollY,
    omega: 14,
    onUpdate: (y) => {
      const prog = maxScroll() > 0 ? y / maxScroll() : 0
      root.style.setProperty('--prog', prog.toFixed(4))
      if (hero) {
        const h = hero.offsetHeight || 1
        const p = Math.max(0, Math.min(y / h, 1))
        root.style.setProperty('--py', `${(y * 0.25).toFixed(1)}px`)
        root.style.setProperty('--hp', p.toFixed(3))
      }
    },
  })
  const onScroll = () => {
    follow.to(window.scrollY)
    header && header.classList.toggle('scrolled', window.scrollY > 8)
  }
  onScroll()
  window.addEventListener('scroll', onScroll, { passive: true })
  window.addEventListener('resize', onScroll)
  return () => {
    window.removeEventListener('scroll', onScroll)
    window.removeEventListener('resize', onScroll)
    follow.stop()
  }
}
