import { NextFunction, Request, Response } from 'express';
import * as jwt from 'jsonwebtoken';
import { ENV } from '../config/env';
import AppError from '../helpers/app_error';
import catchAsync from '../helpers/catch_async';

const jwtVerifyPromisified = (token: string, secret: string) => {
    return new Promise((resolve, reject) => {
        jwt.verify(token, secret, {}, (err, payload) => {
            if (err) {
                reject(err);
            } else {
                resolve(payload);
            }
        });
    });
};

export const protect = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
    let token: string;

    if (req.headers.authorization && req.headers.authorization.startsWith('Bearer'))
        token = req.headers.authorization.split(' ')[1];
    if (!token) return next(new AppError('Authorization Token Not Found.', 401));

    const decoded: jwt.JwtPayload = await jwtVerifyPromisified(token, ENV.JWT_KEY);

    if (decoded.sub != ENV.API_TOKEN) return next(new AppError('Invalid TOKEN', 403));

    if (new Date() > new Date(decoded.exp))
        return next(new AppError('Token Expired, Please Login again', 403));

    next();
});
