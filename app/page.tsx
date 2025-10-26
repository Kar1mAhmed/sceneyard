import DottedBackground from '@/components/DottedBackground';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import DemoSection from '@/components/DemoSection';
import HowItWorks from '@/components/HowItWorks';
import FeedbackForm from '@/components/FeedbackForm';
import WaitlistSection from '@/components/WaitlistSection';
import FAQ from '@/components/FAQ';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="relative min-h-screen">
      {/* Dotted background */}
      <DottedBackground />

      {/* Header */}
      <Header />

      {/* Main content */}
      <main className="relative z-10">
        {/* Hero Section */}
        <Hero />

        {/* Demo Section */}
        <section id="features">
          <DemoSection />
        </section>

        {/* How It Works */}
        <HowItWorks />

        {/* Feedback Form */}
        {/* <FeedbackForm /> */}

        {/* Waitlist & Golden Member */}
        <WaitlistSection />

        {/* FAQ */}
        <FAQ />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
