const mongoose = require('../Schema/user.schema');
const UserSchema = mongoose.model('User');

const UserController = function () {

    this.add = function (userInstance) {
        return new Promise((resolve, reject) => {

            const user = new UserSchema({

                userid:userInstance.userid,
                name:userInstance.name,
                email:userInstance.email,
                password:userInstance.password
            });
            patient.save().then(() => {
                resolve({'status': 200, 'message': 'added new User'});
            }).catch(err => {
                reject({'status': 404, 'message': 'err:-' + err});
            })
        })
    };

    this.getAll = function () {
        return new Promise((resolve, reject) => {
            UserSchema.find().exec().then(data => {
                resolve({'status': 200, 'message': 'get all data', 'data': data});
            }).catch(err => {
                reject({'status': 404, 'message': 'err:-' + err});
            })
        })
    };

    this.getSingle = function (id) {
        return new Promise((resolve, reject) => {
            UserSchema.find({userid: id}).exec().then(data => {
                resolve({'status': 200, 'message': 'get single data', 'data': data});
            }).catch(err => {
                reject({'status': 404, 'message': 'err:-' + err});
            })
        })

    };

    this.update = function (id, updateData) {
        return new Promise((resolve, reject) => {
            UserSchema.update({userid: id}, updateData).then(() => {
                resolve({'status': 200, 'message': 'update user'});
            }).catch(err => {
                reject({'status': 404, 'message': 'err:-' + err});
            })
        })
    };

    this.delete = function (id) {
        return new Promise((resolve, reject) => {
            UserSchema.remove({userid: id}).then(() => {
                resolve({'status': 200, 'message': 'delete user'});
            }).catch(err => {
                reject({'status': 404, 'message': 'err:-' + err});
            })
        })
    }

};

module.exports = new UserController();