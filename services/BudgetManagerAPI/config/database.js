module.exports = (mongoose, config) => {
    const database = mongoose.connection;
    mongoose.Promise = Promise;

    mongoose.connect(config.database, {
        promiseLibrary: global.Promise,
        user: process.env.MONGO_DB_USER,
        pass: process.env.MONGO_DB_AUTH
    });

    database.on('error', (error) => {
        console.log(`Connection to BudgetManager database failed: ${error}`);
    });
    
    database.on('connected', () => {
        console.log('Connected to BudgetManager database');
    });
    
    database.on('disconnected', () => {
        console.log('Disconnected from BudgetManager database');
    });
    
    database.on('SIGINT', () => { 
        database.close(() => {
            console.log('BudgetManager terminated, connection closed');
            process.exit(0);
        });
    });
}