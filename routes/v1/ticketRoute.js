import express from 'express';
import ticketController from '../../app/controllers/ticketController';

const router = express.Router();

router
  .route('/')
  .get((request, response) => {
    response.json({
      status: 'API is Working',
      message: 'Welcome to bus ticket booking',
    });
  });

router.route('/tickets')
    .get(ticketController.index)
    .post(ticketController.new);

    router.route('/tickets/:ticket_id')
    .get(ticketController.view)
    .patch(ticketController.update)
    .put(ticketController.update)
    .delete(ticketController.delete);

module.exports = router;
