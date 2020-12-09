const db = require("../models");
const Inter = db.mine;
const Op = db.Sequelize.Op;
//const check = require("../../server.js");

exports.create = (req, res) => {
	if(!req.body.title){
		res.status(400).send({
			message:"Conetnt cannot empty"
		});
		return;

	}
// app.get('/',(req,res) => res.send("hhhhh"));

	const inter = {
		title:req.body.title,
		description:req.body.description,
		published: req.body.published ? req.body.published : false

	};

	Inter.create(inter)
	.then(data =>{
		res.send(data);
	})
	.catch(err =>{
		res.status(500).send({
			message:
			err.message || "some errorrrrr"
		});
	});
};


exports.findAll = (req, res) => {
	const title = req.query.title;
	var condition = title ? { title: { [Op.like]: `%${title}%` } } :null;
 
 Inter.findAll({where: condition})
 .then(data => {
 	res.send(data);

 })	
 .catch(err => {
 	res.status(500).send({
 		message:
 		err.message || "sendinggg erroro"
 	});

 });
};

exports.findOne = (req, res) =>{
	const id = req.params.id;
	Inter.findByPk(id)
	.then(data => {
		res.send(data);

	})
	.catch(err => {
		res.status(500).send({
			message:"bbbbbbbbbb"+ id
		});

	});
};

exports.update = (req, res) => {
	const id = req.params.id;

	Inter.update(req.body,{
		where:{ id: id}
	})
	.then(num => {
		if(num == 1){
			res.send({
				message:"id is 1 updtaed"
			});

		} else {
			res.send({
				message:"not update id = ${id}. not found"
			});
		}
	})
	.catch(err => {
		res.status(500).send({
			message:"errror updating id" + id
		});
	});
};

exports.delete = (req, res) => {
	const id = req.params.id;

	Inter.destroy({
		where: { id: id }
	})
	.then(num => {
		if ( num == 1 ){
			res.send({
				message:"deled success"
			});
		}else {
			res.send({
				message:"cannot deletef id = ${id} not foynd"
			});
		}
	})
	.catch(err => {
		res.status(500).send({
			message: "not found id" + id 
		});
	});
};

exports.deleteAll= (req, res) => {
	 Inter.destroy({
	 	where: {},
	 	truncate: false
 })
	 .then(nums => {
	 	res.send({ message: `${nums} deleted all`});
	 })
	 .catch(err => {
	 	res.status(500).send({
	 		message:
	 		err.message || "errror not delet all"
	 	});
	 });

};

exports.findAllPublished = (req, res) => {
	Inter.findAll({ where: {published: true} })
	.then(data => {
		res.send(data);
	})
	.catch(err => {
		res.status(500).send({
			message:
			err.message || "error in findall"
		});
	});
};