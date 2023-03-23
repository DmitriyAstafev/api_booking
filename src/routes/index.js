const Router = require('express');

const router = new Router();
const roomRouter = require('./roomRouter');
const bookingRouter = require('./bookingRouter');

router.use('/room', roomRouter);
router.use('/booking', bookingRouter);

module.exports = router;
