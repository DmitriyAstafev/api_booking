const { Op } = require('sequelize');
const { sequelize, Booking } = require('../../db/models');

class BookingController {
  async create(req, res) {
    const t = await sequelize.transaction();
    try {
      const {
        clientId, roomId, checkIn, checkOut,
      } = req.body;
      const existingBooking = await Booking.findOne({
        where: {
          roomId,
          [Op.or]: [
            {
              checkIn: { [Op.between]: [checkIn, checkOut] },
            },
            {
              checkOut: { [Op.between]: [checkIn, checkOut] },
            },
            {
              [Op.and]: [
                { checkIn: { [Op.lt]: checkIn } },
                { checkOut: { [Op.gt]: checkOut } },
              ],
            },
          ],
        },
        transaction: t,
      });
      if (existingBooking) {
        throw new Error('В выбранный период номер недоступен.');
      }
      const booking = await Booking.create({
        roomId,
        clientId,
        checkIn,
        checkOut,
      }, { transaction: t });

      await t.commit();
      res.json(booking);
    } catch (error) {
      await t.rollback();
      res.json({ message: error.message });
    }
  }

  async delete(req, res) {
    try {
      const { id } = req.params;
      await Booking.destroy(
        {
          where: { id },
        },
      );
      res.json({ message: 'Бронирование отменено' });
    } catch (error) {
      res.json({ message: error.message });
    }
  }
}

module.exports = new BookingController();
