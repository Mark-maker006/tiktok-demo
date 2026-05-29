import { BarChart3, Bell, Home, Layers3, Settings, Sparkles, Users } from 'lucide-react';

const navItems = [
  { id: 'home', icon: Home, active: true },
  { id: 'analytics', icon: BarChart3 },
  { id: 'assets', icon: Sparkles },
  { id: 'audience', icon: Users },
  { id: 'library', icon: Layers3 },
];

function LeftPanel() {
  return (
    <aside className="flex h-screen w-20 shrink-0 flex-col items-center justify-between border-r border-gray-200 bg-white py-6">
      <div className="flex h-[70px] w-7 items-center justify-center">
        <div className="flex h-9 w-7 items-center justify-center rounded-lg bg-black text-[10px] font-black text-white">
          LIVE
        </div>
      </div>

      <nav className="flex flex-1 flex-col items-center gap-6 px-3 pt-6">
        {navItems.map((item) => {
          const Icon = item.icon;

          return (
            <button
              key={item.id}
              type="button"
              className={`flex h-12 w-14 items-center justify-center rounded-xl transition ${
                item.active ? 'bg-violet-200 text-violet-700 shadow-sm' : 'text-gray-400 hover:bg-gray-100 hover:text-gray-700'
              }`}
              aria-label={item.id}
            >
              <Icon size={21} strokeWidth={2.2} />
            </button>
          );
        })}
      </nav>

      <div className="flex flex-col items-center gap-6 px-3">
        <button
          type="button"
          className="flex h-12 w-14 items-center justify-center rounded-xl text-gray-400 transition hover:bg-gray-100 hover:text-gray-700"
          aria-label="notifications"
        >
          <Bell size={21} strokeWidth={2.2} />
        </button>
        <button
          type="button"
          className="flex h-12 w-14 items-center justify-center rounded-xl text-gray-400 transition hover:bg-gray-100 hover:text-gray-700"
          aria-label="settings"
        >
          <Settings size={21} strokeWidth={2.2} />
        </button>
      </div>
    </aside>
  );
}

export default LeftPanel;
