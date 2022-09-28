require('dotenv').config();

const env = {
    getDatabaseUrl: () => {
        return process.env.DATABASE_URL;
    }
};

export default env;