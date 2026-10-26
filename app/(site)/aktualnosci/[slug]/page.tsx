import { notFound } from 'next/navigation';
import { DocumentRenderer } from '@keystatic/core/renderer';
import { getPosts } from '@/lib/content';

export const dynamicParams = false;

export async function generateStaticParams() {
  const posts = await getPosts();
  return posts.map((p) => ({ slug: p.slug }));
}

export default async function Post({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const posts = await getPosts();
  const post = posts.find((p) => p.slug === slug);
  if (!post) notFound();
  return (
    <article>
      <time dateTime={post.data}>{post.data}</time>
      <h1>{post.tytul}</h1>
      <p className="lead">{post.zajawka}</p>
      <DocumentRenderer document={post.tresc} />
      {post.zrodla.length > 0 && (
        <>
          <h2>Źródła</h2>
          <ul>
            {post.zrodla.map((z) => (
              <li key={z}>{z}</li>
            ))}
          </ul>
        </>
      )}
    </article>
  );
}
