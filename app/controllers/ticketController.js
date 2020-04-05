import Ticket from '../models/ticketModel';

exports.index = function (req, res) {
  Ticket.get(function (err, tickets) {
    if (err) {
      res.json({
        status: "error",
        message: err,
      });
    }
    res.json({
      status: "success",
      message: "Tickets retrieved successfully",
      data: tickets
    });
  });
};


exports.new = function (req, res) {
  let ticketUser = new Ticket();
  ticketUser.name = req.body.name ? req.body.name : ticketUser.name;
  ticketUser.gender = req.body.gender;
  ticketUser.email = req.body.email;
  ticketUser.phone = req.body.phone;
  ticketUser.bus_number = req.body.bus_number;
  ticketUser.ticket_number = req.body.ticket_number;
  ticketUser.ticket_status = req.body.ticket_status;
  ticketUser.save(function (err) {

    res.json({
      message: 'New ticket booked!',
      data: ticketUser
    });
  });
};

exports.view = function (req, res) {
  Ticket.findById(req.params.ticket_id, function (err, ticket) {
    if (err)
      res.send(err);
    res.json({
      message: 'Booking details loading..',
      data: ticket
    });
  });
};

exports.update = function (req, res) {
  Ticket.findById(req.params.ticket_id, function (err, ticket) {
    if (err)
      res.send(err);
    ticketUser.name = req.body.name ? req.body.name : ticketUser.name;
    ticketUser.gender = req.body.gender;
    ticketUser.email = req.body.email;
    ticketUser.phone = req.body.phone;
    ticketUser.bus_number = req.body.bus_number;
    ticketUser.ticket_number = req.body.ticket_number;
    ticketUser.ticket_status = req.body.ticket_status;
    ticket.save(function (err) {
      if (err)
        res.json(err);
      res.json({
        message: 'Booking Info updated',
        data: ticket
      });
    });
  });
};

exports.delete = function (req, res) {
  Ticket.remove({
    _id: req.params.ticket_id
  }, function (err, ticket) {
    if (err)
      res.send(err);
    res.json({
      status: "success",
      message: 'Ticket opened'
    });
  });
};
