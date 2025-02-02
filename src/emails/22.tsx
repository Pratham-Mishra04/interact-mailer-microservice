import React from 'react';
import { Html, Head, Body, Container, Text, Img, Link, Hr } from '@react-email/components';
import { Task } from '../types';
import { User } from '../types';

interface TaskCompletedEmailProps {
    user: User;
    secondaryUser: User;
    task: Task;
}

export default function TaskCompletedEmail({ user, secondaryUser, task }: TaskCompletedEmailProps) {
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
                        margin: '20px auto',
                        padding: '20px',
                        backgroundColor: '#fff',
                        borderRadius: '8px',
                        boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
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

                    {/* Email Content */}
                    <Text
                        style={{
                            color: '#333',
                            fontSize: '24px',
                            fontWeight: '400',
                            textAlign: 'left',
                            marginTop: 0,
                        }}
                    >
                        Task Completed Notification
                    </Text>
                    <Text
                        style={{
                            marginBottom: '20px',
                            color: '#000',
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
                            color: '#000',
                            fontSize: '14px',
                            lineHeight: '24px',
                            textAlign: 'left',
                        }}
                    >
                        The following task has been marked completed by {secondaryUser.name}:
                    </Text>
                    <Text
                        style={{
                            marginBottom: '20px',
                            color: '#000',
                            fontSize: '14px',
                            lineHeight: '24px',
                            textAlign: 'left',
                        }}
                    >
                        <strong>Task Title:</strong> {task.title}
                        <br />
                        <strong>Description:</strong> {task.description}
                    </Text>
                    <Text
                        style={{
                            marginBottom: '20px',
                            color: '#000',
                            fontSize: '14px',
                            lineHeight: '24px',
                            textAlign: 'left',
                        }}
                    >
                        You can view the details of this completed task by logging into your
                        Interact account.
                    </Text>

                    {/* Button to view task */}
                    <Link
                        href={`https://interactnow/organisations?oid=${task.organizationID}&redirect_url=/tasks?tid=${task.id}`}
                        style={{
                            lineHeight: '100%',
                            textDecoration: 'none',
                            display: 'block',
                            maxWidth: '100%',
                            backgroundColor: '#478ee1',
                            borderRadius: '3px',
                            fontWeight: '600',
                            color: '#fff',
                            fontSize: '15px',
                            textAlign: 'center',
                            padding: '11px 23px',
                            margin: '20px auto',
                        }}
                        target="_blank"
                    >
                        <span
                            style={{
                                maxWidth: '100%',
                                display: 'inline-block',
                                lineHeight: '120%',
                            }}
                        >
                            View Task
                        </span>
                    </Link>

                    {/* Closing message */}
                    <Text
                        style={{
                            marginBottom: '20px',
                            color: '#000',
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
