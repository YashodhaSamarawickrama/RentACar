const mongoose = require('../Schema/vehicle.schema');
const VehicleSchema = mongoose.model('Vehicle');

const VehicleController = function () {

    this.add = function (vehicleInstance) {
        return new Promise((resolve, reject) => {

            const vehicle = new VehicleSchema({

                vehicleid: vehicleInstance.id,
                vehicletype: vehicleInstance.vehicletype,
                vehicleName: vehicleInstance.vehicleName,
                vehicleImage: vehicleInstance.vehicleImage,
                priceperday: vehicleInstance.priceperday,
                status:vehicleInstance.status

            });
            vehicle.save().then(() => {
                resolve({'status': 200, 'message': 'added new vehicle'});
            }).catch(err => {
                reject({'status': 404, 'message': 'err:-' + err});
            })
        })
    };

    this.getAll = function () {
        return new Promise((resolve, reject) => {
            VehicleSchema.find().exec().then(data => {
                resolve({'status': 200, 'message': 'get all data', 'data': data});
            }).catch(err => {
                reject({'status': 404, 'message': 'err:-' + err});
            })
        })
    };

    this.getSingle = function (id) {
        return new Promise((resolve, reject) => {
            VehicleSchema.find({vehicleid: id}).exec().then(data => {
                resolve({'status': 200, 'message': 'get single data', 'data': data});
            }).catch(err => {
                reject({'status': 404, 'message': 'err:-' + err});
            })
        })

    };

    this.update = function (id, updateData) {
        return new Promise((resolve, reject) => {
            VehicleSchema.update({vehicleid: id}, updateData).then(() => {
                resolve({'status': 200, 'message': 'update vehicle'});
            }).catch(err => {
                reject({'status': 404, 'message': 'err:-' + err});
            })
        })
    };

    this.delete = function (id) {
        return new Promise((resolve, reject) => {
            VehicleSchema.remove({vehicleid: id}).then(() => {
                resolve({'status': 200, 'message': 'delete vehicle'});
            }).catch(err => {
                reject({'status': 404, 'message': 'err:-' + err});
            })
        })
    }

};

module.exports = new VehicleController();