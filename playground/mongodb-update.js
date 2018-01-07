const {MongoClient, ObjectID} = require('mongodb');

var url = 'mongodb://localhost:27017/TodoAppTest';

MongoClient.connect(url, (err, db) => {
  if (err) {
    return console.log("Unable to connect to the database!");
  }
  console.log("Connected to MongoDB Server");

  db.collection('Todos').findOneAndUpdate({
    _id: new ObjectID('5a519e5590372700e82e22a6')
  }, {
    $set: {
      completed: true
    }
  }, {
    $returnOriginal: false
  }).then((result) => {
    console.log(result);
  });
  

  // db.close();
});