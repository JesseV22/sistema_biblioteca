--LOGIN: tabela de usuários
CREATE TABLE IF NOT EXISTS usuarios (
    userid     SERIAL PRIMARY KEY,
    username   VARCHAR(60) NOT NULL UNIQUE,
    password   VARCHAR(200) NOT NULL,
    removido   BOOLEAN DEFAULT FALSE
);


-- AUTORES: tabela simples
CREATE TABLE IF NOT EXISTS autores (
    autorid      SERIAL PRIMARY KEY,
    nome         VARCHAR(100) NOT NULL,
    nacionalidade VARCHAR(60),
    removido     BOOLEAN DEFAULT FALSE
);

-- LIVROS
CREATE TABLE IF NOT EXISTS livros (
    livroid      SERIAL PRIMARY KEY,
    titulo       VARCHAR(150) NOT NULL,
    categoria    VARCHAR(60),
    preco        NUMERIC(10, 2) DEFAULT 0, 
    quantidade   INTEGER DEFAULT 0,
    removido     BOOLEAN DEFAULT FALSE
);

-- LIVRO_AUTOR: relacionamento N:M

CREATE TABLE IF NOT EXISTS livro_autor (
    livroautorid SERIAL PRIMARY KEY,
    livroid      INTEGER NOT NULL,
    autorid      INTEGER NOT NULL,
    removido     BOOLEAN DEFAULT FALSE,
    CONSTRAINT fk_livroautor_livro
        FOREIGN KEY (livroid) REFERENCES livros (livroid),
    CONSTRAINT fk_livroautor_autor
        FOREIGN KEY (autorid) REFERENCES autores (autorid)
);

-- EMPRESTIMOS: relacionamento 1:N (um livro pode ter vários empréstimos)

CREATE TABLE IF NOT EXISTS emprestimos (
    emprestimoid    SERIAL PRIMARY KEY,
    livroid         INTEGER NOT NULL,
    leitor          VARCHAR(100) NOT NULL,
    data_emprestimo DATE NOT NULL,       
    data_prevista   DATE,
    data_devolucao  DATE,
    valor_multa     NUMERIC(10, 2) DEFAULT 0, 
    removido        BOOLEAN DEFAULT FALSE,
    CONSTRAINT fk_emprestimos_livro
        FOREIGN KEY (livroid) REFERENCES livros (livroid)
);
