import { Router } from "express";
import citiesController from '../controllers/citiesController.js';

const {createOneCity, readAllCities, readOneCityById, readOneCityByName} = citiesController;
const citiesRouter = Router();

citiesRouter.post('/', createOneCity);

citiesRouter.get('/', readAllCities);
// citiesRouter.get('/:id', readOneCityById);
citiesRouter.get('/:city', readOneCityByName);


export default citiesRouter;