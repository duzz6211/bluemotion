import { Outlet, useLocation } from 'react-router-dom'
import SubNav from '../components/SubNav/SubNav'

export default function SubPageLayout({ subNavItems }) {
  return (
    <>
      {subNavItems && <SubNav items={subNavItems} />}
      <Outlet />
    </>
  )
}
