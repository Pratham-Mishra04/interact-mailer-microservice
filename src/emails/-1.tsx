import React from 'react';
import { Html, Head, Body, Container, Text, Link, Img, Hr } from '@react-email/components';
import { User } from '../types';
interface EarlyAccessEmailProps {
    user: User;
    email: string;
    token: string;
}

export default function EarlyAccessEmail({ user, email, token }: EarlyAccessEmailProps) {
    return (
        <Html>
            <Head />
            <Body
                style={{
                    fontFamily: "'Arial', sans-serif",
                    lineHeight: '1.6',
                    color: '#100f0f',
                    backgroundColor: '#f4f4f4',
                    margin: 0,
                    padding: '25px',
                }}
            >
                <Container
                    style={{
                        maxWidth: '600px',
                        width: '100%',
                        margin: '0 auto',
                        padding: '20px',
                        backgroundColor: '#fff',
                        borderRadius: '8px',
                        boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
                        textAlign: 'left',
                    }}
                >
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
                            marginTop: '20px',
                        }}
                    >
                        Welcome to Interact Early Access!
                    </Text>
                    <Text style={{ marginBottom: '20px' }}>Dear {user.name},</Text>
                    <Text style={{ marginBottom: '20px' }}>
                        Thank you for signing up for Interact Early Access! You're just one step
                        away from joining our vibrant community of students.
                    </Text>
                    <Text style={{ marginBottom: '20px' }}>
                        To complete your signup process and start exploring Interact, click the
                        button below:
                    </Text>
                    <Link
                        href={`https://interactnow.in/signup?email=${email}&token=${token}`}
                        style={{
                            width: '50%',
                            maxWidth: '280px',
                            textDecoration: 'none',
                            textAlign: 'center',
                            margin: '20px auto',
                            display: 'block',
                            padding: '10px',
                            border: 'none',
                            fontWeight: 'bolder',
                            borderRadius: '10px',
                            background: '#1E88E5',
                            color: '#fff',
                        }}
                    >
                        Complete Signup!
                    </Link>
                    <Text style={{ marginTop: '20px', marginBottom: '20px' }}>
                        <b>This link is valid for 7 days.</b> After that, you'll need to request a
                        new early access token.
                    </Text>
                    <Text style={{ marginBottom: '20px' }}>
                        If you have any questions or need assistance, feel free to reply to this
                        email.
                    </Text>
                    <div style={{ marginTop: '20px' }}>
                        <Text>Best regards,</Text>
                        <Text>Interact</Text>
                    </div>
                    <Hr
                        style={{
                            width: '100%',
                            border: 'none',
                            borderTop: '1px solid #eaeaea',
                            margin: '26px 0',
                        }}
                    />
                    <Text
                        style={{
                            fontSize: 'small',
                            color: 'hsl(214, 7%, 62%)',
                            textAlign: 'center',
                        }}
                    >
                        This message was produced and distributed by Interact. If you were not
                        expecting this email, you can ignore it. For any concerns, please contact
                        support.
                    </Text>
                </Container>
            </Body>
        </Html>
    );
}
