const express = require("express");
const app = express();
const port = 3000;
const pool = require("./db");

app.use(express.json());

app.get("/users", async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM users");
    res.json(result.rows);
  } catch (e) {}
});

app.get("/users/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const result = await pool.query("SELECT * FROM users WHERE id = $1", [id]);
    if (result.rows.length === 0) {
      return res.json({ erro: "Usuário nao encontrado" });
    }
    res.json(result.rows[0]);
  } catch (e) {}
});

app.post("/users/", async (req, res) => {
  const { nome, idade, tamanho, cor, endereco } = req.body;
  try {
    const result = await pool.query(
      "INSERT INTO users (nome, idade, tamanho, cor, endereco)VALUES ($1, $2, $3, $4, $5) RETURNING *",
      [nome, idade, tamanho, cor, endereco]
    );

    res.status(201).json(result.rows[0]);
  } catch (e) {
    res.json({ error: e.message });
  }
});

app.put("/users/:id", async (req, res) => {
  const { nome, idade, tamanho, cor, endereco } = req.body;
  const {id} = req.params
    try {
    const result = await pool.query(
      "UPDATE users SET nome = $1, idade = $2, tamanho = $3, cor = $4, endereco = $5 WHERE id = $6 RETURNING *",
      [nome, idade, tamanho, cor, endereco, id]
      );
      if (result.rows.length === 0) {
        return res.json({ erro: "Usuário nao encontrado" });
      }
    res.status(201).json(result.rows[0]);
  } catch (e) {
    res.json({ error: e.message });
  }
});

app.delete("/users/:id", async (req, res) => {
 const {id} = req.params
  try {
    const result = await pool.query(
      "DELETE FROM users WHERE id = $1 RETURNING *",
      [id]
      );
      if (result.rows.length === 0) {
        return res.json({ erro: "Usuário nao encontrado" });
      }
    res.status(201).json(result.rows[0]);
  } catch (e) {
    res.json({ error: e.message });
  }
});