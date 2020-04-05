import  express from 'express';
import userRoute from './v1/ticketRoute';

const router = express.Router();

router.use('/', userRoute);

module.exports = router;
