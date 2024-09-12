import { CollaborativePartners } from '../../components/Home/CollaborativePartners/CollaborativePartners';
import CompanyStatistics from '../../components/Home/CompanyStatistics/CompanyStatistics';
import FAQ from '../../components/Home/FAQSection/FAQ';
import Hero from '../../components/Home/HeroSection/Hero';
import KeyValue from '../../components/Home/KeyValueSection/KeyValue';
import Portfolio from '../../components/Home/Portfolio/Portfolio';
import VideoSection from '../../components/Home/VideoSection/VideoSection';

export default function Home() {
  return (
    <div className='homepage'>
      <Hero />
      <CollaborativePartners />
      <VideoSection />
      <KeyValue />
      <Portfolio />
      <CompanyStatistics />
      <FAQ />
    </div>
  );
}
