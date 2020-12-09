const Sequelize = require('sequelize');
module.exports= (sequelize, Sequelize) =>{
 const Inter = sequelize.define('inter', {
 		title: {
 			type:Sequelize.STRING
 		},
 		description: {
 			type:Sequelize.STRING
 		},
 		published: {
 			type:Sequelize.BOOLEAN
 		}
 	});

// const mine = sequelize.define('mine',{
// 	uuid: {
// 	type: Sequelize.UUID,
// 	primaryKey: true,
// 	defaultValue: Sequelize.UUIDV4
// },
// title: Sequelize.STRING,
// description: Sequelize.STRING
// });
	return Inter;
};