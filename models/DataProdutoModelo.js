module.exports = app => {
  const { Connect, Sequelize } = app.database.database;

  const Produtos = Connect.define("produtos", {
    descricao: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    marca: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    estoque: {
      type: Sequelize.DataTypes.INTEGER,
      allowNull: false,
    },
    codigo: {
      type: Sequelize.DataTypes.INTEGER,
      allowNull: false,
      unique:true
    },
    loja:{
      type: Sequelize.DataTypes.INTEGER,
      allowNull: false,
    },
  });


  Produtos.sync({ force: false });

  return { Produtos };
};
