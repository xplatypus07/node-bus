import express from 'express';
import helmet from 'helmet';
import xss from 'xss-clean';
import mongoSanitize from 'express-mongo-sanitize';
import compression from 'compression';
import cors from 'cors';
import config from '../config/config';
import morgan from '../config/morgan';
import routes from '../routes/index';

const app = express();

if (config.env !== 'test') {
  app.use(morgan.successHandler);
  app.use(morgan.errorHandler);
}

app.use(helmet());

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use(xss());

app.use(mongoSanitize());

app.use(compression());

app.use(cors());

app.options('*', cors());

app.use('/', routes);

module.exports = app;
