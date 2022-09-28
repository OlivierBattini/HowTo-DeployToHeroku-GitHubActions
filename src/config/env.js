require('dotenv').config();

const env = {
    getDatabaseUrl: () => {
        return process.env.DATABASE_URL;
    }
};

module.exports = env;