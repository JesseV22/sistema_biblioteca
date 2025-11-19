module.exports = {
  // Adicione seus métodos aqui
  listar: (req, res) => {
    res.send('Listar livros');
  },
  
  criar: (req, res) => {
    res.send('Criar livro');
  }
};