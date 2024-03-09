import * as fs from 'fs';
import * as nodemailer from 'nodemailer';
import * as path from 'path';
import { ENV } from '../config/env';

interface NodemailerConfig {
    email: string;
    subject: string;
    body: string;
    templateName: string;
}

const templatePath = '/templates/';

const Nodemailer = async (config: NodemailerConfig): Promise<void> => {
    const transporter = nodemailer.createTransport({
        host: ENV.EMAIL_HOST,
        port: Number(ENV.EMAIL_PORT),
        auth: {
            user: ENV.EMAIL_USERNAME,
            pass: ENV.EMAIL_PASS,
        },
    });

    const mailOptions: nodemailer.SendMailOptions = {
        from: ENV.EMAIL_USER,
        to: config.email,
        subject: config.subject,
        html: fs.readFileSync(path.resolve(__dirname, templatePath + config.templateName), 'utf8'),
    };

    // mailOptions.html = mailOptions.html.replace('{{name}}', 'John Doe');

    await transporter.sendMail(mailOptions);
};

export default Nodemailer;
