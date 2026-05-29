import { useLanguage } from '../i18n';
import { updateSpotlight } from './spotlight';

function PromoBannerCard() {
  const { t } = useLanguage();

  return (
    <section
      onMouseMove={updateSpotlight}
      className="spotlight-card relative min-h-80 overflow-hidden rounded-3xl bg-gradient-to-br from-primary-600 to-primary-800 p-8 text-white shadow-lg dark:from-primary-700 dark:to-secondary-900"
    >
      <div className="absolute right-0 top-0 h-40 w-40 rounded-full bg-white/10 blur-2xl" />
      <div className="absolute bottom-0 right-8 h-32 w-32 rotate-12 rounded-3xl border border-white/20" />
      <div className="relative z-10 flex h-full flex-col">
        <h2 className="text-3xl font-bold tracking-tight">
          {t.promo.titleLineOne}
          <br />
          {t.promo.titleLineTwo}
        </h2>
        <p className="mt-4 text-sm leading-6 text-white/75">
          {t.promo.copy}
        </p>
        <div className="mt-8 flex -space-x-3">
          {['SL', 'AC', 'MP', 'DP'].map((avatar) => (
            <div key={avatar} className="flex h-11 w-11 items-center justify-center rounded-full border-2 border-white bg-primary-400 text-xs font-bold text-white shadow-sm">
              {avatar}
            </div>
          ))}
        </div>
        <button type="button" className="mt-auto w-fit rounded-full bg-white px-5 py-3 text-sm font-semibold text-primary-700 transition hover:bg-primary-50">
          {t.promo.cta}
        </button>
      </div>
    </section>
  );
}

export default PromoBannerCard;
