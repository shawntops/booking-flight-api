const router = require("express").Router();
const controller = require('../controllers/flightController');

router
    // .get('/', controller.example)
    .get('/', controller.getFlights)
    .get('/:id', controller.getFlight)
    .post('/', controller.createFlight)
    .put('/:id', controller.updateFlight)
    .delete('/:id', controller.deleteFlight);

module.exports = router;

