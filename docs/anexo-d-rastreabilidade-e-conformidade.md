# 🔗 Anexo D — Matriz de rastreabilidade e conformidade

## D.1 Rastreabilidade de produto

| Requisito | Caso de uso / história | Fluxo | Integração / código | Teste / evidência | Manual |
|---|---|---|---|---|---|
| RFW01 (RF01) | UC_001 / US_001 | FLOW-WEB-001 | `VideoForm` · `useVideos.add` · `addVideo` · INT-STUDYTUBEAPI-001 | EV-FE-01, EV-FE-04 (sem teste de `VideoForm`) | MAN-FE-01 |
| RFW02 (RF05) | UC_007 / US_001 | FLOW-WEB-001 | `isValidYouTubeUrl` | TC-FE-01 a TC-FE-04 | MAN-FE-01 |
| RFW03 (RF02) | UC_002 / US_002 | FLOW-WEB-002 | `App` · `VideoCard` · `formatDuration` · `getVideos` | TC-FE-05, TC-FE-06 | MAN-FE-02 |
| RFW04 (RF03, RF04) | UC_003, UC_004 / US_003, US_004 | FLOW-WEB-003 | `VideoCard` · `useVideos.toggleWatched` · `markAsWatched` · `markAsUnwatched` | TC-FE-08, TC-FE-09 | MAN-FE-03 |
| RFW05 | UC_005 / US_005 | FLOW-WEB-003 | `VideoCard` · `App` · `VideoPlayer` | TC-FE-07 | MAN-FE-04 |
| RFW06 | UC_006 / US_006 | FLOW-WEB-002 | `WatchProgress` · `watchedCount` | ⚠️ sem teste | MAN-FE-02 |
| RFW07 (RF05) | UC_001–UC_004 (FE) | FLOW-WEB-001 a 003 | `handleResponse` · `useVideos` | ⚠️ sem teste | MAN-FE-05 |
| RFW08 | UC_002 FE_01 / US_002 | FLOW-WEB-002 | `App` | ⚠️ sem teste | MAN-FE-02 |
| RFW09, RFW10 | US_103, US_101 (planejadas) | — | Não implementado | N/A | N/A |

## D.2 Matriz de conformidade (critérios internos)

| ID / fonte | Critério verificável | Evidência | Status / ação |
|---|---|---|---|
| DOC-001 / Política §1 | Escopo, responsáveis e referências identificados. | [Índice](README.md), [Anexo A](anexo-a-ficha-de-projeto.md) | PASS |
| REQ-001 / Disciplina | RFW, RNFW e RNW numerados, ligados a UC e aos RF da API. | [4.1](04.1-requisitos-e-regras.md) | PASS |
| UC-001 / Disciplina | Casos de uso completos com FA/FE e destino; mesmos IDs do backend. | [4.2](04.2-casos-de-uso.md) | PASS |
| US-001 / Disciplina | Histórias com critérios de aceitação ligados aos fluxos. | [4.3](04.3-historias-de-usuario.md) | PASS |
| JRN-001 / Política §5 | Jornada do usuário documentada. | [5.1](05-diagramas-e-fluxos.md#51-jornada-do-usuário) | PASS |
| TST-001 / Política §4 | Todo RFW implementado tem teste. | [4.5](04.5-testes-e-evidencias.md) | PARTIAL — RFW06–RFW08 e `VideoForm` sem teste (NC-F05). |
| USR-001 / Política Anexo F | Manual com telas atuais. | [Anexo F](anexo-f-manual-do-usuario.md) | PASS |
| ISO 42010 / 29119-3 / 26514 §[ ] | Requisitos de cláusula. | — | N/A — edição licenciada não consultada. |

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
