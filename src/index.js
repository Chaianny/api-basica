const express = require('express');
const app = express();
const port = 3000;

app.use(express.json()); // Permite ler JSON no corpo da requisição

// Rota exemplo
app.get('/users', (req, res) => {
  res.send('API rodando!');
});

// Iniciando o servidor
app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
