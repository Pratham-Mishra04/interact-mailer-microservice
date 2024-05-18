import { Request, Response } from 'express';
import { AttachmentLike } from 'nodemailer/lib/mailer';
import { Readable } from 'nodemailer/lib/xoauth2';
import catchAsync from '../helpers/catch_async';
import Nodemailer from '../mailers/nodemailer';
import { Announcement, Comment, Event, Opening, Poll, Post, Project, User } from '../types/index';

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
    const user: User = req.body.user;
    const secondaryUser: User | undefined = req.body.secondaryUser;

    const comment: Comment | undefined = req.body.comment;
    const post: Post | undefined = req.body.post;
    const project: Project | undefined = req.body.project;
    const opening: Opening | undefined = req.body.opening;
    const event: Event | undefined = req.body.event;
    const announcement: Announcement | undefined = req.body.announcement;
    const poll: Poll | undefined = req.body.poll;

    const type = Number(req.body.type || -1);

    return html => {
        const parameterizedHTML = html
            ?.toString()
            .replace('{{User.Name}}', user.name)
            .replace('{{User.Username}}', user.username);

        switch (type) {
            case 10:
                return parameterizedHTML?.replace(
                    '{{SecondaryUser.Name}}',
                    secondaryUser?.name || ''
                );
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
