'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _morgan = require('morgan');

var _morgan2 = _interopRequireDefault(_morgan);

var _cors = require('cors');

var _cors2 = _interopRequireDefault(_cors);

var _router = require('./router');

var _router2 = _interopRequireDefault(_router);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();
var port = process.env.PORT || '8080';

//use morgan for logging Cors for cross origin Express for server and Routes for routing
app.use((0, _cors2.default)());
app.use((0, _express2.default)());
app.use((0, _morgan2.default)('dev'));
(0, _router2.default)(app);

//initiate the server

app.listen(port, function () {
    console.log('Congrats!! Server listening on port ' + port);
    // console.log(server.address())
});