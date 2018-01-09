const {SHA256} = require('crypto-js');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

var password = '123abc!';

bcrypt.genSalt(10, (err, salt) => {
  bcrypt.hash(password, salt, (err, hash) => {
    console.log(hash);
  });
});

var hashedPassword = '$2a$10$F9cmOGO0xOW99moO5QhQh.wAL19vMTW5M7C0HseW.TWoqTf4Z7cs.';

bcrypt.compare(password, hashedPassword, (err, res) => {
  console.log(res);
});