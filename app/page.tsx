import DottedBackground from '@/components/DottedBackground';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import DemoSection from '@/components/DemoSection';
import HowItWorks from '@/components/HowItWorks';
import FeedbackForm from '@/components/FeedbackForm';
import WaitlistSection from '@/components/WaitlistSection';
import FAQ from '@/components/FAQ';
import Footer from '@/components/Footer';
import StructuredData from '@/components/StructuredData';

export default function Home() {
  return (
    <div className="relative min-h-screen">
      {/* SEO Structured Data */}
      <StructuredData />
      
      {/* Dotted background */}
      <DottedBackground />

      {/* Header */}
      <Header />

      {/* Main content */}
      <main className="relative z-10" role="main">
        {/* Hero Section */}
        <article itemScope itemType="https://schema.org/WebPageElement">
          <Hero />
        </article>

        {/* Demo Section */}
        <section id="features" aria-label="After Effects Templates Gallery" itemScope itemType="https://schema.org/ItemList">
          <DemoSection />
        </section>

        {/* How It Works */}
        <section aria-label="How SceneYard Works" itemScope itemType="https://schema.org/HowTo">
          <HowItWorks />
        </section>

        {/* Feedback Form */}
        <section aria-label="User Feedback" itemScope itemType="https://schema.org/WebPageElement">
          <FeedbackForm />
        </section>

        {/* Waitlist & Golden Member */}
        <section aria-label="Join Waitlist" itemScope itemType="https://schema.org/Offer">
          <WaitlistSection />
        </section>

        {/* FAQ */}
        <section aria-label="Frequently Asked Questions" itemScope itemType="https://schema.org/FAQPage">
          <FAQ />
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
