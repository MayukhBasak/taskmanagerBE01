const mongoose= require("mongoose")
const taskModel= new mongoose.Schema({
    discription:{
        type: String,
        required: true,
    },
    status: {
        type: String,
        enum: ["Pending", "Completed"],
        // required: true,
        default: "Pending"

    }
})
module.exports= mongoose.model("taskModel", taskModel);