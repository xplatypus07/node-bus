"use strict";

var _express = _interopRequireDefault(require("express"));

var _ticketRoute = _interopRequireDefault(require("./v1/ticketRoute"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var router = _express["default"].Router();

router.use('/', _ticketRoute["default"]);
module.exports = router;