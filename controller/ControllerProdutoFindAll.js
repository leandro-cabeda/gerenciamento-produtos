module.exports = app => {

    const { Produtos } = app.models.DataProdutoModelo;

    const allProdutos = (req, res) => {

        Produtos.findAll({
            raw: true, 
            order: [
                ["id", "asc"]
            ]
        }).then(returnAllProdutos => {

            res.status(200).json(returnAllProdutos);

        }).catch(err => {
            res.status(500).json({ err: { msg: "Ocorreu falha durante a conexão do banco. Err: " + err } });
        });
    }
    return { allProdutos };
}