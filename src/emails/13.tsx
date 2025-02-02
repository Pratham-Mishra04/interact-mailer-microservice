import React from 'react';
import { Html, Head, Body, Container, Text, Img, Hr, Link } from '@react-email/components';
import { User, Opening } from '../types/index';
interface ApplicationAcceptedEmailProps {
    user: User;
    opening: Opening;
    secondaryUser: User;
}

export default function ApplicationAcceptedEmail({
    user,
    opening,
    secondaryUser,
}: ApplicationAcceptedEmailProps) {
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

                    <Text
                        style={{
                            color: '#333',
                            fontSize: '24px',
                            fontWeight: 400,
                            textAlign: 'center',
                            margin: '30px 0',
                        }}
                    >
                        Congratulations!
                    </Text>

                    <Text
                        style={{
                            marginBottom: '20px',
                            textAlign: 'left',
                        }}
                    >
                        Hello {user.name},
                    </Text>

                    <Text
                        style={{
                            marginBottom: '20px',
                            textAlign: 'left',
                        }}
                    >
                        We're excited to inform you that your application for the{' '}
                        <b>{opening.title}</b> opening has been accepted by{' '}
                        <b>{secondaryUser.name}</b>!
                    </Text>

                    <Text
                        style={{
                            marginBottom: '20px',
                            textAlign: 'left',
                        }}
                    >
                        This is a fantastic opportunity to connect, collaborate, and contribute to
                        the project. We believe you'll make a significant impact.
                    </Text>

                    <Text
                        style={{
                            marginBottom: '20px',
                            textAlign: 'left',
                        }}
                    >
                        We're thrilled to see what you'll accomplish in this role! If you have any
                        questions or need support, feel free to reach out to our team.
                    </Text>

                    <div style={{ marginTop: '20px', textAlign: 'left' }}>
                        <Text>
                            Best regards,
                            <br />
                            The Interact Team
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
                        If you did not apply for this position or believe this email was sent in
                        error, please contact our support team immediately.
                    </Text>
                </Container>
            </Body>
        </Html>
    );
}
