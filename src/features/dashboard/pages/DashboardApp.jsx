'use client';

import { useEffect, useState } from 'react';
import DashboardPage from './DashboardPage';
import LoginGate from '../../auth/components/LoginGate';
import { LanguageProvider } from '../../../shared/contexts/language';

function DashboardClient() {
  const [theme, setTheme] = useState('light');
  const [language, setLanguage] = useState('en');
  const [activeView, setActiveView] = useState('home');
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const storedTheme = window.localStorage.getItem('theme');
    const preferredTheme =
      storedTheme || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    setTheme(preferredTheme);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark');
    window.localStorage.setItem('theme', theme);
  }, [theme]);

  useEffect(() => {
    const storedLanguage = window.localStorage.getItem('language');
    if (storedLanguage === 'zh' || storedLanguage === 'en') {
      setLanguage(storedLanguage);
    }
  }, []);

  useEffect(() => {
    document.documentElement.lang = language === 'zh' ? 'zh-CN' : 'en';
    document.documentElement.classList.toggle('lang-zh', language === 'zh');
    window.localStorage.setItem('language', language);
  }, [language]);

  const toggleTheme = () => {
    setTheme((current) => (current === 'dark' ? 'light' : 'dark'));
  };

  const handleLogin = () => {
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    setActiveView('home');
    setIsAuthenticated(false);
  };

  if (!isAuthenticated) {
    return (
      <LanguageProvider language={language} setLanguage={setLanguage}>
        <LoginGate theme={theme} onToggleTheme={toggleTheme} onLogin={handleLogin} />
      </LanguageProvider>
    );
  }

  return (
    <LanguageProvider language={language} setLanguage={setLanguage}>
      <DashboardPage
        theme={theme}
        onToggleTheme={toggleTheme}
        activeView={activeView}
        onSelectView={setActiveView}
        onLogout={handleLogout}
      />
    </LanguageProvider>
  );
}

export default DashboardClient;
