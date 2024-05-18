import { User } from '.';

export {};

declare global {
    namespace Express {
        export interface Request {
            requestedAt: string;
            user: User;
        }
    }
}
