import { useMemo, useState, type FormEvent } from 'react';
import { formContent } from '@/content/form';
import { useLocale } from '@/i18n';
import { Section } from '@/components/ui/Section';
import { Heading } from '@/components/ui/Typography';
import { Button } from '@/components/ui/Button';
import { CONSENT_PAGE_URL, PRIVACY_PAGE_URL } from '@/lib/contact';
import { submitInquiry } from '@/lib/submitInquiry';
import { cn } from '@/lib/utils';

type FormState = Record<string, string | string[]>;

export function ContactForm() {
  const locale = useLocale();
  const content = formContent[locale];
  const initialState = useMemo<FormState>(
    () => ({
      name: '',
      company: '',
      role: '',
      contact: '',
      topics: [],
      context: '',
      language: locale,
    }),
    [locale],
  );
  const [form, setForm] = useState<FormState>(initialState);
  const [consentPd, setConsentPd] = useState(false);
  const [consentNews, setConsentNews] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const updateField = (name: string, value: string | string[]) => {
    setForm((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => {
      const next = { ...prev };
      delete next[name];
      return next;
    });
  };

  const validate = () => {
    const next: Record<string, string> = {};
    content.fields.forEach((field) => {
      const value = form[field.name];
      if (field.required) {
        if (field.type === 'multiselect' && (!Array.isArray(value) || value.length === 0)) {
          next[field.name] = content.errors.requiredMulti;
        } else if (!value || (typeof value === 'string' && !value.trim())) {
          next[field.name] = content.errors.required;
        }
      }
      if (field.name === 'contact' && typeof value === 'string' && value.trim()) {
        const isEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
        const isTelegram = value.startsWith('@') || value.includes('t.me');
        if (!isEmail && !isTelegram) {
          next[field.name] = content.errors.contact;
        }
      }
    });
    if (!consentPd) {
      next.consentPd = content.consentPd.error;
    }
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setStatus('submitting');
    await submitInquiry({
      name: String(form.name),
      company: String(form.company),
      role: String(form.role),
      contact: String(form.contact),
      topics: Array.isArray(form.topics) ? form.topics : [],
      context: String(form.context),
      language: String(form.language),
      consentNews,
      locale,
    });
    setStatus('success');
    setForm(initialState);
    setConsentPd(false);
    setConsentNews(false);
  };

  const fieldClass =
    'w-full border-0 border-b border-champagne/30 bg-transparent py-3 font-sans text-body-mobile text-graphite-deep outline-none transition-colors placeholder:text-stone/60 focus:border-champagne';

  return (
    <Section id={content.meta.id} theme="light">
      <Heading as="h2" className="max-w-xl">
        {content.headline}
      </Heading>

      <form onSubmit={handleSubmit} className="mt-12 max-w-2xl space-y-8">
        {content.fields.map((field) => (
          <div key={field.name}>
            <label htmlFor={field.name} className="mb-2 block font-mono text-label uppercase tracking-[0.12em] text-stone">
              {field.label}
            </label>

            {field.type === 'textarea' && (
              <textarea
                id={field.name}
                rows={4}
                className={cn(fieldClass, 'resize-y')}
                placeholder={field.placeholder}
                value={String(form[field.name] ?? '')}
                onChange={(e) => updateField(field.name, e.target.value)}
              />
            )}

            {field.type === 'select' && (
              <select
                id={field.name}
                className={fieldClass}
                value={String(form[field.name] ?? '')}
                onChange={(e) => updateField(field.name, e.target.value)}
              >
                {field.options?.map((opt) => (
                  <option key={opt.value} value={opt.value}>
                    {opt.label}
                  </option>
                ))}
              </select>
            )}

            {field.type === 'multiselect' && (
              <div className="flex flex-wrap gap-2">
                {field.options?.map((opt) => {
                  const selected = (form.topics as string[]).includes(opt.value);
                  return (
                    <button
                      key={opt.value}
                      type="button"
                      onClick={() => {
                        const current = (form.topics as string[]) ?? [];
                        updateField(
                          'topics',
                          selected ? current.filter((v) => v !== opt.value) : [...current, opt.value],
                        );
                      }}
                      className={cn(
                        'border px-3 py-2 font-mono text-xs uppercase tracking-[0.08em] transition-colors',
                        selected
                          ? 'border-champagne bg-champagne/10 text-graphite-deep'
                          : 'border-champagne/25 text-stone hover:border-champagne/50',
                      )}
                    >
                      {opt.label}
                    </button>
                  );
                })}
              </div>
            )}

            {field.type === 'text' && (
              <input
                id={field.name}
                type="text"
                className={fieldClass}
                placeholder={field.placeholder}
                value={String(form[field.name] ?? '')}
                onChange={(e) => updateField(field.name, e.target.value)}
              />
            )}

            {errors[field.name] && (
              <p className="mt-2 font-sans text-sm text-burgundy">{errors[field.name]}</p>
            )}
          </div>
        ))}

        <div className="space-y-4">
          <label className="flex cursor-pointer items-start gap-3">
            <input
              type="checkbox"
              checked={consentPd}
              onChange={(e) => {
                setConsentPd(e.target.checked);
                setErrors((prev) => {
                  const next = { ...prev };
                  delete next.consentPd;
                  return next;
                });
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
          {errors.consentPd && (
            <p className="font-sans text-sm text-burgundy">{errors.consentPd}</p>
          )}

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
