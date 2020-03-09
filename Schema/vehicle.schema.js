const mongoose = require('../mongoose.config');
const Schema = mongoose.Schema;

const VehicleSchema = new Schema({

    vehicleid:{
        type: String,
        require: true
    },
    vehicleType: {
        type: String,
        require: true
    },
    vehicleName: {
        type: String,
        require: true
    },
    vehicleImage: {
        type: String,
        require: true
    },
    priceperday: {
        type: String,
        require: true
    },
    status: {
        type: String,
        require: true
    },
});

mongoose.model('Vehicle', VehicleSchema);

module.exports = mongoose;