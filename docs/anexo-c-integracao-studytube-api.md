# 🌐 Anexo C — Cadastro de integração externa: StudyTube API

| Campo | Preenchimento |
|---|---|
| Identificação | INT-STUDYTUBEAPI-001 \| owner: Daniele Benfica \| status: em uso (local) |
| Provedor / finalidade | StudyTube API (repositório `studytube-backend`, mesmo projeto). Finalidade: cadastrar, listar, marcar e desmarcar videoaulas; obter metadados do YouTube sem expor a chave no navegador. Integração secundária: YouTube IFrame Player (Google), só para reprodução. |
| Responsabilidade técnica | `src/api/videosApi.ts` (único ponto de chamada), `src/types/Video.ts` (contrato), `src/hooks/useVideos.ts` (uso e tratamento de erro). |
| Contrato | REST/JSON; OpenAPI gerado pela API em `/openapi/v1.json` (ambiente `Development`). Resumo em [4.4](04.4-contrato-consumido.md). |
| Ambientes e endpoints | Local: `http://localhost:5126/api/videos` (padrão e `.env.example`). Configurável por `VITE_API_URL`. |
| Autenticação / autorização | Nenhuma (a API não tem autenticação). A API libera CORS para qualquer origem (política `Frontends`). Nenhuma credencial no frontend. |
| Dados e mapeamento | Envio: `{ "url": string }`. Recebimento: `VideoDto` (9 campos, [4.4.2](04.4-contrato-consumido.md#442-mapa-de-dados--videodto-api--video-typescript--tela)). Sem dados pessoais. |
| Semântica transacional | A tela só atualiza o estado depois da resposta de sucesso (sem atualização otimista). Inclusão: item novo entra no topo. Marcação: o item é substituído pelo devolvido. |
| Falhas | `!res.ok` com `{ "error" }` → mensagem exibida; sem `error` (404, 500, Problem Details) → "Algo deu errado 😢"; falha de rede na carga → "Não consegui falar com a API. Ela está rodando? 🥺"; falha de rede nas ações → mensagem do navegador. Sem timeout próprio, sem retry. |
| Operação | Sem SLA. A API precisa estar no ar antes da tela. Observabilidade: console do navegador e logs da API. |
| Rastreabilidade | RFW01–RFW07 · UC_001–UC_004 · FLOW-WEB-001 a 003 · TC-FE-06 a TC-FE-09 · decisão "Cliente HTTP" em [3.4](03-arquitetura-da-informacao.md#34-decisões-de-arquitetura-registradas). |

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
