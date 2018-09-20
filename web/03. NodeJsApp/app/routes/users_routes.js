// здесь описываются функции, которые обрабатывают запросы
// на /users

// app - твое приложение, то есть это функция,
// которая принимает на вход приложение, и 
// задает ему обработку запросов на /users
module.exports = function (app) {
    app.get('/users', function (request, response) {
        console.log('Name ' + request.query.name);
        console.log('Age ' + request.query.age);
        response.sendStatus(200);
    });
};