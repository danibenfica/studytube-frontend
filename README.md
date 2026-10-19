# StudyTube — frontend web

Aplicação web para montar uma lista de videoaulas do YouTube. Você cola um link, a API .NET busca os dados do vídeo e o frontend mostra título, canal, duração e thumbnail. Dá para assistir na própria página e marcar o que já foi estudado.

Este repositório é só o frontend. Ele conversa com a API em [danibenfica/studytube-backend](https://github.com/danibenfica/studytube-backend) pelas rotas HTTP e pelo JSON que elas devolvem. Não conhece entidades de domínio, Entity Framework nem o banco de dados.

## Versões

O Node.js não está fixado no `package.json`. O Vite 8 exige **Node.js 20.19+ ou 22.12+**.

A coluna **Declarada** vem do `package.json`. A coluna **Instalada** é a versão resolvida no `package-lock.json`:

| Pacote | Declarada | Instalada |
| :--- | :--- | :--- |
| React | ^19.2.8 | 19.3.1 |
| React DOM | ^19.2.8 | 19.3.1 |
| Vite | ^8.3.0 | 8.3.4 |
| TypeScript | ~6.0.2 | 6.0.3 |
| react-youtube | ^10.1.0 | 10.1.0 |
| Vitest | ^5.0.5 | 5.0.5 |
| ESLint | ^10.10.0 | 10.13.0 |
| typescript-eslint | ^8.69.0 | 8.71.2 |
| @vitejs/plugin-react | ^6.1.1 | 6.1.2 |
| Husky | ^9.1.7 | 9.1.7 |

## Pré-requisitos

- Node.js 20.19 ou superior, ou Node.js 22.12 ou superior
- npm (vem com o Node.js)
- A API StudyTube rodando, se quiser listar e salvar vídeos de verdade

## Comandos

Os comandos abaixo são os mesmos no Windows, no macOS e no Linux. Rode-os na raiz deste repositório.

```bash
npm ci
npm run dev
npm test
npm run lint
npm run build
```

| Comando | O que faz |
| :--- | :--- |
| `npm ci` | Instala exatamente as versões do `package-lock.json` e ativa o Husky |
| `npm run dev` | Sobe o Vite em modo de desenvolvimento (por padrão, http://localhost:5173) |
| `npm test` | Roda os testes unitários uma vez (Vitest) |
| `npm run lint` | Roda o ESLint |
| `npm run build` | Confere os tipos (`tsc -b`) e gera o build de produção em `dist/` |
| `npm run preview` | Serve o build de `dist/` localmente |

O hook de pre-commit do Husky (`.husky/pre-commit`) executa `npm test` antes de cada commit.

## API

O cliente em `src/api/videosApi.ts` usa `fetch`. A URL padrão é a do perfil **http** do backend, definida em `StudyTube.Api/Properties/launchSettings.json`:

```text
http://localhost:5126/api/videos
```

Para apontar para outro endereço, copie `.env.example` para `.env.local` e edite `VITE_API_URL`. O comando abaixo funciona no Windows, no macOS e no Linux:

```bash
node -e "require('fs').copyFileSync('.env.example', '.env.local')"
```

O Vite só expõe variáveis com o prefixo `VITE_`. O arquivo `.env.local` entra no padrão `*.local` do `.gitignore`. Reinicie o `npm run dev` depois de mudar o arquivo. Sem `VITE_API_URL`, o app já usa `http://localhost:5126/api/videos`.

### Rodando junto com o backend

Em outro terminal, no repositório da API:

```bash
dotnet run --project StudyTube.Api --launch-profile http
```

Esse perfil sobe a API em http://localhost:5126. O frontend usa estas rotas:

| Método | Rota | Uso |
| :--- | :--- | :--- |
| `GET` | `/api/videos` | Lista os vídeos salvos |
| `POST` | `/api/videos` | Adiciona um vídeo a partir da URL do YouTube (`{ "url": "..." }`) |
| `PATCH` | `/api/videos/{id}/watched` | Marca como assistido |
| `DELETE` | `/api/videos/{id}/watched` | Desmarca |

O campo `duration` chega como `TimeSpan` do .NET no formato constante, por exemplo `00:04:13` ou, com dias, `1.02:03:04`. A tela mostra isso como `4:13` ou `1:02:03:04`. Durações ISO 8601 (`PT4M13S`) continuam aceitas.

Para cadastrar um vídeo, a API precisa da chave da YouTube Data API v3 em `YouTube:ApiKey` (user secrets ou `appsettings`). Sem a API no ar, a lista exibe o aviso de que não conseguiu se conectar.

## Estrutura

```text
├── public/                  # ícones estáticos
├── src/
│   ├── api/videosApi.ts     # cliente fetch
│   ├── components/          # formulário, card, player e progresso
│   ├── hooks/useVideos.ts   # estado da lista e chamadas à API
│   ├── tests/unit/          # testes do Vitest
│   ├── types/Video.ts       # contrato JSON do vídeo
│   ├── utils/               # duração e validação do link
│   ├── App.tsx
│   └── main.tsx
├── .env.example
├── .husky/pre-commit
├── index.html
├── package.json
└── vite.config.ts
```

## Decisões técnicas

- O tipo `Video` espelha o JSON da API (nomes em camelCase). O frontend não referencia entidades de domínio, DTOs de C# nem o SQLite.
- As chamadas HTTP ficam isoladas em `videosApi.ts`, com `fetch`. Os componentes não montam URL.
- O player é o `react-youtube`, recebendo só o `youTubeId`.
- A validação do link (`youtube.com` / `youtu.be`) acontece no navegador, antes do `POST`.
- Os testes de unidade usam Vitest e cobrem a formatação de duração e a validação de link.
- O Husky impede commit quando `npm test` falha.
