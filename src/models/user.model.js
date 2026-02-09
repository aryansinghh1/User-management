import mongoose from "mongoose";
import { email } from "zod";
import { required } from "zod/mini";

const userSchema = new mongoose.Schema(

    {
        name: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
        },
        age: Number,
        isActive: {
            type: Boolean,
            default: true,

        },
    },
    {timestamps: true},

);

export default mongoose.model("User",userSchema);