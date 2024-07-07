/* eslint-disable no-unused-vars */
import * as fs from 'fs';
import * as nodemailer from 'nodemailer';
import { AttachmentLike } from 'nodemailer/lib/mailer';
import { Readable } from 'nodemailer/lib/xoauth2';
import * as path from 'path';
import { ENV } from '../config/env';
import * as MAILER_CONFIG from '../config/mailer';
import logger from '../utils/logger';

interface NodemailerConfig {
    email: string;
    subject: string;
    templateName: string;
    paramFunc: (
        html: string | Buffer | Readable | AttachmentLike | undefined
    ) => string | Buffer | Readable | AttachmentLike | undefined;
    service: string;
}

const Nodemailer = async (config: NodemailerConfig): Promise<void> => {
    const transporter = nodemailer.createTransport({
        service: MAILER_CONFIG.SERVICE,
        host: MAILER_CONFIG.HOST,
        secure: true,
        auth: {
            user: ENV.MAIL_USER,
            pass: ENV.MAIL_KEY,
        },
    });

    const mailOptions: nodemailer.SendMailOptions = {
        from: {
            name: MAILER_CONFIG.SENDER_NAME,
            address: ENV.MAIL_USER,
        },
        to: config.email,
        subject: config.subject,
        html: fs.readFileSync(
            path.resolve(__dirname, '../' + MAILER_CONFIG.TEMPLATE_PATH + config.templateName),
            'utf8'
        ),
        attachments: [
            {
                filename: 'logo.png',
                path: path.resolve(__dirname, '../../public/logo.png'),
                cid: 'logo',
            },
        ],
    };

    mailOptions.html = config.paramFunc(mailOptions.html);

    await transporter
        .sendMail(mailOptions)
        .then(() =>
            logger.info(`mailer triggered by ${config.service}`, 'node_mailer', config.subject)
        );
};

export default Nodemailer;
