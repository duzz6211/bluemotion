import { Link, useLocation } from 'react-router-dom'

export default function SubNav({ items }) {
  const location = useLocation()

  if (!items || items.length === 0) return null

  return (
    <nav className="sub-nav">
      <div className="container">
        {items.map((item) => (
          <Link
            key={item.to}
            to={item.to}
            className={`sub-nav-link${location.pathname === item.to ? ' active' : ''}`}
          >
            {item.label}
          </Link>
        ))}
      </div>
    </nav>
  )
}
