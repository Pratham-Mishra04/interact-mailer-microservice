import * as Joi from 'joi';
import catchAsync from '../helpers/catch_async';

const requestSchema = Joi.object({
    email: Joi.string().email().trim().lowercase().required(),
    type: Joi.number().required(),
    user: Joi.object({
        name: Joi.string().required(),
        username: Joi.string().required(),
    }).required(),
    secondaryUser: Joi.object({}).optional(),
});

export const validator = catchAsync(async (req, res, next) => {
    try {
        await requestSchema.validateAsync(req.body);
        next();
    } catch (error) {
        next(error);
    }
});
