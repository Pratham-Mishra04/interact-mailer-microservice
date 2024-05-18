import * as fs from 'fs';
import * as nodemailer from 'nodemailer';
import { AttachmentLike } from 'nodemailer/lib/mailer';
import { Readable } from 'nodemailer/lib/xoauth2';
import * as path from 'path';
import { ENV } from '../config/env';
import logger from '../utils/logger';

interface NodemailerConfig {
    email: string;
    subject: string;
    templateName: string;
    paramFunc: (
        html: string | Buffer | Readable | AttachmentLike | undefined
    ) => string | Buffer | Readable | AttachmentLike | undefined;
}

const templatePath = 'templates/';

const Nodemailer = async (config: NodemailerConfig): Promise<void> => {
    const transporter = nodemailer.createTransport({
        service: 'Gmail',
        host: 'smtp.gmail.com',
        secure: true,
        auth: {
            user: ENV.MAIL_USER,
            pass: ENV.MAIL_KEY,
        },
    });

    const mailOptions: nodemailer.SendMailOptions = {
        from: {
            name: 'Interact',
            address: ENV.MAIL_USER,
        },
        to: config.email,
        subject: config.subject,
        html: fs.readFileSync(
            path.resolve(__dirname, '../' + templatePath + config.templateName),
            'utf8'
        ),
    };

    mailOptions.html = config.paramFunc(mailOptions.html);

    transporter
        .sendMail(mailOptions)
        .then(() => {
            //TODO log mail request from which service and other details
        })
        .catch(err => {
            logger.error('Error while sending mail', 'Nodemailer', err);
        });
};

export default Nodemailer;
