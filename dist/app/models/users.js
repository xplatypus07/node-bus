"use strict";

var _mongoose = _interopRequireDefault(require("mongoose"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var ThirdPartyProviderSchema = new _mongoose["default"].Schema({
  provider_name: {
    type: String,
    "default": null
  },
  provider_id: {
    type: String,
    "default": null
  },
  provider_data: {
    type: {},
    "default": null
  }
});
var UserSchema = new _mongoose["default"].Schema({
  name: {
    type: String
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  email_is_verified: {
    type: Boolean,
    "default": false
  },
  password: {
    type: String
  },
  third_party_auth: [ThirdPartyProviderSchema],
  bus_number: {
    type: String
  },
  ticket_number: {
    type: Number
  },
  ticket_status: {
    type: String,
    "default": 'Not Confirmed'
  },
  date: {
    type: Date,
    "default": Date.now
  }
}, {
  strict: false
});
module.exports = User = _mongoose["default"].model("users", UserSchema);