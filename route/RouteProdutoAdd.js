module.exports = app => {
  const { addProduto } = app.controller.ControllerProdutoAdd;

  app.post("/produtos", addProduto);

};
