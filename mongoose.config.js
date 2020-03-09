const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/rentacar', (err) => {
    if (err) {
        console.log(err);
        process.exit(-1);
    }
    console.log('Connected to the DB');
});

module.exports = mongoose;