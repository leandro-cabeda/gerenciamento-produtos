module.exports = app => {

    const { verifyDataProdutos } = app.function.validation;
    const { Produtos } = app.models.DataProdutoModelo;

    const addProduto= (req, res) => {

        const produto = req.body;
        let erros=[];

        erros=verifyDataProdutos(erros,produto);

        if (erros.length > 0) {
            return res.status(400).json({ errs:erros});
        }

        Produtos.findOne({
            where: {
                codigo:produto.codigo
            }
        }).then(returnProduto => {

            if (returnProduto != undefined) {

                return res.status(400).json({ err: {msg:"Este produto já está cadastrado com este código referente!"} });
            }
            else {

                Produtos.create({
                    descricao: produto.descricao,
                    marca: produto.marca,
                    estoque: produto.estoque,
                    codigo: produto.codigo,
                    loja: produto.loja
                }).then(returnProdutoAdd => {
                    res.status(201).json(returnProdutoAdd);
                }).catch(err => {
                    res.status(500).json({ err: {msg:"Ocorreu falha durante a conexão do banco. Err: "+err} });
                });
            }

        }).catch(err => {
            res.status(500).json({ err: {msg:"Ocorreu falha durante a conexão do banco. Err: "+err} });
        });
    }

    return { addProduto };
}