import { Link } from 'react-router-dom';
import { Seo } from '@/app/Seo';
import { Container } from '@/components/ui/Container';
import { Heading, BodyText } from '@/components/ui/Typography';

export function NotFoundPage() {
  return (
    <>
      <Seo
        title="Страница не найдена — РАДАР EXECUTIVE"
        description="Запрошенная страница не найдена."
        path="/404"
      />
      <section className="flex min-h-[70vh] items-center bg-graphite-deep pt-32 pb-20 text-ivory">
        <Container>
          <p className="font-mono text-label uppercase tracking-[0.14em] text-champagne/70">
            Ошибка 404
          </p>
          <Heading as="h1" className="mt-4 max-w-2xl text-ivory">
            Такой страницы нет
          </Heading>
          <BodyText className="mt-6 max-w-xl text-stone-light">
            Возможно, ссылка устарела или содержит опечатку. Вернитесь на главную или откройте один из
            разделов.
          </BodyText>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              to="/"
              className="inline-flex items-center justify-center rounded-sm border border-ivory/20 bg-ivory px-6 py-3 font-sans text-cta uppercase tracking-[0.08em] text-graphite-deep transition-colors hover:border-champagne hover:bg-champagne"
            >
              На главную
            </Link>
          </div>
        </Container>
      </section>
    </>
  );
}
