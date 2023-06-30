/* const Task= require("../models/taskmanagerModel")
exports.createTask= async(req, res)=>{
    try{
        const {discription, status}= req.body;
        const newTask= await Task.create({discription, status});
        return res.status(200).json({
            success: true,
            message: "new task created",
        })
    }catch(error){
        console.log(error);
        return res.status(500).json({
            success: false,
            message: "Unable to create task"
        })
    }
}

 */

const Task= require("../models/taskmanagerModel")
exports.createTask= async(req, res)=>{
    try{
        const {discription}= req.body;
        const newTask= await Task.create({discription});
        return res.status(200).json({
            success: true,
            message: "new task created",
        })
    }catch(error){
        console.log(error);
        return res.status(500).json({
            success: false,
            message: "Unable to create task"
        })
    }
}

