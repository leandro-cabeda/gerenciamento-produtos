const app = require("./server/server");
const port = process.env.PORT || 3000;
const { Connect }= app.database.database;

Connect.authenticate()
  .then(() => {
    console.log("Conexão estabelicida com MySql");
  })
  .catch((msgErro) => {
    console.log(msgErro);
  });

app.get("/", (req, res) => {
  res.status(200).send("<h1>Bem vindo Gerenciamento de Produtos!</h1>");
});

app.listen(port, () => {
  console.log(`Servidor está rodando na porta ${port}.`);
});
