const express = require("express")
const categoryController = require("../controllers/categoryControllers")


const router = express.Router()
router.post("/", categoryController.createCategory)
router.get("/", categoryController.getAllCategory)
router.get("/:id", categoryController.getSingleCategory)
router.put("/:id", categoryController.updateCategory)
router.delete("/:id", categoryController.deleteCategory)


module.exports = router