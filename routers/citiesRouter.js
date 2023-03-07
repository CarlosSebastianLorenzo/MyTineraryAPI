import { Router } from "express";
import citiesController from '../controllers/citiesController.js';

const {createOneCity, createManyCities,
    readAllCities, readOneCityById, readOneCityByName,
    updateOneCity, deleteOneCity} = citiesController;

const citiesRouter = Router();

citiesRouter.post('/', createOneCity);
citiesRouter.post('/many', createManyCities);

citiesRouter.get('/', readAllCities);
citiesRouter.get('/id/:id', readOneCityById);
citiesRouter.get('/:city', readOneCityByName);

citiesRouter.put('/', updateOneCity);

citiesRouter.delete('/', deleteOneCity);

export default citiesRouter;