module.exports = app => {

    const { Produtos } = app.models.DataProdutoModelo;

    const allProdutosByLoja=(req, res) => {

        const loja = req.params.loja;

        if (isNaN(loja) || loja == undefined) {
            return res.status(400).json({err: { msg: "Loja referente inválida, por favor verifique!"} });
        }

        Produtos.findAll({
            raw: true, 
            order: [
                ["id", "asc"]
            ],
            where:{
                loja
            }
        }).then(produtosByLoja => {
                
            if(produtosByLoja.length == 0){
                return res.status(200).json({ msg: "Produtos referente a loja especificada não há registros!"} );
             }

                res.status(200).json(produtosByLoja);
            })
            .catch(err => {
                res.status(500).json({ err: { msg: "Ocorreu falha durante a conexão do banco. Err: " + err } });
            });

    }
    return { allProdutosByLoja };
}