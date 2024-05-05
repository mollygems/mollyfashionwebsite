import mongoose from 'mongoose'

const connectDB = async () =>{
    try{
        // const conn = await mongoose.connect(process.env.MONGO_URI)
        const conn = await mongoose.connect("mongodb+srv://mollygems1972:Molly%23101@cluster0.gg0qpw7.mongodb.net/")

        console.log(`MongoDB Connected : ${conn.connection.host}`.cyan.underline)
    }catch(error){
        console.error(`Error: ${error.message}`.red.underline.bold);
        process.exit(1);
    }
}

export default connectDB