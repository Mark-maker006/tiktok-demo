import {
  ArrowUpRight,
  Bot,
  CheckCircle2,
  Clock3,
  FileText,
  MessageCircle,
  MoreHorizontal,
  PlayCircle,
  Sparkles,
  Star,
  Users,
  Zap,
} from 'lucide-react';
import DashboardCard from '../../../shared/components/DashboardCard';
import { useLanguage } from '../../../shared/contexts/language';
import { updateSpotlight } from '../../../shared/lib/spotlight';

const creators = [
  { name: 'Sarah Lee', role: { en: 'Music LIVE host', zh: '音乐直播主持' }, score: '98', status: { en: 'On air', zh: '直播中' }, growth: '+18%' },
  { name: 'Alex Chen', role: { en: 'Gaming creator', zh: '游戏达人' }, score: '94', status: { en: 'Briefing', zh: '简报中' }, growth: '+11%' },
  { name: 'Maya Patel', role: { en: 'Shop LIVE lead', zh: '电商直播负责人' }, score: '91', status: { en: 'Ready', zh: '已就绪' }, growth: '+9%' },
  { name: 'David Park', role: { en: 'Community series', zh: '社区系列负责人' }, score: '88', status: { en: 'Review', zh: '审核中' }, growth: '+7%' },
];

const messages = [
  { from: { en: 'Ops Command', zh: '运营指挥台' }, text: { en: 'Summer Music Fest assets are approved for tonight.', zh: '夏日音乐节素材已通过今晚使用审批。' }, time: { en: '2m', zh: '2 分钟' }, tone: { en: 'Live', zh: '直播' } },
  { from: { en: 'Creator Success', zh: '达人成功团队' }, text: { en: 'Maya requested one more shopping script variation.', zh: 'Maya 需要再增加一个带货脚本版本。' }, time: { en: '12m', zh: '12 分钟' }, tone: { en: 'Action', zh: '待处理' } },
  { from: { en: 'Auto QA', zh: '自动质检' }, text: { en: 'Gaming tournament overlays passed visual checks.', zh: '游戏赛事贴片已通过视觉检查。' }, time: { en: '28m', zh: '28 分钟' }, tone: { en: 'Done', zh: '完成' } },
];

const documents = [
  { title: { en: 'LIVE Launch Playbook', zh: 'LIVE 上线手册' }, type: { en: 'Runbook', zh: '执行手册' }, owner: 'JL', progress: 86 },
  { title: { en: 'Creator Brief Template', zh: '达人简报模板' }, type: { en: 'Brief', zh: '简报' }, owner: 'AC', progress: 72 },
  { title: { en: 'Shopping Event Checklist', zh: '电商活动清单' }, type: { en: 'Checklist', zh: '清单' }, owner: 'MP', progress: 94 },
  { title: { en: 'Campaign Asset Rules', zh: '活动素材规范' }, type: { en: 'Policy', zh: '规范' }, owner: 'SL', progress: 64 },
];

const apps = [
  { name: { en: 'Hook Builder', zh: '开场钩子生成' }, copy: { en: 'Generate opening lines from audience signals.', zh: '根据观众信号生成直播开场话术。' }, icon: Sparkles, usage: { en: '1.8k runs', zh: '1.8k 次运行' } },
  { name: { en: 'Clip Ranker', zh: '切片排序器' }, copy: { en: 'Sort replay clips by retention and comment intent.', zh: '按留存和评论意图排序回放切片。' }, icon: PlayCircle, usage: { en: '940 runs', zh: '940 次运行' } },
  { name: { en: 'Reply Copilot', zh: '回复助手' }, copy: { en: 'Draft on-brand live chat responses in seconds.', zh: '快速生成符合品牌语气的直播回复。' }, icon: Bot, usage: { en: '2.4k runs', zh: '2.4k 次运行' } },
  { name: { en: 'Asset Sprint', zh: '素材冲刺' }, copy: { en: 'Create thumbnails, lower thirds, and promo captions.', zh: '创建封面、字幕条和推广文案。' }, icon: Zap, usage: { en: '760 runs', zh: '760 次运行' } },
];

const reviewItems = [
  { en: 'Legal pass', zh: '法务审核' },
  { en: 'Creator signoff', zh: '达人确认' },
  { en: 'Asset naming', zh: '素材命名' },
];

function PageShell({ eyebrow, title, description, children }) {
  return (
    <div>
      <header className="mb-6 flex flex-col gap-3 xl:flex-row xl:items-end xl:justify-between">
        <div>
          <p className="text-sm font-normal text-secondary-400">{eyebrow}</p>
          <h1 className="mt-1 text-3xl font-bold tracking-tight text-secondary-800 dark:text-secondary-100">{title}</h1>
          <p className="mt-3 max-w-2xl text-sm leading-6 text-secondary-400">{description}</p>
        </div>
      </header>
      {children}
    </div>
  );
}

function MetricTile({ label, value, detail }) {
  return (
    <div onMouseMove={updateSpotlight} className="spotlight-card rounded-3xl bg-white p-5 shadow-sm dark:bg-secondary-800">
      <p className="text-xs font-medium uppercase text-secondary-400">{label}</p>
      <p className="mt-3 text-3xl font-bold text-secondary-800 dark:text-secondary-100">{value}</p>
      <p className="mt-2 text-sm text-primary-600 dark:text-primary-400">{detail}</p>
    </div>
  );
}

export function UsersView() {
  const { language, t } = useLanguage();

  return (
    <PageShell
      eyebrow={t.views.creatorOps}
      title={t.views.usersTitle}
      description={t.views.usersCopy}
    >
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-12">
        <div className="space-y-6 lg:col-span-8">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            <MetricTile label={t.views.activeCreators} value="248" detail={t.views.activeCreatorsDetail} />
            <MetricTile label={t.views.readyForLive} value="76%" detail={t.views.readyForLiveDetail} />
            <MetricTile label={t.views.avgScore} value="92" detail={t.views.avgScoreDetail} />
          </div>
          <DashboardCard>
            <div className="flex items-start justify-between gap-4">
              <div>
                <h2 className="text-2xl font-semibold tracking-tight text-secondary-800 dark:text-secondary-100">{t.views.creatorRoster}</h2>
                <p className="mt-2 text-sm text-secondary-400">{t.views.creatorRosterCopy}</p>
              </div>
              <Users className="text-primary-600 dark:text-primary-400" size={24} />
            </div>
            <div className="mt-6 space-y-3">
              {creators.map((creator) => (
                <div
                  key={creator.name}
                  onMouseMove={updateSpotlight}
                  className="spotlight-card grid gap-4 rounded-2xl bg-secondary-50 p-4 dark:bg-secondary-900/60 md:grid-cols-[minmax(0,1.5fr)_0.7fr_0.7fr_2rem] md:items-center"
                >
                  <div>
                    <p className="font-semibold text-secondary-800 dark:text-secondary-100">{creator.name}</p>
                    <p className="mt-1 text-sm text-secondary-400">{creator.role[language]}</p>
                  </div>
                  <span className="text-sm font-semibold text-secondary-800 dark:text-secondary-100">{t.views.score} {creator.score}</span>
                  <span className="w-fit rounded-md bg-accent-successLight px-3 py-1 text-xs font-semibold text-secondary-800 dark:bg-accent-successDark dark:text-secondary-100">
                    {creator.status[language]}
                  </span>
                  <button type="button" className="text-secondary-400 hover:text-secondary-700 dark:hover:text-secondary-100" aria-label={`${t.views.moreActionsFor} ${creator.name}`}>
                    <MoreHorizontal size={20} />
                  </button>
                </div>
              ))}
            </div>
          </DashboardCard>
        </div>
        <DashboardCard className="lg:col-span-4">
          <h2 className="text-2xl font-semibold tracking-tight text-secondary-800 dark:text-secondary-100">{t.views.growthMix}</h2>
          <div className="mt-7 space-y-5">
            {creators.slice(0, 3).map((creator, index) => (
              <div key={creator.name}>
                <div className="flex items-center justify-between text-sm">
                  <span className="font-medium text-secondary-700 dark:text-secondary-100">{creator.name}</span>
                  <span className="text-primary-600 dark:text-primary-400">{creator.growth}</span>
                </div>
                <div className="mt-2 h-3 overflow-hidden rounded-full bg-secondary-100 dark:bg-secondary-700">
                  <div className="h-full rounded-full bg-primary-600 dark:bg-primary-400" style={{ width: `${86 - index * 12}%` }} />
                </div>
              </div>
            ))}
          </div>
        </DashboardCard>
      </div>
    </PageShell>
  );
}

export function ChatView() {
  const { language, t } = useLanguage();

  return (
    <PageShell
      eyebrow={t.views.messageCenter}
      title={t.views.chatTitle}
      description={t.views.chatCopy}
    >
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-12">
        <DashboardCard className="lg:col-span-7">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-semibold tracking-tight text-secondary-800 dark:text-secondary-100">{t.views.priorityInbox}</h2>
            <MessageCircle className="text-primary-600 dark:text-primary-400" size={24} />
          </div>
          <div className="mt-6 space-y-4">
            {messages.map((message) => (
              <div key={message.text.en} onMouseMove={updateSpotlight} className="spotlight-card rounded-3xl bg-secondary-50 p-5 dark:bg-secondary-900/60">
                <div className="flex items-center justify-between gap-4">
                  <p className="font-semibold text-secondary-800 dark:text-secondary-100">{message.from[language]}</p>
                  <span className="text-xs text-secondary-400">{message.time[language]}</span>
                </div>
                <p className="mt-3 text-sm leading-6 text-secondary-500 dark:text-secondary-300">{message.text[language]}</p>
                <span className="mt-4 inline-flex rounded-md bg-primary-100 px-3 py-1 text-xs font-semibold text-primary-700 dark:bg-primary-500/20 dark:text-primary-400">
                  {message.tone[language]}
                </span>
              </div>
            ))}
          </div>
        </DashboardCard>
        <div className="space-y-6 lg:col-span-5">
          <DashboardCard>
            <h2 className="text-2xl font-semibold tracking-tight text-secondary-800 dark:text-secondary-100">{t.views.responseHealth}</h2>
            <div className="mt-8 flex items-end gap-3">
              {[52, 78, 64, 92, 71, 84, 96].map((height, index) => (
                <div key={height} className="flex flex-1 flex-col items-center gap-2">
                  <div className="w-full rounded-t-2xl bg-primary-600 dark:bg-primary-400" style={{ height: `${height * 1.4}px` }} />
                  <span className="text-xs text-secondary-400">{index + 1}</span>
                </div>
              ))}
            </div>
          </DashboardCard>
          <DashboardCard>
            <div className="flex items-center gap-3">
              <CheckCircle2 className="text-primary-600 dark:text-primary-400" size={24} />
              <div>
                <h2 className="text-xl font-semibold text-secondary-800 dark:text-secondary-100">{t.views.slaClear}</h2>
                <p className="mt-1 text-sm text-secondary-400">{t.views.slaCopy}</p>
              </div>
            </div>
          </DashboardCard>
        </div>
      </div>
    </PageShell>
  );
}

export function DocsView() {
  const { language, t } = useLanguage();

  return (
    <PageShell
      eyebrow={t.views.campaignKnowledge}
      title={t.views.docsTitle}
      description={t.views.docsCopy}
    >
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-12">
        <DashboardCard className="lg:col-span-8">
          <div className="flex items-start justify-between gap-4">
            <div>
              <h2 className="text-2xl font-semibold tracking-tight text-secondary-800 dark:text-secondary-100">{t.views.documentHub}</h2>
              <p className="mt-2 text-sm text-secondary-400">{t.views.documentHubCopy}</p>
            </div>
            <FileText className="text-primary-600 dark:text-primary-400" size={24} />
          </div>
          <div className="mt-6 space-y-4">
            {documents.map((doc) => (
              <div key={doc.title.en} onMouseMove={updateSpotlight} className="spotlight-card rounded-3xl bg-secondary-50 p-5 dark:bg-secondary-900/60">
                <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <p className="font-semibold text-secondary-800 dark:text-secondary-100">{doc.title[language]}</p>
                    <p className="mt-1 text-sm text-secondary-400">{doc.type[language]} / {t.views.owner} {doc.owner}</p>
                  </div>
                  <span className="text-sm font-semibold text-primary-600 dark:text-primary-400">{doc.progress}% {t.views.ready}</span>
                </div>
                <div className="mt-4 h-3 overflow-hidden rounded-full bg-white dark:bg-secondary-700">
                  <div className="h-full rounded-full bg-primary-600 dark:bg-primary-400" style={{ width: `${doc.progress}%` }} />
                </div>
              </div>
            ))}
          </div>
        </DashboardCard>
        <DashboardCard className="lg:col-span-4">
          <h2 className="text-2xl font-semibold tracking-tight text-secondary-800 dark:text-secondary-100">{t.views.reviewQueue}</h2>
          <div className="mt-7 space-y-5">
            {reviewItems.map((item, index) => (
              <div key={item.en} onMouseMove={updateSpotlight} className="spotlight-card flex items-center justify-between rounded-2xl bg-secondary-50 px-4 py-4 dark:bg-secondary-900/60">
                <div className="flex items-center gap-3">
                  <Clock3 size={18} className="text-secondary-400" />
                  <span className="text-sm font-medium text-secondary-700 dark:text-secondary-100">{item[language]}</span>
                </div>
                <span className="text-xs text-secondary-400">{index + 1}d</span>
              </div>
            ))}
          </div>
        </DashboardCard>
      </div>
    </PageShell>
  );
}

export function AppsView() {
  const { language, t } = useLanguage();

  return (
    <PageShell
      eyebrow={t.views.aigcWorkspace}
      title={t.views.appsTitle}
      description={t.views.appsCopy}
    >
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-12">
        <section
          onMouseMove={updateSpotlight}
          className="spotlight-card relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary-600 to-primary-800 p-8 text-white shadow-lg dark:from-primary-700 dark:to-secondary-900 lg:col-span-5"
        >
          <div className="relative">
            <p className="text-sm font-semibold text-white/70">{t.views.featured}</p>
            <h2 className="mt-3 text-4xl font-bold tracking-tight">{t.views.featuredTitle}</h2>
            <p className="mt-4 text-sm leading-6 text-white/75">{t.views.featuredCopy}</p>
            <button type="button" className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-primary-700 transition hover:bg-primary-50">
              {t.views.openApp}
              <ArrowUpRight size={17} />
            </button>
          </div>
        </section>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:col-span-7">
          {apps.map((app) => {
            const Icon = app.icon;
            return (
              <DashboardCard key={app.name.en}>
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary-100 text-primary-700 dark:bg-primary-500/20 dark:text-primary-400">
                  <Icon size={22} />
                </div>
                <h2 className="mt-5 text-xl font-semibold text-secondary-800 dark:text-secondary-100">{app.name[language]}</h2>
                <p className="mt-3 text-sm leading-6 text-secondary-400">{app.copy[language]}</p>
                <div className="mt-6 flex items-center justify-between">
                  <span className="text-sm font-semibold text-secondary-700 dark:text-secondary-100">{app.usage[language]}</span>
                  <Star size={18} className="text-primary-600 dark:text-primary-400" />
                </div>
              </DashboardCard>
            );
          })}
        </div>
      </div>
    </PageShell>
  );
}
