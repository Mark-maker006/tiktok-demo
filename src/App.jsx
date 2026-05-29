import { useEffect, useState } from 'react';
import DashboardPage from './components/DashboardPage';
import FigmaPage from './components/FigmaPage';

function App() {
  const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'light');
  const path = window.location.pathname;

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark');
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((current) => (current === 'dark' ? 'light' : 'dark'));
  };

  if (path === '/figma') {
    return <FigmaPage />;
  }

  return <DashboardPage theme={theme} onToggleTheme={toggleTheme} />;
}

export default App;
