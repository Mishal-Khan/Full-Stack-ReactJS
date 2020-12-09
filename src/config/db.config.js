module.exports = {
	HOST:"localhost",
	USER:"root",
	PASSWORD:"12345",
	DB: "mine",
	dialect:"mysql",
	 pool:{
	 	max:5,
	 	min:1,
	 	acquire:30000,
	 	idle:10000
	 }
};