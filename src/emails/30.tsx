import React from 'react';
import { Html, Head, Body, Container, Text, Img, Hr } from '@react-email/components';
import { User } from '../types';

interface NewActivitiesEmailProps {
    user: User;
}

export default function NewActivitiesEmail({ user }: NewActivitiesEmailProps) {
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

                    {/* Email Content */}
                    <Text
                        style={{
                            color: '#333',
                            fontSize: '24px',
                            fontWeight: '400',
                            textAlign: 'left',
                            margin: '30px 0',
                        }}
                    >
                        New Activities
                    </Text>

                    <Text
                        style={{
                            marginBottom: '20px',
                            textAlign: 'left',
                            fontSize: '16px',
                        }}
                    >
                        Hello {user.name},
                    </Text>

                    <Text
                        style={{
                            marginBottom: '20px',
                            fontSize: '14px',
                            lineHeight: '24px',
                            textAlign: 'left',
                        }}
                    >
                        You are missing out on some new activities.
                    </Text>

                    <Text
                        style={{
                            marginBottom: '20px',
                            fontSize: '14px',
                            lineHeight: '24px',
                            textAlign: 'left',
                        }}
                    >
                        Don't miss out on exciting collaborations and discussions. Head to your
                        inbox now!
                    </Text>

                    <Text
                        style={{
                            marginBottom: '20px',
                            fontSize: '14px',
                            lineHeight: '24px',
                            textAlign: 'left',
                        }}
                    >
                        If you have any questions or need assistance, feel free to reply to this
                        email.
                    </Text>

                    {/* Button */}
                    <div style={{ textAlign: 'center', margin: '20px 0' }}>
                        <a
                            href="https://interactnow.in/explore"
                            style={{
                                display: 'inline-block',
                                textDecoration: 'none',
                                color: '#fff',
                                backgroundColor: '#1e88e5',
                                padding: '10px 20px',
                                borderRadius: '5px',
                                fontWeight: 'bold',
                                fontSize: '16px',
                                textAlign: 'center',
                                width: '100%',
                                maxWidth: '300px',
                            }}
                        >
                            View Activities
                        </a>
                    </div>

                    <div style={{ marginTop: '20px', textAlign: 'left' }}>
                        <div>Best regards,</div>
                        <div>Interact</div>
                    </div>

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
