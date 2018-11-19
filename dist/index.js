"use strict";

var _express = _interopRequireDefault(require("express"));

var _morgan = _interopRequireDefault(require("morgan"));

var _cors = _interopRequireDefault(require("cors"));

var _router = _interopRequireDefault(require("./router"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express.default)();
var port = process.env.PORT || 8088; //use morgan for logging Cors for cross origin Express for server and Routes for routing

app.use((0, _cors.default)());
app.use((0, _express.default)());
app.use((0, _morgan.default)('dev'));
(0, _router.default)(app); //initiate the server

app.listen(port, function () {
  console.log("Congrats!! Server listening on port ".concat(port));
});
//# sourceMappingURL=index.js.map