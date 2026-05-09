import { lazy, Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'
import MainLayout from './layouts/MainLayout'

/* ── Home ──────────────────────────────────────────── */
const HomePage = lazy(() => import('./pages/Home/HomePage'))

/* ── FMTA ──────────────────────────────────────────── */
const FmtaIndex = lazy(() => import('./pages/Fmta/FmtaIndex'))
const FmtaGreeting = lazy(() => import('./pages/Fmta/FmtaGreeting'))
const FmtaHistory = lazy(() => import('./pages/Fmta/FmtaHistory'))
const FmtaPartners = lazy(() => import('./pages/Fmta/FmtaPartners'))

/* ── Bluemotion ────────────────────────────────────── */
const BluemotionIndex = lazy(() => import('./pages/Bluemotion/BluemotionIndex'))
const BluemotionProgram = lazy(() => import('./pages/Bluemotion/BluemotionProgram'))
const BluemotionLocation = lazy(() => import('./pages/Bluemotion/BluemotionLocation'))
const BluemotionVision = lazy(() => import('./pages/Bluemotion/BluemotionVision'))

/* ── Floating ──────────────────────────────────────── */
const FloatingIndex = lazy(() => import('./pages/Floating/FloatingIndex'))
const FloatingProcess = lazy(() => import('./pages/Floating/FloatingProcess'))
const FloatingEducation = lazy(() => import('./pages/Floating/FloatingEducation'))
const FloatingVision = lazy(() => import('./pages/Floating/FloatingVision'))

/* ── Programs ──────────────────────────────────────── */
const ProgramsGroupPrivate = lazy(() => import('./pages/Programs/ProgramsGroupPrivate'))
const ProgramsMaternity = lazy(() => import('./pages/Programs/ProgramsMaternity'))
const ProgramsSeniorKids = lazy(() => import('./pages/Programs/ProgramsSeniorKids'))
const ProgramsRehabAthlete = lazy(() => import('./pages/Programs/ProgramsRehabAthlete'))

/* ── Special ───────────────────────────────────────── */
const SpecialTeamBuilding = lazy(() => import('./pages/Special/SpecialTeamBuilding'))
const SpecialBeachPilates = lazy(() => import('./pages/Special/SpecialBeachPilates'))
const SpecialSportsClub = lazy(() => import('./pages/Special/SpecialSportsClub'))
const SpecialIamBlue = lazy(() => import('./pages/Special/SpecialIamBlue'))

/* ── Education ─────────────────────────────────────── */
const EducationIndex = lazy(() => import('./pages/Education/EducationIndex'))
const FunctionalPilates = lazy(() => import('./pages/Education/FunctionalPilates'))
const GlobalPilates = lazy(() => import('./pages/Education/GlobalPilates'))
const FloatingPilates = lazy(() => import('./pages/Education/FloatingPilates'))
const OnlineCourse = lazy(() => import('./pages/Education/OnlineCourse'))

/* ── News ──────────────────────────────────────────── */
const NewsIndex = lazy(() => import('./pages/News/NewsIndex'))
const NewsNotice = lazy(() => import('./pages/News/NewsNotice'))
const NewsSns = lazy(() => import('./pages/News/NewsSns'))
const NewsContact = lazy(() => import('./pages/News/NewsContact'))

export default function App() {
  return (
    <Suspense fallback={<div style={{ minHeight: '100vh' }} />}>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<HomePage />} />

          {/* FMTA */}
          <Route path="/fmta" element={<FmtaIndex />} />
          <Route path="/fmta/greeting" element={<FmtaGreeting />} />
          <Route path="/fmta/history" element={<FmtaHistory />} />
          <Route path="/fmta/partners" element={<FmtaPartners />} />

          {/* Bluemotion */}
          <Route path="/bluemotion" element={<BluemotionIndex />} />
          <Route path="/bluemotion/program" element={<BluemotionProgram />} />
          <Route path="/bluemotion/location" element={<BluemotionLocation />} />
          <Route path="/bluemotion/vision" element={<BluemotionVision />} />

          {/* Floating */}
          <Route path="/floating" element={<FloatingIndex />} />
          <Route path="/floating/process" element={<FloatingProcess />} />
          <Route path="/floating/education" element={<FloatingEducation />} />
          <Route path="/floating/vision" element={<FloatingVision />} />

          {/* Programs */}
          <Route path="/programs/group-private" element={<ProgramsGroupPrivate />} />
          <Route path="/programs/maternity" element={<ProgramsMaternity />} />
          <Route path="/programs/senior-kids" element={<ProgramsSeniorKids />} />
          <Route path="/programs/rehab-athlete" element={<ProgramsRehabAthlete />} />

          {/* Special */}
          <Route path="/special/team-building" element={<SpecialTeamBuilding />} />
          <Route path="/special/beach-pilates" element={<SpecialBeachPilates />} />
          <Route path="/special/sports-club" element={<SpecialSportsClub />} />
          <Route path="/special/i-am-blue" element={<SpecialIamBlue />} />

          {/* Education */}
          <Route path="/education" element={<EducationIndex />} />
          <Route path="/education/functional-pilates" element={<FunctionalPilates />} />
          <Route path="/education/global-pilates" element={<GlobalPilates />} />
          <Route path="/education/floating-pilates" element={<FloatingPilates />} />
          <Route path="/education/online-course" element={<OnlineCourse />} />

          {/* News */}
          <Route path="/news" element={<NewsIndex />} />
          <Route path="/news/notice" element={<NewsNotice />} />
          <Route path="/news/sns" element={<NewsSns />} />
          <Route path="/news/contact" element={<NewsContact />} />
        </Route>
      </Routes>
    </Suspense>
  )
}
