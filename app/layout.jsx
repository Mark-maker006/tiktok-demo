import './globals.css';

export const metadata = {
  title: 'TikTok LIVE Operations Dashboard',
  description: 'TikTok LIVE AIGC operations dashboard',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}
