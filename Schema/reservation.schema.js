const mongoose = require('../mongoose.config');
const Schema = mongoose.Schema;

const ReservationSchema = new Schema({

    reservationid:{
        type: String,
        require: true
    },
    startdate: {
        type: String,
        require: true
    },
    enddate: {
        type: String,
        require: true
    },
    paymentstatus: {
        type: String,
        require: true
    }

});

mongoose.model('Reservation', ReservationSchema);

module.exports = mongoose;