// Servidor Frontend - DW3
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
const session = require('express-session');

// Carregar variáveis de ambiente
require('dotenv').config({ path: '.env' });

const port = process.env.PORT || 3000;
var rtIndex = require('./routes/rtIndex');
var rtLivros = require('./routes/rtLivros');
var rtAutores = require('./routes/rtAutores');
var rtLivroAutor = require('./routes/rtLivroAutor');
var rtEmprestimos = require('./routes/rtEmprestimos');

var app = express();

// Configuração do Nunjucks
var nunjucks = require("nunjucks");
const moment = require("moment");

var env = nunjucks.configure('apps', {
  autoescape: true,
  express: app,
  watch: true
});

// Adicionar filtro de formatação de data
env.addFilter('date', function(date, format) {
  if (!date) return '';
  return moment(date).format(format || 'DD/MM/YYYY');
});

// Middleware
app.use(express.static(path.resolve(__dirname, 'static')));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

// Configuração de sessão
app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: false,
  cookie: { 
    maxAge: 3600000, // 1 hora
    httpOnly: true
  }
}));

// Rotas
app.use('/', rtIndex);
app.use('/livros', rtLivros);
app.use('/autores', rtAutores);
app.use('/livroautor', rtLivroAutor);
app.use('/emprestimos', rtEmprestimos);

// Tratamento de erro 404
app.use(function(req, res, next) {
  next(createError(404));
});

// Tratamento de erros
app.use(function(err, req, res, next) {
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  res.status(err.status || 500);
  res.render('templates/error.njk', { 
    title: 'Erro',
    error: err 
  });
});

// Iniciar servidor
app.listen(port, () => {
  console.log(`🚀 Servidor Frontend rodando na porta ${port}`);
  console.log(`📡 Backend configurado em: ${process.env.SERVIDOR_DW3Back}`);
  console.log(`🌐 Acesse: http://localhost:${port}`);
});

module.exports = app;
