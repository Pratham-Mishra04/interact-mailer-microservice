import { NextFunction, Request, Response } from 'express';
import * as jwt from 'jsonwebtoken';
import { ENV } from '../config/env';
import AppError from '../helpers/app_error';
import catchAsync from '../helpers/catch_async';

const jwtVerifyPromisified = (
    token: string,
    secret: string
): Promise<jwt.JwtPayload | undefined> => {
    return new Promise((resolve, reject) => {
        jwt.verify(token, secret, {}, (err, payload) => {
            if (err) {
                reject(err);
            } else {
                resolve(payload as jwt.JwtPayload);
            }
        });
    });
};

export const verifyToken = async (
    tokenString: string,
    SECRET: string,
    resource: string
): Promise<AppError | null> => {
    if (!tokenString) return new AppError('Authorization Token Not Found.', 401);

    const decoded: jwt.JwtPayload | undefined = await jwtVerifyPromisified(tokenString, SECRET);

    if (decoded?.sub != resource) return new AppError('Invalid TOKEN', 403);

    if (new Date() > new Date(decoded?.exp || new Date()))
        return new AppError('Token Expired, Please Login again', 403);

    return null;
};

export const protect = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
    let token: string | undefined;

    if (req.headers.authorization && req.headers.authorization.startsWith('Bearer'))
        token = req.headers.authorization.split(' ')[1];

    if (!token) return next(new AppError('Not Authorized to use this API.', 401));

    const API_TOKEN = req.headers['API_TOKEN'] as string;
    if (!API_TOKEN) return next(new AppError('Not Authorized to use this API.', 401));

    let error: AppError | null;

    switch (API_TOKEN) {
        case ENV.BACKEND_TOKEN:
            error = await verifyToken(token, ENV.BACKEND_SECRET, 'backend');
            break;
        case ENV.ADMIN_TOKEN:
            error = await verifyToken(token, ENV.ADMIN_SECRET, 'admin');
            break;
        default:
            error = new AppError('Not authorized to use this api, Invalid API token', 403);
    }

    if (error) next(error);
    next();
});
