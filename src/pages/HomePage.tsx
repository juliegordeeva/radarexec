import { Seo } from '@/app/Seo';
import { seoContent } from '@/content/seo';
import { useLocale } from '@/i18n';
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
  const seo = seoContent[useLocale()].home;
  return (
    <>
      <Seo title={seo.title} description={seo.description} path="/" />
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
