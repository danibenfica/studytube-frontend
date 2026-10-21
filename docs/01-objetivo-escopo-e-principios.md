# 🎯 1. Objetivo, escopo e princípios

**Objetivo.** Permitir que qualquer pessoa entenda o que o estudante faz na tela do StudyTube, como a tela conversa com a API, quais mensagens aparecem, como testar e operar a aplicação e como usá-la, **sem começar pelo código-fonte**.

**Escopo.** Repositório `studytube-frontend`: SPA em React 19 + TypeScript com Vite, componentes `VideoForm`, `VideoCard`, `VideoPlayer` e `WatchProgress`, hook `useVideos`, cliente `api/videosApi.ts`, utilitários `isValidYouTubeUrl` e `formatDuration`, testes com Vitest + Testing Library, ESLint, Husky e GitHub Actions.

**Fora de escopo.** Regras de negócio da API, banco e integração com a YouTube Data API (documentados em DOC-STB-BE-001), aplicativo mobile React Native e playlists (🗺️ planejados).

## 🧩 1.1 Contexto do produto

A tela é uma página única: o estudante cola o link de um vídeo do YouTube, vê a videoaula aparecer com miniatura, título, canal e duração, assiste no player incorporado, marca "Já assisti" e acompanha o contador "X de Y assistidos 🌸".

## 📌 1.2 Princípios aplicados

- **Orientação por jornada:** a documentação parte do que o estudante faz na tela ([jornada](05-diagramas-e-fluxos.md#51-jornada-do-usuário)).
- **Fonte única:** regras de negócio da API ficam no backend; aqui só as regras **da interface** (RNW) e links para o backend.
- **Rastreabilidade:** UC e US com os mesmos códigos do backend; matriz no [Anexo D](anexo-d-rastreabilidade-e-conformidade.md).
- **Documentação junto com o código:** `docs/` versionada no repositório e revisada no mesmo PR.
- **Sem segredos:** o frontend não usa a chave do YouTube; `.env` não é versionado (só `.env.example`).
- **Sem promessa de certificação.**

---

## 📚 Referências

<!-- REFS-INICIO -->
- COCKBURN, Alistair. **Escrevendo casos de uso eficazes**: um guia prático para desenvolvedores de software. Tradução: Roberto Vedoato. Porto Alegre: Bookman, 2005. (Ciência da computação). ISBN 9788536304571.
- PRESSMAN, Roger S.; MAXIM, Bruce. **Engenharia de software**: uma abordagem profissional. Tradução: Francisco Araújo da Costa. 9. ed. Porto Alegre: McGraw-Hill, 2021. E-book. ISBN 9786558040118.
- REINEHR, Sheila. **Engenharia de requisitos**. Porto Alegre: SAGAH, 2020. E-book. (Engenharia de software). ISBN 9786556900674.
- EASY AGILE. **Use cases vs. user stories**: how they differ and when to use them. 8 jun. 2021. Disponível em: https://www.easyagile.com/blog/use-cases-vs-user-stories/. Acesso em: 21 out. 2026.
- PUCKETT, Dan. **Será que os casos de uso têm lugar no Scrum?** Tradução: Marcelo Costa. InfoQ Brasil, 19 nov. 2010. Disponível em: https://www.infoq.com/br/news/2010/11/use-cases-in-scrum/. Acesso em: 21 out. 2026.
- Lista completa (normas ISO/IEC/IEEE, UML, C4, OpenAPI e material da disciplina): [referencias.md](referencias.md).
<!-- REFS-FIM -->
