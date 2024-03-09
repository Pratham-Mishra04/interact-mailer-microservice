import * as winston from 'winston';

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
    info: (message: string, path: string, error: Error) => infoLogger.info(message, path, error),
    error: (message: string, path: string, error: Error) => errorLogger.error(message, path, error),
    warn: (message: string, path: string, error: Error) => warnLogger.warn(message, path, error),
};

export default logger;
