import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { SiteLayout } from '@/app/SiteLayout';
import { HomePage } from '@/pages/HomePage';
import { PracticesPage } from '@/pages/PracticesPage';
import { ExpertsPage } from '@/pages/ExpertsPage';
import { NotFoundPage } from '@/pages/NotFoundPage';

export function App() {
  return (
    <HelmetProvider>
      <BrowserRouter basename={import.meta.env.BASE_URL.replace(/\/$/, '')}>
        <Routes>
          <Route element={<SiteLayout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/practices" element={<PracticesPage />} />
            <Route path="/experts" element={<ExpertsPage />} />
            <Route path="/en" element={<HomePage />} />
            <Route path="/en/practices" element={<PracticesPage />} />
            <Route path="/en/experts" element={<ExpertsPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}
