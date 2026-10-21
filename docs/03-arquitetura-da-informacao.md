# 🗂️ 3. Arquitetura da informação e organização do repositório

## 3.1 Níveis documentais

| Local | Conteúdo / responsabilidade |
|---|---|
| `studytube-frontend/README.md` | Porta de entrada: como instalar, rodar, testar e configurar `VITE_API_URL`. |
| `studytube-frontend/docs/` (este documento) | Requisitos da interface, casos de uso da tela, histórias, integração com a API, testes, operação, rastreabilidade e manual do usuário. |
| `studytube-backend/docs/` | Regras de negócio, contrato da API, integração com o YouTube. Fonte única para RN01–RN09. |

## 3.2 Organização do código

```text
studytube-frontend/
├── src/
│   ├── App.tsx                 Página única: título, VideoForm, mensagem de erro, WatchProgress, VideoPlayer, lista de VideoCard
│   ├── api/videosApi.ts        getVideos, addVideo, markAsWatched, markAsUnwatched (fetch) + tratamento de erro
│   ├── hooks/useVideos.ts      Estado da lista (videos, error, watchedCount) e ações (add, toggleWatched)
│   ├── components/
│   │   ├── VideoForm.tsx       Campo do link + validação no navegador
│   │   ├── VideoCard.tsx       Miniatura, título, canal • duração, "▶ Assistir", "✔ Já assisti" / "↩ Desmarcar"
│   │   ├── VideoPlayer.tsx     Player incorporado (react-youtube, autoplay) + "Fechar player ✖"
│   │   └── WatchProgress.tsx   "X de Y assistidos 🌸"
│   ├── types/Video.ts          Tipo do contrato VideoDto
│   ├── utils/                  isValidYouTubeUrl.ts, formatDuration.ts
│   └── tests/                  setup.ts + unit/utils + unit/components (Vitest)
├── .env.example                VITE_API_URL=http://localhost:5126/api/videos
├── .husky/pre-commit           npm run lint + npm test
├── .github/workflows/ci.yml    lint, testes e build em Ubuntu e Windows
└── docs/                       Esta documentação
```

## 3.3 Responsabilidades e regras de dependência

| Camada | Arquivos | Responsabilidade | Não pode |
|---|---|---|---|
| Página | `App.tsx` | Compor a tela e guardar qual vídeo está no player (`playingVideoId`). | Chamar `fetch` diretamente. |
| Estado | `useVideos` | Carregar a lista, inserir no topo, substituir o item atualizado, contar assistidos, guardar a mensagem de erro. | Montar URLs da API. |
| Componentes | `VideoForm`, `VideoCard`, `VideoPlayer`, `WatchProgress` | Exibir dados e repassar ações por *props*. | Acessar a API. |
| Integração | `api/videosApi.ts` | Única camada que conhece rotas, métodos HTTP e o formato `{ "error": "..." }`. | Conter regra de tela. |
| Contrato | `types/Video.ts` | Espelhar o `VideoDto` da API. | — |

## 3.4 Decisões de arquitetura registradas

| Decisão | Escolha atual | Justificativa |
|---|---|---|
| Cliente HTTP | `fetch` nativo (o guia permite `axios` ou `fetch`) | Sem dependência extra para quatro chamadas simples. |
| Player | `react-youtube` com `autoplay: 1` | Pacote indicado no guia; reproduz sem sair da página. |
| Estado | Hook próprio `useVideos` (sem biblioteca de estado) | Uma única lista; atualização local após cada resposta da API. |
| Progresso | Calculado no cliente (`videos.filter(v => v.watched).length`) | Não existe endpoint de progresso; `UserStudyProgress` é 🗺️ planejado. |
| URL da API | `VITE_API_URL`, com padrão `http://localhost:5126/api/videos` | Permite trocar o endereço sem mudar o código. |
| Qualidade | ESLint + Vitest no pre-commit (Husky) e no CI | Impede commits e PRs com lint ou testes quebrados. |

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
