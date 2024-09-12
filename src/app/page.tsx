import { CollaborativePartners } from '../../components/Home/CollaborativePartners/CollaborativePartners';
import Hero from '../../components/Home/HeroSection/Hero';
import VideoSection from '../../components/Home/VideoSection/VideoSection';

export default function Home() {
  return (
    <div className='homepage'>
      <Hero />
      <CollaborativePartners />
      <VideoSection />
      {/* <KeyValue />
      <SpotlightSection />
      <Portfolio />
      <CompanyStatistics />
      <FAQ /> */}
    </div>
  );
}
