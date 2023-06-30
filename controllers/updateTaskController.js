/* const Task= require("../models/taskmanagerModel")
const update= require("../models/updateTaskModule")
exports.updateTask= async (req, res)=>{
    try{
        const {taskID, status}= req.body;
        const task= await Task.findById({taskID});
        if(task.status==="Pending"){
            task.status= "Completed"
            await task.save();
        }
        else{
            task.message= "Task is already completed"
        }
        return res.status(200).json({
            success: true,
            message: "task status updated successfully!!",
        })
    }catch(error){
        return res.status(500).json({
            success: false,
            message: "There is some issue to update task status",
        })
    }
} */


const Task = require("../models/taskmanagerModel");
const update = require("../models/updateTaskModule");
// update task status
exports.updateTask = async (req, res) => {
  try {
    const { taskID, status } = req.body;
    const task = await Task.findById(taskID);

    if (!task) {
      return res.status(404).json({
        success: false,
        message: "Task not found",
      });
    }

    if (task.status === "Pending") {
      task.status = "Completed";
      await task.save(); // Save the updated task
    } else {
      return res.status(200).json({
        success: false,
        message: "Task is already completed",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Task status updated successfully!",
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "There is some issue updating the task status",
    });
  }
};

// delete task
exports.deleteTask= async(req, res)=>{
    try{
        const {taskID}= req.body;
        const task= await Task.findById(taskID);
        if(!task){
            return res.status(404).json({
                success: false,
                message: "Task Not found",
            })
        }
        if(task.status==="Pending"){
            return res.status(404).json({
                success: false,
                message: "please comeplete your task and mark it 'Completed'"
            })
        }
        else{
            await Task.deleteOne({_id:taskID})
        }
        return res.status(200).json({
            success: true,
            message: "Task deleted successfully!!"
        })
    }catch(error){
        return res.status(500).json({
            success: false,
            message: "Unable to delete Task",
        })
    }
}
