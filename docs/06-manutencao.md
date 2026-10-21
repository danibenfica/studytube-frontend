# 🔧 6. Manutenção da documentação

## 6.1 Fluxo de manutenção

Mudança → análise de impacto (quais UC, RFW, RNW, telas e testes mudam?) → código, testes e `docs/` **na mesma branch** → commit (Husky roda lint e testes) → pull request → CI verde → revisão → merge na `main`.

Convenções: branches por assunto (ex.: `refactor/english-naming`, `docs/casos-de-uso`) e Conventional Commits (`feat:`, `fix:`, `docs:`, `test:`, `ci:`, `refactor:`).

## 6.2 Gatilhos obrigatórios de revisão

- Mudança de texto, botão ou mensagem na tela → atualizar [4.2](04.2-casos-de-uso.md), [4.3](04.3-historias-de-usuario.md) e o [Manual (Anexo F)](anexo-f-manual-do-usuario.md), **com novas capturas de tela**.
- Mudança no contrato da API (backend) → atualizar `types/Video.ts`, [4.4](04.4-contrato-consumido.md) e o [Anexo C](anexo-c-integracao-studytube-api.md).
- Mudança na validação do link → atualizar RNW01 e conferir o alinhamento com RN02 do backend.
- Mudança de porta, Node, Husky ou CI → atualizar [4.6](04.6-procedimento-operacional.md) e a Figura 8.
- Nova tela (ex.: playlists) → novo RFW, UC, US, linhas no [Anexo D](anexo-d-rastreabilidade-e-conformidade.md) e testes.

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
