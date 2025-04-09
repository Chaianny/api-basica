const express = require("express");
const app = express();
const port = 3000;
const pool = require("./db");
const { sequelize, Wigs } = require("./models/index");

app.use(express.json());

async function start() {
  try {
    await sequelize.authenticate();
    await sequelize.sync();
    app.listen(port, () => {
      console.log(`Servidor rodando em http://localhost:${port}`);
    });
  } catch (e) {}
}

app.get("/wigs", async (req, res) => {
  try {
    const result = await Wigs.findAll();
    res.json(result);
  } catch (e) {}
});

app.get("/wigs/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const result = await Wigs.findOne({ where: { id } });
    if (result === null) {
      return res.json({ erro: "Usuário nao encontrado" });
    }
    res.json(result);
  } catch (e) {}
});

app.post("/wigs/", async (req, res) => {
  try {
    const result = await Wigs.create(req.body);
    res.status(201).json(result);
  } catch (e) {
    res.json({ error: e.message });
  }
});

app.put("/wigs/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const result = await Wigs.update(req.body, { where: { id } });
    console.log (result)
    if (result === null) {
      return res.json({ erro: "Usuário nao encontrado" });
    }
    res.status(201).json(result);
  } catch (e) {
    res.json({ error: e.message });
  }
});

app.delete("/wigs/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const result = await Wigs.destroy({ where: { id}})
    if (!result) {
      return res.json({ erro: "Usuário nao encontrado" });
    }
    res.status(201).json(result);
  } catch (e) {
    res.json({ error: e.message });
  }
});
start();
