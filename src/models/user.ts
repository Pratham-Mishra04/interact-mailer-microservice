/* eslint-disable no-unused-vars */
import * as bcrypt from 'bcryptjs';
import * as crypto from 'crypto';
import mongoose from 'mongoose';

interface UserInput {
    email: string;
    name: string;
    password: string;
    profilePic: string;
    coverPic: string;
    username: string;
    phoneNo: string;
    bio: string;
    tags: string[];
}

export interface UserDocument extends UserInput, mongoose.Document {
    passwordChangedAt: Date;
    passwordResetToken: string;
    passwordResetTokenExpiresIn: Date;
    correctPassword(password: string): Promise<boolean>;
    changedPasswordAfter(JWTTimestrap: number): boolean;
    createPasswordResetToken(): string;
    resetTokenExpired(): boolean;
    correctPasswordResetToken(token: string): Promise<boolean>;
}

const userSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            trim: true,
        },
        email: {
            type: String,
            unique: true,
            trim: true,
            lowercase: true,
        },
        profilePic: {
            type: String,
            default: 'default.jpg',
        },
        coverPic: {
            type: String,
            default: 'default.jpg',
        },
        phoneNo: Number,
        username: {
            type: String,
            unique: true,
            required: true,
            lowercase: true,
        },
        password: {
            type: String,
            select: false,
        },
        passwordChangedAt: {
            type: Date,
            default: Date.now,
        },
        bio: String,
        tags: [String],
        passwordResetToken: String,
        passwordResetTokenExpiresIn: Date,
    },
    {
        toJSON: { virtuals: true },
        toObject: { virtuals: true },
    }
);

// next:(err?:Error)=>void in place of next:HookNextFunction

userSchema.pre('save', async function (next) {
    if (!this.isModified('password')) return next();
    this.password = await bcrypt.hash(this.password, 12);
    next();
});

userSchema.methods.correctPassword = async function (inPass: string): Promise<boolean> {
    const user = await User.findById(this.id).select('+password');
    return await bcrypt.compare(inPass, user.password);
};

userSchema.methods.changedPasswordAfter = function (JWTTimestrap: number): boolean {
    const changedTimestrap: number = Number(this.passwordChangedAt.getTime()) / 1000;
    return JWTTimestrap < changedTimestrap;
};

userSchema.methods.createPasswordResetToken = async function () {
    const token = crypto.randomBytes(32).toString('hex');
    this.passwordResetToken = await bcrypt.hash(token, 4);
    this.passwordResetTokenExpiresIn = Date.now() + 10 * 60 * 1000;
    return token;
};

userSchema.methods.resetTokenExpired = function () {
    if (this.passwordResetTokenExpiresIn) return Date.now() > this.passwordResetTokenExpiresIn;
    return true;
};

userSchema.methods.correctPasswordResetToken = async function (token: string) {
    return await bcrypt.compare(token, this.passwordResetToken);
};

const User = mongoose.model<UserDocument>('User', userSchema);

export default User;
