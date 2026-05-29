import { useState } from 'react';
import CenterPanel from './CenterPanel';
import LeftPanel from './LeftPanel';
import RightPreview from './RightPreview';

const avatarBase = 'http://localhost:3845/assets';

const initialDashboard = {
  analytics: [
    { value: '1,245', label: 'Activities Created' },
    { value: '8.5M', label: 'Total Views' },
    { value: '150k', label: 'Peak Concurrent' },
    { value: '92%', label: 'Engagement Rate' },
  ],
  heatmap: {
    days: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
    times: ['10am', '12pm', '2pm', '4pm', '6pm', '8pm'],
  },
  activities: [
    {
      name: 'Summer Music Festival',
      owner: 'Alex Chen',
      updated: '2 hours ago',
      status: 'Live',
      avatar: `${avatarBase}/2f4d15c28f9e58c0607fdc4849e1f53b023ceb77.png`,
    },
    {
      name: 'Gaming Tournament',
      owner: 'Sarah Lee',
      updated: '1 day ago',
      status: 'Draft',
      avatar: `${avatarBase}/57c6df59a76ef1d99526cd8b2d23b4be6968cca9.png`,
    },
    {
      name: 'Fashion Week Live',
      owner: 'Mike Ross',
      updated: '2 days ago',
      status: 'Live',
      avatar: `${avatarBase}/73b9e690aefd01a01037f0bae1ab8eef8b621a7d.png`,
    },
    {
      name: 'Creator Spotlight Series',
      owner: 'David Park',
      updated: '3 days ago',
      status: 'Live',
      avatar: `${avatarBase}/eef5ede9f6048cb43f7476e8df80e2cdb7a387c3.png`,
    },
    {
      name: 'Holiday Shopping Event',
      owner: 'Emily Davis',
      updated: '5 days ago',
      status: 'Draft',
      avatar: `${avatarBase}/b3f205a45c747338173eedb8f4c63fdb835c6edc.png`,
    },
  ],
  efficiency: {
    rate: 88,
    details: [
      { label: 'Assets Generated:', value: '450' },
      { label: 'Time Saved:', value: '320h' },
      { label: 'Avg. Completion:', value: '95%' },
    ],
  },
};

function Workbench() {
  const [dashboard] = useState(initialDashboard);

  return (
    <main className="flex h-screen min-h-0 overflow-hidden bg-[#f7f7fb] text-gray-900">
      <LeftPanel />
      <div className="min-w-0 flex-1 overflow-auto p-8">
        <div className="flex min-h-[855px] w-full gap-6">
          <CenterPanel analytics={dashboard.analytics} heatmap={dashboard.heatmap} activities={dashboard.activities} />
          <RightPreview efficiency={dashboard.efficiency} />
        </div>
      </div>
    </main>
  );
}

export default Workbench;
