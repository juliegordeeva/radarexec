import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/** При смене маршрута прокручивает страницу к началу, если во ссылке нет якоря. */
export function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) return;
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
  }, [pathname, hash]);

  return null;
}
