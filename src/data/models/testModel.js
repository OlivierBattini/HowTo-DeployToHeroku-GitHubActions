const client = require('../client');

const testModel = {
    test: () => {
        client
            .query('SELECT table_schema,table_name FROM information_schema.tables;')
            .then(result => {
                for (let row of result.rows) {
                    console.log(JSON.stringify(row));
                }
            });
    }
};

module.exports = testModel;