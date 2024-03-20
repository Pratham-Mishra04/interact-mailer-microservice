/* eslint-disable no-underscore-dangle */
import { Request, Response } from 'express';
import * as jwt from 'jsonwebtoken';
import { ENV } from '../config/env';
import catchAsync from '../helpers/catch_async';
// import User, { UserDocument } from '../models/user';
import JWT from '../config/jwt';

export const createSendToken = (user: UserDocument, statusCode: number, res: Response) => {
    const access_token = jwt.sign(
        { sub: user._id, crt: new Date(), exp: new Date(Date.now() + JWT.ACCESS_TOKEN_TTL) },
        ENV.JWT_KEY,
        {
            expiresIn: JWT.ACCESS_TOKEN_TTL,
        }
    );

    const refresh_token = jwt.sign(
        { sub: user._id, crt: new Date(), exp: new Date(Date.now() + JWT.REFRESH_TOKEN_TTL) },
        ENV.JWT_KEY,
        {
            expiresIn: JWT.REFRESH_TOKEN_TTL,
        }
    );
    user.password = undefined;

    const cookieSettings = {
        expires: new Date(Date.now() + JWT.REFRESH_TOKEN_TTL * 1000),
        httpOnly: true,
        secure: false,
    };

    if (ENV.NODE_ENV == 'production') cookieSettings.secure = true;

    res.cookie('refresh_token', refresh_token, cookieSettings);
    res.status(statusCode).json({
        status: 'success',
        token: access_token,
        user,
    });
};

// export const signup = catchAsync(async (req: Request, res: Response) => {
//     const newUser = await User.create(req.body);
//     createSendToken(newUser, 201, res);
// });

// export const login = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
//     const { username, password } = req.body;

//     if (!username || !password)
//         return next(new AppError("Username or Password doesn't exists", 400));
//     const user = await User.findOne({ username });

//     if (!user || !(await user.correctPassword(password)))
//         throw new AppError('Incorrect Username or Password', 400);
//     createSendToken(user, 200, res);
// });

export const logout = catchAsync(async (req: Request, res: Response) => {
    res.cookie('refresh_token', 'logout', {
        expires: new Date(Date.now() + 1 * 1000),
        httpOnly: true,
    });
    res.status(204).json({
        status: 'success',
        requestedAt: req.requestedAt,
        message: 'User Logged Out',
    });
});

// export const refresh = catchAsync(async (req: Request, res: Response) => {
//     const reqBody = req.body;
//     const accessTokenString = reqBody.token;
//     const accessToken = jwt.verify(accessTokenString, ENV.JWT_KEY) as jwt.JwtPayload;

//     if (!accessToken || !accessToken.sub) {
//         return res.status(401).json({ status: 'error', message: 'Invalid access token' });
//     }

//     const userId = accessToken.sub;
//     const user = await User.findById(userId);

//     if (!user || user.id === undefined) {
//         return res
//             .status(401)
//             .json({ status: 'error', message: 'User of this token no longer exists' });
//     }

//     const refreshTokenString = req.cookies.refresh_token;
//     if (!refreshTokenString) {
//         return res.status(401).json({ status: 'error', message: 'Refresh token not provided' });
//     }

//     const refreshToken = jwt.verify(refreshTokenString, ENV.JWT_KEY) as jwt.JwtPayload;
//     if (!refreshToken) {
//         return res.status(401).json({ status: 'error', message: 'Invalid refresh token' });
//     }

//     if (refreshToken.sub !== userId) {
//         return res.status(401).json({ status: 'error', message: 'Mismatched Tokens' });
//     }

//     if (Date.now() > refreshToken.exp! * 1000) {
//         return res.status(401).json({ status: 'error', message: 'Refresh token expired' });
//     }

//     const access_token = jwt.sign({ id: user._id }, ENV.JWT_KEY, {
//         expiresIn: JWT.ACCESS_TOKEN_TTL,
//     });

//     return res.status(200).json({ status: 'success', token: access_token });
// });
