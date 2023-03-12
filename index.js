import 'dotenv/config.js'
import express from "express";
import indexRouter from "./routers/indexRouter.js";
import cors from "cors";

const server = express();

server.use('/', indexRouter)

server.listen(process.env['PORT'], ()=>{console.log("server running on http://localhost:"+process.env['PORT'])});