const Router = require('express');

const router = new Router();
const RoomController = require('../controllers/roomController');

router.get('/free', RoomController.getFreeRoom);
router.get('/', RoomController.getAllRoom);

module.exports = router;
