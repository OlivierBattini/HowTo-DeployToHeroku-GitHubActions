const { Client } = require('pg');

const env = require('../config/env');

const client = new Client({
    connectionString: env.getDatabaseUrl(),
    ssl: {
        rejectUnauthorized: false,
    }
});
client.connect();

module.exports = client;