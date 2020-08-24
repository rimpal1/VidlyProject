const express = require('express');
const mongoose = require('mongoose');
const app = express();
const movies = require('./routes/api/movies');


app.use(express.json());

const db = require('./config/keys').mongoURI;

mongoose.connect(db, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => console.log('MongoDB connected...'))
    .catch(err => console.log(err));

app.use('/api/movies', movies)

const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`server started on port ${port}`));