import { ENV } from '../config/env';
import { ReactElement } from 'react';
import { Resend, CreateEmailOptions } from 'resend';
import {WelcomeEmailProps,OTPEmailProps} from '../emails/props/prop';

type EmailProps = OTPEmailProps | WelcomeEmailProps;

interface EmailConfig<T extends EmailProps> {
    to: string;
    subject: string;
    template: (props: T) => ReactElement;
    props: T;
  }
  
  class EmailService {
    private resend: Resend;
  
    constructor(apiKey: string) {
      this.resend = new Resend(apiKey);
    }
  
    async sendEmail({
      to,
      subject,
      template: Template,
      props
    }:any): Promise<void> {
      try {
        const mailOptions: CreateEmailOptions = {
          from: `Interact <${ENV.MAIL_USER}>`,
          to: [to],
          subject,
          react: Template({...props}),
        };
  
        const response = await this.resend.emails.send(mailOptions);
        console.log('Email sent successfully:', response);
      } catch (error) {
        console.error('Failed to send email:', error);
        throw error;
      }
    }
  }
  
  export const emailService = new EmailService(ENV.RESEND_API_KEY);