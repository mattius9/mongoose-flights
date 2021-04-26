const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const oneYear = 365*24*60*60*1000;

const destinationSchema = new Schema({
    airport: {
        type: String,
        enum: ['AUS','DFW','DEN','LAX','SAN']
    },
    arrival: Date
});

const flightSchema = new Schema({
    airline: {type: String,
        enum: ['American','Southwest','United']
    },
    airport: {type: String,
        enum: ['AUS','DFW','DEN','LAX','SAN'],
        default: 'DEN'
    },
    flightNo: {type: Number, min: 10, max: 999},
    departs: {type: Date, default: () => new Date(+new Date()+oneYear)},
    destinations: [destinationSchema]

});

module.exports = mongoose.model('Flight', flightSchema);