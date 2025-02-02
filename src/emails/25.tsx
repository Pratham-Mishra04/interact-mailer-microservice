import React from 'react';
import { Html, Head, Body, Container, Text, Img, Hr } from '@react-email/components';
import { User, Project } from '../types/index';
interface ProjectAttentionEmailProps {
    user: User;
    project: Project;
}

export default function ProjectAttentionEmail({ user, project }: ProjectAttentionEmailProps) {
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
                        margin: '20px auto',
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

                    {/* Email content */}
                    <Text
                        style={{
                            color: '#333',
                            fontSize: '24px',
                            fontWeight: '400',
                            textAlign: 'center',
                            margin: '30px 0',
                        }}
                    >
                        Your Project is Getting Attention!
                    </Text>

                    <Text
                        style={{
                            marginBottom: '20px',
                            fontSize: '14px',
                            lineHeight: '24px',
                            textAlign: 'left',
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
                        We're excited to let you know that your recent post/project/event has
                        garnered some impressive numbers!
                    </Text>

                    <Text
                        style={{
                            marginBottom: '20px',
                            fontSize: '14px',
                            lineHeight: '24px',
                            textAlign: 'left',
                        }}
                    >
                        <strong>You have a whopping {user.noImpressions} impressions!</strong> This
                        means that your content has been displayed to a significant number of users
                        on Interact.
                    </Text>

                    <Text
                        style={{
                            marginBottom: '20px',
                            fontSize: '14px',
                            lineHeight: '24px',
                            textAlign: 'left',
                        }}
                    >
                        <strong>Your project got {project.noImpressions} impressions.</strong>
                    </Text>

                    <Text
                        style={{
                            marginBottom: '20px',
                            fontSize: '14px',
                            lineHeight: '24px',
                            textAlign: 'left',
                        }}
                    >
                        This is a great opportunity to connect with a wider audience and generate
                        interest in your work. Keep up the good work!
                    </Text>

                    <Text
                        style={{
                            marginBottom: '20px',
                            fontSize: '14px',
                            lineHeight: '24px',
                            textAlign: 'left',
                        }}
                    >
                        We're here to help you succeed on Interact. Feel free to explore our
                        resources or reach out to our support team if you have any questions.
                    </Text>

                    <Text
                        style={{
                            marginBottom: '20px',
                            fontSize: '14px',
                            lineHeight: '24px',
                            textAlign: 'left',
                        }}
                    >
                        Best regards,
                        <br />
                        The Interact Team
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
