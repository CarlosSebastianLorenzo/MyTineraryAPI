import { Router } from "express";

const indexRouter = Router();

indexRouter.get('/', (request, response, next) => {
    response.send("welcome to the API of MyTinerary");
})

export default indexRouter;