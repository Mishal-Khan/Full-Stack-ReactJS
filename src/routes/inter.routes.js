module.exports = src =>{
	const mine = require("../controllers/inter.controllers.js");
var router = require("express").Router();

router.post("/", mine.create);

router.get("/", mine.findAll);

router.get("/published", mine.findAllPublished);

router.get("/:id", mine.findOne);

router.put("/:id", mine.update);

router.delete("/:id", mine.delete);

router.delete("/", mine.deleteAll);

src.use('/api/mine', router);

};