import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { AboutSection } from "@/components/about-section"
import { PracticeAreas } from "@/components/practice-areas"
import { ProcessSection } from "@/components/process-section"
import { AttorneysSection } from "@/components/attorneys-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { BlogSection } from "@/components/blog-section"
import { FaqSection } from "@/components/faq-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"

export default function Page() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <AboutSection />
        <PracticeAreas />
        <ProcessSection />
        <AttorneysSection />
        <TestimonialsSection />
        <BlogSection />
        <FaqSection />
        <ContactSection />
      </main>
      <Footer />
      {/*Hello World!*/}
    </>
  )
}
