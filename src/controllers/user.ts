import { NextFunction, Request, Response } from 'express';
import AppError from '../helpers/app_error';
import catchAsync from '../helpers/catch_async';
import User from '../models/user';
import { createSendToken } from './auth';

export const getUsers = catchAsync(async (req: Request, res: Response) => {
    const users = await User.find();

    res.status(200).json({
        status: 'success',
        requestedAt: req.requestedAt,
        users,
    });
});

export const getUser = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
    const user = await User.findById(req.params.userID);
    if (!user) return next(new AppError('No user of this ID found', 400));

    res.status(200).json({
        status: 'success',
        requestedAt: req.requestedAt,
        user,
    });
});

export const updateUser = catchAsync(async (req: Request, res: Response) => {
    const user = await User.findByIdAndUpdate(req.user.id, req.body, {
        new: true,
        runValidators: true,
    });

    res.status(200).json({
        status: 'success',
        requestedAt: req.requestedAt,
        user,
    });
});

export const deleteUser = catchAsync(async (req: Request, res: Response) => {
    await User.findByIdAndUpdate(req.user.id, { active: false });
    res.status(204).json({
        status: 'success',
        requestedAt: req.requestedAt,
    });
});

export const updatePassword = catchAsync(
    async (req: Request, res: Response, next: NextFunction) => {
        const user = await User.findById(req.user.id).select('+password');
        if (!(await user.correctPassword(req.body.password)))
            return next(new AppError('Incorect Password, Please enter the corrent password', 401));

        user.password = req.body.newPassword;
        await user.save();

        createSendToken(user, 200, res);
    }
);
