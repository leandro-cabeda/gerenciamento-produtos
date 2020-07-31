module.exports = app => {

    const { verifyDataProdutos } = app.function.validation;
    const { Produtos } = app.models.DataProdutoModelo;

    const updateProduto = (req, res) => {

        const id = req.params.id;

        if (isNaN(id) || id == undefined) {
            return res.status(400).json({ err: { msg: "Id inválido do produto, por favor verifique!" } });
        }

        const produto = req.body;
        let erros = [];

        erros = verifyDataProdutos(erros, produto);

        if (erros.length > 0) {
            return res.status(400).json({ errs: erros });
        }

        Produtos.update({
            descricao: produto.descricao,
            marca: produto.marca,
            estoque: produto.estoque,
            codigo: produto.codigo,
            loja: produto.loja
        },
        {
            where: {
                id
            }

        }).then(() => {

            res.status(200).json("Produto com id: "+id+" foi atualizado!");

        }).catch(err => {
            res.status(500).json({ err: { msg: "Ocorreu falha durante a conexão do banco. Err: " + err } });
        });
    }
    return { updateProduto };
}