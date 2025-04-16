const app = require("./app");
const { sequelize } = require("./models");
const port = 3000;

async function start() {
  try {
    await sequelize.authenticate();
    await sequelize.sync();
    app.listen(port, () => {
      console.log(`Servidor rodando em http://localhost:${port}`);
    });
  } catch (e) {}
}

start();
