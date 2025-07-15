import Header from './components/Header'
import ProfileSection from './components/ProfileSection'
import ServicesSection from './components/ServicesSection'
import TestimonialsSection from './components/TestimonialsSection'
import FooterSection from './components/FooterSection'

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <ProfileSection />
      <TestimonialsSection />
      <ServicesSection />
      <FooterSection />
    </div>
  )
} 