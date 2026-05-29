import DashboardCard from './DashboardCard';
import { turnoverStats } from '../data/dashboardData';
import { useLanguage } from '../i18n';
import { updateSpotlight } from './spotlight';

function TurnoverGaugeCard() {
  const { t } = useLanguage();
  const translatedStats = turnoverStats.map((stat) => ({
    ...stat,
    label: t.gauge[stat.labelKey],
  }));

  return (
    <DashboardCard>
      <h2 className="text-2xl font-semibold tracking-tight text-secondary-800 dark:text-secondary-100">{t.gauge.title}</h2>
      <div className="mt-8 flex justify-center">
        <div className="relative h-40 w-64 overflow-hidden">
          <div className="absolute inset-x-4 top-4 h-56 rounded-full border-[24px] border-secondary-100 dark:border-secondary-700" />
          <div className="absolute inset-x-4 top-4 h-56 rounded-full border-[24px] border-primary-600 border-b-transparent border-l-transparent dark:border-primary-400 dark:border-b-transparent dark:border-l-transparent" />
          <div className="absolute inset-x-0 bottom-0 text-center">
            <p className="text-5xl font-bold text-secondary-800 dark:text-secondary-100">88%</p>
            <p className="mt-1 text-sm text-secondary-400">{t.gauge.score}</p>
          </div>
        </div>
      </div>
      <div className="mt-8 space-y-4">
        {translatedStats.map((stat) => (
          <div key={stat.label} onMouseMove={updateSpotlight} className="spotlight-card flex items-center justify-between rounded-2xl px-3 py-2">
            <span className="text-sm text-secondary-400">{stat.label}</span>
            <div className="flex items-center gap-2">
              <span className="text-base font-semibold text-secondary-800 dark:text-secondary-100">{stat.value}</span>
              <span className="rounded-md bg-primary-100 px-2 py-1 text-xs font-semibold text-primary-700 dark:bg-primary-500/20 dark:text-primary-400">
                {stat.trend}
              </span>
            </div>
          </div>
        ))}
      </div>
    </DashboardCard>
  );
}

export default TurnoverGaugeCard;
