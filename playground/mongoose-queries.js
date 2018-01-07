const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

var id = '5a523957bf2b7e3544c453f1';
var userID = '5a51acdf52077427dcc1c1e1';

if (!ObjectID.isValid(id)) {
  console.log('ID not valid');
}

Todo.find({
  _id: id
}).then((todos) => {
  console.log('Todos', todos);
});

Todo.findOne({
  _id: id
}).then((todo) => {
  console.log('Todo', todo);
});

Todo.findById(id).then((todo) => {
  if (!todo) {
    return console.log('ID Not found!')
  }
  console.log('Todo by ID', todo);
}).catch((e) => console.log(e));

User.findById(userID).then((user) => {
  if (!user) {
    return console.log('ID Not found!')
  }
  console.log('User by ID', user);
}).catch((e) => console.log(e));