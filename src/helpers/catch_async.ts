/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-unused-vars */
import { NextFunction, Request, Response } from 'express';

type asyncFunction = (req: Request, res: Response, next: NextFunction) => any;

const catchAsync = (fn: asyncFunction) => (req: Request, res: Response, next: NextFunction) => {
    fn(req, res, next).catch((err: Error) => {
        // logger.info(err.message, req.path, err);
        next(err);
    });
};

export default catchAsync;
