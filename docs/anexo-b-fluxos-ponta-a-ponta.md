# 🔀 Anexo B — Especificação de fluxo ponta a ponta (EFI)

Os fluxos abaixo são a visão da tela. O lado da API está em `studytube-backend/docs/anexo-b-fluxos-ponta-a-ponta.md` (FLOW-VID-001 a 003).

## FLOW-WEB-001 — Adicionar videoaula pela tela

| Campo | Preenchimento |
|---|---|
| Identificação | FLOW-WEB-001 \| v1.0 \| Implementado \| Daniele Benfica · par do backend: FLOW-VID-001 |
| Nome e objetivo | Colar um link do YouTube e ver a videoaula na lista. |
| Atores e sistemas | Usuário → `VideoForm` → `useVideos.add` → `videosApi.addVideo` → StudyTube API. |
| Gatilho e pré-condições | Usuário solicita "Adicionar ✨" com o campo preenchido. Página aberta. |
| Entradas | Link (texto livre). Regras RNW01, RNW02; depois RN01, RN02 e RN05 na API. |
| Fluxo de negócio | [UC_001](04.2-casos-de-uso.md#422-uc_001--adicionar-videoaula), [jornada (Figura 2)](05-diagramas-e-fluxos.md#51-jornada-do-usuário), [fluxo funcional (Figura 7)](05-diagramas-e-fluxos.md#56-fluxo-funcional--adicionar-videoaula). |
| Fluxo técnico | [Sequência (Figura 5)](05-diagramas-e-fluxos.md#54-uml-sequence--adicionar-videoaula-pela-tela). |
| Regras e estados | RNW01–RNW04, RNW06; card nasce não assistido. |
| Contratos e dados | `POST /api/videos` `{ "url" }` → `201` `VideoDto` ([4.4](04.4-contrato-consumido.md)). |
| Falhas e recuperação | Link inválido → alerta, sem chamada (FE_02). `400` → mensagem da API (FE_03). Erro sem mensagem → "Algo deu errado 😢" (FE_04). Rede → erro do navegador (FE_05). Em todos: link permanece no campo para nova tentativa; não há retry automático. |
| Resultados ao usuário | Card no topo, campo limpo, progresso atualizado; ou mensagem. |
| Testes e evidências | TC-FE-01 a TC-FE-04; backend TC-BE-07 a TC-BE-13; EV-FE-01, EV-FE-04. |
| Operação / monitoramento | Console do navegador; sem telemetria. |
| Manual e release | MAN-FE-01 ([Anexo F](anexo-f-manual-do-usuario.md)) · `main` @ `93fedb7`. |

## FLOW-WEB-002 — Abrir a página e ver a lista

| Campo | Preenchimento |
|---|---|
| Identificação | FLOW-WEB-002 \| v1.0 \| Implementado \| Daniele Benfica · par: FLOW-VID-002 |
| Nome e objetivo | Mostrar as videoaulas e o progresso ao abrir a página. |
| Atores e sistemas | Usuário → `App` → `useVideos` (efeito inicial) → `videosApi.getVideos` → API. |
| Gatilho e pré-condições | Abertura da página. |
| Entradas | Nenhuma. |
| Fluxo de negócio | [UC_002](04.2-casos-de-uso.md#423-uc_002--consultar-lista-de-videoaulas) e [UC_006](04.2-casos-de-uso.md#427-uc_006--acompanhar-progresso-de-estudos). |
| Fluxo técnico | `GET /api/videos` → `setVideos` → render de `VideoCard` e `WatchProgress`. |
| Regras e estados | RNW05, RNW07, RNW08. |
| Contratos e dados | `200` `VideoDto[]`. |
| Falhas e recuperação | API desligada → "Não consegui falar com a API. Ela está rodando? 🥺"; recuperar subindo a API e recarregando a página (não há nova tentativa automática). |
| Resultados ao usuário | Cards + "X de Y assistidos 🌸"; ou "Nenhum vídeo ainda... cole seu link aqui! 🐰". |
| Testes e evidências | TC-FE-05, TC-FE-06; EV-FE-01. |
| Operação / monitoramento | Console do navegador. |
| Manual e release | MAN-FE-02. |

## FLOW-WEB-003 — Assistir, marcar e desmarcar

| Campo | Preenchimento |
|---|---|
| Identificação | FLOW-WEB-003 \| v1.0 \| Implementado \| Daniele Benfica · par: FLOW-VID-003 |
| Nome e objetivo | Assistir à videoaula na página e registrar se já foi estudada. |
| Atores e sistemas | Usuário → `VideoCard` → `App` (`playingVideoId`) → `VideoPlayer` (YouTube IFrame); `VideoCard` → `useVideos.toggleWatched` → `PATCH`/`DELETE` na API. |
| Gatilho e pré-condições | "▶ Assistir" / miniatura; "✔ Já assisti" / "↩ Desmarcar". Videoaula na lista. |
| Entradas | `youTubeId` (player); `id` (marcação). |
| Fluxo de negócio | [UC_005](04.2-casos-de-uso.md#426-uc_005--assistir-videoaula-na-página), [UC_003](04.2-casos-de-uso.md#424-uc_003--marcar-videoaula-como-assistida), [UC_004](04.2-casos-de-uso.md#425-uc_004--desmarcar-videoaula-como-assistida). |
| Fluxo técnico | O card só muda após `200`; o item é substituído na lista pelo `VideoDto` devolvido. |
| Regras e estados | RNW06, RNW09; RN06/RN07 da API; [estados do card (Figura 6)](05-diagramas-e-fluxos.md#55-uml-state-machine--card-da-videoaula). |
| Contratos e dados | `PATCH`/`DELETE /api/videos/{id}/watched` → `200` `VideoDto`. |
| Falhas e recuperação | Mensagem na tela; card inalterado. |
| Resultados ao usuário | Player com autoplay; card destacado e contador atualizado. |
| Testes e evidências | TC-FE-07 a TC-FE-09; EV-FE-01. |
| Operação / monitoramento | Console do navegador. |
| Manual e release | MAN-FE-03, MAN-FE-04. |

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
