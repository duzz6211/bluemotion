import { Link } from 'react-router-dom'

export default function Breadcrumb({ items }) {
  if (!items || items.length === 0) return null

  return (
    <nav className="breadcrumb">
      {items.map((item, index) => {
        const isLast = index === items.length - 1
        return (
          <span key={index} className="breadcrumb-item">
            {index > 0 && <span className="breadcrumb-separator">/</span>}
            {isLast || !item.to ? (
              <span className="breadcrumb-current">{item.label}</span>
            ) : (
              <Link to={item.to} className="breadcrumb-link">
                {item.label}
              </Link>
            )}
          </span>
        )
      })}
    </nav>
  )
}
