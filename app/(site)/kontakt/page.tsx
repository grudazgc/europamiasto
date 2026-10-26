import { DocumentRenderer } from '@keystatic/core/renderer';
import { getStrona } from '@/lib/content';

export default async function Contact() {
  const s = await getStrona('kontakt');
  return (
    <article>
      <h1>{s.tytul}</h1>
      <DocumentRenderer document={s.tresc} />
    </article>
  );
}
