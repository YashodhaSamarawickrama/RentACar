const mongoose = require('../mongoose.config');
const Schema = mongoose.Schema;

const PaymentSchema = new Schema({

    paymentid:{
        type: String,
        require: true
    },
    date: {
        type: String,
        require: true
    },
    userid: {
        type: String,
        require: true
    },
    status: {
        type: String,
        require: true
    }

});

mongoose.model('Payment', PaymentSchema);

module.exports = mongoose;