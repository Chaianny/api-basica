const { Wigs } = require("../models/index");

const getAllWigs = async (req, res) => {
  try {
    const result = await Wigs.findAll();
    res.json(result);
  } catch (e) {}
};

const getWigbyId = async (req, res) => {
  const { id } = req.params;
  try {
    const result = await Wigs.findOne({ where: { id } });
    if (result === null) {
      return res.json({ erro: "Usuário nao encontrado" });
    }
    res.json(result);
  } catch (e) {}
};

const createWig = async (req, res) => {
  try {
    const result = await Wigs.create(req.body);
    res.status(201).json(result);
  } catch (e) {
    res.json({ error: e.message });
  }
};

const updateWig = async (req, res) => {
  const { id } = req.params;
  try {
    const result = await Wigs.update(req.body, { where: { id } });
    if (result === null) {
      return res.json({ erro: "Usuário nao encontrado" });
    }
    res.status(201).json(result);
  } catch (e) {
    res.json({ error: e.message });
  }
};

const deleteWig = async (req, res) => {
  const { id } = req.params;
  try {
    const result = await Wigs.destroy({ where: { id } });
    if (!result) {
      return res.json({ erro: "Usuário nao encontrado" });
    }
    res.status(201).json(result);
  } catch (e) {
    res.json({ error: e.message });
  }
};


module.exports = {
    getAllWigs,
    getWigbyId,
    createWig,
    updateWig,
    deleteWig
};