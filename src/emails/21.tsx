import React from 'react';
import { Html, Head, Body, Container, Text, Img, Hr, Link } from '@react-email/components';
import { Task, User } from '../types';

interface TaskAssignedEmailProps {
    user: User;
    task: Task;
}

export default function TaskAssignedEmail({ user, task }: TaskAssignedEmailProps) {
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
                        New Task Assigned
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
                        A new task has been assigned to you on Interact. Please find the task
                        details below:
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
                        You can view and manage this task by logging into your Interact account.
                        Please ensure that you review the task details and complete it by the
                        specified due date.
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
                            margin: 'auto',
                            width: '50%',
                        }}
                        target="_blank"
                    >
                        <span style={{ display: 'inline-block', width: '100%' }}>View Task</span>
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
                            margin: '26px 0',
                        }}
                    />
                    <Text
                        style={{
                            fontSize: 'small',
                            textAlign: 'left',
                        }}
                    >
                        This message was produced and distributed by Interact. If you were not
                        expecting this email, you can ignore it. For any concerns, please contact
                        support.
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
