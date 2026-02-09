import mongoose from "mongoose";

export const connectDB = async() => {
    try{
        await mongoose.connect(process.env.MONGO_URI);
        console.log("MONGO_URI:",process.env.MONGO_URI);
        
        console.log("MongoDB connected");
    }
    catch (error){
        console.error.apply("MongoDB connection failed", error);
        process.exit(1);
    }
};