/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-vars */
import { NextFunction, Request, Response } from 'express';
import { AttachmentLike } from 'nodemailer/lib/mailer';
import { Readable } from 'nodemailer/lib/xoauth2';
import AppError from '../helpers/app_error';
import catchAsync from '../helpers/catch_async';
import Nodemailer from '../mailers/nodemailer';
import { Announcement, Comment, Event, GroupChat, Opening, Organization, Poll, Post, Project, User, } from '../types/index';

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
        case 4:
            return 'Your One-Time Password (OTP) for Password Reset on Interact';
        case 10:
            return 'New Chat Request on Interact';
        case 11:
                return 'Impressions on your post/project/event';
        case 12:
                return 'Successfully Submitted Application for Opening';
        case 13:
                return 'Opening Application got Accepted';
        case 14:
                return 'Opening Application got Rejected';
        case 15:
                return 'You have a new Project Invitation';
        case 16:
                return 'You have a new Organisation Invitation ';
        case 17:
                return 'You have a new Group Chat Invitation';

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
        case 100:
            return 'Flagged Comment Deleted on Interact';
        case 101:
            return 'Flagged Post Deleted on Interact';
        case 102:
            return 'Flagged Project Deleted on Interact';
        case 103:
            return 'Flagged Opening Deleted on Interact';
        case 104:
            return 'Flagged Event Deleted on Interact';
        case 105:
            return 'Flagged Announcement Deleted on Interact';
        case 106:
            return 'Flagged Flag Deleted on Interact'

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
    const organization: Organization | undefined = req.body.organization;
    const groupchat: GroupChat | undefined = req.body.groupchat;
    const comment: Comment | undefined = req.body.comment;
    const post: Post | undefined = req.body.post;
    const project: Project | undefined = req.body.project;
    const opening: Opening | undefined = req.body.opening;
    const event: Event | undefined = req.body.event;
    const announcement: Announcement | undefined = req.body.announcement;
    const poll: Poll | undefined = req.body.poll;
    const otp: string | undefined = req.body.otp;

    const type: number = req.body.type;

    return html => {
        const parameterizedHTML = html
            ?.toString()
            .replace('{{User.Name}}', user.name)
            .replace('{{User.Username}}', user.username);

        switch (type) {
            case 0:
            case 2:
            case 3:
            case 4:
                return parameterizedHTML?.replace('{{OTP}}', otp || '');
            case 10:
                return parameterizedHTML?.replace(
                    '{{SecondaryUser.Name}}',
                    secondaryUser?.name || ''
                );
            case 11:
                return parameterizedHTML
                    ?.replace('{{User.noImpressions}}', `${user.noImpressions || 0}`)  
                    ?.replace('{{Post.noImpressions}}', `${post.noImpressions || 0}`)
                    ?.replace('{{Project.noImpressions}}', `${project.noImpressions || 0}`)
                    ?.replace('{{Opening.noImpressions}}', `${opening.noImpressions || 0}`)
                    ?.replace('{{Event.noImpressions}}', `${event.noImpressions || 0}`);

            case 12:
            case 13:
            case 14:
            case 15:
                return parameterizedHTML?.replace(
                    '{{SecondaryUser.Name}}',
                    secondaryUser?.name || '')
                    .replace('{{Project.Description}}', project.description || '');

            case 16:
                return parameterizedHTML?.replace(
                    '{{Organization.title}}',
                    organization.title || '');
            case 17:
                return parameterizedHTML?.replace(
                    '{{GroupChat.title}}',
                    groupchat.title || '')
                    .replace('{{GroupChat.description}}', groupchat.description || '');

            case 20:
            case 21:
            case 22:
            case 50:
                return parameterizedHTML
                    ?.replace('{{Comment.Content}}', comment.content || '')
                    .replace('{{Comment.Id}}', comment.id || '');
            case 51:
                return parameterizedHTML?.replace('{{Post.Title}}', post.content || '');
            case 52:
                return parameterizedHTML?.replace('{{Project.Name}}', project.title || '');
            case 53:
                return parameterizedHTML
                    ?.replace('{{Opening.Title}}', opening.title || '')
                    .replace('{{Opening.Description}}', opening.description || '');
            case 54:
                return parameterizedHTML
                    ?.replace('{{Event.Title}}', event.title || '')
                    .replace('{{Event.Description}}', event.description || '');
            case 55:
                return parameterizedHTML
                    ?.replace('{{Announcement.Title}}', announcement.title || '')
                    .replace('{{Announcement.Content}}', announcement.content || '');
            case 56:
                return parameterizedHTML?.replace('{{Poll.Title}}', poll.title || '');
            case 70:
                return parameterizedHTML?.replace('{{Comment.Content}}', comment.content || '');
            case 71:
                return parameterizedHTML?.replace('{{Post.Content}}', post.content || '');
            case 72:
                return parameterizedHTML?.replace('{{Project.Title}}', project.title || '');
            case 73:
                return parameterizedHTML
                    ?.replace('{{Opening.Title}}', opening.title || '')
                    .replace('{{Opening.Description}}', opening.description || '');
            case 74:
                return parameterizedHTML
                    ?.replace('{{Event.Title}}', event.title || '')
                    .replace('{{Event.Description}}', event.description || '');
            case 75:
                return parameterizedHTML
                    ?.replace('{{Announcement.Title}}', announcement.title || '')
                    .replace('{{Announcement.Content}}', announcement.content || '');
            case 76:
                return parameterizedHTML?.replace('{{Poll.Title}}', poll.title || '');
            case 100:
                return parameterizedHTML?.replace('{{Comment.Content}}', comment.content);
            case 101:
                return parameterizedHTML?.replace('{{Post.Content}}', post.content || '');
            case 102:
                return parameterizedHTML?.replace('{{Project.Title}}', project.title || '');
            case 103:
                return parameterizedHTML
                    ?.replace('{{Opeing.Title}}', opening.title || '')
                    .replace('{{Opening.Description}}', opening.description || '');
            case 104:
                return parameterizedHTML
                    ?.replace('{{Event.Title}}', event.title || '')
                    .replace('{{Event.Description}}', event.description || '');
            case 105:
                return parameterizedHTML
                    ?.replace('{{Announcement.Title}}', announcement.title || '')
                    .replace('{{Announcement.Content}}', announcement.content || '');
            case 106:
                return parameterizedHTML?.replace('{{Poll.Title}}', poll.title || '');
            default:
                return parameterizedHTML;
        }
    };
};

export const sendMail = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
    const emailType: number | undefined = req.body.type;
    if (emailType == undefined) return next(new AppError('Email Type Not Defined', 400));
    if (!req.body.email) return next(new AppError('Email Destination Not Defined', 400));

    await Nodemailer({
        email: req.body.email,
        subject: getSubjectFromType(req.body.type),
        templateName: getTemplateNameFromType(req.body.type),
        paramFunc: getParamFuncFromReq(req),
        service: req.service,
    });

    res.status(200).json({
        status: 'success',
    });
});
