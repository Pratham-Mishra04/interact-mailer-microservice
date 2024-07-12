import { ENV } from '../config/env';
import { Comment } from '../types';

export const getStrippedContent = (comment: Comment) => {
    if (!comment) return '';
    const regex = /\*\*|\^\^|```/g;
    return comment.content.replace(regex, '');
};

export const getRedirectURL = (comment: Comment) => {
    if (!comment) return '#';

    if (comment.postID) return `${ENV.FRONTEND_URL}/explore/post/${comment.postID}?action=comments`;
    if (comment.projectID)
        return `${ENV.FRONTEND_URL}/explore?pid=${comment.project.slug}&action=comments`;
    if (comment.announcementID)
        return `${ENV.FRONTEND_URL}/explore/announcement/${comment.announcementID}?action=comments`;
    if (comment.taskID) {
        const task = comment.task;
        if (task?.organizationID)
            return `${ENV.FRONTEND_URL}/organisations?oid=${task.organizationID}&redirect_url=/tasks?tid=${comment.taskID}`;
        return `${ENV.FRONTEND_URL}/workspace/tasks/${task?.project?.slug}?tid=${comment.taskID}`;
    }
    if (comment.eventID)
        return `${ENV.FRONTEND_URL}/explore/events/${comment.eventID}?action=comments`;

    return '#';
};
