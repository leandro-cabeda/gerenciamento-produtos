module.exports = app => {

  const { updateProduto } =  app.controller.ControllerProdutoUpdate;

  app.put("/produtos/:id", updateProduto);
};
