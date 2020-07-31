const Sequelize=require("sequelize");

const Connect=new Sequelize(
    "estoques",
    "",
    "",
    {
    host:"localhost",
    dialect:"mysql",
    port: 00,
    timezone: "-03:00",
    define: { timestamps: false }
});

module.exports={
    Connect,
    Sequelize
};