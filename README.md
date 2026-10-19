# 🎀 StudyTube Frontend

> 📚 **Sua biblioteca pessoal de videoaulas do YouTube.** Organize seus estudos, acompanhe seu progresso e assista aos vídeos em um só lugar!

O **StudyTube Frontend** é uma aplicação web que permite montar e gerenciar uma lista pessoal de videoaulas do YouTube. Basta colar o link de um vídeo para que a API .NET consulte suas informações e a interface apresente o título, o canal, a duração e a miniatura.

Você também pode assistir aos vídeos diretamente na página e marcar aqueles que já foram estudados. ✨

Este repositório contém **somente o frontend**. A aplicação se comunica com a API por requisições HTTP e respostas JSON, sem acessar diretamente as entidades de domínio, o Entity Framework ou o banco de dados.

🔗 **Backend:** [`danibenfica/studytube-backend`](https://github.com/danibenfica/studytube-backend)

---

## 🌷 Funcionalidades

- 🔗 **Cadastro de videoaulas:** adicione vídeos usando links do YouTube.
- 🖼️ **Informações dos vídeos:** visualize título, canal, duração e miniatura.
- ▶️ **Player integrado:** assista aos vídeos sem sair da aplicação.
- ✅ **Acompanhamento dos estudos:** marque vídeos como assistidos ou desmarque-os.
- 📊 **Progresso de estudos:** acompanhe o andamento da sua lista.
- 🛡️ **Validação de links:** verifique links do YouTube antes de enviá-los à API.
- ⚠️ **Tratamento de conexão:** receba um aviso quando a API não estiver acessível.

---

## 🧰 Tecnologias utilizadas

| Tecnologia | Finalidade |
|---|---|
| ⚛️ React | Construção da interface |
| 🟦 TypeScript | Tipagem estática |
| ⚡ Vite | Servidor de desenvolvimento e build |
| 🎬 react-youtube | Integração com o player do YouTube |
| 🧪 Vitest | Testes unitários |
| 🔍 ESLint | Análise estática do código |
| 🪝 Husky | Execução de testes antes dos commits |
| 🌐 Fetch API | Comunicação HTTP com o backend |

### 📦 Versões das dependências

O Node.js não está fixado no `package.json`. O projeto requer Node.js 22.13 ou superior, sendo recomendada a versão 24 LTS.

A tabela abaixo diferencia as versões declaradas no `package.json` das versões resolvidas no `package-lock.json`.

| Pacote | Declarada | Instalada |
|---|---:|---:|
| React | `^19.2.8` | `19.3.1` |
| React DOM | `^19.2.8` | `19.3.1` |
| Vite | `^8.3.0` | `8.3.4` |
| TypeScript | `~6.0.2` | `6.0.3` |
| react-youtube | `^10.1.0` | `10.1.0` |
| Vitest | `^5.0.5` | `5.0.5` |
| ESLint | `^10.10.0` | `10.13.0` |
| typescript-eslint | `^8.69.0` | `8.71.2` |
| @vitejs/plugin-react | `^6.1.1` | `6.1.2` |
| Husky | `^9.1.7` | `9.1.7` |

---

## 🚀 Como executar o projeto

### 1. Pré-requisitos

Antes de começar, você precisa ter:

- [Node.js 24 LTS](https://nodejs.org/) recomendado, ou Node.js 22.13 ou superior.
- npm, instalado junto com o Node.js.
- A API StudyTube em execução, caso queira cadastrar e consultar vídeos de verdade.

Para verificar se o Node.js e o npm estão instalados, abra o terminal e execute:

```bash
node --version
npm --version
```

### 2. Instale as dependências

Abra o terminal na pasta raiz do repositório e execute:

```bash
npm ci
```

Esse comando instala as dependências usando as versões registradas no `package-lock.json` e prepara o Husky para os hooks do Git.

### 3. Inicie a aplicação

Execute:

```bash
npm run dev
```

Por padrão, o Vite disponibiliza a aplicação em:

🌐 http://localhost:5173

Abra esse endereço no navegador para acessar o StudyTube.

### 4. Outros comandos úteis

| Comando | O que faz |
|---|---|
| `npm run dev` | Inicia o servidor de desenvolvimento |
| `npm test` | Executa os testes unitários uma vez |
| `npm run lint` | Verifica o código com ESLint |
| `npm run build` | Verifica os tipos e gera o build de produção |
| `npm run preview` | Disponibiliza localmente o build gerado em `dist/` |

💡 **Dica:** execute `npm test`, `npm run lint` e `npm run build` antes de considerar uma alteração pronta.

---

## 🔌 Configuração da API

O frontend utiliza `fetch` para se comunicar com a API StudyTube. O cliente HTTP está centralizado em:

```text
src/api/videosApi.ts
```

### ⚙️ URL padrão

Por padrão, as requisições são enviadas para:

```text
http://localhost:5126/api/videos
```

Esse endereço corresponde ao perfil HTTP configurado no backend.

### 📝 Configurando outra URL

Se a API estiver hospedada em outro endereço, crie um arquivo `.env.local` a partir do exemplo disponibilizado no repositório.

No Windows, macOS ou Linux, execute na raiz do frontend:

```bash
node -e "require('fs').copyFileSync('.env.example', '.env.local')"
```

Depois, abra o arquivo `.env.local` e configure:

```dotenv
VITE_API_URL=http://localhost:5126/api/videos
```

Substitua a URL pelo endereço correto da API, se necessário.

**Importante:**

- As variáveis de ambiente expostas ao frontend pelo Vite precisam começar com `VITE_`.
- O arquivo `.env.local` é ignorado pelo `.gitignore`, pois corresponde ao padrão `*.local`.
- Reinicie o servidor com `npm run dev` após modificar as variáveis.
- Se `VITE_API_URL` não estiver definida, o frontend utilizará a URL padrão.

🔒 Não coloque chaves secretas ou credenciais privadas do backend nas variáveis `VITE_*`. Esses valores podem ficar visíveis no código entregue ao navegador.

---

## 🖥️ Executando junto com o backend

Para utilizar as funcionalidades que dependem da API, o backend também precisa estar em execução.

Em outro terminal, abra o repositório `studytube-backend` e execute:

```bash
dotnet run --project StudyTube.Api --launch-profile http
```

Esse perfil inicia a API em:

🌐 http://localhost:5126

Mantenha o backend e o frontend rodando em terminais separados.

### 📡 Rotas utilizadas

O frontend utiliza as seguintes rotas HTTP:

| Método | Rota | Finalidade |
|---|---|---|
| `GET` | `/api/videos` | Lista os vídeos salvos |
| `POST` | `/api/videos` | Adiciona um vídeo a partir de uma URL do YouTube |
| `PATCH` | `/api/videos/{id}/watched` | Marca um vídeo como assistido |
| `DELETE` | `/api/videos/{id}/watched` | Desmarca um vídeo como assistido |

Para cadastrar um vídeo, o corpo da requisição `POST` contém a URL:

```json
{
  "url": "https://www.youtube.com/watch?v=VIDEO_ID"
}
```

A API é responsável por consultar os dados do vídeo e persistir as informações.

### 🔑 Chave da YouTube Data API v3

Para cadastrar vídeos com sucesso, o backend precisa de uma chave da **YouTube Data API v3**, configurada em `YouTube:ApiKey`, por meio de User Secrets ou de `appsettings`.

Essa chave pertence ao backend e não deve ser colocada no frontend.

Se a API estiver indisponível, a interface exibirá um aviso informando que não foi possível estabelecer a conexão.

### ⏱️ Formato da duração

O backend retorna o campo `duration` como `TimeSpan` do .NET, usando o formato constante.

Exemplos:

| Valor recebido | Valor exibido |
|---|---|
| `00:04:13` | `4:13` |
| `01:02:03` | `1:02:03` |
| `1.02:03:04` | `1:02:03:04` |
| `PT4M13S` | `4:13` |

Durações no formato ISO 8601, como `PT4M13S`, também são aceitas.

---

## 🗂️ Estrutura do projeto

A organização do código separa a comunicação com a API, os componentes visuais, o estado da aplicação e as funções auxiliares.

```text
studytube-frontend/
├── public/                  # Ícones e arquivos estáticos
├── src/
│   ├── api/
│   │   └── videosApi.ts     # Comunicação HTTP com a API
│   ├── components/          # Formulário, cards, player e progresso
│   ├── hooks/
│   │   └── useVideos.ts     # Estado da lista e chamadas à API
│   ├── tests/
│   │   └── unit/            # Testes unitários com Vitest
│   ├── types/
│   │   └── Video.ts         # Contrato JSON do vídeo
│   ├── utils/               # Formatação de duração e validação
│   ├── App.tsx               # Componente principal
│   └── main.tsx              # Ponto de entrada da aplicação
├── .env.example             # Exemplo de configuração
├── .husky/
│   └── pre-commit           # Hook executado antes dos commits
├── index.html
├── package.json
└── vite.config.ts
```

### 🧩 Responsabilidades principais

- **`videosApi.ts`:** centraliza as chamadas HTTP feitas com `fetch`.
- **`useVideos.ts`:** gerencia o estado da lista e a comunicação com a API.
- **`components/`:** reúne os elementos visuais e interativos da aplicação.
- **`types/Video.ts`:** define o contrato de dados utilizado pelo frontend.
- **`utils/`:** contém funções auxiliares, incluindo validação de links e formatação de duração.
- **`tests/unit/`:** reúne os testes automatizados.

---

## 🧪 Testes e qualidade do código

Os testes unitários são executados com Vitest e cobrem funcionalidades como:

- Validação de links do YouTube.
- Formatação da duração dos vídeos.

Para executar os testes:

```bash
npm test
```

Para verificar o código com ESLint:

```bash
npm run lint
```

Para verificar os tipos TypeScript e gerar o build de produção:

```bash
npm run build
```

O resultado do build é gerado no diretório `dist/`.

### 🪝 Hook de pre-commit

O projeto utiliza Husky para executar os testes antes de cada commit.

O hook está localizado em:

```text
.husky/pre-commit
```

Ele executa:

```bash
npm test
```

Se os testes falharem, o commit será bloqueado pelo hook.

---

## 🏗️ Decisões técnicas

### 1. Contrato de dados independente do domínio

O tipo `Video` espelha o JSON retornado pela API, utilizando nomes de propriedades em `camelCase`.

O frontend não referencia diretamente entidades de domínio, DTOs de C# ou o banco SQLite.

### 2. Comunicação HTTP centralizada

As chamadas HTTP ficam isoladas em `videosApi.ts`.

Os componentes não precisam montar as URLs das requisições individualmente, facilitando a manutenção e a organização do código.

### 3. Player integrado

O projeto utiliza `react-youtube` para incorporar o player de vídeo.

O componente recebe o identificador do vídeo do YouTube (`youTubeId`), evitando a necessidade de passar a URL completa ao player.

### 4. Validação antes do envio

Os links são validados no navegador para verificar se pertencem aos domínios aceitos, como `youtube.com` e `youtu.be`, antes de realizar a requisição `POST`.

Essa validação melhora a experiência de uso, mas não substitui as validações que devem ser realizadas pelo backend.

### 5. Testes automatizados

O Vitest é utilizado para testar funções importantes, como a formatação da duração e a validação dos links.

### 6. Verificação antes dos commits

O Husky executa os testes automaticamente antes de cada commit, ajudando a evitar que alterações com testes falhando sejam registradas no repositório.

---

## 🗺️ Resumo da arquitetura

O fluxo principal da aplicação funciona assim:

1. 📎 O estudante informa a URL de um vídeo.
2. 🔍 O frontend valida o link.
3. 🌐 O frontend envia a requisição para a API .NET.
4. 🎬 A API consulta os dados do YouTube e salva as informações.
5. 🖼️ O frontend apresenta os dados retornados.
6. ✅ O estudante pode marcar ou desmarcar o vídeo como assistido.

O frontend é responsável pela interface e pela comunicação HTTP. A API é responsável pelas regras de negócio, pela integração com o YouTube e pela persistência dos dados.

---

## 💖 Considerações finais

O StudyTube Frontend foi organizado para manter uma separação clara entre interface, comunicação HTTP, estado e funções auxiliares.

Essa estrutura facilita a manutenção, a realização de testes e a evolução da aplicação, sem acoplar o cliente web aos detalhes internos do backend. 🌸📚
