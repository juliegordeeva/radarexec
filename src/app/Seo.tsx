import { Helmet } from 'react-helmet-async';

export function Seo() {
  return (
    <Helmet>
      <title>RADAR EXEC — бутиковое advisory-партнёрство для собственников, CEO и топ-команд</title>
      <meta
        name="description"
        content="RADAR EXEC работает со сложными управленческими ситуациями: топ-команды, антикризисная трансформация, эффективность, управление знаниями, перераспределённые и мультипоколенческие команды, RADAR Races + Strategy Session."
      />
      <html lang="ru" />
    </Helmet>
  );
}
