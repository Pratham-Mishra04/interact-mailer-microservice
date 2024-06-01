/* eslint-disable no-underscore-dangle */
import { NextFunction, Request, Response } from 'express';
import { ENV } from '../config/env';
import AppError from '../helpers/app_error';
import logger from '../utils/logger';

const CastErrorHandler = err => {
    const message = `Invalid ${err.path}: ${err.value}.`;
    return new AppError(message, 400);
};

const DuplicateErrorHandler = err => {
    const [field, input] = [Object.keys(err.keyValue)[0], Object.values(err.keyValue)[0]];
    const message = `Duplicate ${field}: ${input}`;
    return new AppError(message, 400);
};

const JWTErrorHandler = (err, errName) => {
    if (errName === 'invalid') return new AppError('Invalid Token. Please Login Again', 401);
    return new AppError('Token Expired. Please Login Again', 401);
};

const JoiErrorHandler = err => {
    let message = '';
    err.details.forEach(obj => {
        message += `${obj.message} `;
    });
    return new AppError(message, 400);
};

interface ExtendedError extends AppError {
    _message?: string;
    isJoi?: boolean;
    code?: number;
}

const ErrorController = (error: Error, req: Request, res: Response, next: NextFunction) => {
    const err = error as ExtendedError;

    err.statusCode = err.statusCode || 500;
    err.status = err.status || 'error';

    if (ENV.NODE_ENV === 'development') {
        res.status(err.statusCode).json({
            status: err.status,
            error: err,
            message: err.message,
            stack: err.stack,
        });
    } else if (ENV.NODE_ENV === 'production') {
        let error = { ...err, message: err.message, name: err.name };
        if (err?.name === 'CastError') error = CastErrorHandler(error);
        if (err?.code === 11000) error = DuplicateErrorHandler(error);
        if (err?.name === 'JsonWebTokenError') error = JWTErrorHandler(error, 'invalid');
        if (err?.name === 'TokenExpiredError') error = JWTErrorHandler(error, 'expired');
        if (err?.isJoi) error = JoiErrorHandler(error);

        if (error.isOperationError) {
            res.status(error.statusCode).json({
                status: error.status,
                message: error.message,
            });
        } else {
            logger.error(error.message, req.path, error);
            res.status(500).json({
                status: 'error',
                message: 'Internal Server Error',
            });
        }
    }
};

export default ErrorController;
