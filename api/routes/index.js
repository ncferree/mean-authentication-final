import { deleteEstimate } from '../controllers/deleteestimate';
import { getEstimate } from '../controllers/getestimate';

const ctrlAuth = require('../controllers/authentication');
const ctrlProfile = require('../controllers/profile');

const express = require('express');
const router = express.Router();

//configure route authentication
const jwt = require('express-jwt');

const auth = jwt({
  secret: 'MY_SECRET',
  algorithms: [''],
  userProperty: 'payload'
});

export const routes = [
  deleteEstimateRoute,
  getEstimateRoute
]

//deleteEstimate
export const deleteEstimateRoute = {
  path: "/estimates/:name",
  method: "delete",
  handler: async (req, res) => {
    const {name} = req.params;
    await deleteEstimate(name);
    const updatedEstimates = await getEstimate();
    res.status(200).json(updatedEstimates);
  }
}

//getEstimate
export const getEstimateRoute = {
  path: "/estimates/:name",
  method: "get",
  responseType: "text",
  handler: async (req, res) => {
    const {estimates} = await getEstimate();
    res.status(200).json(estimates);
  }
}

//estimate routes
routes.forEach((route) =>{
  router[route.method]("/api" + route.path, route.handler);
})

// profile
router.get('/profile/',auth, ctrlProfile.profileRead);

// authentication
router.post('/register', ctrlAuth.register);
router.post('/login', ctrlAuth.login);




module.exports = router;