import express from "express";
import indexRouter from "./routers/indexRouter.js";

const server = express();

server.use('/', indexRouter)

server.listen(3000, ()=>{console.log("server running on http://localhost:3000/")});