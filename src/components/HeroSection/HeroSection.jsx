import Breadcrumb from '../Breadcrumb/Breadcrumb'

export default function HeroSection({ title, subtitle, size = 'normal', breadcrumb }) {
  const heroClass = `hero${size === 'sm' ? ' hero-sm' : ''}`

  return (
    <section className={heroClass}>
      <div className="container">
        {breadcrumb && <Breadcrumb items={breadcrumb} />}
        <h1 className="hero-title">{title}</h1>
        {subtitle && <p className="hero-subtitle">{subtitle}</p>}
      </div>
    </section>
  )
}
