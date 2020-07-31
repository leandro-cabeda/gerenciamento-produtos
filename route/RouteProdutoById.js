module.exports = app => {

    const { produtosById } = app.controller.ControllerProdutoFindId;

    app.get("/produtos/:id", produtosById);

}