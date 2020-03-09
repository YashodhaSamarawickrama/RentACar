const mongoose = require('../mongoose.config');
const Schema = mongoose.Schema;

const UserSchema = new Schema({

    userid: {
        type: String,
        require: true
    },  
    name: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true
    },
    password: {
        type: String,
        require: true
    }

});

mongoose.model('User', UserSchema);

module.exports = mongoose;