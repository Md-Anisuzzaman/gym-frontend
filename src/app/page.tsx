import { HeroSection } from './components/hero-section'
import { AboutSection } from './components/about-section'
import { TransformationSection } from './components/transformation-section'
import { BlogSection } from './components/blog-section'
import { ContactSection } from './components/contact-section'
import { MembershipPackages } from './components/membership-packages'

export default function Home() {
  return (
    <div>
      <HeroSection />
      <AboutSection />
      <MembershipPackages />
      <TransformationSection />
      <BlogSection />
      <ContactSection />
    </div>
  )
}

