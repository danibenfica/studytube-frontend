# 📦 4. Catálogo de artefatos

| Artefato | Responsável | Gatilho / critério | Local neste projeto | Estado |
|---|---|---|---|---|
| Requisitos e regras da interface | Daniele Benfica | Toda funcionalidade de tela. | [4.1](04.1-requisitos-e-regras.md) (regras da API: backend) | ✅ |
| Diagrama e especificação de casos de uso | Daniele Benfica | Toda funcionalidade exposta ao estudante. | [4.2](04.2-casos-de-uso.md) | ✅ |
| Histórias de usuário e critérios de aceitação | Daniele Benfica | Todo caso de uso. | [4.3](04.3-historias-de-usuario.md) | ✅ |
| Jornada e fluxos ponta a ponta | Daniele Benfica | Toda jornada com dependência da API. | [Seção 5](05-diagramas-e-fluxos.md), [Anexo B](anexo-b-fluxos-ponta-a-ponta.md) | ✅ |
| Contrato consumido e mapa de dados | Daniele Benfica | Toda chamada à API. | [4.4](04.4-contrato-consumido.md), [Anexo C](anexo-c-integracao-studytube-api.md) | ✅ |
| Testes e evidências | Daniele Benfica | Cada mudança validada. | [4.5](04.5-testes-e-evidencias.md) | ✅ |
| Procedimento operacional | Daniele Benfica | Instalação, execução, build e CI. | [4.6](04.6-procedimento-operacional.md) | ✅ |
| Manual do usuário | Daniele Benfica | Toda mudança perceptível na tela. | [Anexo F](anexo-f-manual-do-usuario.md) | ✅ |
| Registro de revisão / aprovação | Daniele Benfica + mentoria | A cada versão. | [Anexo E](anexo-e-registro-de-revisao.md) | Em revisão |

## ⚖️ Criticidade e adequação

| Classe | Aplicação no StudyTube Web |
|---|---|
| Essencial | **Classe adotada.** Uso local, sem login, sem dados pessoais, sem pagamentos. Inclui jornada, fluxos, contrato consumido, testes, operação e manual. |
| Ampliada | Parcial: sequência da inclusão e estados do card, porque a tela depende da API e mostra erros dela. |
| Regulada/crítica | Não aplicável. |

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
