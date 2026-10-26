# Europamiasto

Portal informacyjny Europa-Miasto Zgorzelec/Görlitz. Next.js 15 (eksport statyczny) + Keystatic.

- Edycja treści: `npm run dev`, potem http://localhost:3000/keystatic. Zapis tworzy pliki w `content/`.
- Publikacja: zacommituj zmiany `content/` i wypchnij na `main`, a następnie uruchom `npm run build` (wynik w `out/`).
- Panel Keystatic działa tylko lokalnie. Build statyczny pomija trasy panelu.
