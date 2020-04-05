import mongoose from 'mongoose';
import Bus from './busModel';

const ticketSchema = mongoose.Schema({
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
    bus_number:{
        type: Number,
        default: Bus.bus_number
    },
    ticket_number:{
        type: Number
    },
    ticket_status:{
        type: String,
        default: 'closed'
    },
    create_date: {
        type: Date,
        default: Date.now
    }
});

const Ticket = module.exports = mongoose.model('ticket', ticketSchema);
module.exports.get = function (callback, limit) {
    Ticket.find(callback).limit(limit);
}