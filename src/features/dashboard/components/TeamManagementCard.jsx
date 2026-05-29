import { MoreHorizontal } from 'lucide-react';
import DashboardCard from '../../../shared/components/DashboardCard';
import { teamMembers } from '../../../mocks/dashboardData';
import { useLanguage } from '../../../shared/contexts/language';
import { updateSpotlight } from '../../../shared/lib/spotlight';

function TeamManagementCard() {
  const { t } = useLanguage();

  return (
    <DashboardCard>
      <h2 className="text-2xl font-semibold tracking-tight text-secondary-800 dark:text-secondary-100">{t.team.title}</h2>
      <div className="mt-6">
        <div className="hidden grid-cols-[minmax(0,2fr)_minmax(0,1.2fr)_minmax(0,1fr)_minmax(0,0.8fr)_2rem] border-b border-secondary-100 pb-3 text-xs font-medium uppercase tracking-wide text-secondary-400 dark:border-secondary-700 md:grid">
          <span>{t.team.projectName}</span>
          <span>{t.team.creator}</span>
          <span>{t.team.lastUpdated}</span>
          <span>{t.team.status}</span>
          <span />
        </div>
        <div>
          {teamMembers.map((member) => (
            <div
              key={member.email}
              onMouseMove={updateSpotlight}
              className="spotlight-card grid gap-4 rounded-2xl border-b border-secondary-100 px-3 py-4 last:border-b-0 dark:border-secondary-700 md:grid-cols-[minmax(0,2fr)_minmax(0,1.2fr)_minmax(0,1fr)_minmax(0,0.8fr)_2rem] md:items-center"
            >
              <div className="flex min-w-0 items-center gap-3">
                <div className="min-w-0">
                  <p className="truncate text-sm font-semibold text-secondary-800 dark:text-secondary-100">{member.project}</p>
                  <p className="truncate text-sm text-secondary-400">{t.team[member.categoryKey]}</p>
                </div>
              </div>
              <div className="flex min-w-0 items-center gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary-100 text-sm font-semibold text-primary-700 shadow-sm dark:bg-primary-500/20 dark:text-primary-400">
                  {member.avatar}
                </div>
                <div className="min-w-0">
                  <p className="truncate text-sm font-semibold text-secondary-800 dark:text-secondary-100">{member.name}</p>
                  <p className="truncate text-sm text-secondary-400">{member.email}</p>
                </div>
              </div>
              <p className="text-sm text-secondary-400">{t.team[member.updatedKey]}</p>
              <div>
                <span
                  className={`rounded-md px-3 py-1 text-xs font-semibold ${
                    member.statusKey === 'highOutput'
                      ? 'bg-accent-warning text-secondary-900'
                      : 'bg-accent-successLight text-secondary-800 dark:bg-accent-successDark dark:text-secondary-100'
                  }`}
                >
                  {t.team[member.statusKey]}
                </span>
              </div>
              <button type="button" className="text-secondary-400 hover:text-secondary-700 dark:hover:text-secondary-100" aria-label={`${t.team.actionsFor} ${member.name}`}>
                <MoreHorizontal size={20} />
              </button>
            </div>
          ))}
        </div>
      </div>
    </DashboardCard>
  );
}

export default TeamManagementCard;
