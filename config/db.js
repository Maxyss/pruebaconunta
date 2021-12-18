const mongoose = require('mongoose');
const URL = 'mongodb+srv://maxy01:maxi2011@cluster0.bt6dc.mongodb.net/meanproductos';

mongoose.connect(URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(db => console.log('MongoDB conectada pedazo de gato'))
    .catch(error => console.log(error));

module.exports = mongoose;