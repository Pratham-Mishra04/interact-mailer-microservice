import * as dotenv from 'dotenv';

dotenv.config();

type NODE_ENV = 'development' | 'production';

interface ENV_struct {
    NODE_ENV: NODE_ENV;
    PORT: number;
    FRONTEND_URL: string;
    JWT_KEY: string;
    //mongo config
    LOCAL_MONGO_URL: string;
    MONGO_URL: string;
    MONGO_PASSWORD: string;
    USE_REMOTE_DB: boolean;
    //redis config
    REDIS_HOST: string;
    REDIS_PORT: number;
    REDIS_PASSWORD: string;
    //nodemailer config
    EMAIL_HOST: string;
    EMAIL_PORT: string;
    EMAIL_USER: string;
    EMAIL_USERNAME: string;
    EMAIL_PASS: string;
}

const ENV: ENV_struct = {
    NODE_ENV: 'development',
    PORT: 8000,
    FRONTEND_URL: 'http://127.0.0.1:3000',
    LOCAL_MONGO_URL: 'mongodb://127.0.0.1:27017',
    MONGO_URL: 'remote_mongo_url',
    MONGO_PASSWORD: 'password',
    USE_REMOTE_DB: false,
    JWT_KEY: 'secret',
    REDIS_HOST: 'localhost:6379',
    REDIS_PORT: 6379,
    REDIS_PASSWORD: 'password',
    EMAIL_HOST: '',
    EMAIL_PORT: '',
    EMAIL_USER: '',
    EMAIL_USERNAME: '',
    EMAIL_PASS: '',
};

const configENV = () => {
    Object.keys(ENV).forEach(envKey => {
        const key = envKey;
        const val = process.env[key];

        if (val === undefined) {
            console.error(`Fatal Error: Missing required environment variable: ${key}`);
            process.exit();
        }

        ENV[key] = val;
    });
};

export { ENV, configENV };
