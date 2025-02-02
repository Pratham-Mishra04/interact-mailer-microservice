import { User ,Post,Opening,Project,Organization,GroupChat,Task ,Meeting,Announcement,Poll} from '../../types/index';
export interface EarlyAccessEmailProps {
    user: User;
    email: string;
    token: string;
}

export interface OTPVerificationEmailProps {
    otp: string;
}

export interface WelcomeEmailProps {
    user: { name: string };
}

export interface OTPEmailProps {
    otp?: string;
}
export interface OTPDeactivationEmailProps {
    user: User;
    otp: string;
}
export interface PasswordResetEmailProps {
    user: User;
    otp: string; 
}
export interface ChatNotificationEmailProps {
    user: User;
    secondaryUser: User;
}
export interface PostAttentionEmailProps {
    user: User;
    post: Post;
}

export interface ApplicationSubmissionConfirmationProps {
    user: User;
}//12
export interface ApplicationAcceptedEmailProps {
    user: User;
    opening: Opening;
    secondaryUser: User;
}
export interface ApplicationRejectedEmailProps {
    user: User;
    opening: Opening;
}
export interface ProjectInvitationEmailProps {
    user: User;
    secondaryUser: User;
    project: Project;
}//15 href

export interface OrganizationInvitationEmailProps {
    user: User;
    secondaryUser: User;
    organization: Organization;
}//16 href

export interface GroupChatInvitationEmailProps {
    user: User;
    secondaryUser: User;
    groupChat: GroupChat;
}//17 href

export interface ProjectInvitationAcceptedEmailProps {
    user: User;
    secondaryUser: User;
    project: Project;
}//18 
export interface OrganizationInvitationAcceptedEmailProps {
    user: User;
    organization: Organization;
}//19

export interface GroupChatInvitationAcceptedEmailProps {
    user: User;
    groupChat: GroupChat;
    secondaryUser: User;
}//20

export interface TaskAssignedEmailProps {
    user: User;
    task: Task;
}//21 href

export interface TaskCompletedEmailProps {
    user: User;
    secondaryUser: User;
    task: Task;
} //22 href

export interface MeetingScheduledEmailProps {
    user: User;
    meeting: Meeting;
}//23 href

export interface MeetingRescheduledEmailProps {
    user:User
    meeting: Meeting
} //24 href

export interface ProjectAttentionEmailProps {
    user: User;
    project: Project;
}

export interface EventAttentionEmailProps {
    user: User;
    event: Event;
}

export interface OpeningAttentionEmailProps {
    user: User;
    opening: Opening;
}

export interface NewActivitiesEmailProps {
    user: User;
}//30

export interface WeMissYouEmailProps {
    user: User;
}//31

export interface NewsletterEmailProps {
    user: User;
}//32

export interface TaskDueTodayEmailProps {
    user: User;
    task: Task;
}

export interface MeetingDueTodayEmailProps {
    user: User;
    meeting: Meeting;
}//34 href

export interface CommentTagEmailProps {
    user: User;
    secondaryUser: User;
    comment: Comment;
}//35 href

export interface FlaggedCommentEmailProps {
    user: User;
    comment: Comment;
}//50

export interface FlaggedPostEmailProps {
    user: User;
    post: Post;
}//51 href
export interface FlaggedProjectEmailProps {
    user: User;
    project: Project;
}//52 href
export interface AccountAttentionEmailProps {
    user: User;
    opening: Opening;
}//53

export interface FlaggedEventEmailProps {
    user: User;
    event: Event;
}//54

export interface FlaggedAnnouncementEmailProps {
    user: User;
    announcement: Announcement;
}//55

export interface FlaggedPollEmailProps {
    user: User;
    poll: Poll;
}
export interface CommentFlagRevokedEmailProps {
    user: User;
    comment: Comment;
}//70

export interface PostFlagRevokedEmailProps {
    user: User;
    post: Post;
}//71

export interface ProjectFlagRevokedEmailProps {
    user: User;
    project: Project;
}//72
export interface OpeningFlagRevokedEmailProps {
    user: User;
    opening: Opening;
}//73

export interface EventFlagRevokedEmailProps {
    user: User;
    event: Event;
}//74

export interface AnnouncementFlagRevokedEmailProps {
    user: User;
    announcement: Announcement;
}//75

export interface PollFlagRevokedEmailProps {
    user: User;
    poll: Poll;
}//76

export interface CommentDeletedEmailProps {
    user: User;
    comment: Comment;
}//100

export interface PostDeletedEmailProps {
    user: User;
    post: Post;
}//101

export interface FlaggedProjectDeletedEmailProps {
    user: User;
    project: Project;
}//102

export interface FlaggedOpeningDeletedEmailProps {
    user: User;
    opening: Opening;
}//103

export interface FlaggedEventDeletedEmailProps {
    user: User;
    event: Event;
}//104

export  interface FlaggedAnnouncementDeletedEmailProps {
    user: User;
    announcement: Announcement;
}//105

export interface FlaggedPollDeletedEmailProps {
    user: User;
    poll: Poll;
}
