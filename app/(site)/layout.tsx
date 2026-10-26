import '../globals.css';
import Link from 'next/link';
import type { ReactNode } from 'react';

export const metadata = {
  title: { default: 'Europamiasto Zgorzelec Görlitz', template: '%s · Europamiasto' },
  description: 'Portal informacyjny o Zgorzelcu i Görlitz. Publikacje oparte na Biuletynie Informacji Publicznej miasta Zgorzelec.',
};

export default function SiteLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pl">
      <body>
        <header className="site-header">
          <Link href="/" className="brand">Europamiasto</Link>
          <nav>
            <Link href="/archiwum/">Archiwum</Link>
            <Link href="/o-portalu/">O portalu</Link>
            <Link href="/kontakt/">Kontakt</Link>
          </nav>
        </header>
        <main>{children}</main>
        <footer className="site-footer">
          Europa-Miasto Zgorzelec/Görlitz · wydawca: Wojciech Krzeszowski · portal działa od 2012 roku
        </footer>
      </body>
    </html>
  );
}
