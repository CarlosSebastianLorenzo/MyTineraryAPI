import { Router } from "express";
import ActivitiesController from "../controllers/activitiesController.js";

const {createOneActivity, createManyActivities,
    readAllActivities, readAllActivitiesByItinerary, readOneActivityById, readOneActivityByName,
    updateOneActivity, deleteOneActivity} = ActivitiesController;

const activitiesRouter = Router();

activitiesRouter.post('/', createOneActivity);
activitiesRouter.post('/many', createManyActivities);

activitiesRouter.get('/', readAllActivities);
activitiesRouter.get('/:city', readAllActivitiesByItinerary);
activitiesRouter.get('/id/:id', readOneActivityById);
activitiesRouter.get('/name/:itinerary', readOneActivityByName);

activitiesRouter.put('/', updateOneActivity);

activitiesRouter.delete('/', deleteOneActivity);

export default activitiesRouter;