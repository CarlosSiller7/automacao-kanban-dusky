Segue um README adaptado em **Markdown** para o seu projeto, já formatado e organizado para ficar claro e fácil de ler:

---

# 📝 Automação de Testes E2E - Kanban Dusky

Este projeto é uma automação de testes **end-to-end** utilizando o **Cypress** para validar funcionalidades do sistema **Kanban Dusky**.

---

## 🚀 Tecnologias Utilizadas

- **[Cypress](https://www.cypress.io/)** — Framework de testes end-to-end.
- **[Chance.js](https://chancejs.com/)** — Biblioteca JavaScript para geração de dados aleatórios.

---

## 📦 Pré-requisitos

Antes de começar, certifique-se de ter instalado:

- **[Node.js](https://nodejs.org/)** — Versão **14+** recomendada.
- **npm** ou **yarn** — Gerenciadores de pacotes.

---

## ⚙️ Como rodar o projeto

### 1️⃣ Clone o repositório

```bash
git clone <URL_DO_REPOSITORIO>
```

### 2️⃣ Entre na pasta do projeto

```bash
cd automacao-kanban-dusky
```

### 3️⃣ Instale as dependências

Com **npm**:

```bash
npm install
```

Ou com **yarn**:

```bash
yarn install
```

### 4️⃣ Execute os testes

#### Modo interativo (com interface gráfica)

```bash
npx cypress open
```

#### Modo headless (sem interface)

```bash
npx cypress run
```

---

## 📂 Estrutura do projeto

```
automacao-kanban-dusky/
├── cypress/
│   ├── e2e/           # Testes automatizados
│   ├── fixtures/      # Massa de dados para os testes
│   ├── support/       # Comandos e configurações globais
├── package.json       # Dependências e scripts
├── README.md          # Documentação
```

---

## 🧪 Objetivo dos testes

- Criar, editar, mover e excluir colunas.
- Criar, editar, mover e excluir cards.
- Validar fluxo completo do Kanban.
- Testar diferentes cenários com dados aleatórios gerados via **Chance.js**.

---

## 📜 Licença

Este projeto é de uso interno e não possui licença pública definida.

---

Se quiser, posso incluir também um **exemplo prático de comando Cypress** no README para mostrar como rodar testes específicos (por exemplo, só um teste de mover card). Quer que eu adicione?
