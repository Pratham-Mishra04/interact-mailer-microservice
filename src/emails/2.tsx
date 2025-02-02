import React from 'react';
import { Html, Head, Body, Container, Text, Img, Link, Hr } from '@react-email/components';

export default function OTPEmail({ otp }: OTPEmailProps) {
    return (
        <Html>
            <Head />
            <Body
                style={{
                    fontFamily: "'Arial', sans-serif",
                    lineHeight: '1.6',
                    color: '#333',
                    backgroundColor: '#f4f4f4',
                    margin: 0,
                    padding: '20px',
                }}
            >
                <Container
                    style={{
                        maxWidth: '720px',
                        width: '100%',
                        margin: '20px auto',
                        padding: '20px',
                        backgroundColor: '#fff',
                        borderRadius: '8px',
                        boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
                    }}
                >
                    <div style={{ backgroundColor: '#fff', padding: 10, textAlign: 'center' }}>
                        <Img
                            src="https://interactnow.in/logo.png"
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
                        Welcome to Interact!
                    </Text>

                    <Text
                        style={{
                            fontSize: '16px',
                            lineHeight: '26px',
                            margin: '16px 0',
                        }}
                    >
                        Hi {otp},
                    </Text>

                    <Text
                        style={{
                            fontSize: '16px',
                            lineHeight: '26px',
                            margin: '16px 0',
                        }}
                    >
                        Welcome to Interact, the connecting platform that helps you find the right
                        projects for your niche and helps organizations collaborate effectively.
                    </Text>

                    <Link
                        href="https://interactnow.in"
                        style={{
                            display: 'block',
                            maxWidth: '100%',
                            backgroundColor: '#1e88e5',
                            borderRadius: '0.25rem',
                            color: '#fff',
                            fontSize: '16px',
                            textAlign: 'center',
                            padding: '12px',
                            textDecoration: 'none',
                            margin: '20px auto',
                            width: '100%',
                            boxSizing: 'border-box',
                        }}
                    >
                        Let's Interact
                    </Link>

                    <Text
                        style={{
                            fontSize: '16px',
                            lineHeight: '26px',
                            margin: '16px 0',
                        }}
                    >
                        Best Regards,
                        <br />
                        Interact
                    </Text>

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