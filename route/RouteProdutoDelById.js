module.exports = app => {

  const { deleteProdutosById } = app.controller.ControllerProdutoDelById;

    app.delete("/produtos/:id", deleteProdutosById);
}