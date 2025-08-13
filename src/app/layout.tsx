import './globals.css';

export const metadata = {
  title: 'UI Component Playground',
  description: '공통 컴포넌트 실시간 Playground',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='ko'>
      <body>{children}</body>
    </html>
  );
}
