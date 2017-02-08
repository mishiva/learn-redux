const Address = require('../models').Address;
const User = require('../models').User;
const _ = require('lodash');

function findUsers(offset) {
  return User.findAll({ limit: 5, offset: offset, attributes: ['id'] })
}

function getIds(res) {
  return Promise.resolve(_.map(res, 'id'))
}

function createAddresses(ids) {
  const userIds =_.map(ids, (id) => {
    return {'userId': id}
  })
  console.log(userIds)
  Address.bulkCreate(userIds)
}

function end(res) {
  console.log("end");
}

var fnlist = [ findUsers, getIds, createAddresses, end];

function pseries(max) {  
  var p = Promise.resolve(max);
  return fnlist.reduce(function(pacc, fn) {
    return pacc = pacc.then(fn);
  }, p);
}

let offset = 5;

User.count().then(count => {
  let usersCount = count; 
  const max = usersCount < 5 ? usersCount : 5;
  while (offset <= usersCount) {
    pseries(offset)
    offset += max;
  }
})
