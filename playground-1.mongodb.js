/* global use, db */
// MongoDB Playground
// Use Ctrl+Space inside a snippet or a string literal to trigger completions.

const database = 'creditPaumier';
const collection = 'vue';

use(database);

//        int accountNumber{get;set;} int assets{get;set;} public int idClient{get;set;} public String ? nameClient{get;set;}

// The prototype form to create a collection:
db.basicCollection.insertMany([
  {accountNumber: 004, assets: 6000000, idClient : 2524, nameClient : "Larry Silverluck"},
  {accountNumber: 005, assets: 0, idClient : 2525, nameClient : "Patrick Balkany"},
])

// More information on the `createCollection` command can be found at:
// https://www.mongodb.com/docs/manual/reference/method/db.createCollection/
