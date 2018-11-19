module.exports = function routes(app) {
    app.get('/', (req, res) => {
        res.status(200).send("<h1>Hello ES6 and Node.Js! It seems that it is time to party.</h1>");
    });
}