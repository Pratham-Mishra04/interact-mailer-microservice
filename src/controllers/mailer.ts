import { Request, Response } from 'express';
import { AttachmentLike } from 'nodemailer/lib/mailer';
import { Readable } from 'nodemailer/lib/xoauth2';
import catchAsync from '../helpers/catch_async';
import Nodemailer from '../mailers/nodemailer';

const getTemplateNameFromType = (type: number) => {
    return `${type}.html`;
};

const getSubjectFromType = (type: number) => {
    return `${type}.html`;
};

const getParamFuncFromReq = (
    req: Request
): ((
    html: string | Readable | Buffer | AttachmentLike | undefined
) => string | Readable | Buffer | AttachmentLike | undefined) => {
    const user = req.body.user;
    const secondaryUser = req.body.secondaryUser;

    const comment = req.body.comment;
    const post = req.body.post;
    const project = req.body.project;
    const event = req.body.event;
    const announcement = req.body.announcement;
    const poll = req.body.poll;

    const type = Number(req.body.type || -1);

    return html => {
        const parameterizedHTML = html
            ?.toString()
            .replace('{{User.Name}}', user.name)
            .replace('{{User.Username}}', user.username);

        switch (type) {
            case 10:
                return parameterizedHTML?.replace('{{SecondaryUser.Name}}', secondaryUser.name);
            default:
                return parameterizedHTML;
        }
    };
};

export const sendMail = catchAsync(async (req: Request, res: Response) => {
    await Nodemailer({
        email: req.body.email,
        subject: getSubjectFromType(req.body.type),
        templateName: getTemplateNameFromType(req.body.type),
        paramFunc: getParamFuncFromReq(req),
    });
    res.status(200).json({
        status: 'success',
    });
});
