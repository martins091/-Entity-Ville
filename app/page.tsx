import Header from '@/components/header';
import HeroCarousel from '@/components/hero-carousel';
import IndustriesSection from '@/components/industries-section';
import ProductsSection from '@/components/products-section';
import ClientsSection from '@/components/clients-section';
import WhyChooseUs from '@/components/why-choose-us';
import CTASection from '@/components/cta-section';
import Footer from '@/components/footer';

export default function Home() {
  return (
    <main className="bg-background text-foreground">
      <Header />
      <HeroCarousel />
      <ProductsSection />
      <IndustriesSection />
      <ClientsSection />
      <WhyChooseUs />
      <CTASection />
      <Footer />
    </main>
  );
}
