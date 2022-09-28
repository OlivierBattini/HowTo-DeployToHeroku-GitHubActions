const { Client } = require('pg');

const env = require('./config/env');

// From : https://devcenter.heroku.com/articles/connecting-heroku-postgres#connecting-in-node-js

const client = new Client({
  connectionString: env.getDatabaseUrl(),
  ssl: {
    rejectUnauthorized: false
  }
});

client.connect();

client.query('SELECT table_schema,table_name FROM information_schema.tables;', (err, res) => {
  if (err) throw err;
  for (let row of res.rows) {
    console.log(JSON.stringify(row));
  }
  client.end();
});