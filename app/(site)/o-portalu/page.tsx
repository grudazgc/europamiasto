import { DocumentRenderer } from '@keystatic/core/renderer';
import { getStrona } from '@/lib/content';

export default async function About() {
  const s = await getStrona('o-portalu');
  return (
    <article>
      <h1>{s.tytul}</h1>
      <DocumentRenderer document={s.tresc} />
    </article>
  );
}
