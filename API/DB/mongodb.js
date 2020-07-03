const {MongoMemoryServer} = require('mongodb-memory-server');
const {MongoClient} = require("mongodb");
const mongoose= require('mongoose');


let mongoDatabase = null;

async function startDatabase()
{
    debugger;
    const mongoServer = new MongoMemoryServer();
    const mongoDBUrl = await mongoServer.getConnectionString();
    console.log(mongoDBUrl);
    const mongoConnection = await mongoose.connect(mongoDBUrl,{useNewUrlParser:true});   
    
    mongoDatabase =  mongoConnection.connection.db;
}

async function getDatabase() {
    if (!mongoDatabase) await startDatabase();    
    return mongoDatabase;
  }

  module.exports = {
    getDatabase,
    startDatabase
  };