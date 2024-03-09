import mongoose from 'mongoose';
import logger from '../utils/logger';
import { ENV } from './env';

const URL: string = ENV.USE_REMOTE_DB
    ? ENV.MONGO_URL.replace('<password>', ENV.MONGO_PASSWORD)
    : ENV.LOCAL_MONGO_URL;

const connectToDB = () =>
    mongoose
        .connect(URL)
        .then(() => console.log('Connected to Database!'))
        .catch(err => {
            logger.error('failed to connect to mongo', 'mongo-connection', err);
            console.error('Cannot connect to Database: ', err);
            process.exit();
        });

export default connectToDB;
