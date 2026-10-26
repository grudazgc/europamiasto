import { createReader } from '@keystatic/core/reader';
import config from '@/keystatic.config';

export const reader = createReader(process.cwd(), config);

export async function getPosts() {
  const all = await reader.collections.aktualnosci.all();
  const posts = await Promise.all(
    all.map(async ({ slug, entry }) => ({
      slug,
      tytul: entry.tytul,
      data: entry.data,
      zajawka: entry.zajawka,
      zrodla: entry.zrodla,
      tresc: await entry.tresc(),
    })),
  );
  return posts.sort((a, b) => (a.data < b.data ? 1 : -1));
}

export async function getStrona(slug: string) {
  const entry = await reader.collections.strony.read(slug);
  if (!entry) throw new Error(`Brak strony: ${slug}`);
  return { tytul: entry.tytul, tresc: await entry.tresc() };
}
