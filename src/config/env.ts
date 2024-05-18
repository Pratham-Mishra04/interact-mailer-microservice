import * as dotenv from 'dotenv';

dotenv.config();

type NODE_ENV = 'development' | 'production';

interface ENV_struct {
    NODE_ENV: NODE_ENV;
    PORT: number;
    FRONTEND_URL: string;
    JWT_KEY: string;
    API_TOKEN: string;
    //nodemailer config
    EMAIL_HOST: string;
    EMAIL_PORT: string;
    EMAIL_USER: string;
    EMAIL_USERNAME: string;
    EMAIL_PASS: string;
    LOGGER_URL: string;
    LOGGER_SECRET: string;
    LOGGER_TOKEN: string;

    BACKEND_TOKEN: string;
    BACKEND_SECRET: string;
    ADMIN_TOKEN: string;
    ADMIN_SECRET: string;
}

const ENV: ENV_struct = {
    NODE_ENV: 'development',
    PORT: 8000,
    FRONTEND_URL: 'http://127.0.0.1:3000',
    JWT_KEY: 'secret',
    API_TOKEN: 'token',
    EMAIL_HOST: '',
    EMAIL_PORT: '',
    EMAIL_USER: '',
    EMAIL_USERNAME: '',
    EMAIL_PASS: '',
    LOGGER_URL: '',
    LOGGER_SECRET: '',
    LOGGER_TOKEN: '',
    ADMIN_SECRET: '',
    ADMIN_TOKEN: '',
    BACKEND_SECRET: '',
    BACKEND_TOKEN: '',
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
