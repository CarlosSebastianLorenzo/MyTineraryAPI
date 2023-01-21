import 'dotenv/config.js';
import express from "express";
import indexRouter from "./routers/indexRouter.js";
import cors from "cors";
import './config/database.js';
import errorHandler from './middlewares/errorHandler.js'
import notFoundHandler from './middlewares/notFoundHandler.js'

const server = express();

server.use(cors());
server.use(express.json());

server.use('/api',
    (req, res, next) =>{
    console.log('Someone made a request to the route: ',
    req.url,
    ' on the date: ',
    new Date().toLocaleString(),
    ' with the method: ',
    req.method)
    next()
    }
, indexRouter);


server.get('/',
    (req, res, next) =>{
    res.send('Welcome to the MyTinerary server, check the routes on http://localhost:'+process.env['PORT']+'/api')
    }
)

server.use(notFoundHandler)
server.use(errorHandler)

server.listen(process.env['PORT'], ()=>{console.log("server running on http://localhost:"+process.env['PORT'])});