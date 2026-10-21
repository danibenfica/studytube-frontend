# ✅ 7. Verificação, aprovação e auditoria

## 7.1 Três avaliações

| Nível | Pergunta | Evidência neste projeto |
|---|---|---|
| Qualidade editorial/técnica | Conteúdo, links, versões e diagramas estão corretos? | Diagramas gerados a partir de `.mmd`; textos de tela e mensagens conferidos no código do commit `93fedb7`; links relativos entre arquivos. |
| Conformidade | Os critérios internos foram atendidos? | Matriz D.2 do [Anexo D](anexo-d-rastreabilidade-e-conformidade.md). |
| Aceitação | O documento representa o sistema e atende ao público? | Revisão da mentoria registrada no [Anexo E](anexo-e-registro-de-revisao.md). |

## 7.2 Como auditar esta documentação

1. Escolher um caso de uso (ex.: UC_001) e um fluxo de exceção (ex.: FE_02).
2. Achar a regra (RNW01) em [4.1](04.1-requisitos-e-regras.md) e o local no código (`isValidYouTubeUrl`, `VideoForm`).
3. Achar o teste na matriz (TC-FE-03) e rodar `npm test`.
4. Rodar a tela (`npm run dev`) e reproduzir o fluxo, comparando a mensagem com o caso de uso e com o [Manual](anexo-f-manual-do-usuario.md).
5. Registrar o resultado (conforme, não conforme, parcial ou não aplicável) no [Anexo E](anexo-e-registro-de-revisao.md).

> **LIMITE DE CONFORMIDADE** Este checklist interno não equivale a auditoria ou certificação ISO.

## 7.3 Critério de aprovação

Aprovar quando os critérios obrigatórios da matriz D.2 tiverem evidência, não houver não conformidade bloqueante aberta e a revisão estiver registrada no Anexo E. As não conformidades atuais (Anexo E) são **não bloqueantes**.

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
