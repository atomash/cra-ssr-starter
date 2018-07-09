import mongoose from 'mongoose';

export const connectingMongo = mongo => {
    mongoose.connect(mongo, {
        useMongoClient: true,
    });
    mongoose.Promise = global.Promise;
    mongoose.connection.on('connected', () => {
        console.log("Connected to database");
    });
    mongoose.connection.on('error', (err) => {
        console.log('Connection error: ' + err);
    });
    mongoose.connection.on('disconnected', () => {
        console.log('database disconnected');
    });
}

export default mongoose
