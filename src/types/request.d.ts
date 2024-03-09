import { UserDocument } from '../models/user';

export {};

declare global {
    namespace Express {
        export interface Request {
            requestedAt: string;
            user: UserDocument;
        }
    }
}
