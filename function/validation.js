
const verifyDataProdutos=(erros, produto)=>{

  if(produto.descricao==undefined){
    erros.push("Descrição inválido, por favor preencha uma descrição!");
  }
  else if(produto.descricao.trim()==""){
    erros.push("Descrição em branco, por favor preencha uma descrição!");
  }

  if(produto.marca==undefined){
    erros.push("Marca inválido, por favor preencha uma marca!");
  }
  else if(produto.marca.trim()==""){
    erros.push("Marca em branco, por favor preencha uma marca!");
  }

  if(produto.estoque==undefined){
    erros.push("Estoque inválido, por favor preencha um estoque!");
  }
  else if(isNaN(produto.estoque)){
    erros.push("Estoque em branco, por favor preencha um estoque!");
  }

  if(produto.codigo==undefined){
    erros.push("Codigo do produto inválido, por favor preencha um código válido!");
  }
  else if(isNaN(produto.codigo)){
    erros.push("Codigo do produto em branco, por favor preencha um código válido!");
  }

  if(produto.loja==undefined){
    erros.push("Loja inválida, por favor preencha a loja qual se refere!");
  }
  else if(isNaN(produto.loja)){
    erros.push("Loja em branco, por favor preencha a loja qual se refere!");
  }

  return erros;
}


module.exports= {
  verifyDataProdutos
}