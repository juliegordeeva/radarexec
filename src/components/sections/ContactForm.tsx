import { useState, type FormEvent } from 'react';
import { formContent } from '@/content/form';
import { useLocale } from '@/i18n';
import { Section } from '@/components/ui/Section';
import { Heading, BodyText } from '@/components/ui/Typography';
import { Button } from '@/components/ui/Button';
import { CONSENT_PAGE_URL, PRIVACY_PAGE_URL } from '@/lib/contact';
import { submitInquiry } from '@/lib/submitInquiry';

export function ContactForm() {
  const locale = useLocale();
  const content = formContent[locale];
  const [consentPd, setConsentPd] = useState(false);
  const [consentNews, setConsentNews] = useState(false);
  const [consentError, setConsentError] = useState<string | null>(null);
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!consentPd) {
      setConsentError(content.consentPd.error);
      return;
    }
    setConsentError(null);
    setStatus('submitting');
    await submitInquiry({ consentNews, locale });
    setStatus('success');
    setConsentPd(false);
    setConsentNews(false);
  };

  return (
    <Section id={content.meta.id} theme="light">
      <Heading as="h2" className="max-w-xl">
        {content.headline}
      </Heading>

      <BodyText className="mt-6 max-w-2xl text-graphite-deep/70">{content.intro}</BodyText>

      <form onSubmit={handleSubmit} className="mt-12 max-w-2xl space-y-8">
        <div className="space-y-4">
          <label className="flex cursor-pointer items-start gap-3">
            <input
              type="checkbox"
              checked={consentPd}
              onChange={(e) => {
                setConsentPd(e.target.checked);
                setConsentError(null);
              }}
              className="mt-1 size-4 shrink-0 accent-champagne"
            />
            <span className="font-sans text-sm leading-relaxed text-graphite-deep/90">
              {content.consentPd.prefix}{' '}
              <a
                href={CONSENT_PAGE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="underline decoration-champagne/50 underline-offset-2 transition-colors hover:text-graphite-deep"
              >
                {content.consentPd.consentLink}
              </a>{' '}
              {content.consentPd.and}{' '}
              <a
                href={PRIVACY_PAGE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="underline decoration-champagne/50 underline-offset-2 transition-colors hover:text-graphite-deep"
              >
                {content.consentPd.privacyLink}
              </a>
            </span>
          </label>
          {consentError && <p className="font-sans text-sm text-burgundy">{consentError}</p>}

          <label className="flex cursor-pointer items-start gap-3">
            <input
              type="checkbox"
              checked={consentNews}
              onChange={(e) => setConsentNews(e.target.checked)}
              className="mt-1 size-4 shrink-0 accent-champagne"
            />
            <span className="font-sans text-sm leading-relaxed text-graphite-deep/90">
              {content.consentNews}
            </span>
          </label>
        </div>

        <Button
          type="submit"
          variant="primary"
          theme="light"
          fullWidth
          className="sm:w-auto"
          disabled={status === 'submitting'}
        >
          {status === 'submitting' ? content.submittingLabel : content.submitLabel}
        </Button>

        {status === 'success' && (
          <p className="font-sans text-body-mobile text-graphite-deep/80">{content.mailtoHint}</p>
        )}

        <p className="font-sans text-sm text-stone">{content.microcopy}</p>
      </form>
    </Section>
  );
}
