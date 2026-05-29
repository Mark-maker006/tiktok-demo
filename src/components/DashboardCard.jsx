import { updateSpotlight } from './spotlight';

function DashboardCard({ children, className = '' }) {
  return (
    <section
      onMouseMove={updateSpotlight}
      className={`spotlight-card rounded-3xl border border-secondary-100 bg-white p-6 shadow-lg shadow-secondary-200/40 transition-colors dark:border-secondary-700 dark:bg-secondary-800 dark:shadow-secondary-950/20 ${className}`}
    >
      {children}
    </section>
  );
}

export default DashboardCard;
