const Router = require('express');

const router = new Router();
const BookingController = require('../controllers/bookingController');

router.post('/', BookingController.create);
router.delete('/:id', BookingController.delete);

module.exports = router;
