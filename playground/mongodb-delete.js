const {MongoClient, ObjectID} = require('mongodb');

var url = 'mongodb://localhost:27017/TodoAppTest';

MongoClient.connect(url, (err, db) => {
  if (err) {
    return console.log("Unable to connect to the database!");
  }
  console.log("Connected to MongoDB Server");

  // deleteMany
  // db.collection('Todos').deleteMany({text: "eat lunch"}).then((result) => {
  //   console.log(result);
  // });

  //deleteOne
  // db.collection('Todos').deleteOne({text: "eat lunch"}).then((result) => {
  //   console.log(result);
  // });

  // fineOneAndDelete
  // db.collection('Todos').findOneAndDelete({completed: false}).then((result) => {
  //   console.log(result);
  // });

  // Deleting Users
  db.collection('Users').deleteMany({name: "Darrell Pawson"}).then((result) => {
    console.log(result);
  });
  

  // db.close();
});