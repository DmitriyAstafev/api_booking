# api_booking

Развертывание приложения

1. npm install

2. Создаем .env из .env.example, в DATABASE_URL указываем свои значения db_user:db_password

3. Для разворачивания базы данных используем следующие команды:

создание базы данных - npx sequelize-cli db:create

миграция моделей - npx sequelize-cli db:migrate

засидить таблицы тестовыми данными - npx sequelize-cli db:seed:all

4. Для запуска сервера выполняем команду npm run dev

Описание API:

1. GET /api/v1/room Выдача списка номеров в отеле

В запросе передается id отеля, номера которого нужно показать

http://localhost:3100/api/v1/room?hotelId=2

Возвращается массив номеров в отеле

[

{
id: 4,
hotelId: 2,
number: 1,
desc: "Стандарт",
createdAt: "2023-03-22T16:27:37.967Z",
updatedAt: "2023-03-22T16:27:37.967Z"
},

{
id: 5,
hotelId: 2,
number: 2,
desc: "Эконом",
createdAt: "2023-03-22T16:27:37.967Z",
updatedAt: "2023-03-22T16:27:37.967Z"
},

{
id: 6,
hotelId: 2,
number: 3,
desc: "Полулюкс",
createdAt: "2023-03-22T16:27:37.967Z",
updatedAt: "2023-03-22T16:27:37.967Z"
}

]

2. GET /api/v1/room/free Выдача списка свободных номеров в отеле

В запросе передается id отеля, даты заезда и выезда

http://localhost:3100/api/v1/room/free?hotelId=1&checkIn='2023-0-24'&checkOut='2023-04-26'

Возвращается массив номеров в отеле (номер 2 на данный период забронирован)

[
{
id: 1,
hotelId: 1,
number: 1,
desc: "Стандарт",
createdAt: "2023-03-22T16:27:37.967Z",
updatedAt: "2023-03-22T16:27:37.967Z"
},
{
id: 3,
hotelId: 1,
number: 3,
desc: "Люкс",
createdAt: "2023-03-22T16:27:37.967Z",
updatedAt: "2023-03-22T16:27:37.967Z"
}
]

3. POST /api/v1/booking Бронирование номера

В теле запроса передается id клиента, id номера, даты заезда и выезда

Для тестирования можно реализовать запрос в командной строке
curl  -H 'Content-Type: application/json' --data '{"clientId":2,"roomId":2,"checkIn":"2023-04-23","checkOut":"2023-04-30"}' http://localhost:3100/api/v1/booking

Либо использовать Postman

В ответе приходит информация о созданном бронировании

{"id":3,"roomId":3,"clientId":2,"checkIn":"2023-04-23","checkOut":"2023-04-30","updatedAt":"2023-03-23T08:25:21.033Z","createdAt":"2023-03-23T08:25:21.033Z"}

В случае,если дата проживания пересекается с существующим бронированием, в ответе приходит сообщение, что номер на данные даты забронирован

4. DELETE /api/v1/booking/:id Отмена бронирования

В адресе передаем id бронирования. 

Для тестирования можно реализовать запрос в командной строке

curl -X DELETE http://localhost:3100/api/v1/booking/1

Либо использовать Postman
