module.exports = app => {

    const { allProdutosByLoja } =  app.controller.ControllerProdutoFindAllByLoja;

  app.get("/produtos/lojas/:loja", allProdutosByLoja);

}