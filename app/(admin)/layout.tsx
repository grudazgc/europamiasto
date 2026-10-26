import type { ReactNode } from 'react';

export const metadata = { title: 'Keystatic · Europamiasto' };

export default function AdminLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pl">
      <body>{children}</body>
    </html>
  );
}
