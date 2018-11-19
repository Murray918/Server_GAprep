"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Routes;

function Routes(app) {
  app.get('/', function (req, res) {
    res.status(200).send("<h1>Hello ES6 and Node.Js! It seems that it is time to party.</h1>");
  });
}
//# sourceMappingURL=router.js.map