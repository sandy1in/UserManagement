const { default: mongoose } = require('mongoose');
const mangoose=require('mongoose');
mangoose.set('strictQuery',false);
const connectDB=async() =>{
    try{
        const conn=await mongoose.connect(process.env.MONGODB_URI);
        console.log(`Database Connected: ${conn.connection.host}`);
    }
    catch(error)
    {
        console.log(error);
    }
}
module.exports=connectDB;