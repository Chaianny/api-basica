const express = require("express");
const app = express();
const port = 3000;

app.use(express.json()); // Permite ler JSON no corpo da requisição

let database = [
  {
    id: 1,
    nome: "Lucas",
    idade: 20,
  },
  {
    id: 2,
    nome: "Ana",
    idade: 25,
  },
  {
    id: 3,
    nome: "João",
    idade: 30,
  },
  {
    id: 4,
    nome: "Maria",
    idade: 28,
  },
];

app.get("/users", (req, res) => {
  res.send(database);
});

app.post("/users", (req, res) => {
  database.push(req.body);
  res.send(database);
});

app.put("/users", (req, res) => {
  const itemIndex = database.findIndex((item)=> item.id === req.body.id)
  database[itemIndex] = req.body
  res.send(database);
});

app.delete("/users", (req, res) => {
  database = database.filter((item)=> item.id !== req.body.id)
  res.send(database);
});

let produtos = [
  {
  id: 45,
  nome: "arroz", 
  quantidade: 200,
  },
{  id: 39,
  nome: "feijao",
  quantidade: 300,
},

{  id: 74,
  nome: "carne",
  quantidade: 241,
},

{  id: 15,
  nome: "salgadinho",
  quantidade: 15
},
]
app.get("/produtos", (req, res) => {
  res.send(produtos);
});


app.post("/produtos", (req, res) => {
  produtos.push(req.body);
  res.send(produtos);
});

app.put("/produtos", (req, res) => {
  const itemIndex = produtos.findIndex((item)=> item.id === req.body.id)
  produtos[itemIndex] = req.body
  res.send(produtos);
});

app.delete("/produtos", (req, res) => {
  produtos = produtos.filter((item)=> item.id !== req.body.id)
  res.send(produtos);
});



// Iniciando o servidor
app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
