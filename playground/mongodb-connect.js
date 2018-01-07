// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

var url = 'mongodb://localhost:27017/TodoAppTest';

MongoClient.connect(url, (err, db) => {
  if (err) {
    return console.log("Unable to connect to the database!");
  }
  console.log("Connected to MongoDB Server");

  // db.collection('Todos').insertOne({
  //   text: 'Something to do',
  //   completed: false
  // }, (err, result) => {
  //   if (err) {
  //     return console.log("Unable to write toDo", err);
  //   }

  //   console.log(JSON.stringify(result.ops, undefined, 2));
  // });

  // db.collection('Users').insertOne({
  //   name: 'Darrell Pawson',
  //   age: 32,
  //   location: '707 Bennett St Asheboro NC 27203'
  // }, (err, result) => {
  //   if (err) {
  //     return console.log("Unable to write to the User collection");
  //   }

  //   console.log(JSON.stringify(result.ops, undefined, 2));
  // });

  db.close();
});