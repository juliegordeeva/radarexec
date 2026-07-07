import { Seo } from '@/app/Seo';
import { Hero } from '@/components/sections/Hero';
import { Situations } from '@/components/sections/Situations';
import { FeaturedFormats } from '@/components/sections/FeaturedFormats';
import { Process } from '@/components/sections/Process';
import { Changes } from '@/components/sections/Changes';
import { TeamPreview } from '@/components/sections/TeamPreview';
import { InternationalFlexibility } from '@/components/sections/InternationalFlexibility';
import { FinalCta } from '@/components/sections/FinalCta';
import { ContactForm } from '@/components/sections/ContactForm';

export function HomePage() {
  return (
    <>
      <Seo
        title="РАДАР EXECUTIVE — решения для сложных управленческих ситуаций"
        description="Экспертное партнёрское бюро для собственников и топ-команд: стратегические сессии, диагностика систем управления и знаний, восстановление координации после реструктуризации."
        path="/"
      />
      <Hero />
      <Situations />
      <FeaturedFormats />
      <Process />
      <Changes />
      <TeamPreview />
      <InternationalFlexibility />
      <FinalCta />
      <ContactForm />
    </>
  );
}
