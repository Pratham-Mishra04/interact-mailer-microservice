import {
    RedisClientOptions,
    RedisClientType,
    RedisFunctions,
    RedisModules,
    RedisScripts,
    createClient,
} from 'redis';
import logger from '../utils/logger';
import { ENV } from './env';

var REDIS_CLIENT: RedisClientType<RedisModules, RedisFunctions, RedisScripts>;

export const connectToCache = () => {
    const OPTIONS: RedisClientOptions = {
        socket: {
            host: ENV.REDIS_HOST,
            port: ENV.REDIS_PORT,
        },
        password: ENV.REDIS_PASSWORD,
        database: 0,
    };

    REDIS_CLIENT = createClient(OPTIONS);

    REDIS_CLIENT.on('connect', () => {
        console.log('Connected to redis!');
    });

    REDIS_CLIENT.on('error', err => {
        logger.error('failed to connect to redis', 'redis-connection', err);
        console.error('Redis connection Error:', err);
    });
};

export default REDIS_CLIENT;
