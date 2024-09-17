/* global moment */

var moment = require('moment'); 

console.log(moment().format('MMMM Do YYYY, h:mm:ss a'));

var bob = {
    _name: "Bob",
    _friends: [],
    printFriends() {
      this._friends.forEach(f =>
        console.log(this._name + " knows " + f));
    }
  };
