import { Request, Response } from 'express';
import { AttachmentLike } from 'nodemailer/lib/mailer';
import { Readable } from 'nodemailer/lib/xoauth2';
import catchAsync from '../helpers/catch_async';
import Nodemailer from '../mailers/nodemailer';
import { Announcement, Comment, Event, Opening, Poll, Post, Project, User } from '../types/index';

const getTemplateNameFromType = (type: number): string => {
    return `${type}.html`;
};

const getSubjectFromType = (type: number): string => {
    switch (type) {
        case -1:
            return 'Unlock Early Access to Interact!';
        case 0:
            return 'Verify Your Account to Get Started on Interact';
        case 1:
            return 'Welcome to Interact!';
        case 2:
            return 'Your One-Time Password (OTP) for Interact';
        case 3:
            return 'Confirm Account Deactivation on Interact';
        case 10:
            return 'New Chat Request on Interact';

        // Engagement Section (20-22)
        case 20:
            return "Check Out What's New on Interact!";
        case 21:
            return 'We Miss You on Interact!';
        case 22:
            return 'Our Latest News: Stay Informed on Interact!';

        // Flags Section (50-56)
        case 50:
            return 'Action Needed: Comment Flagged for Review on Interact';
        case 51:
            return 'Heads Up: Your Post Has Been Flagged on Interact';
        case 52:
            return 'Project Flagged on Interact: Requires Attention';
        case 53:
            return 'Opening Flagged on Interact: Please Investigate';
        case 54:
            return 'Event Flagged on Interact: Needs Review';
        case 55:
            return 'Announcement Flagged on Interact: Requires Action';
        case 56:
            return 'Poll Flagged on Interact: Potential Issues Detected';

        // Flags Revoked Section (70-76)
        case 70:
            return 'Comment Flag Removed on Interact';
        case 71:
            return 'Post Flag Resolved on Interact';
        case 72:
            return 'Project Flag Cleared on Interact';
        case 73:
            return 'Opening Flag Lifted on Interact';
        case 74:
            return 'Event Flag Removed on Interact';
        case 75:
            return 'Announcement Flag Resolved on Interact';
        case 76:
            return 'Poll Flag Resolved on Interact';

        default:
            return '';
    }
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

    const type = req.body.type || -1;

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
