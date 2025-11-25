# 📚 Sistema de Biblioteca

> Sistema completo de gerenciamento de biblioteca desenvolvido com Node.js, Express, PostgreSQL e autenticação JWT.

[![Node.js](https://img.shields.io/badge/Node.js-18.x-green.svg)](https://nodejs.org/)
[![Express](https://img.shields.io/badge/Express-4.18-blue.svg)](https://expressjs.com/)
[![PostgreSQL](https://img.shields.io/badge/PostgreSQL-12+-blue.svg)](https://www.postgresql.org/)
[![License](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)

---

## 📋 Índice

- [Sobre o Projeto](#-sobre-o-projeto)
- [Funcionalidades](#-funcionalidades)
- [Tecnologias](#-tecnologias)
- [Arquitetura](#-arquitetura)
- [Pré-requisitos](#-pré-requisitos)
- [Instalação](#-instalação)
- [Configuração](#-configuração)
- [Execução](#-execução)
- [Estrutura do Projeto](#-estrutura-do-projeto)
- [APIs](#-apis)
- [Telas](#-telas)
- [Banco de Dados](#-banco-de-dados)
- [Autenticação](#-autenticação)
- [Contribuindo](#-contribuindo)
- [Licença](#-licença)
- [Contato](#-contato)

---

## 📖 Sobre o Projeto

O **Sistema de Biblioteca** é uma aplicação web full-stack que permite o gerenciamento completo de uma biblioteca, incluindo cadastro de livros, autores, controle de empréstimos e relacionamento entre livros e autores.

### 🎯 Objetivos

- Gerenciar acervo de livros e autores
- Controlar empréstimos de livros
- Autenticação segura com JWT
- Interface responsiva e intuitiva
- APIs RESTful para integração

---

## ✨ Funcionalidades

### 🔐 Autenticação

- [x] Login com JWT
- [x] Controle de sessão
- [x] Proteção de rotas
- [x] Logout seguro

### 📚 Gestão de Livros

- [x] Listar todos os livros
- [x] Buscar livro por ID
- [x] Cadastrar novo livro
- [x] Editar livro existente
- [x] Excluir livro (soft delete)

### 👤 Gestão de Autores

- [x] Listar todos os autores
- [x] Buscar autor por ID
- [x] Cadastrar novo autor
- [x] Editar autor existente
- [x] Excluir autor (soft delete)

### 📅 Gestão de Empréstimos

- [x] Listar todos os empréstimos
- [x] Buscar empréstimo por ID
- [x] Registrar novo empréstimo
- [x] Atualizar empréstimo
- [x] Cancelar empréstimo (soft delete)

### 🔗 Relação Livro-Autor

- [x] Listar relações
- [x] Associar livro a autor
- [x] Remover associação

---

## 🚀 Tecnologias

### Backend

- **[Node.js](https://nodejs.org/)** - Runtime JavaScript
- **[Express](https://expressjs.com/)** - Framework web
- **[PostgreSQL](https://www.postgresql.org/)** - Banco de dados relacional
- **[pg](https://node-postgres.com/)** - Driver PostgreSQL para Node.js
- **[JWT](https://jwt.io/)** - Autenticação com tokens
- **[bcryptjs](https://www.npmjs.com/package/bcryptjs)** - Criptografia de senhas
- **[dotenv](https://www.npmjs.com/package/dotenv)** - Variáveis de ambiente

### Frontend

- **[Express](https://expressjs.com/)** - Servidor web
- **[Nunjucks](https://mozilla.github.io/nunjucks/)** - Template engine
- **[axios](https://axios-http.com/)** - Cliente HTTP
- **[Bootstrap 5](https://getbootstrap.com/)** - Framework CSS
- **[Bootstrap Icons](https://icons.getbootstrap.com/)** - Ícones
- **[express-session](https://www.npmjs.com/package/express-session)** - Gerenciamento de sessões

---

## 🏗️ Arquitetura

O projeto segue o padrão **MVC (Model-View-Controller)** e está dividido em dois módulos principais:

```
┌─────────────────┐         ┌─────────────────┐         ┌─────────────────┐
│                 │         │                 │         │                 │
│    FRONTEND     │ ◄─────► │     BACKEND     │ ◄─────► │   POSTGRESQL    │
│   (Porta 3000)  │  HTTP   │  (Porta 40000)  │   pg    │  (Porta 5432)   │
│                 │  axios  │     Express     │  pool   │                 │
│   - Nunjucks    │         │     - JWT       │         │   5 Tabelas     │
│   - Bootstrap   │         │     - bcrypt    │         │   - usuarios    │
│   - Session     │         │     - dotenv    │         │   - livros      │
│                 │         │                 │         │   - autores     │
│                 │         │                 │         │   - emprestimos │
│                 │         │                 │         │   - livro_autor │
└─────────────────┘         └─────────────────┘         └─────────────────┘
```

---

## 📦 Pré-requisitos

Antes de começar, você precisa ter instalado:

- **[Node.js](https://nodejs.org/)** (versão 18.x ou superior)
- **[PostgreSQL](https://www.postgresql.org/)** (versão 12 ou superior)
- **[Git](https://git-scm.com/)**
- **[npm](https://www.npmjs.com/)** ou **[yarn](https://yarnpkg.com/)**

---

## 🔧 Instalação

### 1. Clone o repositório

```bash
git clone https://github.com/seu-usuario/sistema-biblioteca.git
cd sistema-biblioteca
```

### 2. Instale as dependências do Backend

```bash
cd dw3backend
npm install
```

### 3. Instale as dependências do Frontend

```bash
cd ../dw3frontend
npm install
```

---

## ⚙️ Configuração

### 1. Configure o Banco de Dados

#### Crie o banco de dados no PostgreSQL:

```bash
sudo -u postgres psql
```

```sql
CREATE DATABASE biblioteca;
\q
```

#### Execute o script de criação das tabelas:

```bash
psql -U postgres -d biblioteca -f criar_usuario_CORRETO_V2.sql
```

### 2. Configure as variáveis de ambiente

#### Backend (`dw3backend/.env`):

```env
# Configurações do Banco de Dados
DB_HOST=localhost
DB_PORT=5432
DB_USER=postgres
DB_PASSWORD=postdba
DB_DATABASE=biblioteca

# Configuração JWT
SECRET_API=sua_chave_secreta_aqui
```

#### Frontend (`dw3frontend/.env`):

```env
# Porta do Frontend
PORT=3000

# URL do Backend
SERVIDOR_DW3Back=http://localhost:40000
```

---

## ▶️ Execução

### 1. Inicie o Backend

```bash
cd dw3backend
node app.js
```

Você deve ver:
```
Servidor rodando na porta 40000
✅ Conectado ao PostgreSQL com sucesso!
```

### 2. Inicie o Frontend (em outro terminal)

```bash
cd dw3frontend
node srvDW3Front.js
```

Você deve ver:
```
🚀 Servidor Frontend rodando na porta 3000
📡 Backend configurado em: http://localhost:40000
🌐 Acesse: http://localhost:3000
```

### 3. Acesse o sistema

Abra seu navegador em: **http://localhost:3000**

**Credenciais padrão:**
- **Usuário:** admin
- **Senha:** 123456

---

## 📁 Estrutura do Projeto

```
sistema-biblioteca/
├── dw3backend/                 # Backend (API REST)
│   ├── config/
│   │   └── db.js              # Conexão com PostgreSQL
│   ├── apps/
│   │   ├── login/
│   │   │   ├── controller/    # Lógica de autenticação
│   │   │   └── model/         # Acesso ao banco (login)
│   │   ├── livros/
│   │   │   ├── controller/    # Lógica de negócio (livros)
│   │   │   └── model/         # Acesso ao banco (livros)
│   │   ├── autores/
│   │   │   ├── controller/
│   │   │   └── model/
│   │   ├── emprestimos/
│   │   │   ├── controller/
│   │   │   └── model/
│   │   └── livroautor/
│   │       ├── controller/
│   │       └── model/
│   ├── routes/
│   │   └── router.js          # Rotas centralizadas
│   ├── .env                   # Variáveis de ambiente
│   ├── app.js                 # Arquivo principal
│   └── package.json
│
├── dw3frontend/                # Frontend (Interface Web)
│   ├── apps/
│   │   ├── login/
│   │   │   ├── controller/    # Lógica de autenticação
│   │   │   └── view/          # Tela de login
│   │   ├── home/
│   │   │   └── view/          # Dashboard
│   │   ├── livros/
│   │   │   ├── controller/    # Consome APIs de livros
│   │   │   └── view/          # Telas de CRUD
│   │   ├── autores/
│   │   │   ├── controller/
│   │   │   └── view/
│   │   ├── emprestimos/
│   │   │   ├── controller/
│   │   │   └── view/
│   │   ├── livroautor/
│   │   │   ├── controller/
│   │   │   └── view/
│   │   └── templates/
│   │       ├── base.html      # Template base
│   │       ├── pageModel.njk  # Template com menu
│   │       └── error.njk      # Página de erro
│   ├── routes/
│   │   ├── rtIndex.js         # Rotas principais
│   │   ├── rtLivros.js        # Rotas de livros
│   │   ├── rtAutores.js       # Rotas de autores
│   │   ├── rtEmprestimos.js   # Rotas de empréstimos
│   │   └── rtLivroAutor.js    # Rotas de livro-autor
│   ├── static/                # Arquivos estáticos
│   │   ├── css/
│   │   ├── js/
│   │   └── images/
│   ├── .env                   # Variáveis de ambiente
│   ├── srvDW3Front.js         # Servidor Express
│   └── package.json
│
├── criar_usuario_CORRETO_V2.sql  # Script SQL
├── README.md                     # Este arquivo
└── LICENSE                       # Licença MIT
```

---

## 🔌 APIs

### Autenticação

| Método | Endpoint | Descrição | Autenticação |
|--------|----------|-----------|--------------|
| POST | `/Login` | Fazer login e obter token JWT | Não |

### Livros

| Método | Endpoint | Descrição | Autenticação |
|--------|----------|-----------|--------------|
| GET | `/getAllLivros` | Listar todos os livros | JWT |
| GET | `/getLivrosByID` | Buscar livro por ID | JWT |
| POST | `/insertLivros` | Cadastrar novo livro | JWT |
| POST | `/updateLivros` | Atualizar livro | JWT |
| POST | `/deleteLivros` | Excluir livro (soft delete) | JWT |

### Autores

| Método | Endpoint | Descrição | Autenticação |
|--------|----------|-----------|--------------|
| GET | `/getAllAutores` | Listar todos os autores | JWT |
| GET | `/getAutoresByID` | Buscar autor por ID | JWT |
| POST | `/insertAutores` | Cadastrar novo autor | JWT |
| POST | `/updateAutores` | Atualizar autor | JWT |
| POST | `/deleteAutores` | Excluir autor (soft delete) | JWT |

### Empréstimos

| Método | Endpoint | Descrição | Autenticação |
|--------|----------|-----------|--------------|
| GET | `/getAllEmprestimos` | Listar todos os empréstimos | JWT |
| GET | `/getEmprestimosByID` | Buscar empréstimo por ID | JWT |
| POST | `/insertEmprestimos` | Registrar novo empréstimo | JWT |
| POST | `/updateEmprestimos` | Atualizar empréstimo | JWT |
| POST | `/deleteEmprestimos` | Cancelar empréstimo (soft delete) | JWT |

### Livro-Autor

| Método | Endpoint | Descrição | Autenticação |
|--------|----------|-----------|--------------|
| GET | `/getAllLivroAutor` | Listar todas as relações | JWT |
| GET | `/getLivroAutorByID` | Buscar relação por ID | JWT |
| POST | `/insertLivroAutor` | Associar livro a autor | JWT |
| POST | `/updateLivroAutor` | Atualizar relação | JWT |
| POST | `/deleteLivroAutor` | Remover associação (soft delete) | JWT |

---

## 🖥️ Telas

### 1. Login
- Autenticação com username e password
- Validação de credenciais
- Geração de token JWT
- Redirecionamento para dashboard

### 2. Dashboard
- Menu lateral com navegação
- Acesso rápido aos módulos
- Nome do usuário logado
- Botão de logout

### 3. Gestão de Livros
- Listagem com paginação
- Cadastro de novos livros
- Edição de livros existentes
- Visualização de detalhes
- Exclusão com confirmação

### 4. Gestão de Autores
- Listagem de autores
- Cadastro e edição
- Visualização de detalhes
- Exclusão com confirmação

### 5. Gestão de Empréstimos
- Listagem de empréstimos ativos
- Registro de novos empréstimos
- Atualização de datas
- Cancelamento de empréstimos

### 6. Relação Livro-Autor
- Listagem de associações
- Criação de novas relações
- Remoção de associações

---

## 🗄️ Banco de Dados

### Diagrama ER

```
┌─────────────────┐         ┌─────────────────┐         ┌─────────────────┐
│    usuarios     │         │     livros      │         │     autores     │
├─────────────────┤         ├─────────────────┤         ├─────────────────┤
│ userid (PK)     │         │ livroid (PK)    │         │ autorid (PK)    │
│ username        │         │ titulo          │         │ nome            │
│ password        │         │ genero          │         │ nacionalidade   │
│ removido        │         │ preco           │         │ removido        │
└─────────────────┘         │ quantidade      │         └─────────────────┘
                            │ removido        │                │
                            └─────────────────┘                │
                                    │                          │
                                    │                          │
                                    └──────────┬───────────────┘
                                               │
                                    ┌─────────────────┐
                                    │  livro_autor    │
                                    ├─────────────────┤
                                    │ livroautorid(PK)│
                                    │ livroid (FK)    │
                                    │ autorid (FK)    │
                                    │ removido        │
                                    └─────────────────┘
                                               │
                                    ┌─────────────────┐
                                    │  emprestimos    │
                                    ├─────────────────┤
                                    │ emprestimoid(PK)│
                                    │ livroid (FK)    │
                                    │ nomecliente     │
                                    │ dataemprestimo  │
                                    │ datadevolucao   │
                                    │ removido        │
                                    └─────────────────┘
```

### Tabelas

#### 1. usuarios
```sql
CREATE TABLE usuarios (
    userid SERIAL PRIMARY KEY,
    username VARCHAR(50) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    removido BOOLEAN DEFAULT false
);
```

#### 2. livros
```sql
CREATE TABLE livros (
    livroid SERIAL PRIMARY KEY,
    titulo VARCHAR(200) NOT NULL,
    genero VARCHAR(100),
    preco DECIMAL(10,2),
    quantidade INTEGER,
    removido BOOLEAN DEFAULT false
);
```

#### 3. autores
```sql
CREATE TABLE autores (
    autorid SERIAL PRIMARY KEY,
    nome VARCHAR(200) NOT NULL,
    nacionalidade VARCHAR(100),
    removido BOOLEAN DEFAULT false
);
```

#### 4. livro_autor
```sql
CREATE TABLE livro_autor (
    livroautorid SERIAL PRIMARY KEY,
    livroid INTEGER REFERENCES livros(livroid),
    autorid INTEGER REFERENCES autores(autorid),
    removido BOOLEAN DEFAULT false
);
```

#### 5. emprestimos
```sql
CREATE TABLE emprestimos (
    emprestimoid SERIAL PRIMARY KEY,
    livroid INTEGER REFERENCES livros(livroid),
    nomecliente VARCHAR(200),
    dataemprestimo DATE,
    datadevolucao DATE,
    removido BOOLEAN DEFAULT false
);
```

---

## 🔐 Autenticação

O sistema utiliza **JWT (JSON Web Tokens)** para autenticação.

### Fluxo de Autenticação

```
1. Usuário envia username e password para /Login
   ↓
2. Backend valida credenciais no PostgreSQL
   ↓
3. Se válido, gera token JWT com bcrypt
   ↓
4. Token é retornado para o frontend
   ↓
5. Frontend armazena token na sessão
   ↓
6. Todas as requisições enviam token no header Authorization
   ↓
7. Backend valida token antes de processar requisição
```

### Exemplo de Requisição Autenticada

```javascript
const response = await axios.get('http://localhost:40000/getAllLivros', {
  headers: {
    'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...'
  }
});
```

---

## 🤝 Contribuindo

Contribuições são bem-vindas! Siga os passos abaixo:

1. Fork o projeto
2. Crie uma branch para sua feature (`git checkout -b feature/MinhaFeature`)
3. Commit suas mudanças (`git commit -m 'Adiciona MinhaFeature'`)
4. Push para a branch (`git push origin feature/MinhaFeature`)
5. Abra um Pull Request

---

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

---



---

## 📸 Screenshots

### Login
![Login](docs/screenshots/login.png)

### Dashboard
![Dashboard](docs/screenshots/dashboard.png)

### Gestão de Livros
![Livros](docs/screenshots/livros.png)

### Gestão de Empréstimos
![Empréstimos](docs/screenshots/emprestimos.png)

---


---

<div align="center">

**⭐ Se este projeto foi útil, deixe uma estrela!**

Desenvolvido com ❤️ usando Node.js, Express e PostgreSQL

</div>
