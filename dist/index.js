"use strict";

var _mongoose = _interopRequireDefault(require("mongoose"));

var _app = _interopRequireDefault(require("./server/app"));

var _config = _interopRequireDefault(require("./config/config"));

var _logger = _interopRequireDefault(require("./config/logger"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var server;

_mongoose["default"].connect(_config["default"].mongoose.url, _config["default"].mongoose.options).then(function () {
  _logger["default"].info('Connected to MongoDB');

  server = _app["default"].listen(_config["default"].port, function () {
    _logger["default"].info("Listening to port ".concat(_config["default"].port));
  });
});

var exitHandler = function exitHandler() {
  if (server) {
    server.close(function () {
      _logger["default"].info('Server closed');

      process.exit(1);
    });
  } else {
    process.exit(1);
  }
};

var unexpectedErrorHandler = function unexpectedErrorHandler(error) {
  _logger["default"].error(error);

  exitHandler();
};

process.on('uncaughtException', unexpectedErrorHandler);
process.on('unhandledRejection', unexpectedErrorHandler);
process.on('SIGTERM', function () {
  _logger["default"].info('SIGTERM received');

  if (server) {
    server.close();
  }
});