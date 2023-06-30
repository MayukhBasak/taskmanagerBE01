const mongoose= require("mongoose")
require("dotenv").config();
const db= ()=>{
    mongoose.connect(process.env.DATABASE_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(()=>{
        console.log("DB is connected successfully")
    })
    .catch((err)=>{
        console.log("issue in DB connection");

        process.exit(1);
    })
}
module.exports= db;