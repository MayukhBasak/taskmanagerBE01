const express= require("express")
const app= express();
app.use(express.json());
require("dotenv").config();
const PORT= process.env.PORT||4000;
const dbConnect= require("./config/database")
const routes= require("./routers/taskmanager");
app.use("/api/v1", routes)
app.listen(PORT, ()=>{
    console.log("app is running at "+PORT)
})
dbConnect();