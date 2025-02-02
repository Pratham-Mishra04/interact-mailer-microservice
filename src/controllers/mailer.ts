/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-vars */
import { NextFunction, Request, Response } from 'express';
import { AttachmentLike } from 'nodemailer/lib/mailer';
import { Readable } from 'nodemailer/lib/xoauth2';
import { ENV } from '../config/env';
import OTPVerificationEmail from '../emails/0';
import WelcomeEmail from '../emails/1';
import OTPEmail from '../emails/2';
import OTPDeactivationEmail from '../emails/3';
import PasswordResetEmail from '../emails/4';
import ChatNotificationEmail from '../emails/10';
import PostAttentionEmail from '../emails/11';
import ApplicationSubmissionConfirmationEmail from '../emails/12';
import ApplicationAcceptedEmail from '../emails/13';
import ApplicationRejectedEmail from '../emails/14';
import ProjectInvitationEmail from '../emails/15';
import OrganizationInvitationEmail from '../emails/16';
import GroupChatInvitationEmail from '../emails/17';
import ProjectInvitationAcceptedEmail from '../emails/18';
import OrganizationInvitationAcceptedEmail from '../emails/19';
import GroupChatInvitationAcceptedEmail from '../emails/20';
import TaskAssignedEmail from '../emails/21';
import TaskCompletedEmail from '../emails/22';
import MeetingScheduledEmail from '../emails/23';
import MeetingRescheduledEmail from '../emails/24';
import ProjectAttentionEmail from '../emails/25';
import EventAttentionEmail from '../emails/26';
import OpeningAttentionEmail from '../emails/27';
import NewActivitiesEmail from '../emails/30';
import WeMissYouEmail from '../emails/31';
import NewsletterEmail from '../emails/32';
import TaskDueTodayEmail from '../emails/33';
import MeetingDueTodayEmail from '../emails/34';
import CommentTaggedEmail from '../emails/35';
import FlaggedCommentEmail from '../emails/50';
import FlaggedPostEmail from '../emails/51';
import FlaggedProjectEmail from '../emails/52';
import FlaggedOpeningEmail from '../emails/53';
import FlaggedEventEmail from '../emails/54';
import FlaggedAnnouncementEmail from '../emails/55';
import FlaggedPollEmail from '../emails/56';
import FlagRemovedCommentEmail from '../emails/70';
import FlagResolvedPostEmail from '../emails/71';
import FlagClearedProjectEmail from '../emails/72';
import FlagLiftedOpeningEmail from '../emails/73';
import FlagResolvedEventEmail from '../emails/74';
import FlagResolvedAnnouncementEmail from '../emails/75';
import FlagResolvedPollEmail from '../emails/76';
import FlaggedCommentDeletedEmail from '../emails/100';
import FlaggedPostDeletedEmail from '../emails/101';
import FlaggedProjectDeletedEmail from '../emails/102';
import FlaggedOpeningDeletedEmail from '../emails/103';
import FlaggedEventDeletedEmail from '../emails/104';
import FlaggedAnnouncementDeletedEmail from '../emails/105';
import FlaggedPollDeletedEmail from '../emails/106';

import AppError from '../helpers/app_error';
import catchAsync from '../helpers/catch_async';
// import ResendMailer from '../mailers/resend';
import {
    Announcement,
    Comment,
    Event,
    GroupChat,
    Meeting,
    Opening,
    Organization,
    Poll,
    Post,
    Project,
    Task,
    User,
} from '../types/index';
import { getRedirectURL, getStrippedContent } from '../utils/comment';
import logger from '../utils/logger';
import { getNextSessionTime } from '../utils/session';
import { emailService } from '../mailers/resend-v2';

interface EmailRequestBody {
    type: number;
    email: string;
    user: User;
    secondaryUser?: User;
    organization?: Organization;
    groupchat?: GroupChat;
    comment?: Comment;
    post?: Post;
    project?: Project;
    opening?: Opening;
    event?: Event;
    announcement?: Announcement;
    poll?: Poll;
    otp?: string;
    task?: Task;
    meeting?: Meeting;
}

const getTemplateNameFromType = (type: number): string => {
    return `${type}`;
};

import EarlyAccessEmail from '../emails/-1';
import AccountAttentionEmail from '../emails/53';
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
            return 'You have a new Organisation Invitation';
        case 17:
            return 'You have a new Group Chat Invitation';
        case 18:
            return 'User accepted your Project Invitation';
        case 19:
            return 'User accepted your Organisation Invitation';
        case 20:
            return 'User accepted your Group Chat Invitation';
        case 21:
            return 'You have been assigned a new task';
        case 22:
            return 'Task has been completed';
        case 23:
            return 'New meeting scheduled on Interact';
        case 24:
            return 'Meeting Rescheduled';
        case 25:
            return 'You have impressions on your project!';
        case 26:
            return 'You have impressions on your event!';
        case 27:
            return 'You have impressions on your opening!';

        // Engagement Section (30-40)
        case 30:
            return "Check Out What's New on Interact!";
        case 31:
            return 'We Miss You on Interact!';
        case 32:
            return 'Our Latest News: Stay Informed on Interact!';
        case 33:
            return 'Task due Today!';
        case 34:
            return 'Meeting due Today';
        case 35:
            return 'You were tagged in a comment';

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

        // Flagged Items Deleted Section (100-106)
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
            return 'Flagged Poll Deleted on Interact';

        default:
            return '';
    }
};

// const getParamFuncFromReq = (
//     req: Request,
//     recipient: User
// ): ((
//     html: string | Readable | Buffer | AttachmentLike | undefined
// ) => string | Readable | Buffer | AttachmentLike | undefined) => {
//     const user: User = recipient;
//     const secondaryUser: User | undefined = req.body.secondaryUser;
//     const organization: Organization | undefined = req.body.organization;
//     const groupchat: GroupChat | undefined = req.body.groupchat;
//     const comment: Comment | undefined = req.body.comment;
//     const post: Post | undefined = req.body.post;
//     const project: Project | undefined = req.body.project;
//     const opening: Opening | undefined = req.body.opening;
//     const event: Event | undefined = req.body.event;
//     const announcement: Announcement | undefined = req.body.announcement;
//     const poll: Poll | undefined = req.body.poll;
//     const otp: string | undefined = req.body.otp;
//     const task: Task | undefined = req.body.task;
//     const type: number = req.body.type;
//     const meeting: Meeting | undefined = req.body.meeting;

//     return html => {
//         const parameterizedHTML = html
//             ?.toString()
//             .replaceAll('{{User.Name}}', user.name)
//             .replaceAll('{{User.Username}}', user.username);

//         switch (type) {
//             case 0:
//             case 1:
//             case 2:
//             case 3:
//             case 4:
//                 return parameterizedHTML?.replaceAll('{{OTP}}', otp || '');
//             case 10:
//                 return parameterizedHTML?.replaceAll(
//                     '{{SecondaryUser.Name}}',
//                     secondaryUser?.name || ''
//                 );
//             case 11:
//                 return parameterizedHTML
//                     ?.replaceAll('{{User.noImpressions}}', `${user.noImpressions || 0}`)
//                     ?.replaceAll('{{Post.noImpressions}}', `${post.noImpressions || 0}`)
//                     ?.replaceAll('{{Project.noImpressions}}', `${project.noImpressions || 0}`)
//                     ?.replaceAll('{{Opening.noImpressions}}', `${opening.noImpressions || 0}`)
//                     ?.replaceAll('{{Event.noImpressions}}', `${event.noImpressions || 0}`);


//             case 12:
//             case 13:
//                 return parameterizedHTML
//                     ?.replaceAll('{{SecondaryUser.Name}}', secondaryUser?.name || '')
//                     .replaceAll('{{Opening.Title}}', opening.title || '');
//             case 14:
//                 return parameterizedHTML
//                     .replaceAll('{{Opening.Title}}', opening.title || '');
//             case 15:
//                 return parameterizedHTML
//                     ?.replaceAll('{{SecondaryUser.Name}}', secondaryUser?.name || '')
//                     .replaceAll('{{Project.Title}}', project.title || '')
//                     .replaceAll('{{Project.Description}}', project.description || '')
//                     .replaceAll(
//                         '{{Project.Link}}',
//                         `${ENV.FRONTEND_URL}/invitations?tab=projects`
//                     );

//             case 16:
//                 return parameterizedHTML
//                     ?.replaceAll('{{SecondaryUser.Name}}', secondaryUser?.name || '')
//                     .replaceAll('{{Organization.title}}', organization.title || '')
//                     .replaceAll(
//                         '{{Organization.Link}}',
//                         `${ENV.FRONTEND_URL}/invitations?tab=organisations`
//                     );
//             case 17:
//                 return parameterizedHTML
//                     ?.replaceAll('{{SecondaryUser.Name}}', secondaryUser?.name || '')
//                     .replaceAll('{{GroupChat.title}}', groupchat.title || '')
//                     .replaceAll('{{GroupChat.description}}', groupchat.description || '');
//             case 18:
//                 return parameterizedHTML
//                     ?.replaceAll('{{SecondaryUser.Name}}', secondaryUser?.name || '')
//                     .replaceAll('{{Project.Title}}', project.title || '')
//                     .replaceAll('{{Project.Description}}', project.description || '');
//             case 19:
//                 return parameterizedHTML?.replaceAll(
//                     '{{Organization.title}}',
//                     organization.title || ''
//                 );
//             case 20:
//                 return parameterizedHTML
//                     ?.replaceAll('{{SecondaryUser.Name}}', secondaryUser?.name || '')
//                     .replaceAll('{{GroupChat.title}}', groupchat.title || '')
//                     .replaceAll('{{GroupChat.description}}', groupchat.description || '');
//             case 21:
//                 return parameterizedHTML
//                     ?.replaceAll('{{SecondaryUser.Name}}', secondaryUser?.name || '')
//                     .replaceAll('{{Task.Title}}', task.title)
//                     .replaceAll('{{Task.Description}}', task.description)
//                     .replaceAll(
//                         '{{Task.URL}}',
//                         `${ENV.FRONTEND_URL}/organisations?oid=${task.organizationID}&redirect_url=/tasks?tid=${task.id}`
//                     );
//             case 22:
//                 return parameterizedHTML
//                     ?.replaceAll('{{SecondaryUser.Name}}', secondaryUser?.name || '')
//                     .replaceAll('{{Task.Title}}', task.title || '')
//                     .replaceAll('{{Task.Description}}', task.description || '')
//                     .replaceAll(
//                         '{{Task.URL}}',
//                         `${ENV.FRONTEND_URL}/organisations?oid=${task.organizationID}&redirect_url=/tasks?tid=${task.id}`
//                     );
//             case 23:
//                 return parameterizedHTML
//                     .replaceAll('{{Meeting.Title}}', meeting.title || '')
//                     .replaceAll('{{Meeting.Description}}', meeting.description || '')
//                     .replaceAll(
//                         '{{Meeting.Time}}',
//                         meeting.startTime ? getNextSessionTime(meeting) : '-'
//                     )
//                     .replaceAll(
//                         '{{Meeting.Frequency}}',
//                         meeting.frequency
//                             ? meeting.frequency == 'none'
//                                 ? 'One Time'
//                                 : meeting.frequency
//                             : '-'
//                     )
//                     .replaceAll(
//                         '{{Meeting.Organization.Name}}',
//                         meeting.organization.title ? meeting.organization.title : ''
//                     )
//                     .replaceAll(
//                         '{{Meeting.URL}}',
//                         `${ENV.FRONTEND_URL}/organisations?oid=${meeting.organizationID}&redirect_url=/meetings/${meeting.id}`
//                     );
//             case 24:
//                 return parameterizedHTML
//                     .replaceAll('{{Meeting.Title}}', meeting.title || '')
//                     .replaceAll('{{Meeting.Description}}', meeting.description || '')
//                     .replaceAll(
//                         '{{Meeting.Time}}',
//                         meeting.startTime ? getNextSessionTime(meeting) : '-'
//                     )
//                     .replaceAll(
//                         '{{Meeting.Frequency}}',
//                         meeting.frequency
//                             ? meeting.frequency == 'none'
//                                 ? 'One Time'
//                                 : meeting.frequency
//                             : '-'
//                     )
//                     .replaceAll(
//                         '{{Meeting.Organization.Name}}',
//                         meeting.organization.title ? meeting.organization.title : ''
//                     )
//                     .replaceAll(
//                         '{{Meeting.URL}}',
//                         `${ENV.FRONTEND_URL}/organisations?oid=${meeting.organizationID}&redirect_url=/meetings/${meeting.id}`
//                     );
//             case 25:
//                 return parameterizedHTML
//                     ?.replaceAll('{{User.noImpressions}}', `${user.noImpressions || 0}`)
//                     ?.replaceAll('{{Project.noImpressions}}', `${project.noImpressions || 0}`);
//             case 26:
//                 return parameterizedHTML
//                     ?.replaceAll('{{User.noImpressions}}', `${user.noImpressions || 0}`)
//                     ?.replaceAll('{{Event.noImpressions}}', `${event.noImpressions || 0}`);
//             case 27:
//                 return parameterizedHTML
//                     ?.replaceAll('{{User.noImpressions}}', `${user.noImpressions || 0}`)
//                     ?.replaceAll('{{Opening.noImpressions}}', `${opening.noImpressions || 0}`);
//             case 30:
//                 return parameterizedHTML;
//             case 31:
//                 return parameterizedHTML.replaceAll('{{User.Name}}', user.name || '');
//             case 32:
//                 return parameterizedHTML;
//             case 33:
//                 return parameterizedHTML
//                     ?.replaceAll('{{Task.Title}}', task.title)
//                     .replaceAll('{{Task.Description}}', task.description)
//                     .replaceAll(
//                         '{{Task.URL}}',
//                         `${ENV.FRONTEND_URL}/organisations?oid=${task.organizationID}&redirect_url=/tasks?tid=${task.id}`
//                     );

//             case 34:
//                 return parameterizedHTML
//                     .replaceAll('{{Meeting.Title}}', meeting.title || '')
//                     .replaceAll('{{Meeting.Description}}', meeting.description || '')
//                     .replaceAll(
//                         '{{Meeting.Time}}',
//                         meeting.startTime ? getNextSessionTime(meeting) : '-'
//                     )
//                     .replaceAll(
//                         '{{Meeting.Frequency}}',
//                         meeting.frequency
//                             ? meeting.frequency == 'none'
//                                 ? 'One Time'
//                                 : meeting.frequency
//                             : '-'
//                     )
//                     .replaceAll(
//                         '{{Meeting.Organization.Name}}',
//                         meeting.organization.title ? meeting.organization.title : ''
//                     )
//                     .replaceAll(
//                         '{{Meeting.URL}}',
//                         `${ENV.FRONTEND_URL}/organisations?oid=${meeting.organizationID}&redirect_url=/meetings/${meeting.id}`
//                     );
//             case 35:
//                 return parameterizedHTML
//                     ?.replaceAll('{{SecondaryUser.Name}}', secondaryUser?.name || '')
//                     .replaceAll('{{Comment.Content}}', getStrippedContent(comment))
//                     .replaceAll('{{Comment.URL}}', getRedirectURL(comment));

//             case 50:
//                 return parameterizedHTML
//                     ?.replaceAll('{{Comment.Content}}', getStrippedContent(comment))
//                     .replaceAll('{{Comment.Id}}', comment.id || '');
//             case 51:
//                 return parameterizedHTML?.replaceAll('{{Post.Title}}', post.content || '');
//             case 52:
//                 return parameterizedHTML?.replaceAll('{{Project.Name}}', project.title || '');
//             case 53:
//                 return parameterizedHTML
//                     ?.replaceAll('{{Opening.Title}}', opening.title || '')
//                     .replaceAll('{{Opening.Description}}', opening.description || '');
//             case 54:
//                 return parameterizedHTML
//                     ?.replaceAll('{{Event.Title}}', event.title || '')
//                     .replaceAll('{{Event.Description}}', event.description || '');
//             case 55:
//                 return parameterizedHTML
//                     ?.replaceAll('{{Announcement.Title}}', announcement.title || '')
//                     .replaceAll('{{Announcement.Content}}', announcement.content || '');
//             case 56:
//                 return parameterizedHTML?.replaceAll('{{Poll.Title}}', poll.title || '');
//             case 70:
//                 return parameterizedHTML?.replaceAll(
//                     '{{Comment.Content}}',
//                     getStrippedContent(comment)
//                 );
//             case 71:
//                 return parameterizedHTML?.replaceAll('{{Post.Content}}', post.content || '');
//             case 72:
//                 return parameterizedHTML?.replaceAll('{{Project.Title}}', project.title || '');
//             case 73:
//                 return parameterizedHTML
//                     ?.replaceAll('{{Opening.Title}}', opening.title || '')
//                     .replaceAll('{{Opening.Description}}', opening.description || '');
//             case 74:
//                 return parameterizedHTML
//                     ?.replaceAll('{{Event.Title}}', event.title || '')
//                     .replaceAll('{{Event.Description}}', event.description || '');
//             case 75:
//                 return parameterizedHTML
//                     ?.replaceAll('{{Announcement.Title}}', announcement.title || '')
//                     .replaceAll('{{Announcement.Content}}', announcement.content || '');
//             case 76:
//                 return parameterizedHTML?.replaceAll('{{Poll.Title}}', poll.title || '');
//             case 100:
//                 return parameterizedHTML?.replaceAll(
//                     '{{Comment.Content}}',
//                     getStrippedContent(comment)
//                 );
//             case 101:
//                 return parameterizedHTML?.replaceAll('{{Post.Content}}', post.content || '');
//             case 102:
//                 return parameterizedHTML?.replaceAll('{{Project.Title}}', project.title || '');
//             case 103:
//                 return parameterizedHTML
//                     ?.replaceAll('{{Opeing.Title}}', opening.title || '')
//                     .replaceAll('{{Opening.Description}}', opening.description || '');
//             case 104:
//                 return parameterizedHTML
//                     ?.replaceAll('{{Event.Title}}', event.title || '')
//                     .replaceAll('{{Event.Description}}', event.description || '');
//             case 105:
//                 return parameterizedHTML
//                     ?.replaceAll('{{Announcement.Title}}', announcement.title || '')
//                     .replaceAll('{{Announcement.Content}}', announcement.content || '');
//             case 106:
//                 return parameterizedHTML?.replaceAll('{{Poll.Title}}', poll.title || '');
//             default:
//                 return parameterizedHTML;
//         }
//     };
// };


const getEmailProps = (body: EmailRequestBody) => {
    switch (body.type) {
        case -1:
            return { user: body.user, template: EarlyAccessEmail };
        case 0:
            return { user: body.user, template: OTPVerificationEmail };
        case 1:
            return { user: body.user, template:     WelcomeEmail };
        case 2:
            return { otp: body.otp || '', template: OTPEmail };
        case 3:
            return { user: body.user, otp: body.otp, template: OTPDeactivationEmail };
        case 4:
            return { user: body.user, otp: body.otp, template: PasswordResetEmail };
        case 10:
            return { user: body.user, secondaryUser: body.secondaryUser, template: ChatNotificationEmail };
        case 11:
            return { user: body.user, post: body.post, template: PostAttentionEmail };
        case 12:
            return { user: body.user, template: ApplicationSubmissionConfirmationEmail };
        case 13:
            return { user: body.user, opening: body.opening, secondaryUser: body.secondaryUser, template: ApplicationAcceptedEmail };
        case 14:
            return { user: body.user, opening: body.opening, template: ApplicationRejectedEmail };
        case 15:
            return { user: body.user, secondaryUser: body.secondaryUser, project: body.project, template: ProjectInvitationEmail };
        case 16:
            return { user: body.user, secondaryUser: body.secondaryUser, organization: body.organization, template: OrganizationInvitationEmail };
        case 17:
            return { user: body.user, secondaryUser: body.secondaryUser, groupChat: body.groupchat, template: GroupChatInvitationEmail };
        case 18:
            return { user: body.user, secondaryUser: body.secondaryUser, project: body.project, template: ProjectInvitationAcceptedEmail };
        case 19:
            return { user: body.user, organization: body.organization, template: OrganizationInvitationAcceptedEmail };
        case 20:
            return { user: body.user, groupChat: body.groupchat, secondaryUser: body.secondaryUser, template: GroupChatInvitationAcceptedEmail };
        case 21:
            return { user: body.user, task: body.task, template: TaskAssignedEmail };
        case 22:
            return { user: body.user, secondaryUser: body.secondaryUser, task: body.task, template: TaskCompletedEmail };
        case 23:
            return { user: body.user, meeting: body.meeting, template: MeetingScheduledEmail };
        case 24:
            return { user: body.user, meeting: body.meeting, template: MeetingRescheduledEmail };
        case 25:
            return { user: body.user, template: ProjectAttentionEmail };
        case 26:
            return { user: body.user, template: EventAttentionEmail };
        case 27:
            return { user: body.user, template: OpeningAttentionEmail };
        case 30:
            return { user: body.user, template: NewActivitiesEmail };
        case 31:
            return { user: body.user, template: WeMissYouEmail };
        case 32:
            return { user: body.user, template: NewsletterEmail };
        case 33:
            return { user: body.user, task: body.task, template: TaskDueTodayEmail };
        case 34:
            return { user: body.user, meeting: body.meeting, template: MeetingDueTodayEmail };
        case 35:
            return { user: body.user, secondaryUser: body.secondaryUser, comment: body.comment, template: CommentTaggedEmail };
        case 50:
            return { user: body.user, comment: body.comment, template: FlaggedCommentEmail };
        case 51:
            return { user: body.user, post: body.post, template: FlaggedPostEmail };
        case 52:
            return { user: body.user, project: body.project, template: FlaggedProjectEmail };
        case 53:
            return { user: body.user, opening: body.opening, template: AccountAttentionEmail };
        case 54:
            return { user: body.user, event: body.event, template: FlaggedEventEmail };
        case 55:
            return { user: body.user, announcement: body.announcement, template: FlaggedAnnouncementEmail };
        case 56:
            return { user: body.user, poll: body.poll, template: FlaggedPollEmail };
        case 70:
            return { user: body.user, comment: body.comment, template: FlagRemovedCommentEmail };
        case 71:
            return { user: body.user, post: body.post, template: FlagResolvedPostEmail };
        case 72:
            return { user: body.user, project: body.project, template: FlagClearedProjectEmail };
        case 73:
            return { user: body.user, opening: body.opening, template: FlagLiftedOpeningEmail };
        case 74:
            return { user: body.user, event: body.event, template: FlagResolvedEventEmail };
        case 75:
            return { user: body.user, announcement: body.announcement, template: FlagResolvedAnnouncementEmail };
        case 76:
            return { user: body.user, poll: body.poll, template: FlagResolvedPollEmail };
        case 100:   
            return { user: body.user, comment: body.comment, template: FlaggedCommentDeletedEmail };
        case 101:
            return { user: body.user, post: body.post, template: FlaggedPostDeletedEmail };
        case 102:
            return { user: body.user, project: body.project, template: FlaggedProjectDeletedEmail };
        case 103:
            return { user: body.user, opening: body.opening, template: FlaggedOpeningDeletedEmail };
        case 104:
            return { user: body.user, event: body.event, template: FlaggedEventDeletedEmail };
        case 105:
            return { user: body.user, announcement: body.announcement, template: FlaggedAnnouncementDeletedEmail };
        case 106:
            return { user: body.user, poll: body.poll, template: FlaggedPollDeletedEmail };

    }
}

interface Recipient {
    email: string;
    user: User;
}

// export const sendMail = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
//     const emailType: number | undefined = req.body.type;
//     if (emailType == undefined) return next(new AppError('Email Type Not Defined', 400));
//     if (!req.body.email) return next(new AppError('Email Destination Not Defined', 400));

//     await ResendMailer({
//         email: req.body.email,
//         subject: getSubjectFromType(req.body.type),
//         templateName: getTemplateNameFromType(req.body.type),
//         user : req.body.user,
//         paramFunc: getParamFuncFromReq(req, req.body.user),
//     }).catch(err => logger.error(`Error sending email to ${req.body.email}:`, 'sendMail', err));

//     res.status(200).json({
//         status: 'success',
//     });
// });

// export const sendMultipleMail = catchAsync(
//     async (req: Request, res: Response, next: NextFunction) => {
//         const emailType: number | undefined = req.body.type;
//         const recipients: Recipient[] | undefined = req.body.recipients;
//         if (emailType == undefined) return next(new AppError('Email Type Not Defined', 400));
//         if (!req.body.recipients) return next(new AppError('Recipients not defined', 400));

//         const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

//         let count = 0;
//         for (const recipient of recipients) {
//             if (!recipient.email) {
//                 logger.info('Recipient email not found', 'sendMultipleMail');
//                 continue;
//             }
//             if (!recipient.user) {
//                 logger.info('Recipient not found', 'sendMultipleMail');
//                 continue;
//             }

//             try {
//                 ResendMailer({
//                     email: recipient.email,
//                     subject: getSubjectFromType(emailType),
//                     templateName: getTemplateNameFromType(emailType),
//                     user : recipient.user,
//                     paramFunc: getParamFuncFromReq(req, recipient.user),

//                 });
//             } catch (error) {
//                 logger.error(
//                     `Error sending email to ${recipient.email}:`,
//                     'sendMultipleMail',
//                     error
//                 );
//             }
//             count++;
//             if (count % 5 === 0) await delay(5000);
//         }
//         res.status(200).json({
//             status: 'success',
//         });
//     }
// );

export const sendMailv2 = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
    const { type, email } = req.body;
  
    try {
      const emailConfig = getEmailProps(req.body);
      
      await emailService.sendEmail({
        to: email,
        subject: getSubjectFromType(type),
        template: emailConfig.template,
        props: emailConfig
      });
  
      res.status(200).json({
        status: 'success',
      });
    } catch (err) {
      logger.error(`Error sending email to ${email}:`, 'sendMail', err);
      next(new AppError('Failed to send email', 500));
    }
  });