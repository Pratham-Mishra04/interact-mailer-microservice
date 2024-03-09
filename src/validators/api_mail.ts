import * as Joi from 'joi';
import catchAsync from '../helpers/catch_async';

const apiMailSchema = Joi.object({
    name: Joi.string()
        .pattern(/^[A-Za-z]+$/, 'alpha')
        .trim()
        .required(),
    email: Joi.string().email().trim().lowercase().required(),
    username: Joi.string().trim().lowercase().required(),
    password: Joi.string().min(8).required(),
    confirmPassword: Joi.ref('password'),
    passwordChangedAt: Joi.forbidden(),
    passwordResetToken: Joi.forbidden(),
    passwordResetTokenExpiresIn: Joi.forbidden(),
});

export const userCreateValidator = catchAsync(async (req, res, next) => {
    try {
        await apiMailSchema.validateAsync(req.body);
        next();
    } catch (error) {
        next(error);
    }
});
