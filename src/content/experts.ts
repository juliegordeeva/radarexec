import type { Expert, Locale } from './types';

type ExpertsContent = {
  meta: { id: string; label: string };
  headline: string;
  intro: string;
  founderNote: string;
  experts: Expert[];
};

// Команда экспертов бюро. Единый источник для страницы «Эксперты» и блока команды на главной.
// Факты (образование, опыт) не выдумываются — только подтверждённые владельцем данные.
// EN: имена транслитерированы, названия организаций — по общепринятым формам (на сверке у владельца).
export const expertsContent: Record<Locale, ExpertsContent> = {
  ru: {
    meta: { id: 'experts', label: 'Эксперты' },
    headline: 'Команда практик РАДАР EXECUTIVE',
    intro:
      'РАДАР EXECUTIVE — не список консультантов с рынка и не бренд одного человека. Это экосистема практик, которую мы бережно собираем с 2006 года. Под каждую задачу собирается команда экспертов с нужной специализацией.',
    founderNote:
      'Юлия Гордеева — основатель РАДАР EXECUTIVE, директор разработки практики бизнес-моделирования и архитектор кросс-культурного и кросс-функционального подхода. Её роль — видеть бизнес-ситуацию целиком: модель, лидерскую команду, экономику решений и человеческую сложность изменений. При этом РАДАР EXECUTIVE остаётся командным брендом.',
    experts: [
      {
        id: 'yulia-gordeeva',
        name: 'Юлия Гордеева',
        role: 'Основатель, директор разработки',
        specialization: 'Бизнес-моделирование управленческих процессов',
        isFounder: true,
        photo: 'images/yulia-gordeeva.png',
        education:
          'Лингвистика, финансы, управление, MBA, бизнес-психология и организационное консультирование, коучинг, продюсирование.',
        experience: [
          '2010–2022 — руководитель международных корпоративных программ обучения IBS Plekhanov.',
          '2022 — наст. время — руководитель консалтинговых и обучающих практик для среднего и крупного бизнеса.',
        ],
      },
      {
        id: 'oleg-emikh',
        name: 'Олег Емих',
        role: 'Директор разработки',
        specialization: 'Управление образовательными системами',
        photo: 'images/oleg-emikh.png',
        education: 'Кандидат технических наук.',
        experience: [
          '2006–2014 — руководитель корпоративной академии.',
          '2006–2024 — директор альянса «Бизнес-консалтинга».',
          '2022 — наст. время — заместитель директора Школы управления Финансового университета при Правительстве РФ.',
        ],
      },
      {
        id: 'olga-gordeeva',
        name: 'Ольга Гордеева',
        role: 'Директор разработки',
        specialization: 'Управление продуктом, продуктовый подход',
        photo: 'images/olga-gordeeva.png',
        photoPosition: 'center',
        education:
          'Магистр управления проектами (Россия). Магистр Business Administration (SKEMA, Франция). Магистр организационного консультирования (Россия). Магистр Counseling (The University of Manchester, Великобритания).',
        experience: [
          '2024 — наст. время — директор по продукту инвестиционного банка.',
          '2014–2024 — руководитель продуктовой аналитики в трёх крупных российских и международных банках.',
        ],
      },
      {
        id: 'valeria-lipova',
        name: 'Валерия Липова',
        role: 'Директор разработки',
        specialization: 'Оценка эффективности бизнеса',
        photo: 'images/valeria-lipova.jpg',
        education: 'Юрист, продюсер.',
        experience: [
          'Более 10 лет на позициях CBDO / Head of E-commerce. Десятки проектов в e-commerce, travel tech, B2B, e-grocery и на маркетплейсах: Яндекс, МТС Travel, Moldretail Group.',
        ],
      },
      {
        id: 'lada-kuzminskaya',
        name: 'Лада Кузминская',
        role: 'Директор разработки',
        specialization: 'Маркетинг, PR, GR',
        photo: 'images/lada-kuzminskaya.png',
        education: 'Метрология, экономика и управление, международное управление, MBA.',
        experience: [
          'Более 12 лет в управлении образовательными системами, сотрудничестве с государственными организациями, развитии нового бизнеса в сфере образования и кооперации с индустриальными партнёрами.',
        ],
      },
      {
        id: 'elizaveta-sarycheva',
        name: 'Елизавета Сарычева',
        role: 'Директор разработки',
        specialization: 'Лидерская устойчивость',
        photo: 'images/elizaveta-sarycheva.jpg',
        education: 'Менеджмент (туризм), управление организацией (Франция, магистр), коучинг (ICF).',
        experience: [
          'Два проекта Олимпийских игр, два проекта FIFA (2014–2025), 10 лет в международном консалтинге ICG Inc. для миссии Airbus.',
        ],
      },
    ],
  },
  en: {
    meta: { id: 'experts', label: 'Experts' },
    headline: 'The RADAR EXECUTIVE practice team',
    intro:
      'RADAR EXECUTIVE is not a roster of consultants for hire or a one-person brand. It’s an ecosystem of practices we have built carefully since 2006. For every task we assemble a team of experts with the right specialization.',
    founderNote:
      'Yulia Gordeeva is the founder of RADAR EXECUTIVE, development director of the business modeling practice, and the architect of its cross-cultural and cross-functional approach. Her role is to see the business situation as a whole: the model, the leadership team, the economics of decisions, and the human complexity of change. RADAR EXECUTIVE remains a team brand.',
    experts: [
      {
        id: 'yulia-gordeeva',
        name: 'Yulia Gordeeva',
        role: 'Founder, Development Director',
        specialization: 'Business modeling of management processes',
        isFounder: true,
        photo: 'images/yulia-gordeeva.png',
        education:
          'Linguistics, finance, management, MBA, business psychology and organizational consulting, coaching, production.',
        experience: [
          '2010–2022 — Head of international corporate training programs, IBS Plekhanov.',
          '2022 – present — Head of consulting and training practices for mid-size and large businesses.',
        ],
      },
      {
        id: 'oleg-emikh',
        name: 'Oleg Emikh',
        role: 'Development Director',
        specialization: 'Management of educational systems',
        photo: 'images/oleg-emikh.png',
        education: 'Candidate of Technical Sciences (PhD).',
        experience: [
          '2006–2014 — Head of a corporate academy.',
          '2006–2024 — Director of the “Business Consulting” alliance.',
          '2022 – present — Deputy Director, School of Management, Financial University under the Government of the Russian Federation.',
        ],
      },
      {
        id: 'olga-gordeeva',
        name: 'Olga Gordeeva',
        role: 'Development Director',
        specialization: 'Product management and product approach',
        photo: 'images/olga-gordeeva.png',
        photoPosition: 'center',
        education:
          'Master’s in Project Management (Russia). Master of Business Administration (SKEMA, France). Master’s in Organizational Consulting (Russia). Master’s in Counseling (The University of Manchester, UK).',
        experience: [
          '2024 – present — Chief Product Officer at an investment bank.',
          '2014–2024 — Head of product analytics at three major Russian and international banks.',
        ],
      },
      {
        id: 'valeria-lipova',
        name: 'Valeria Lipova',
        role: 'Development Director',
        specialization: 'Business performance assessment',
        photo: 'images/valeria-lipova.jpg',
        education: 'Lawyer, producer.',
        experience: [
          'More than 10 years as CBDO / Head of E-commerce. Dozens of projects in e-commerce, travel tech, B2B, e-grocery, and marketplaces: Yandex, MTS Travel, Moldretail Group.',
        ],
      },
      {
        id: 'lada-kuzminskaya',
        name: 'Lada Kuzminskaya',
        role: 'Development Director',
        specialization: 'Marketing, PR, GR',
        photo: 'images/lada-kuzminskaya.png',
        education: 'Metrology, economics and management, international management, MBA.',
        experience: [
          'More than 12 years in managing educational systems, working with government organizations, developing new business in education, and cooperating with industry partners.',
        ],
      },
      {
        id: 'elizaveta-sarycheva',
        name: 'Elizaveta Sarycheva',
        role: 'Development Director',
        specialization: 'Leadership resilience',
        photo: 'images/elizaveta-sarycheva.jpg',
        education:
          'Management (tourism), organizational management (France, Master’s), coaching (ICF).',
        experience: [
          'Two Olympic Games projects, two FIFA projects (2014–2025), 10 years in international consulting at ICG Inc. for the Airbus mission.',
        ],
      },
    ],
  },
};
