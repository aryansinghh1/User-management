import { ZodError } from "zod";

export const validate = (schema) => (req, res, next) =>{
    try{
        req.body = schema.parse(req.body);
        next();
    }
    catch (err){
        console.log("ZOD ERROR: ",err); //keep this once

        if (err instanceof ZodError){
            return res.status(400).json({
                message: "validation failed",
                errors: err.issues, // this is the key
            });
        }

        return res.status(500).json({
            message:"Internal server error",
        });
    }
};


//this is a custom validation middleware that uses a zod schema
// to validate the incomming request body.
// if the data is valid the request procceds to the next controller.
// otherwise a proper error response is returned.