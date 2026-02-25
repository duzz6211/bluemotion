import { lazy, Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'
import MainLayout from './layouts/MainLayout'

/* ── Home ──────────────────────────────────────────── */
const HomePage = lazy(() => import('./pages/Home/HomePage'))

/* ── FMTA ──────────────────────────────────────────── */
const FmtaIndex = lazy(() => import('./pages/Fmta/FmtaIndex'))
const FmtaGreeting = lazy(() => import('./pages/Fmta/FmtaGreeting'))
const FmtaHistory = lazy(() => import('./pages/Fmta/FmtaHistory'))
const FmtaInfo = lazy(() => import('./pages/Fmta/FmtaInfo'))

/* ── Bluemotion ────────────────────────────────────── */
const BluemotionIndex = lazy(() => import('./pages/Bluemotion/BluemotionIndex'))
const BluemotionLesson = lazy(() => import('./pages/Bluemotion/BluemotionLesson'))
const BluemotionLocation = lazy(() => import('./pages/Bluemotion/BluemotionLocation'))
const BluemotionVision = lazy(() => import('./pages/Bluemotion/BluemotionVision'))

/* ── Floating ──────────────────────────────────────── */
const FloatingIndex = lazy(() => import('./pages/Floating/FloatingIndex'))
const FloatingActivity = lazy(() => import('./pages/Floating/FloatingActivity'))
const FloatingPartners = lazy(() => import('./pages/Floating/FloatingPartners'))
const FloatingVision = lazy(() => import('./pages/Floating/FloatingVision'))

/* ── Special Maternity ─────────────────────────────── */
const MaternityIndex = lazy(() => import('./pages/SpecialMaternity/MaternityIndex'))
const MaternityGroupLesson = lazy(() => import('./pages/SpecialMaternity/MaternityGroupLesson'))
const MaternityPrivateLesson = lazy(() => import('./pages/SpecialMaternity/MaternityPrivateLesson'))
const MaternityCoupleLesson = lazy(() => import('./pages/SpecialMaternity/MaternityCoupleLesson'))
const MaternityPartnerOrgs = lazy(() => import('./pages/SpecialMaternity/MaternityPartnerOrgs'))
const MaternityVolunteer = lazy(() => import('./pages/SpecialMaternity/MaternityVolunteer'))
const MaternityVision = lazy(() => import('./pages/SpecialMaternity/MaternityVision'))

/* ── Education ─────────────────────────────────────── */
const EducationIndex = lazy(() => import('./pages/Education/EducationIndex'))
const FunctionalAnatomy = lazy(() => import('./pages/Education/FunctionalAnatomy'))
const FunctionalPilates = lazy(() => import('./pages/Education/FunctionalPilates'))
const MarriagePregnancy = lazy(() => import('./pages/Education/MarriagePregnancy'))
const OnlineCourse = lazy(() => import('./pages/Education/OnlineCourse'))
const FloatingExpert = lazy(() => import('./pages/Education/FloatingExpert'))

/* ── Shop ──────────────────────────────────────────── */
const ShopIndex = lazy(() => import('./pages/Shop/ShopIndex'))
const ShopPrograms = lazy(() => import('./pages/Shop/ShopPrograms'))
const ShopLessons = lazy(() => import('./pages/Shop/ShopLessons'))
const ShopInstructorCourses = lazy(() => import('./pages/Shop/ShopInstructorCourses'))
const ShopFloating = lazy(() => import('./pages/Shop/ShopFloating'))

/* ── News ──────────────────────────────────────────── */
const NewsIndex = lazy(() => import('./pages/News/NewsIndex'))
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
          <Route path="/fmta/info" element={<FmtaInfo />} />

          {/* Bluemotion */}
          <Route path="/bluemotion" element={<BluemotionIndex />} />
          <Route path="/bluemotion/lesson" element={<BluemotionLesson />} />
          <Route path="/bluemotion/location" element={<BluemotionLocation />} />
          <Route path="/bluemotion/vision" element={<BluemotionVision />} />

          {/* Floating */}
          <Route path="/floating" element={<FloatingIndex />} />
          <Route path="/floating/activity" element={<FloatingActivity />} />
          <Route path="/floating/partners" element={<FloatingPartners />} />
          <Route path="/floating/vision" element={<FloatingVision />} />

          {/* Special Maternity */}
          <Route path="/special-maternity" element={<MaternityIndex />} />
          <Route path="/special-maternity/group" element={<MaternityGroupLesson />} />
          <Route path="/special-maternity/private" element={<MaternityPrivateLesson />} />
          <Route path="/special-maternity/couple" element={<MaternityCoupleLesson />} />
          <Route path="/special-maternity/partners" element={<MaternityPartnerOrgs />} />
          <Route path="/special-maternity/volunteer" element={<MaternityVolunteer />} />
          <Route path="/special-maternity/vision" element={<MaternityVision />} />

          {/* Education */}
          <Route path="/education" element={<EducationIndex />} />
          <Route path="/education/functional-anatomy" element={<FunctionalAnatomy />} />
          <Route path="/education/functional-pilates" element={<FunctionalPilates />} />
          <Route path="/education/marriage-pregnancy" element={<MarriagePregnancy />} />
          <Route path="/education/online-course" element={<OnlineCourse />} />
          <Route path="/education/floating-expert" element={<FloatingExpert />} />

          {/* Shop */}
          <Route path="/shop" element={<ShopIndex />} />
          <Route path="/shop/programs" element={<ShopPrograms />} />
          <Route path="/shop/lessons" element={<ShopLessons />} />
          <Route path="/shop/instructor-courses" element={<ShopInstructorCourses />} />
          <Route path="/shop/floating" element={<ShopFloating />} />

          {/* News */}
          <Route path="/news" element={<NewsIndex />} />
          <Route path="/news/sns" element={<NewsSns />} />
          <Route path="/news/contact" element={<NewsContact />} />
        </Route>
      </Routes>
    </Suspense>
  )
}
