import { Bell, Settings } from 'lucide-react';
import { useLanguage } from '../i18n';
import LanguageSwitch from './LanguageSwitch';
import { updateSpotlight } from './spotlight';

function IconButton({ children, label }) {
  return (
    <button
      type="button"
      aria-label={label}
      className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-secondary-500 shadow-sm transition hover:text-primary-600 dark:bg-secondary-800 dark:text-secondary-300 dark:hover:text-primary-400"
    >
      {children}
    </button>
  );
}

function DashboardTopbar() {
  const { t } = useLanguage();

  return (
    <div className="mb-8 flex items-start justify-between gap-4 sm:items-center">
      <div className="flex shrink-0 items-center gap-3">
        <div onMouseMove={updateSpotlight} className="spotlight-card flex h-12 w-12 items-center justify-center rounded-full bg-primary-100 text-sm font-semibold text-primary-700 dark:bg-primary-500/20 dark:text-primary-400">
          JL
        </div>
        <div onMouseMove={updateSpotlight} className="spotlight-card rounded-full bg-white px-4 py-2 text-sm font-medium text-secondary-700 shadow-sm dark:bg-secondary-800 dark:text-secondary-100">
          {t.topbar.coins}
        </div>
      </div>

      <div className="scrollbar-hidden flex min-w-0 items-center justify-end gap-2 overflow-x-auto sm:gap-3">
        <IconButton label={t.topbar.notifications}>
          <Bell size={19} />
        </IconButton>
        <IconButton label={t.topbar.settings}>
          <Settings size={19} />
        </IconButton>
        <LanguageSwitch />
        <button
          type="button"
          className="min-h-11 rounded-full bg-secondary-900 px-5 py-3 text-sm font-semibold leading-tight text-white transition hover:bg-secondary-800 dark:bg-secondary-100 dark:text-secondary-900 dark:hover:bg-white"
        >
          {t.topbar.newJobPost}
        </button>
      </div>
    </div>
  );
}

export default DashboardTopbar;
