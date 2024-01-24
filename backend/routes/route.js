const router= require('express').Router()
const controller=require('../controllers/controller.js')



router.get("/getAll",controller.getAllfilm)
router.get("/getOne/:name",controller.getOnefilm)
router.get("/getByCategory/:category",controller.getByCategory)

router.post("/add",controller.createfilm)
router.delete("/delete/:name",controller.deletefilm)
router.put("/update/:name",controller.updatefilm)

module.exports=router