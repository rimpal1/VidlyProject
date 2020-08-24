const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MovieSchema = new Schema({
    title: {
        type: String,
        require: true
    },

    genre: {
        type: String,
        default: 'Movie'
    },

    numberInStock: {
        type: Number,

    },
    dailyRentalRate: {
        type: Number,


    }

});

module.exports = Movie = mongoose.model('movie', MovieSchema);