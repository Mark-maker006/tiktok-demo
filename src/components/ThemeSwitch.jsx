import { Moon, Sun } from 'lucide-react';
import { useLanguage } from '../i18n';

function ThemeSwitch({ theme, onToggle }) {
  const { t } = useLanguage();
  const isDark = theme === 'dark';

  return (
    <button
      type="button"
      onClick={onToggle}
      className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-secondary-100 text-secondary-700 transition hover:bg-primary-100 hover:text-primary-700 dark:bg-secondary-800 dark:text-secondary-100 dark:hover:bg-secondary-700"
      aria-label={t.sidebar.theme}
    >
      {isDark ? <Sun size={20} /> : <Moon size={20} />}
    </button>
  );
}

export default ThemeSwitch;
