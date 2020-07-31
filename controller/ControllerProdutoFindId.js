module.exports = app => {

    const { Produtos } = app.models.DataProdutoModelo;

    const produtosById=(req, res) => {

        const id = req.params.id;

        if (isNaN(id) || id == undefined) {
            return res.status(400).json({err: { msg: "Id inválido do produto, por favor verifique!"} });
        }

        Produtos.findByPk(id)
            .then(produto => {
                
                if(produto == undefined){
                   return res.status(404).json({ msg: "Id do produto não encontrado!"} );
                }

                res.status(200).json(produto);
            })
            .catch(err => {
                res.status(500).json({ err: { msg: "Ocorreu falha durante a conexão do banco. Err: " + err } });
            });

    }
    return { produtosById };
}