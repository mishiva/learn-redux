const User = require('../models').User;

let users = [];
const prefix = 'test';

for(let i=0; i<=15; i++) {
  users.push({
    first_name: 'FirstName',
    last_name: 'LastName',
    email: `${prefix + i}@${prefix}.${prefix}` ,
    password: `test${prefix}`,
    role: 'client'
  })
}
User.bulkCreate(users).then(function() {
  console.log('SUCCEEDED!')
})