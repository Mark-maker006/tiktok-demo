import DashboardCard from '../../../shared/components/DashboardCard';
import { heatmapRows } from '../../../mocks/dashboardData';
import { useLanguage } from '../../../shared/contexts/language';

const intensityClasses = {
  1: 'bg-primary-600/10 dark:bg-primary-400/20',
  2: 'bg-primary-600/20 dark:bg-primary-400/30',
  3: 'bg-primary-600/40 dark:bg-primary-400/50',
  4: 'bg-primary-600/60 dark:bg-primary-400/70',
  5: 'bg-primary-600 dark:bg-primary-400',
};

function HeatmapCard() {
  const { t } = useLanguage();

  return (
    <DashboardCard>
      <div className="flex items-start justify-between gap-4">
        <div>
          <h2 className="text-2xl font-semibold tracking-tight text-secondary-800 dark:text-secondary-100">{t.heatmap.title}</h2>
          <p className="mt-2 text-sm text-secondary-400">{t.heatmap.subtitle}</p>
        </div>
        <span className="rounded-md bg-accent-successLight px-3 py-1 text-xs font-semibold text-secondary-800 dark:bg-accent-successDark dark:text-secondary-100">
          {t.heatmap.live}
        </span>
      </div>

      <div className="scrollbar-hidden mt-8 overflow-x-auto">
        <div className="min-w-[46rem]">
          <div className="mb-3 grid grid-cols-[3rem_repeat(7,minmax(0,1fr))] gap-2 text-center text-xs text-secondary-400">
            <span />
            {t.heatmap.days.map((day) => (
              <span key={day}>{day}</span>
            ))}
          </div>
          <div className="space-y-2">
            {heatmapRows.map((row) => (
              <div key={row.time} className="grid grid-cols-[3rem_1fr] items-center gap-2">
                <span className="text-right text-xs text-secondary-400">{row.time}</span>
                <div className="grid grid-cols-28 gap-1">
                  {row.values.map((value, index) => (
                    <div key={`${row.time}-${index}`} className={`aspect-square rounded-md ${intensityClasses[value]}`} />
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div className="mt-4 flex items-center justify-end gap-2 text-xs text-secondary-400">
            <span>{t.heatmap.low}</span>
            {[1, 2, 3, 4, 5].map((value) => (
              <span key={value} className={`h-4 w-4 rounded-md ${intensityClasses[value]}`} />
            ))}
            <span>{t.heatmap.high}</span>
          </div>
        </div>
      </div>
    </DashboardCard>
  );
}

export default HeatmapCard;
