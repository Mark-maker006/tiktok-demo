import { SendHorizontal } from 'lucide-react';

const heatColors = ['#f3e8ff', '#e9d5ff', '#d8b4fe', '#c084fc', '#a855f7', '#7e22ce'];

function Heatmap({ data }) {
  return (
    <div className="w-full pt-2">
      <div className="mb-2 grid grid-cols-[40px_repeat(7,1fr)] gap-2 text-center text-xs text-gray-500">
        <span />
        {data.days.map((day) => (
          <span key={day}>{day}</span>
        ))}
      </div>
      <div className="space-y-1">
        {data.times.map((time, rowIndex) => (
          <div key={time} className="grid grid-cols-[40px_1fr] items-center gap-2">
            <span className="text-right text-xs text-gray-500">{time}</span>
            <div className="grid h-6 grid-cols-28 gap-0.5">
              {Array.from({ length: 28 }).map((_, index) => (
                <div
                  key={`${time}-${index}`}
                  className="rounded-sm"
                  style={{ backgroundColor: heatColors[(index + rowIndex * 2) % heatColors.length] }}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function ActivityTable({ activities }) {
  return (
    <div className="overflow-hidden rounded-none">
      <div className="grid grid-cols-[2fr_1.15fr_0.9fr_0.55fr_32px] border-b border-gray-100 py-3 text-left text-xs font-medium uppercase tracking-wide text-gray-400">
        <span>Activity</span>
        <span>Owner</span>
        <span>Updated</span>
        <span>Status</span>
        <span />
      </div>
      {activities.map((activity) => (
        <div
          key={activity.name}
          className="grid grid-cols-[2fr_1.15fr_0.9fr_0.55fr_32px] items-center border-b border-gray-100 py-[18px] last:border-b-0"
        >
          <span className="text-sm font-medium text-black">{activity.name}</span>
          <div className="flex items-center gap-2">
            <img className="h-6 w-6 rounded-full object-cover" src={activity.avatar} alt="" />
            <span className="text-sm text-black">{activity.owner}</span>
          </div>
          <span className="text-sm text-gray-500">{activity.updated}</span>
          <span>
            <span
              className={`rounded-full px-2.5 py-1 text-xs font-medium ${
                activity.status === 'Live' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
              }`}
            >
              {activity.status}
            </span>
          </span>
          <button type="button" className="text-xl leading-none text-gray-400" aria-label={`More actions for ${activity.name}`}>
            ...
          </button>
        </div>
      ))}
    </div>
  );
}

function CenterPanel({ analytics, heatmap, activities }) {
  return (
    <section className="flex min-w-0 flex-1 flex-col gap-6">
      <div className="rounded-2xl bg-white p-6 shadow-[0_4px_6px_-1px_rgba(0,0,0,0.05),0_2px_4px_-1px_rgba(0,0,0,0.03)]">
        <h1 className="text-2xl font-bold leading-8 text-gray-900">Activity Analytics</h1>
        <div className="mt-6 grid grid-cols-4 gap-4">
          {analytics.map((metric) => (
            <div key={metric.label} className="min-w-0">
              <p className="text-4xl font-bold leading-10 text-black">{metric.value}</p>
              <p className="mt-1 text-sm leading-5 text-gray-500">{metric.label}</p>
            </div>
          ))}
        </div>
        <div className="mt-8">
          <h2 className="text-base font-semibold leading-6 text-black">Weekly Activity Heatmap</h2>
          <Heatmap data={heatmap} />
        </div>
      </div>

      <div className="rounded-2xl bg-white p-6 shadow-[0_4px_6px_-1px_rgba(0,0,0,0.05),0_2px_4px_-1px_rgba(0,0,0,0.03)]">
        <h2 className="text-2xl font-bold leading-8 text-gray-900">Recent Activities</h2>
        <div className="mt-4">
          <ActivityTable activities={activities} />
        </div>
      </div>

      <div className="rounded-2xl bg-gradient-to-br from-violet-600 to-indigo-600 p-6 text-white shadow-[0_4px_6px_-1px_rgba(0,0,0,0.05),0_2px_4px_-1px_rgba(0,0,0,0.03)] lg:hidden">
        <h2 className="text-2xl font-bold leading-8">AIGC Asset Generator</h2>
        <div className="mt-4 flex gap-3">
          <textarea className="h-24 flex-1 resize-none rounded-xl border border-white/40 bg-white/10 p-3 text-sm text-white placeholder:text-white/80 backdrop-blur-sm outline-none" placeholder="Describe your next-gen live assets" />
          <button type="button" className="flex w-28 flex-col items-center justify-center rounded-xl bg-white px-4 py-3 text-center text-sm font-semibold text-violet-700 shadow-sm">
            Generate
            <SendHorizontal className="mt-1" size={16} />
          </button>
        </div>
      </div>
    </section>
  );
}

export default CenterPanel;
