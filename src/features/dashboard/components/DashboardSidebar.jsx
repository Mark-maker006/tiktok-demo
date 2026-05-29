import { AppWindow, FileText, Home, LogOut, MessageCircle, Users } from 'lucide-react';
import { useLanguage } from '../../../shared/contexts/language';
import ThemeSwitch from '../../../shared/components/ThemeSwitch';

const navItems = [
  { id: 'home', labelKey: 'home', descriptionKey: 'homeDescription', icon: Home },
  { id: 'users', labelKey: 'users', descriptionKey: 'usersDescription', icon: Users },
  { id: 'chat', labelKey: 'chat', descriptionKey: 'chatDescription', icon: MessageCircle },
  { id: 'docs', labelKey: 'docs', descriptionKey: 'docsDescription', icon: FileText },
  { id: 'apps', labelKey: 'apps', descriptionKey: 'appsDescription', icon: AppWindow },
];

function NavButton({ item, activeView, onSelectView }) {
  const { t } = useLanguage();
  const Icon = item.icon;
  const active = activeView === item.id;
  const label = t.sidebar[item.labelKey];
  const description = t.sidebar[item.descriptionKey];

  return (
    <div className="group relative">
      <button
        type="button"
        onClick={() => onSelectView(item.id)}
        className={`flex h-12 w-12 items-center justify-center rounded-2xl transition ${
          active
            ? 'bg-primary-100 text-primary-700 dark:bg-primary-500/20 dark:text-primary-400'
            : 'text-secondary-400 hover:bg-secondary-100 hover:text-secondary-700 dark:hover:bg-secondary-800 dark:hover:text-secondary-100'
        }`}
        aria-current={active ? 'page' : undefined}
        aria-label={`${label}: ${description}`}
      >
        <Icon size={20} />
      </button>
      <div className="pointer-events-none absolute left-full top-1/2 z-30 ml-3 -translate-y-1/2 translate-x-1 whitespace-nowrap rounded-2xl border border-secondary-100 bg-white px-4 py-3 text-left opacity-0 shadow-lg shadow-secondary-200/40 transition duration-200 group-hover:translate-x-0 group-hover:opacity-100 group-focus-within:translate-x-0 group-focus-within:opacity-100 dark:border-secondary-700 dark:bg-secondary-800 dark:shadow-secondary-950/30">
        <p className="text-sm font-semibold text-secondary-800 dark:text-secondary-100">{label}</p>
        <p className="mt-1 text-xs text-secondary-400">{description}</p>
      </div>
    </div>
  );
}

function DashboardSidebar({ theme, onToggleTheme, activeView, onSelectView, onLogout }) {
  const { t } = useLanguage();

  return (
    <>
      <aside className="hidden w-20 shrink-0 flex-col items-center gap-6 border-r border-secondary-100 bg-white py-6 dark:border-secondary-700 dark:bg-secondary-900 md:flex xl:w-24 xl:py-8">
        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-secondary-900 text-xs font-bold text-white dark:bg-secondary-100 dark:text-secondary-900">
          LIVE
        </div>
        <ThemeSwitch theme={theme} onToggle={onToggleTheme} />
        <nav className="flex flex-1 flex-col items-center gap-4">
          {navItems.map((item) => (
            <NavButton key={item.id} item={item} activeView={activeView} onSelectView={onSelectView} />
          ))}
        </nav>
        <button
          type="button"
          onClick={onLogout}
          className="flex h-12 w-12 items-center justify-center rounded-2xl text-secondary-400 transition hover:bg-secondary-100 hover:text-secondary-700 dark:hover:bg-secondary-800 dark:hover:text-secondary-100"
          aria-label={t.sidebar.logout}
        >
          <LogOut size={20} />
        </button>
      </aside>

      <nav className="scrollbar-hidden fixed inset-x-0 bottom-0 z-20 overflow-x-auto border-t border-secondary-100 bg-white px-4 py-3 dark:border-secondary-700 dark:bg-secondary-900 md:hidden">
        <div className="mx-auto flex w-max items-center gap-3">
          {navItems.map((item) => (
            <NavButton key={item.id} item={item} activeView={activeView} onSelectView={onSelectView} />
          ))}
          <ThemeSwitch theme={theme} onToggle={onToggleTheme} />
        </div>
      </nav>
    </>
  );
}

export default DashboardSidebar;
