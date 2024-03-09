import { Request, Response } from 'express';
import catchAsync from '../helpers/catch_async';
import Nodemailer from '../mailers/nodemailer';

const getTemplateNameFromType = (type: number) => {
    switch (type) {
        case 1:
            return '';
        default:
            return '';
    }
};

export const sendMail = catchAsync(async (req: Request, res: Response) => {
    const mailer = Nodemailer;
    await mailer({
        email: req.body.email,
        subject: req.body.subject,
        body: req.body.body,
        templateName: getTemplateNameFromType(req.body.type),
    });
    res.status(200).json({
        status: 'success',
        requestedAt: req.requestedAt,
    });
});
