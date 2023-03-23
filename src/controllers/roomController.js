const { Op } = require('sequelize');
const { Room, Booking } = require('../../db/models');

class RoomController {
  async getAllRoom(req, res) {
    try {
      const { hotelId } = req.query;
      const allRooms = await Room.findAll({
        where: {
          hotelId,
        },
      });
      res.json(allRooms);
    } catch (error) {
      res.json({ message: error.message });
    }
  }

  async getFreeRoom(req, res) {
    try {
      const { hotelId, checkIn, checkOut } = req.query;

      const reservedRooms = await Booking.findAll({
        where: {
          checkIn: {
            [Op.lt]: checkOut,
          },
          checkOut: {
            [Op.gt]: checkIn,
          },
        },
        attributes: ['roomId'],
      });
      const reservedRoomsId = reservedRooms.map((booking) => booking.roomId);
      const freeRooms = await Room.findAll({
        where: {
          hotelId,
          id: {
            [Op.notIn]: reservedRoomsId,
          },
        },
      });
      res.json(freeRooms);
    } catch (error) {
      res.json({ message: error.message });
    }
  }
}

module.exports = new RoomController();
