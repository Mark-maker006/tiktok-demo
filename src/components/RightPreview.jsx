import { SendHorizontal } from 'lucide-react';

function RightPreview({ efficiency }) {
  return (
    <aside className="hidden w-80 shrink-0 flex-col gap-6 lg:flex">
      <section className="rounded-2xl bg-white p-6 shadow-[0_4px_6px_-1px_rgba(0,0,0,0.05),0_2px_4px_-1px_rgba(0,0,0,0.03)]">
        <h2 className="pb-6 text-2xl font-bold leading-8 text-gray-900">Efficiency Rate</h2>
        <div className="flex justify-center pb-8">
          <div
            className="grid h-[200px] w-[200px] place-items-center rounded-full shadow-[inset_0_2px_4px_rgba(0,0,0,0.05)]"
            style={{
              background: `conic-gradient(#7c3aed ${efficiency.rate * 3.6}deg, #ede9fe 0deg)`,
            }}
          >
            <div className="grid h-40 w-40 place-items-center rounded-full bg-white">
              <span className="text-5xl font-bold leading-[72px] text-black">{efficiency.rate}%</span>
            </div>
          </div>
        </div>
        <div className="space-y-3">
          {efficiency.details.map((item) => (
            <div key={item.label} className="flex items-center justify-between">
              <span className="text-sm leading-5 text-gray-500">{item.label}</span>
              <span className="text-base font-semibold leading-6 text-black">{item.value}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="relative flex min-h-[398px] flex-1 overflow-hidden rounded-2xl bg-gradient-to-br from-violet-600 to-indigo-600 p-6 text-white shadow-[0_4px_6px_-1px_rgba(0,0,0,0.05),0_2px_4px_-1px_rgba(0,0,0,0.03)]">
        <div className="absolute inset-0 opacity-70">
          <div className="absolute -right-16 top-14 h-56 w-56 rounded-full border border-white/25" />
          <div className="absolute right-10 top-28 h-28 w-28 rounded-full bg-white/10 blur-sm" />
          <div className="absolute bottom-16 left-6 h-24 w-24 rotate-12 rounded-3xl border border-white/25" />
        </div>
        <div className="relative z-10 flex w-full flex-col">
          <h2 className="text-2xl font-bold leading-[30px]">
            AIGC Asset
            <br />
            Generator
          </h2>
          <div className="mt-auto flex h-24 gap-3">
            <textarea
              className="h-full min-w-0 flex-1 resize-none rounded-xl border border-white/40 bg-white/10 px-3 py-3 text-sm leading-5 text-white placeholder:text-white/80 backdrop-blur-sm outline-none"
              placeholder="Describe your next-gen live assets (e.g., futuristic concert stage, interactive)"
            />
            <button
              type="button"
              className="flex shrink-0 flex-col items-center justify-center rounded-xl bg-white px-4 py-3 text-center text-base font-semibold leading-6 text-violet-700 shadow-sm transition hover:bg-violet-50"
            >
              Generate
              <br />
              Assets
              <SendHorizontal className="mt-1" size={16} />
            </button>
          </div>
        </div>
      </section>
    </aside>
  );
}

export default RightPreview;
