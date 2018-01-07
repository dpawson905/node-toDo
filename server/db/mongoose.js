var mongoose = require('mongoose');

var url = process.env.DATABASEURL || 'mongodb://localhost:27017/TodoApp_backup';

mongoose.Promise = global.Promise;
mongoose.connect(url);

module.exports = {mongoose};