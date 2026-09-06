import { Link, useLocation } from 'react-router-dom'
import Icon from '../Icon/Icon'
import { SITE } from '../../data/site'

const menus = {
  fmta: {
    title: 'FMTA',
    links: [
      { to: '/fmta', label: '협회소개' },
      { to: '/fmta/greeting', label: '인사말' },
      { to: '/fmta/history', label: '협회연혁' },
      { to: '/fmta/partners', label: '제휴업체' },
    ],
  },
  bluemotion: {
    title: '블루모션트레이닝센터',
    links: [
      { to: '/bluemotion', label: '시설소개' },
      { to: '/bluemotion/program', label: '프로그램' },
      { to: '/bluemotion/location', label: '오시는길' },
      { to: '/bluemotion/vision', label: '비전' },
    ],
  },
  floating: {
    title: '플로팅온더블루',
    links: [
      { to: '/floating', label: '활동소개' },
      { to: '/floating/process', label: '진행과정' },
      { to: '/floating/education', label: '교육과정' },
      { to: '/floating/vision', label: '비전' },
    ],
  },
  programs: {
    title: '프로그램',
    links: [
      { to: '/programs/group-private', label: '그룹 · 개인' },
      { to: '/programs/maternity', label: '스페셜 임산부' },
      { to: '/programs/senior-kids', label: '시니어 · 키즈' },
      { to: '/programs/rehab-athlete', label: '재활 · 선수' },
    ],
  },
  special: {
    title: '특별활동',
    links: [
      { to: '/special/team-building', label: '팀빌딩 · 워크샵' },
      { to: '/special/beach-pilates', label: '비치필라테스' },
      { to: '/special/sports-club', label: '스포츠클럽' },
      { to: '/special/i-am-blue', label: '나는 블루' },
    ],
  },
  education: {
    title: '교육과정',
    links: [
      { to: '/education', label: '전체 과정' },
      { to: '/education/functional-pilates', label: '기능성필라테스' },
      { to: '/education/global-pilates', label: '글로벌필라테스' },
      { to: '/education/floating-pilates', label: '플로팅필라테스' },
      { to: '/education/online-course', label: '온라인 교육과정' },
    ],
  },
  news: {
    title: '공지/뉴스',
    links: [
      { to: '/news', label: '전체소식' },
      { to: '/news/notice', label: '공지사항' },
      { to: '/news/sns', label: 'SNS' },
      { to: '/news/contact', label: '문의' },
    ],
  },
}

export default function PageSidebar({ menu }) {
  const location = useLocation()
  const group = menus[menu]

  if (!group) return null

  return (
    <aside className="sidebar">
      <nav className="sidebar-menu">
        <h3 className="sidebar-title">{group.title}</h3>
        {group.links.map((link) => (
          <Link
            key={link.to}
            to={link.to}
            className={`sidebar-link${location.pathname === link.to ? ' active' : ''}`}
          >
            {link.label}
          </Link>
        ))}
      </nav>

      <div className="info-box mt-3">
        <h4 className="info-box-title">상담 · 문의</h4>
        <dl>
          <dt><Icon name="phone" /></dt>
          <dd><a href={'tel:' + SITE.phone}>{SITE.phone}</a></dd>
          <dt><Icon name="mail" /></dt>
          <dd><a href={'mailto:' + SITE.email}>{SITE.email}</a></dd>
          <dt><Icon name="mapPin" /></dt>
          <dd>{SITE.roadAddress}</dd>
          <dt><Icon name="clock" /></dt>
          <dd>{SITE.hours}</dd>
        </dl>
      </div>
    </aside>
  )
}
