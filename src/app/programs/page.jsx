import Layout from '../../components/Layout'
import { Head, PageHero, ProgramCards } from '../../components/ui'
import { pageMeta } from '../../seo'

export const metadata = pageMeta({
  path: '/programs',
  title: '프로그램 | 울진 필라테스 소그룹·개인·임산부 필라테스',
  description: '울진 필라테스 블루모션 프로그램. 소그룹(3:1) 레슨, 개인(1:1) 레슨, 임산부 필라테스, 키즈·성장, 시니어 통증 케어 운동. 모든 레슨 50분, 100% 사전 예약제.',
})

const sections = [
  { id: 'small-group', label: '소그룹' }, { id: 'private', label: '개인' }, { id: 'prenatal', label: '임산부' },
  { id: 'kids', label: '키즈·성장' }, { id: 'senior', label: '시니어·재활' },
]

export default function Page() {
  return (
    <Layout sections={sections} hero={<PageHero eyebrow="PROGRAMS" title="프로그램" text="모든 레슨은 50분, 100% 사전 예약제로 진행됩니다." />}>
      <section className="section">
        <div className="container">
          <Head eyebrow="LESSONS" title="나에게 맞는 레슨을 선택하세요" text="대상과 정원, 시간을 한눈에 확인하고 전화·문자로 문의해 주세요." />
          <ProgramCards />
        </div>
      </section>
    </Layout>
  )
}
