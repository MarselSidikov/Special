// Объявляем четыре константы, каждая из констант
// содержит модуль из определенной библиотеки
// для отдачи статики
// подключаешь "класс" из библиотеки express
const express = require('express');
// создаем экземпляр объекта
const app = express();
// говоришь, что у твоего приложения есть папка public и она
// должна быть доступна по сети
app.use(express.static('public'));
const routes = require('./app/routes'); // атвоматически берется index.js
routes(app);
// на каком порту запускается приложение
app.listen(80);
console.log("Server started at 80");