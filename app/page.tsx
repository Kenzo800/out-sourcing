import HeroSection from './components/HeroSection';
import ServicesSection from './components/ServicesSection';
import Footer from './components/Footer';
import StructuredData from './components/StructuredData';

export default function Home() {
  return (
    <>
      <StructuredData type="Organization" data={{}} />
      <StructuredData type="Service" data={{}} />
      <HeroSection />
      <ServicesSection />
      <Footer />
    </>
  );
}
