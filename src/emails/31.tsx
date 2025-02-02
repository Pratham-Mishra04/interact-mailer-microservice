import React from 'react';
import { Html, Head, Img, Body, Container, Text, Button } from '@react-email/components';
import { User } from '../types';

interface WeMissYouEmailProps {
    user: User;
}
const WeMissYouEmail = ({ user }: WeMissYouEmailProps) => (
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
                    margin: '20px auto',
                    padding: '20px',
                    backgroundColor: '#fff',
                    borderRadius: '8px',
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
                <Text style={{ color: '#333', fontSize: '24px' }}>
                    It's Been a While, {user.name}!
                </Text>
                <Text style={{ marginBottom: '20px' }}>Hello {user.name},</Text>
                <Text style={{ marginBottom: '20px' }}>
                    We've missed you at Interact and wanted to reach out to let you know about some
                    exciting new features and opportunities waiting for you.
                </Text>
                <Text style={{ marginBottom: '20px' }}>
                    Interact has grown and evolved, and we're excited to have you back. Connect with
                    new collaborators, explore fresh ideas, and get your projects back on track.
                </Text>
                <Text style={{ marginBottom: '20px' }}>
                    Click the button below to log in and see what's new:
                </Text>
                <Button
                    href="https://interactnow.in/login"
                    style={{
                        width: '50%',
                        textDecoration: 'none',
                        textAlign: 'center',
                        margin: 'auto',
                        display: 'flex',
                        padding: '1em',
                        gap: '0.4rem',
                        border: 'none',
                        fontWeight: 'bolder',
                        borderRadius: '10px',
                        background: '#1e88e5',
                        backgroundSize: '300%',
                        backgroundPosition: 'left center',
                        color: '#fff',
                    }}
                >
                    Log In Now
                </Button>
                <Text style={{ marginBottom: '20px' }}>
                    Don't miss out on the latest updates and opportunities to collaborate with
                    like-minded individuals. We can't wait to see you back on Interact!
                </Text>
                <Text style={{ marginBottom: '20px' }}>
                    If you have any questions or need assistance, feel free to reply to this email.
                </Text>
                <Text style={{ marginTop: '20px' }}>
                    Best regards,
                    <br />
                    The Interact Team
                </Text>
                <hr
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
                    If you did not apply for this position or believe this message was sent in
                    error, please contact our support team immediately.
                </Text>
            </Container>
        </Body>
    </Html>
);

export default WeMissYouEmail;
