// /* eslint-disable no-unused-vars */
// import { Resend, CreateEmailOptions } from 'resend';
// import * as fs from 'fs';
// import * as path from 'path';
// import { Readable } from 'nodemailer/lib/xoauth2';
// import { AttachmentLike } from 'nodemailer/lib/mailer';
// import { ENV } from '../config/env';
// import * as MAILER_CONFIG from '../config/mailer';
// import ApplicationRejectedEmail from '../emails/14';  
// import {User} from "../types";
// interface ResendConfig {
//     email: string;
//     subject: string;
//     templateName: string;
//     user : User
//     paramFunc: (
//         html: string | Buffer | Readable | AttachmentLike | undefined
//     ) => string | Buffer | Readable | AttachmentLike | undefined;
// }

// const resend = new Resend(ENV.RESEND_API_KEY);

// const ResendMailer = async (config: ResendConfig): Promise<void> => {
//     // const templateContent = fs.readFileSync(
//     //     path.resolve(__dirname, '../' + MAILER_CONFIG.TEMPLATE_PATH + "14")
//     // );
//     // console.log(templateContent)

//     // Read the logo file directly
//     const logoPath = path.resolve(__dirname, '../../public/logo.png');
//     const logoContent = fs.readFileSync(logoPath);

//     const mailOptions: CreateEmailOptions = {
//         from: `Interact <${ENV.MAIL_USER}>`,
//         to: [config.email],
//         subject: config.subject,
//         react: ApplicationRejectedEmail({user: config.user, opening: {title: "Software Engineer"}}),
//     }

//     const response = await resend.emails.send(mailOptions);
//     console.log(response)
// };

// export default ResendMailer;