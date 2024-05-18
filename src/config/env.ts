import * as dotenv from 'dotenv';

dotenv.config();

type NODE_ENV = 'development' | 'production';

interface ENV_struct {
    NODE_ENV: NODE_ENV;
    PORT: number;
    JWT_KEY: string;
    //nodemailer config
    MAIL_USER: string;
    MAIL_KEY: string;
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
    JWT_KEY: 'secret',
    MAIL_USER: '',
    MAIL_KEY: '',
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
