# 🪪 Anexo A — Ficha de projeto

| Campo | Informação do projeto |
|---|---|
| Projeto / identificação | StudyTube Web — DOC-STB-FE-001 · repositório `studytube-frontend` |
| Objetivo de negócio | Dar ao estudante uma tela simples para montar a lista de videoaulas do YouTube, assistir sem sair da página e acompanhar o que já estudou. |
| Produto / canais | Web (SPA React 19 + TypeScript + Vite). Mobile React Native 🗺️ planejado (outro repositório). |
| Sistemas / repositórios | https://github.com/danibenfica/studytube-frontend · API: https://github.com/danibenfica/studytube-backend |
| Parceiros externos | StudyTube API (interna ao projeto, [Anexo C](anexo-c-integracao-studytube-api.md)); Google — YouTube IFrame Player via `react-youtube`. |
| Usuários | Estudante (único perfil, sem login). |
| Escopo | Adicionar por link com validação no navegador; listar; assistir no player; marcar/desmarcar; progresso; mensagens de erro e de lista vazia. |
| Fora de escopo | Playlists, progresso estruturado, mobile, login, multiusuário. |
| Ambientes | Local: `npm run dev` (Vite) + API em `http://localhost:5126`. CI no GitHub Actions. |
| Riscos e classificação | **Essencial.** Riscos: validação do link diferente da API (NC-F03); erro de rede mostrado em inglês (NC-F04). |
| Cronograma / marcos | Etapa 4 (Web) do guia concluída; testes de componente e CI adicionados; documentação v1.0 em 21/10/2026. |
| Responsáveis e revisão | Owner: Daniele Benfica · Reviewer: mentoria do projeto · 21/10/2026 |
| Links essenciais | [Requisitos](04.1-requisitos-e-regras.md) · [Casos de uso](04.2-casos-de-uso.md) · [Histórias](04.3-historias-de-usuario.md) · [Jornada e diagramas](05-diagramas-e-fluxos.md) · [Testes](04.5-testes-e-evidencias.md) · [Manual](anexo-f-manual-do-usuario.md) |

**Critério de conclusão da ficha.** Permite identificar produto, sistemas, integrações, escopo, responsáveis e o ponto de entrada para os fluxos. ✅

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
