"use strict";

var _dotenv = _interopRequireDefault(require("dotenv"));

var _path = _interopRequireDefault(require("path"));

var _joi = _interopRequireDefault(require("@hapi/joi"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_dotenv["default"].config({
  path: _path["default"].join(__dirname, '../../.env')
});

var envVarsSchema = _joi["default"].object().keys({
  NODE_ENV: _joi["default"].string().valid('production', 'development', 'test').required(),
  PORT: _joi["default"].number()["default"](3000),
  MONGODB_URL: _joi["default"].string().required().description('Mongo DB url')
}).unknown();

var _envVarsSchema$prefs$ = envVarsSchema.prefs({
  errors: {
    label: 'key'
  }
}).validate(process.env),
    envVars = _envVarsSchema$prefs$.value,
    error = _envVarsSchema$prefs$.error;

if (error) {
  throw new Error("Config validation error: ".concat(error.message));
}

module.exports = {
  env: envVars.NODE_ENV,
  port: envVars.PORT,
  mongoose: {
    url: envVars.MONGODB_URL + (envVars.NODE_ENV === 'test' ? '-test' : ''),
    options: {
      useCreateIndex: true,
      useNewUrlParser: true,
      useUnifiedTopology: true
    }
  }
};