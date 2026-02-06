import express from "express";

import userRoutes from "./routes/user.routes.js";

const app = express();

app.use(express.json()); //APP-LEVEL middleware

app.use("/users",userRoutes);


export default app;