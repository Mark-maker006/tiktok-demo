import { ChevronDown } from 'lucide-react';
import { metrics } from '../data/dashboardData';
import { useLanguage } from '../i18n';
import { updateSpotlight } from './spotlight';

function DashboardHeader() {
  const { t } = useLanguage();
  const translatedMetrics = metrics.map((metric) => ({
    ...metric,
    label: t.metrics[metric.labelKey],
  }));

  return (
    <header className="mb-6 flex flex-col gap-6 xl:flex-row xl:items-end xl:justify-between">
      <div>
        <p className="text-sm font-normal text-secondary-400">{t.header.greeting}</p>
        <h1 className="mt-1 text-3xl font-bold tracking-tight text-secondary-800 dark:text-secondary-100">{t.header.title}</h1>
      </div>

      <div className="flex flex-col gap-4 lg:flex-row lg:items-center">
        <div className="flex flex-wrap items-center gap-3">
          <button
            type="button"
            className="inline-flex items-center gap-2 rounded-full border border-secondary-100 bg-white px-4 py-2 text-sm font-medium text-secondary-700 dark:border-secondary-700 dark:bg-secondary-800 dark:text-secondary-100"
          >
            {t.header.period}
            <ChevronDown size={16} />
          </button>
          <div onMouseMove={updateSpotlight} className="spotlight-card rounded-full bg-secondary-100 p-1 dark:bg-secondary-800">
            <button type="button" className="rounded-full bg-white px-4 py-2 text-sm font-semibold text-secondary-900 shadow-sm dark:bg-secondary-100">
              {t.header.company}
            </button>
            <button type="button" className="px-4 py-2 text-sm font-medium text-secondary-400">
              {t.header.jobSeekers}
            </button>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-3">
          {translatedMetrics.map((metric) => (
            <div key={metric.label} onMouseMove={updateSpotlight} className="spotlight-card min-w-0 rounded-3xl bg-white px-4 py-3 dark:bg-secondary-800">
              <p className="truncate text-xs text-secondary-400">{metric.label}</p>
              <div className="mt-1 flex items-baseline gap-2">
                <p className="text-2xl font-bold text-secondary-800 dark:text-secondary-100">{metric.value}</p>
                <span className="text-xs font-semibold text-primary-600 dark:text-primary-400">{metric.delta}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </header>
  );
}

export default DashboardHeader;
