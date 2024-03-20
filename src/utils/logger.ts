import * as jwt from 'jsonwebtoken';
import * as winston from 'winston';
import { ENV } from '../config/env';
import JWT from '../config/jwt';

const formatConfig = winston.format.combine(
    winston.format.timestamp({
        format: 'YYYY-MM-DD HH:mm:ss',
    }),
    winston.format.simple(),
    winston.format.json(),
    winston.format.prettyPrint(),
    winston.format.errors({ stack: true })
);

const createLog = (filename: string, level: string) =>
    winston.createLogger({
        transports: [
            new winston.transports.File({
                filename: `logs/${filename}.log`,
                level,
                format: formatConfig,
            }),
        ],
    });

const errorLogger = createLog('error', 'error');
const infoLogger = createLog('info', 'info');
const warnLogger = createLog('warn', 'warn');

const logger = {
    info: (message: string, path: string, error: Error) => {
        infoLogger.info(message, path, error);
        logToAdminLogger('info', message, error.message, path);
    },
    error: (message: string, path: string, error: Error) => {
        errorLogger.error(message, path, error);
        logToAdminLogger('error', message, error.message, path);
    },
    warn: (message: string, path: string, error: Error) => {
        warnLogger.warn(message, path, error);
        logToAdminLogger('warn', message, error.message, path);
    },
};

export const createAdminJWT = () => {
    const token = jwt.sign(
        { sub: 'mailer', crt: new Date(), exp: new Date(Date.now() + JWT.SHORT_ACCESS_TOKEN_TTL) },
        ENV.JWT_KEY,
        {
            expiresIn: JWT.SHORT_ACCESS_TOKEN_TTL,
        }
    );
    return token;
};

const logToAdminLogger = (level: string, title: string, description: string, path: string) => {
    const logEntry = {
        level,
        title,
        description,
        path,
        timestamp: new Date().toISOString(),
    };

    const jwt = createAdminJWT();

    const headers = {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + jwt,
        'API-TOKEN': ENV.LOGGER_TOKEN,
    };

    fetch(ENV.LOGGER_URL, {
        method: 'POST',
        body: JSON.stringify(logEntry),
        headers,
    }).catch(err => {
        errorLogger.error('Error Adding to Admin Logger', 'LogToAdminLogger', err);
    });
};

export default logger;
