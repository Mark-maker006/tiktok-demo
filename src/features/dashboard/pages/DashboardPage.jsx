import DashboardHeader from '../components/DashboardHeader';
import DashboardSidebar from '../components/DashboardSidebar';
import DashboardTopbar from '../components/DashboardTopbar';
import HeatmapCard from '../components/HeatmapCard';
import PromoBannerCard from '../components/PromoBannerCard';
import TeamManagementCard from '../components/TeamManagementCard';
import TurnoverGaugeCard from '../components/TurnoverGaugeCard';
import { AppsView, ChatView, DocsView, UsersView } from '../components/DashboardViews';

function HomeView() {
  return (
    <>
      <DashboardHeader />
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-12">
        <div className="space-y-6 lg:col-span-8">
          <HeatmapCard />
          <TeamManagementCard />
        </div>
        <div className="space-y-6 lg:col-span-4">
          <TurnoverGaugeCard />
          <PromoBannerCard />
        </div>
      </div>
    </>
  );
}

const views = {
  home: HomeView,
  users: UsersView,
  chat: ChatView,
  docs: DocsView,
  apps: AppsView,
};

function DashboardPage({ theme, onToggleTheme, activeView, onSelectView, onLogout }) {
  const ActiveView = views[activeView] || HomeView;

  return (
    <main className="min-h-screen bg-secondary-50 text-secondary-800 transition-colors dark:bg-secondary-900 dark:text-secondary-100">
      <div className="flex min-h-screen">
        <DashboardSidebar theme={theme} onToggleTheme={onToggleTheme} activeView={activeView} onSelectView={onSelectView} onLogout={onLogout} />
        <div className="min-w-0 flex-1 px-4 pb-28 pt-6 sm:px-6 md:pb-8 lg:px-8 xl:px-8 xl:py-8">
          <div className="mx-auto w-full max-w-screen-2xl">
            <DashboardTopbar />
            <ActiveView />
          </div>
        </div>
      </div>
    </main>
  );
}

export default DashboardPage;
