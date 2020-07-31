module.exports = app => {

  const { allProdutos } =  app.controller.ControllerProdutoFindAll;

  app.get("/produtos", allProdutos);
};
