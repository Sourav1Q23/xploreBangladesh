const express = require('express');
const authController = require('./../controller/authController');
const touristSpotController = require('./../controller/touristSpotController');

const router = express.Router();


router.get('/', touristSpotController.getAllTouristSpots);
router.get('/:id', touristSpotController.getTouristSpot);

router.post('/',authController.authenticate,authController.authorize('admin'), touristSpotController.createTouristSpot)
router.patch('/:id', authController.authenticate, authController.authorize('admin'), touristSpotController.updateTouristSpot)
router.delete('/:id', authController.authenticate, authController.authorize('admin'), touristSpotController.deleteTouristSpot)

router.get('/:distance/center/:lat/:lng', touristSpotController.getTouristSpotsWithin);
// router.get('/distances/:latlng/unit/:unit',touristSpotController.getDistances);

module.exports=router;