module.exports = {
    secret: process.env.APP_SECRET,
    session: { session: false },
    database: 'mongodb://' + process.env.MONGO_DB_HOST + ':' + process.env.MONGO_DB_PORT + '/budgetmanager'
};