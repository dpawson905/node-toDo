var mongoose = require('mongoose');

var url = process.env.MONGODB_URI;

mongoose.Promise = global.Promise;
mongoose.connect(url, {useMongoClient: true});

module.exports = {mongoose};