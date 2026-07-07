import type { ReactNode } from 'react';
import { Container } from './Container';
import { Heading, BodyText } from './Typography';
import { SectionLabel } from './SectionLabel';

interface PageHeroProps {
  label?: string;
  title: string;
  subtitle?: string;
  children?: ReactNode;
}

/** Верхний блок внутренних страниц. Учитывает фиксированную шапку через верхний отступ. */
export function PageHero({ label, title, subtitle, children }: PageHeroProps) {
  return (
    <section className="bg-graphite-deep pt-32 pb-16 text-ivory md:pt-40 md:pb-24">
      <Container>
        {children}
        {label && <SectionLabel label={label} theme="dark" />}
        <Heading as="h1" className="max-w-3xl text-ivory">
          {title}
        </Heading>
        {subtitle && (
          <BodyText className="mt-6 max-w-2xl text-stone-light">{subtitle}</BodyText>
        )}
      </Container>
    </section>
  );
}
