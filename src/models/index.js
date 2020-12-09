const dbConfig = require("../config/db.config.js");

const Sequelize = require('sequelize');

 const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD,{
 	host: dbConfig.HOST,
 	dialect:dbConfig.dialect,
 	operatorsAliases: true,
// const sequelize = new Sequelize('mine','root','12345',{
// 	dialect: 'mysql'

	 // pool:{
	 // 	max:dbConfig.pool.max,
	 // 	min:dbConfig.pool.min,
	 // 	acquire:dbConfig.pool.acquire,
	 // 	idle:dbConfig.pool.idle
	 // }
});

const db ={};

db.Sequelize= Sequelize;
db.sequelize = sequelize;

db.mine = require("./inter.model.js")(sequelize,Sequelize);

module.exports = db;