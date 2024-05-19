import { Request, Response } from 'express';
import * as jwt from 'jsonwebtoken';
import { ENV } from '../config/env';
import catchAsync from '../helpers/catch_async';

export const createSendToken = catchAsync(async (req: Request, res: Response) => {
    const access_token = jwt.sign(
        {
            sub: 'backend',
            crt: new Date(),
        },
        ENV.BACKEND_SECRET,
        { expiresIn: '2 days' }
    );

    res.status(200).json({
        status: 'success',
        token: access_token,
    });
});
