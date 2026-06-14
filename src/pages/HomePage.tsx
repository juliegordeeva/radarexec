import { Hero } from '@/components/sections/Hero';
import { Context2026 } from '@/components/sections/Context2026';
import { SolutionsOverview } from '@/components/sections/SolutionsOverview';
import { UnifiedTopTeam } from '@/components/sections/UnifiedTopTeam';
import { StrategicSessions } from '@/components/sections/StrategicSessions';
import { KnowledgeManagement } from '@/components/sections/KnowledgeManagement';
import { RedistributedTeams } from '@/components/sections/RedistributedTeams';
import { MultigenTeams } from '@/components/sections/MultigenTeams';
import { RadarRaces } from '@/components/sections/RadarRaces';
import { PracticesArchitecture } from '@/components/sections/PracticesArchitecture';
import { HowWeWork } from '@/components/sections/HowWeWork';
import { WhyRadarExec } from '@/components/sections/WhyRadarExec';
import { InternationalFlexibility } from '@/components/sections/InternationalFlexibility';
import { Results } from '@/components/sections/Results';
import { FounderArchitect } from '@/components/sections/FounderArchitect';
import { FinalCta } from '@/components/sections/FinalCta';
import { ContactForm } from '@/components/sections/ContactForm';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Seo } from '@/app/Seo';

export function HomePage() {
  return (
    <>
      <Seo />
      <Header />
      <main>
        <Hero />
        <Context2026 />
        <SolutionsOverview />
        <UnifiedTopTeam />
        <StrategicSessions />
        <KnowledgeManagement />
        <RedistributedTeams />
        <MultigenTeams />
        <RadarRaces />
        <PracticesArchitecture />
        <HowWeWork />
        <WhyRadarExec />
        <InternationalFlexibility />
        <Results />
        <FounderArchitect />
        <FinalCta />
        <ContactForm />
      </main>
      <Footer />
    </>
  );
}
