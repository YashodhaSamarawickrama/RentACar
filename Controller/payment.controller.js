const mongoose = require('../Schema/payment.schema');
const PaymentSchema = mongoose.model('Payment');

const PaymentController = function () {

    this.add = function (paymentInstance) {
        return new Promise((resolve, reject) => {

            const payment = new PaymentSchema({

                paymentid: paymentInstance.paymentid,
                date:paymentInstance.date,
                userid:paymentInstance.userid,
                status:paymentInstance.status
           
            });
            payment.save().then(() => {
                resolve({'status': 200, 'message': 'added new payment'});
            }).catch(err => {
                reject({'status': 404, 'message': 'err:-' + err});
            })
        })
    };

    this.getAll = function () {
        return new Promise((resolve, reject) => {
            PaymentSchema.find().exec().then(data => {
                resolve({'status': 200, 'message': 'get all data', 'data': data});
            }).catch(err => {
                reject({'status': 404, 'message': 'err:-' + err});
            })
        })
    };

    this.getSingle = function (id) {
        return new Promise((resolve, reject) => {
            PaymentSchema.find({paymentid: id}).exec().then(data => {
                resolve({'status': 200, 'message': 'get single data', 'data': data});
            }).catch(err => {
                reject({'status': 404, 'message': 'err:-' + err});
            })
        })

    };

    this.update = function (id, updateData) {
        return new Promise((resolve, reject) => {
            PaymentSchema.update({paymentid: id}, updateData).then(() => {
                resolve({'status': 200, 'message': 'update questionnaire'});
            }).catch(err => {
                reject({'status': 404, 'message': 'err:-' + err});
            })
        })
    };

    this.delete = function (id) {
        return new Promise((resolve, reject) => {
            PaymentSchema.remove({paymentid: id}).then(() => {
                resolve({'status': 200, 'message': 'delete questionnaire'});
            }).catch(err => {
                reject({'status': 404, 'message': 'err:-' + err});
            })
        })
    }

};

module.exports = new PaymentController();