import { Container } from './Container';
import { Heading, BodyText } from './Typography';
import { Button } from './Button';
import { CTA_MAILTO } from '@/lib/contact';

interface CallToActionProps {
  title: string;
  text?: string;
  buttonLabel?: string;
}

/** Единый финальный призыв обсудить задачу (mailto). */
export function CallToAction({
  title,
  text,
  buttonLabel = 'Обсудить задачу',
}: CallToActionProps) {
  return (
    <section className="bg-graphite-deep py-section-y-sm text-ivory md:py-section-y-md">
      <Container className="flex flex-col items-start gap-8">
        <Heading as="h2" className="max-w-2xl text-ivory">
          {title}
        </Heading>
        {text && <BodyText className="max-w-2xl text-stone-light">{text}</BodyText>}
        <Button variant="primary" theme="dark" href={CTA_MAILTO}>
          {buttonLabel}
        </Button>
      </Container>
    </section>
  );
}
