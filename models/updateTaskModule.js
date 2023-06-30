const mongoose= require("mongoose")
const updateTask= new mongoose.Schema({
    taskID:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "taskModel"
    },

})
module.exports= mongoose.model("updateTask", updateTask)