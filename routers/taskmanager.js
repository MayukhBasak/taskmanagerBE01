const express= require("express")
const router= express.Router();
const {createTask}= require("../controllers/createTaskController")
const {updateTask}= require("../controllers/updateTaskController")
const {deleteTask}= require("../controllers/updateTaskController")
router.post("/task", createTask);
router.patch("/task", updateTask);
router.delete("/delete", deleteTask)
module.exports= router;