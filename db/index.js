const { Client } = require("pg");
let connectionString = "postgres://postgres@localhost:5432/fishes-app"
const client = new Client(connectionString);

client.connect();

module.exports = client;