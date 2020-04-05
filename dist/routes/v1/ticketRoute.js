"use strict";

var _express = _interopRequireDefault(require("express"));

var _ticketController = _interopRequireDefault(require("../../app/controllers/ticketController"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var router = _express["default"].Router();

router.route('/').get(function (request, response) {
  response.json({
    status: 'API is Working',
    message: 'Welcome to bus ticket booking'
  });
});
router.route('/tickets').get(_ticketController["default"].index).post(_ticketController["default"]["new"]);
router.route('/tickets/:ticket_id').get(_ticketController["default"].view).patch(_ticketController["default"].update).put(_ticketController["default"].update)["delete"](_ticketController["default"]["delete"]);
module.exports = router;