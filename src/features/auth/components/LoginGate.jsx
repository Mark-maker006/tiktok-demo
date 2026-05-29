import { Lock, Loader2, UserRound } from 'lucide-react';
import { useEffect, useState } from 'react';
import { useLanguage } from '../../../shared/contexts/language';
import LanguageSwitch from '../../../shared/components/LanguageSwitch';
import ThemeSwitch from '../../../shared/components/ThemeSwitch';
import { updateSpotlight } from '../../../shared/lib/spotlight';

const AUTH_USER = 'admin';
const AUTH_PASSWORD = '12345678';

function LoginGate({ theme, onToggleTheme, onLogin }) {
  const { t } = useLanguage();
  const [ready, setReady] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    const timer = window.setTimeout(() => setReady(true), 700);
    return () => window.clearTimeout(timer);
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();

    if (username.trim() === AUTH_USER && password === AUTH_PASSWORD) {
      setError('');
      onLogin();
      return;
    }

    setError(t.login.error);
  };

  return (
    <main className="min-h-screen bg-secondary-50 text-secondary-800 transition-colors dark:bg-secondary-900 dark:text-secondary-100">
      <div className="flex min-h-screen items-center justify-center px-4 py-10">
        <section
          onMouseMove={updateSpotlight}
          className="spotlight-card grid w-full max-w-5xl overflow-hidden rounded-3xl border border-secondary-100 bg-white shadow-lg shadow-secondary-200/40 dark:border-secondary-700 dark:bg-secondary-800 dark:shadow-secondary-950/20 lg:grid-cols-[1fr_1.05fr]"
        >
          <div className="relative min-h-72 bg-gradient-to-br from-primary-600 to-primary-800 p-8 text-white dark:from-primary-700 dark:to-secondary-900">
            <div className="flex h-full flex-col">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-xs font-bold text-secondary-900">
                LIVE
              </div>
              <div className="mt-auto">
                <p className="text-sm font-semibold text-white/70">{t.login.heroEyebrow}</p>
                <h1 className="mt-3 max-w-md text-4xl font-bold tracking-tight">{t.login.heroTitle}</h1>
                <p className="mt-4 max-w-sm text-sm leading-6 text-white/75">{t.login.heroCopy}</p>
              </div>
            </div>
          </div>

          <div className="p-6 sm:p-8">
            <div className="mb-8 flex flex-wrap items-center justify-between gap-3">
              <div className="min-w-0">
                <p className="text-sm text-secondary-400">{t.login.access}</p>
                <h2 className="mt-1 text-3xl font-bold tracking-tight text-secondary-800 dark:text-secondary-100">{t.login.welcome}</h2>
              </div>
              <div className="flex shrink-0 items-center gap-2">
                <LanguageSwitch />
                <ThemeSwitch theme={theme} onToggle={onToggleTheme} />
              </div>
            </div>

            {!ready ? (
              <div className="flex min-h-80 flex-col items-center justify-center rounded-3xl bg-secondary-50 px-4 text-center dark:bg-secondary-900/60">
                <Loader2 className="animate-spin text-primary-600 dark:text-primary-400" size={34} />
                <p className="mt-4 text-sm font-semibold text-secondary-700 dark:text-secondary-100">{t.login.loadingTitle}</p>
                <p className="mt-2 text-sm text-secondary-400">{t.login.loadingCopy}</p>
              </div>
            ) : (
              <form className="space-y-5" onSubmit={handleSubmit}>
                <label className="block">
                  <span className="text-sm font-medium text-secondary-700 dark:text-secondary-100">{t.login.username}</span>
                  <span className="mt-2 flex items-center gap-3 rounded-2xl border border-secondary-100 bg-secondary-50 px-4 py-3 dark:border-secondary-700 dark:bg-secondary-900/60">
                    <UserRound size={19} className="text-secondary-400" />
                    <input
                      className="min-w-0 flex-1 bg-transparent text-sm font-medium text-secondary-800 outline-none placeholder:text-secondary-400 dark:text-secondary-100"
                      value={username}
                      onChange={(event) => setUsername(event.target.value)}
                      placeholder="admin"
                      autoComplete="username"
                    />
                  </span>
                </label>

                <label className="block">
                  <span className="text-sm font-medium text-secondary-700 dark:text-secondary-100">{t.login.password}</span>
                  <span className="mt-2 flex items-center gap-3 rounded-2xl border border-secondary-100 bg-secondary-50 px-4 py-3 dark:border-secondary-700 dark:bg-secondary-900/60">
                    <Lock size={19} className="text-secondary-400" />
                    <input
                      className="min-w-0 flex-1 bg-transparent text-sm font-medium text-secondary-800 outline-none placeholder:text-secondary-400 dark:text-secondary-100"
                      value={password}
                      onChange={(event) => setPassword(event.target.value)}
                      placeholder="12345678"
                      type="password"
                      autoComplete="current-password"
                    />
                  </span>
                </label>

                {error ? <p className="rounded-2xl bg-red-50 px-4 py-3 text-sm font-medium text-red-600 dark:bg-red-500/10 dark:text-red-300">{error}</p> : null}

                <button
                  type="submit"
                  className="w-full rounded-full bg-secondary-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-secondary-800 dark:bg-secondary-100 dark:text-secondary-900 dark:hover:bg-white"
                >
                  {t.login.signIn}
                </button>
              </form>
            )}
          </div>
        </section>
      </div>
    </main>
  );
}

export default LoginGate;
