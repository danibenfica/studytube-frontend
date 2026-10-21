# 🗒️ Anexo E — Registro de revisão e não conformidade

## E.1 Histórico de versões

| Versão | Data | Autor | Descrição |
|---|---|---|---|
| v1.0 | 21/10/2026 | Daniele Benfica | Primeira versão da pasta `docs/` do frontend no padrão DOC-STD-001, com requisitos da interface, casos de uso, histórias, jornada, integração, testes, operação, rastreabilidade e manual do usuário. |

## E.2 Registro da revisão v1.0

| Campo | Valor |
|---|---|
| Documento / revisão | DOC-STB-FE-001 · v1.0 · código revisado: `main` @ `93fedb7` |
| Objeto da revisão | Coerência entre documentação e tela: textos, mensagens, validação, chamadas à API e testes. |
| Critérios aplicados | Política DOC-STD-001 e padrões da disciplina. Cláusulas ISO não avaliadas. |
| Amostra / evidência | Todos os arquivos de `src/`; `vitest run`, `eslint`, `npm run build` (EV-FE-01 a 03); CI (EV-FE-04); capturas de tela (EV-FE-05). |
| Revisor / data | Autora: Daniele Benfica, 21/10/2026 · Revisão da mentoria: [pendente] |
| Resultado | Aprovado com ressalvas (não bloqueantes). |
| Decisão final | [Pendente — mentoria do projeto] |

## E.3 Constatações

| ID | Descrição factual e impacto | Ação corretiva sugerida | Estado |
|---|---|---|---|
| NC-F01 | O README do frontend é a única documentação anterior; não existia pasta `docs/`. | Criada nesta versão. | Corrigida na v1.0 |
| NC-F02 | Documentos antigos do backend usavam nomes do frontend anteriores à refatoração (`Progresso`, `validarLinkYoutube`, `formatarDuracao`, `listarVideos`). | Corrigido na documentação nova do backend. | Corrigida na v1.0 |
| NC-F03 | `isValidYouTubeUrl` difere da RN02 da API: aceita link sem `https://` (a API responde "URL inválida."), recusa `m.youtube.com` (a API aceita) e aceita qualquer caminho de `youtube.com` (a API responde "Não é uma URL de vídeo do YouTube."). O estudante vê duas validações diferentes. | Alinhar a expressão regular com RN02 e adicionar testes. | Aberta |
| NC-F04 | Ao adicionar, marcar ou desmarcar com a API desligada, a tela mostra o erro técnico do navegador (ex.: "Failed to fetch"), em inglês; a mensagem amigável só existe na carga da página. | Tratar `TypeError` de rede em `useVideos` com a mesma mensagem da carga. | Aberta |
| NC-F05 | Sem testes de `useVideos`, `VideoForm`, `VideoPlayer`, `WatchProgress` e `videosApi.ts`; RFW06–RFW08 sem teste. | Adicionar testes com Testing Library e `fetch` simulado. | Aberta |
| NC-F06 | Link inválido usa `alert()` nativo, enquanto os demais erros aparecem em vermelho na página. Inconsistência visual. | Exibir também na área de erro. | Aberta |
| NC-F07 | O título da aba do navegador é `studytube-frontend` (padrão do Vite em `index.html`). | Trocar para "StudyTube". | Aberta |
| NC-F08 | Erros `500` da API (falha no YouTube) aparecem só como "Algo deu errado 😢" (ver NC-03 do backend). | Depende do backend. | Aberta |

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
