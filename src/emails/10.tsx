import React from 'react';
import { Html, Head, Body, Container, Text, Img, Hr, Link } from '@react-email/components';
import { User } from '../types';

interface ChatNotificationEmailProps {
    user: User;
    secondaryUser: User;
}

export default function ChatNotificationEmail({ user, secondaryUser }: ChatNotificationEmailProps) {
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
                        margin: '0 auto',
                        padding: '20px',
                        backgroundColor: '#fff',
                        borderRadius: '8px',
                        boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
                    }}
                >
                    {/* Logo */}
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
                    <Text
                        style={{
                            color: '#333',
                            fontSize: '24px',
                            fontWeight: 400,
                            textAlign: 'left',
                            margin: '20px 0',
                        }}
                    >
                        New Chat Notification
                    </Text>

                    <Text
                        style={{
                            fontSize: '16px',
                            lineHeight: '26px',
                            margin: '16px 0',
                            color: '#444',
                            textAlign: 'left',
                        }}
                    >
                        Hello {user.name},
                    </Text>

                    <Text
                        style={{
                            fontSize: '16px',
                            lineHeight: '26px',
                            margin: '16px 0',
                            color: '#444',
                            textAlign: 'left',
                        }}
                    >
                        You've got a new chat from {secondaryUser.name} waiting for you on Interact!
                        Connect with your potential collaborators, discuss ideas, and make your
                        projects come to life.
                    </Text>

                    <Text
                        style={{
                            fontSize: '16px',
                            lineHeight: '26px',
                            margin: '16px 0',
                            color: '#444',
                            textAlign: 'left',
                        }}
                    >
                        Click the button below to jump into your inbox:
                    </Text>

                    <div
                        style={{
                            textAlign: 'center',
                            margin: '16px auto',
                        }}
                    >
                        <Link
                            href="https://interactnow.in/messaging?chat=personal&tab=request"
                            style={{
                                display: 'inline-block',
                                backgroundColor: '#1e88e5',
                                fontSize: '18px',
                                color: '#fff',
                                padding: '12px 24px',
                                borderRadius: '4px',
                                textDecoration: 'none',
                                fontWeight: 700,
                                letterSpacing: '1px',
                                background: 'linear-gradient(135deg, #1e88e5 0%, #42a5f5 100%)',
                                transition: 'background 0.3s ease',
                            }}
                        >
                            Open Inbox
                        </Link>
                    </div>

                    <Text
                        style={{
                            fontSize: '16px',
                            lineHeight: '26px',
                            margin: '16px 0',
                            color: '#444',
                            textAlign: 'left',
                        }}
                    >
                        Don't miss out on exciting collaborations and discussions. Head to your
                        inbox now!
                    </Text>

                    <Text
                        style={{
                            fontSize: '16px',
                            lineHeight: '26px',
                            margin: '16px 0',
                            color: '#444',
                            textAlign: 'left',
                        }}
                    >
                        If you have any questions or need assistance, feel free to reply to this
                        email.
                    </Text>

                    <div style={{ marginTop: '20px' }}>
                        <Text
                            style={{
                                fontSize: '16px',
                                lineHeight: '26px',
                                color: '#444',
                                textAlign: 'left',
                            }}
                        >
                            Best regards,
                            <br />
                            Interact
                        </Text>
                    </div>

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
