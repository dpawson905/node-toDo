// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

var url = 'mongodb://localhost:27017/TodoApp';

MongoClient.connect(url, (err, db) => {
  if (err) {
    return console.log("Unable to connect to the database!");
  }
  console.log("Connected to MongoDB Server");

//  db.collection('Todos').find({
//    _id: new ObjectID('5a51924d4ee08c3408ac625a')
//  }).toArray().then((docs) => {
//   console.log('Todos');
//   console.log(JSON.stringify(docs, undefined, 2));
//  }, (err) => {
//   console.log('Unable to fetch todos', err);
//  });

 db.collection('Todos').find().count().then((count) => {
  console.log(`Todos Count: ${count}`);
 }, (err) => {
  console.log('Unable to fetch todos', err);
});

  // db.close();
});