import { NextFunction, Request, Response } from 'express';
import AppError from '../helpers/app_error';
import catchAsync from '../helpers/catch_async';
import User from '../models/user';
import sendEmail from '../utils/mailer';
import { createSendToken } from './auth';

export const sendResetURL = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
    const user = await User.findOne({ username: req.body.username });
    if (!user) return next(new AppError('No User of this username found', 401));

    const resetToken = user.createPasswordResetToken();

    await user.save({ validateBeforeSave: false });

    const URL = `${req.protocol}://${req.get('host')}/resetPassword/${user.id}/${resetToken}`;
    const EmailSubject = `Reset your Password!`;
    const EmailBody = `Forgot your Password? Click here to reset: ${URL}`;
    try {
        await sendEmail({
            email: user.email,
            subject: EmailSubject,
            body: EmailBody,
            template: 'forgot_password',
        });
        res.status(200).json({
            status: 'success',
            requestedAt: req.requestedAt,
            message: 'Reset URL send to registered email.',
        });
    } catch (err) {
        user.passwordResetToken = undefined;
        user.passwordResetTokenExpiresIn = undefined;
        await user.save({ validateBeforeSave: false });

        return next(new AppError('There was an error sending the email', 500));
    }
});

export const resetPassword = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
    const user = await User.findOne({ _id: req.body.userID });
    if (!user) return next(new AppError('Invalid URL', 401));

    if (!user.passwordResetToken || user.resetTokenExpired())
        return next(new AppError('URL has Expired', 401));
    if (!user.correctPasswordResetToken(req.body.token))
        return next(new AppError('Invalid URL', 401));
    if (req.body.password !== req.body.confirmPassword)
        return next(new AppError('Passwords do not match', 400));

    user.password = req.body.password;
    user.passwordResetToken = undefined;
    user.passwordResetTokenExpiresIn = undefined;
    await user.save();

    createSendToken(user, 200, res);
});
