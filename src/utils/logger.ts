import * as jwt from 'jsonwebtoken';
import * as winston from 'winston';
import { ENV } from '../config/env';

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
    info: (message: string, path: string, description?: string, error?: Error) => {
        infoLogger.info(message, path, error);
        logToAdminLogger('info', message, description || error?.message || '', path);
    },
    error: (message: string, path: string, error: Error) => {
        errorLogger.error(message, path, error);

        const formattedErrorMessage = `Error: ${error.message} \n Stack: ${
            error.stack || 'No stack trace available'
        }`;
        logToAdminLogger('error', message, formattedErrorMessage, path);
    },
    warn: (message: string, path: string, error: Error) => {
        warnLogger.warn(message, path, error);
        logToAdminLogger('warn', message, error.message, path);
    },
};

const createAdminJWT = () => {
    const token = jwt.sign(
        {
            sub: 'mailer',
            crt: new Date(),
        },
        ENV.LOGGER_SECRET,
        { expiresIn: '1 min' }
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
        'api-token': ENV.LOGGER_TOKEN,
        Origin: ENV.MAILER_URL,
    };

    fetch(ENV.LOGGER_URL, {
        method: 'POST',
        body: JSON.stringify(logEntry),
        headers,
    })
        .then(res => {
            if (res.status != 200)
                errorLogger.error(
                    'Error Adding to Admin Logger',
                    'LogToAdminLogger',
                    res.statusText
                );
        })
        .catch(err => {
            errorLogger.error('Error Adding to Admin Logger', 'LogToAdminLogger', err);
        });
};

export default logger;
