import mongoose from 'mongoose';
import config from '../../config/config';

const busSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    bus_number:{
        type: Number
    },
    ticket:{
        type: Array[config.bus_size],
    },
    create_date: {
        type: Date,
        default: Date.now
    }
});

const Bus = module.exports = mongoose.model('bus', busSchema);
module.exports.get = function (callback, limit) {
    Bus.find(callback).limit(limit);
}