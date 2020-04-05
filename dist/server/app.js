"use strict";

var _express = _interopRequireDefault(require("express"));

var _helmet = _interopRequireDefault(require("helmet"));

var _xssClean = _interopRequireDefault(require("xss-clean"));

var _expressMongoSanitize = _interopRequireDefault(require("express-mongo-sanitize"));

var _compression = _interopRequireDefault(require("compression"));

var _cors = _interopRequireDefault(require("cors"));

var _config = _interopRequireDefault(require("../config/config"));

var _morgan = _interopRequireDefault(require("../config/morgan"));

var _index = _interopRequireDefault(require("../routes/index"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var app = (0, _express["default"])();

if (_config["default"].env !== 'test') {
  app.use(_morgan["default"].successHandler);
  app.use(_morgan["default"].errorHandler);
}

app.use((0, _helmet["default"])());
app.use(_express["default"].json());
app.use(_express["default"].urlencoded({
  extended: true
}));
app.use((0, _xssClean["default"])());
app.use((0, _expressMongoSanitize["default"])());
app.use((0, _compression["default"])());
app.use((0, _cors["default"])());
app.options('*', (0, _cors["default"])());
app.use('/', _index["default"]);
module.exports = app;