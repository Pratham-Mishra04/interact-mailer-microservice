export interface User {
    id: string;
    tags: string[];
    links: string[];
    email: string;
    name: string;
    resume: string;
    active: boolean;
    profilePic: string;
    coverPic: string;
    username: string;
    phoneNo: string;
    bio: string;
    title: string;
    tagline: string;
    followers: User[];
    following: User[];
    posts: Post[];
    projects: Project[];
    noFollowers: number;
    noFollowing: number;
    noImpressions: number;
    noProjects: number;
    noCollaborativeProjects: number;
    isFollowing?: boolean;
    isOnboardingComplete: boolean;
    passwordChangedAt: Date;
    lastViewed: Project[];
    isVerified: boolean;
    isOrganization: boolean;
}

export interface Comment {
    id: string;
    userID: string;
    user: User;
    postID: string;
    post: Post;
    projectID: string;
    project: Project;
    content: string;
    noLikes: number;
    likedBy: string[];
    createdAt: Date;
}

export interface Post {
    id: string;
    userID: string;
    rePostID: string;
    rePost: Post | null;
    images: string[];
    content: string;
    user: User;
    noLikes: number;
    noShares: number;
    noComments: number;
    noImpressions: number;
    noReposts: number;
    isRePost: boolean;
    postedAt: Date;
    tags: string[];
    hashes: string[];
    isEdited: boolean;
    taggedUsers: User[];
}

export interface Project {
    id: string;
    slug: string;
    userID: string;
    title: string;
    tagline: string;
    coverPic: string;
    blurHash: string;
    description: string;
    page: string;
    user: User;
    likedBy: User[];
    comments: Comment[];
    noLikes: number;
    noShares: number;
    noComments: number;
    noImpressions: number;
    tags: string[];
    category: string;
    openings: Opening[];
    hashes: string[];
    isPrivate: boolean;
    views: number;
    totalNoViews: number;
    noMembers: number;
    privateLinks: string[];
    links: string[];
    createdAt: Date;
}

export interface Opening {
    id: string;
    projectID: string;
    project: Project | null;
    userID: string;
    user: User;
    title: string;
    description: string;
    applications: [];
    noApplications: number;
    noImpressions: number;
    tags: string[];
    active: boolean;
    createdAt: Date;
}

export interface Event {
    id: string;
    title: string;
    tagline: string;
    description: string;
    tags: string[];
    links: string[];
    coordinators: User[];
    startTime: Date;
    endTime: Date;
    location: string;
    category: string;
    coverPic: string;
    blurHash: string;
    noLikes: number;
    noShares: number;
    noComments: number;
    noImpressions: number;
    noViews: number;
    createdAt: Date;
}

export interface Announcement {
    id: string;
    title: string;
    content: string;
    noLikes: number;
    noShares: number;
    noComments: number;
    createdAt: Date;
    isEdited: boolean;
    isOpen: boolean;
    taggedUsers: User[];
}

export interface Poll {
    id: string;
    title: string;
    content: string;
    isMultiAnswer: boolean;
    isOpen: boolean;
    totalVotes: number;
    createdAt: Date;
}
