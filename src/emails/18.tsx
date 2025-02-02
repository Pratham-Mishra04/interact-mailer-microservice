import React from 'react';
import { Html, Head, Body, Container, Text, Img, Hr, Link } from '@react-email/components';
import { Project, User } from '../types';
interface ProjectInvitationAcceptedEmailProps {
    user: User;
    secondaryUser: User;
    project: Project;
}
export default function ProjectInvitationAcceptedEmail({
    user,
    secondaryUser,
    project,
}: ProjectInvitationAcceptedEmailProps) {
    return (
        <Html>
            <Head />
            <Body
                style={{
                    backgroundColor: '#f4f4f4',
                    fontFamily: 'Arial, sans-serif',
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
                    {/* Heading */}
                    <Text
                        style={{
                            color: '#333',
                            fontSize: '24px',
                            textAlign: 'left',
                        }}
                    >
                        Project Invitation Accepted!
                    </Text>

                    {/* Greeting */}
                    <Text
                        style={{
                            marginBottom: '20px',
                            textAlign: 'left',
                        }}
                    >
                        Hello {user.name},
                    </Text>

                    {/* Project Invitation Content */}
                    <Text
                        style={{
                            marginBottom: '20px',
                            textAlign: 'left',
                        }}
                    >
                        We are excited to inform you that {secondaryUser.name} has accepted your
                        invitation to join the project titled: <strong>{project.title}</strong>
                    </Text>

                    <Text
                        style={{
                            marginBottom: '20px',
                            textAlign: 'left',
                        }}
                    >
                        {secondaryUser.name} is thrilled to collaborate and contribute their
                        expertise to the project. Here's a brief description of the project:
                    </Text>

                    <Text
                        style={{
                            marginBottom: '20px',
                            textAlign: 'left',
                            fontStyle: 'italic',
                        }}
                    >
                        {project.description}
                    </Text>

                    <Text
                        style={{
                            marginBottom: '20px',
                            textAlign: 'left',
                        }}
                    >
                        The Interact team looks forward to seeing the innovative ideas and solutions
                        that {secondaryUser.name} will bring to the table.
                    </Text>

                    <Text
                        style={{
                            marginBottom: '20px',
                            textAlign: 'left',
                        }}
                    >
                        If you have any further questions or need assistance, feel free to reply to
                        this email.
                    </Text>

                    {/* Signature */}
                    <div style={{ marginTop: '20px', textAlign: 'left' }}>
                        <Text>Best regards,</Text>
                        <Text>The Interact Team</Text>
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
