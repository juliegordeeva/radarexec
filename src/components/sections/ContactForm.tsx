import { useState, type FormEvent } from 'react';
import { formContent } from '@/content/form';
import { Section } from '@/components/ui/Section';
import { Heading } from '@/components/ui/Typography';
import { Button } from '@/components/ui/Button';
import { submitInquiry } from '@/lib/submitInquiry';
import { cn } from '@/lib/utils';

type FormState = Record<string, string | string[]>;

const initialState: FormState = {
  name: '',
  company: '',
  role: '',
  contact: '',
  topics: [],
  context: '',
  language: 'ru',
};

export function ContactForm() {
  const [form, setForm] = useState<FormState>(initialState);
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
    formContent.fields.forEach((field) => {
      const value = form[field.name];
      if (field.required) {
        if (field.type === 'multiselect' && (!Array.isArray(value) || value.length === 0)) {
          next[field.name] = 'Выберите хотя бы один вариант';
        } else if (!value || (typeof value === 'string' && !value.trim())) {
          next[field.name] = 'Обязательное поле';
        }
      }
      if (field.name === 'contact' && typeof value === 'string' && value.trim()) {
        const isEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
        const isTelegram = value.startsWith('@') || value.includes('t.me');
        if (!isEmail && !isTelegram) {
          next[field.name] = 'Укажите email или Telegram';
        }
      }
    });
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
    });
    setStatus('success');
    setForm(initialState);
  };

  const fieldClass =
    'w-full border-0 border-b border-champagne/30 bg-transparent py-3 font-sans text-body-mobile text-graphite-deep outline-none transition-colors placeholder:text-stone/60 focus:border-champagne';

  return (
    <Section id={formContent.meta.id} theme="light">
      <Heading as="h2" className="max-w-xl">
        {formContent.headline}
      </Heading>

      <form onSubmit={handleSubmit} className="mt-12 max-w-2xl space-y-8">
        {formContent.fields.map((field) => (
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

        <Button
          type="submit"
          variant="primary"
          theme="light"
          fullWidth
          className="sm:w-auto"
          disabled={status === 'submitting'}
        >
          {status === 'submitting' ? 'Отправка…' : formContent.submitLabel}
        </Button>

        {status === 'success' && (
          <p className="font-sans text-body-mobile text-graphite-deep/80">
            Запрос принят. Мы свяжемся с вами в ближайшее время.
          </p>
        )}

        <p className="font-sans text-sm text-stone">{formContent.microcopy}</p>
      </form>
    </Section>
  );
}
