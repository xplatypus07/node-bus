"use strict";

var _mongoose = _interopRequireDefault(require("mongoose"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var ticketStatusSchema = _mongoose["default"].Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  gender: String,
  phone: String,
  bus_number: {
    type: String
  },
  ticket_number: {
    type: Number
  },
  ticket_status: {
    type: String,
    "default": 'closed'
  },
  create_date: {
    type: Date,
    "default": Date.now
  }
});

var Ticket = module.exports = _mongoose["default"].model('contact', ticketStatusSchema);

module.exports.get = function (callback, limit) {
  Ticket.find(callback).limit(limit);
};