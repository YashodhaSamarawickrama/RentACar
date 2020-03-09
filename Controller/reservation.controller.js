const mongoose = require('../Schema/researvation.schema');
const ReservationSchema = mongoose.model('Reservation');

const ReservationController = function () {

    this.add = function (reservationInstance) {
        return new Promise((resolve, reject) => {

            const reservation = new ReservationSchema({

                reservationid: reservationInstance.reservationid,
                startdate:reservationInstance.startdate,
                enddate:reservationInstance.enddate,
                paymentstatus:reservationInstance.paymentstatus
               
            });
            treatment.save().then(() => {
                resolve({'status': 200, 'message': 'added new reservation'});
            }).catch(err => {
                reject({'status': 404, 'message': 'err:-' + err});
            })
        })
    };

    this.getAll = function () {
        return new Promise((resolve, reject) => {
            TreatmentSchema.find().exec().then(data => {
                resolve({'status': 200, 'message': 'get all data', 'data': data});
            }).catch(err => {
                reject({'status': 404, 'message': 'err:-' + err});
            })
        })
    };

    this.getSingle = function (id) {
        return new Promise((resolve, reject) => {
            TreatmentSchema.find({reservationid: id}).exec().then(data => {
                resolve({'status': 200, 'message': 'get single data', 'data': data});
            }).catch(err => {
                reject({'status': 404, 'message': 'err:-' + err});
            })
        })

    };

    this.update = function (id, updateData) {
        return new Promise((resolve, reject) => {
            TreatmentSchema.update({reservationid: id}, updateData).then(() => {
                resolve({'status': 200, 'message': 'update Treatment'});
            }).catch(err => {
                reject({'status': 404, 'message': 'err:-' + err});
            })
        })
    };

    this.delete = function (id) {
        return new Promise((resolve, reject) => {
            TreatmentSchema.remove({reservationid: id}).then(() => {
                resolve({'status': 200, 'message': 'delete Treatment'});
            }).catch(err => {
                reject({'status': 404, 'message': 'err:-' + err});
            })
        })
    }

};

module.exports = new ReservationController();