import React from 'react';
import { Html, Head, Body, Img, Container, Text } from '@react-email/components';
import { Project, User } from '../types';
interface FlaggedProjectEmailProps {
    user: User;
    project: Project;
}

export default function FlaggedProjectEmail({ user, project }: FlaggedProjectEmailProps) {
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
                <Container
                    style={{
                        maxWidth: '720px',
                        margin: '20px auto',
                        padding: '20px',
                        backgroundColor: '#fff',
                        borderRadius: '8px',
                        boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
                    }}
                >
                    <Text
                        style={{
                            color: '#333',
                            fontSize: '24px',
                            marginBottom: '20px',
                        }}
                    >
                        Your Project Has Been Flagged
                    </Text>
                    <Text style={{ marginBottom: '20px' }}>Hello {user.name},</Text>
                    <Text style={{ marginBottom: '20px' }}>
                        We're writing to inform you that one of your projects has been flagged.
                    </Text>

                    <div
                        style={{
                            padding: '15px',
                            backgroundColor: '#f4f4f4',
                            borderRadius: '5px',
                            marginBottom: '20px',
                        }}
                    >
                        <Text style={{ color: '#333', fontSize: '16px' }}>Flagged Project:</Text>
                        <Text style={{ fontWeight: 'bold' }}>{project.title}</Text>
                    </div>

                    <Text style={{ marginBottom: '20px' }}>
                        Our moderation team will review this project to determine if it violates our
                        community guidelines.
                    </Text>
                    <Text style={{ marginBottom: '20px' }}>
                        If you believe this flag was a mistake, please reply to this email to
                        explain the situation.
                    </Text>

                    <Text style={{ marginBottom: '20px' }}>
                        We take community guidelines seriously to ensure a safe and positive
                        environment for all members.
                    </Text>
                    <Text style={{ marginBottom: '20px' }}>
                        If you have any questions or need assistance, feel free to reply to this
                        email.
                    </Text>

                    <div style={{ marginTop: '20px' }}>
                        <Text>Best regards,</Text>
                        <Text>The Interact Team</Text>
                    </div>
                </Container>
            </Body>
        </Html>
    );
}
