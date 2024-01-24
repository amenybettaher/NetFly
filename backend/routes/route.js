const router= require('express').Router()
const controller=require('../controllers/controller.js')



router.get("/getAll",controller.getAllfilm)
router.get("/getOne/:id",controller.getOnefilm)
router.get("/getByCategory/:category",controller.getByCategory)

router.post("/add",controller.createfilm)
router.delete("/delete/:id",controller.deletefilm)
router.put("/update/:id",controller.updatefilm)

module.exports=router