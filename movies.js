const express = require('express');
const router = express.Router();
const Movie = require('../../models/Movie')

//@route GET

router.get('/', (req, res) => {
    Movie.find().then(movies => res.json(movies));

})

//@route POST

router.post('/', (req, res) => {
    const newMovie = new Movie({
        title: req.body.title,
        genre: req.body.genre,
        numberInStock: req.body.numberInStock,
        dailyRentalRate: req.body.dailyRentalRate,

    });

    newMovie.save().then((movie) => res.json(movie)).catch(err => res.send('Error'));
});

//@route DELETE api/items/:id
//@desc delete an item
//@access Public

router.delete('/:id', (req, res) => {
    Movie.findById(req.params.id)
        .then(movie => movie.remove().then(() => res.json({
            success: true
        }))).catch(err => res.status(404).json({
            success: false
        }))
});
module.exports = router;