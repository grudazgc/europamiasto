import Link from 'next/link';
import { getPosts } from '@/lib/content';

export default async function Home() {
  const posts = (await getPosts()).slice(0, 5);
  return (
    <section>
      <h1>Najnowsze wpisy</h1>
      {posts.length === 0 && <p>Brak wpisów.</p>}
      <ul className="post-list">
        {posts.map((p) => (
          <li key={p.slug}>
            <time dateTime={p.data}>{p.data}</time>
            <h2>
              <Link href={`/aktualnosci/${p.slug}/`}>{p.tytul}</Link>
            </h2>
            <p>{p.zajawka}</p>
          </li>
        ))}
      </ul>
      <p>
        <Link href="/archiwum/">Całe archiwum →</Link>
      </p>
    </section>
  );
}
