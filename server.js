import "dotenv/config";

import app from "./src/app.js";

import {connectDB} from "./src/congif/db.js";

connectDB();

const PORT = process.env.PORT || 5000;


app.listen(PORT,()=>{
    console.log(`Server is running on port 3000 ${PORT}`);
});