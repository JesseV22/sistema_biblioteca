-- AUTORES: tabela simples
CREATE TABLE IF NOT EXISTS autores (
    autorid      SERIAL PRIMARY KEY,
    nome         VARCHAR(100) NOT NULL,
    nacionalidade VARCHAR(60),
    removido     BOOLEAN DEFAULT FALSE
);

-- LIVROS: tabela simples, com campo DECIMAL
CREATE TABLE IF NOT EXISTS livros (
    livroid      SERIAL PRIMARY KEY,
    titulo       VARCHAR(150) NOT NULL,
    categoria    VARCHAR(60),
    preco        NUMERIC(10, 2) DEFAULT 0, -- campo decimal
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
-- aqui teremos campos DATE e DECIMAL na mesma tabela (requisito do trabalho)
CREATE TABLE IF NOT EXISTS emprestimos (
    emprestimoid    SERIAL PRIMARY KEY,
    livroid         INTEGER NOT NULL,
    leitor          VARCHAR(100) NOT NULL,
    data_emprestimo DATE NOT NULL,       -- campo data
    data_prevista   DATE,
    data_devolucao  DATE,
    valor_multa     NUMERIC(10, 2) DEFAULT 0, -- campo decimal
    removido        BOOLEAN DEFAULT FALSE,
    CONSTRAINT fk_emprestimos_livro
        FOREIGN KEY (livroid) REFERENCES livros (livroid)
);
