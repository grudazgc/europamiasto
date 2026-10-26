import Link from 'next/link';
import { getPosts } from '@/lib/content';

export default async function Archive() {
  const posts = await getPosts();
  const groups = new Map<string, typeof posts>();
  for (const p of posts) {
    const key = p.data.slice(0, 7);
    if (!groups.has(key)) groups.set(key, []);
    groups.get(key)!.push(p);
  }
  return (
    <section>
      <h1>Archiwum</h1>
      {posts.length === 0 && <p>Brak wpisów.</p>}
      {[...groups.entries()].map(([month, items]) => (
        <div key={month} className="month">
          <h2>{month}</h2>
          <ul>
            {items.map((p) => (
              <li key={p.slug}>
                <time dateTime={p.data}>{p.data}</time>{' '}
                <Link href={`/aktualnosci/${p.slug}/`}>{p.tytul}</Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  );
}
