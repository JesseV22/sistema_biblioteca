# Frontend - Sistema de Biblioteca DW3

Frontend desenvolvido com Express e Nunjucks para gerenciamento de biblioteca, conectado ao backend com PostgreSQL.

## 📋 Pré-requisitos

- Node.js (versão 14 ou superior)
- Backend DW3 rodando na porta 40000
- PostgreSQL configurado

## 🚀 Instalação

1. Instalar dependências:
```bash
npm install
```

2. Configurar variáveis de ambiente:
   - Edite o arquivo `.env` se necessário
   - Por padrão:
     - Frontend: porta 3000
     - Backend: http://localhost:40000

## ▶️ Executar o Projeto

### Modo desenvolvimento (com nodemon):
```bash
npm run dev
```

### Modo produção:
```bash
npm start
```

## 🌐 Acessar o Sistema

Abra o navegador em: http://localhost:3000

## 👤 Login

Use as credenciais cadastradas no banco de dados PostgreSQL.

## 📁 Estrutura do Projeto

```
dw3frontend/
├── apps/
│   ├── login/          # Autenticação
│   ├── home/           # Página inicial
│   ├── livros/         # CRUD de Livros
│   ├── autores/        # CRUD de Autores
│   ├── livroautor/     # Relação N:M Livro-Autor
│   ├── emprestimos/    # CRUD de Empréstimos
│   └── templates/      # Templates base
├── routes/             # Rotas do Express
├── static/             # Arquivos estáticos
├── .env                # Variáveis de ambiente
├── package.json        # Dependências
└── srvDW3Front.js      # Servidor principal
```

## 🔧 Funcionalidades

- ✅ Sistema de Login com JWT
- ✅ CRUD completo de Livros
- ✅ CRUD completo de Autores
- ✅ Gerenciamento de relação Livro-Autor (N:M)
- ✅ CRUD de Empréstimos (1:N)
- ✅ Interface responsiva com Bootstrap 5
- ✅ Sessões gerenciadas com express-session
- ✅ Templates Nunjucks

## 🛠️ Tecnologias Utilizadas

- Express.js
- Nunjucks (template engine)
- Bootstrap 5
- Bootstrap Icons
- Axios (requisições HTTP)
- express-session
- Moment.js (formatação de datas)

## 📝 Observações

- Certifique-se de que o backend está rodando antes de iniciar o frontend
- O token JWT expira em 2 horas (configurado no backend)
- A sessão do frontend expira em 1 hora
