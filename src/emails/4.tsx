import React from 'react';
import { Html, Head, Body, Container, Text, Img, Hr } from '@react-email/components';
import { User } from '../types';

interface PasswordResetEmailProps {
    user: User;
    otp: string;
}

export default function PasswordResetEmail({ user, otp }: PasswordResetEmailProps) {
    return (
        <Html>
            <Head />
            <Body
                style={{
                    fontFamily: 'Arial, sans-serif',
                    lineHeight: '1.6',
                    color: '#333',
                    backgroundColor: '#f4f4f4',
                    margin: 0,
                    padding: '25px',
                }}
            >
                <Container
                    style={{
                        maxWidth: '720px',
                        width: '100%',
                        margin: '0 auto',
                        padding: '20px',
                        backgroundColor: '#fff',
                        borderRadius: '8px',
                        boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
                    }}
                >
                    {/* Interact Logo */}
                    <div style={{ backgroundColor: '#fff', padding: 10, textAlign: 'center' }}>
                        <Img
                            src="https://interactnow.in/logo-public-long.png"
                            alt="Interact Logo"
                            style={{
                                display: 'block',
                                margin: '0 auto',
                                maxWidth: '100%',
                                height: 'auto',
                            }}
                            width="170"
                        />
                    </div>

                    {/* Main Content */}
                    <Text
                        style={{
                            color: '#333',
                            fontSize: '24px',
                            fontWeight: 400,
                            textAlign: 'center',
                            margin: '20px 0',
                        }}
                    >
                        Password Reset
                    </Text>

                    <Text
                        style={{
                            marginBottom: '20px',
                            textAlign: 'center',
                        }}
                    >
                        Hello {user.name},
                    </Text>

                    <Text
                        style={{
                            fontSize: '15px',
                            lineHeight: '23px',
                            color: '#444',
                            margin: '0',
                            padding: '0 20px',
                            textAlign: 'left',
                        }}
                    >
                        To reset your password, please click the button below:
                    </Text>

                    <div style={{ textAlign: 'center', margin: '16px auto' }}>
                        <a
                            href={otp} // The OTP URL passed in the props
                            style={{
                                display: 'inline-block',
                                backgroundColor: '#1E88E5',
                                fontSize: '18px',
                                color: '#fff',
                                padding: '12px 24px',
                                borderRadius: '4px',
                                textDecoration: 'none',
                                fontWeight: 700,
                                letterSpacing: '1px',
                            }}
                        >
                            Reset Password
                        </a>
                    </div>

                    <Text
                        style={{
                            fontSize: '15px',
                            lineHeight: '23px',
                            color: '#444',
                            margin: '20px 20px',
                            textAlign: 'left',
                        }}
                    >
                        This link is valid for the next 10 minutes. If you did not request a
                        password reset, please ignore this email or contact our support team
                        immediately.
                    </Text>

                    <Text
                        style={{
                            fontSize: '15px',
                            lineHeight: '23px',
                            color: '#444',
                            margin: '20px 20px',
                            textAlign: 'left',
                        }}
                    >
                        For your security, do not share this link with anyone. If you have any
                        questions or need assistance, feel free to reply to this email.
                    </Text>

                    <Text
                        style={{
                            fontSize: '15px',
                            lineHeight: '23px',
                            color: '#444',
                            margin: '20px 20px',
                            textAlign: 'left',
                        }}
                    >
                        Best regards,
                        <br />
                        Interact
                    </Text>

                    {/* Footer */}
                    <Hr
                        style={{
                            width: '100%',
                            border: 'none',
                            borderTop: '1px solid #eaeaea',
                            margin: '20px 0',
                        }}
                    />
                    <Text
                        style={{
                            fontSize: '12px',
                            lineHeight: '24px',
                            color: 'hsl(214, 7%, 62%)',
                            textAlign: 'center',
                        }}
                    >
                        If you did not sign up for an account with us, please ignore this email or
                        contact our support team immediately.
                    </Text>
                </Container>
            </Body>
        </Html>
    );
}
