import { Languages } from 'lucide-react';
import { languages, useLanguage } from '../i18n';

function LanguageSwitch() {
  const { language, toggleLanguage, t } = useLanguage();
  const nextLanguage = language === 'zh' ? 'en' : 'zh';

  return (
    <button
      type="button"
      onClick={toggleLanguage}
      className="inline-flex h-11 min-w-16 shrink-0 items-center justify-center gap-1 rounded-full bg-white px-3 text-sm font-semibold text-secondary-700 shadow-sm transition hover:text-primary-600 dark:bg-secondary-800 dark:text-secondary-300 dark:hover:text-primary-400"
      aria-label={t.topbar.language}
      title={t.topbar.language}
    >
      <Languages size={18} />
      <span className="leading-none">{languages[nextLanguage]}</span>
    </button>
  );
}

export default LanguageSwitch;
