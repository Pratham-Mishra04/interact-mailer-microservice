import React from 'react';
import { Html, Head, Body, Container, Text, Img, Hr, Link } from '@react-email/components';
import { User, Task } from '../types';
interface TaskDueTodayEmailProps {
    user: User;
    task: Task;
}

export default function TaskDueTodayEmail({ user, task }: TaskDueTodayEmailProps) {
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
                            marginBottom: '20px',
                        }}
                    >
                        Task Due Today
                    </Text>

                    <Text
                        style={{
                            marginBottom: '20px',
                            fontSize: '18px',
                        }}
                    >
                        Hello {user.name},
                    </Text>

                    <Text
                        style={{
                            marginBottom: '20px',
                            fontSize: '16px',
                        }}
                    >
                        This is a reminder that you have a task due today on Interact. Please find
                        the task details below:
                    </Text>

                    <Text
                        style={{
                            marginBottom: '20px',
                            fontSize: '16px',
                        }}
                    >
                        <strong>Task Title:</strong> {task.title}
                        <br />
                        <strong>Description:</strong> {task.description}
                    </Text>

                    <Text
                        style={{
                            marginBottom: '20px',
                            fontSize: '16px',
                        }}
                    >
                        Please ensure that you review and complete this task by the end of the day.
                        You can view and manage this task by logging into your Interact account or
                        by clicking the button below:
                    </Text>

                    <Link
                        href={`https://interactnow/organisations?oid=${task.organizationID}&redirect_url=/tasks?tid=${task.id}`}
                        style={{
                            lineHeight: '100%',
                            display: 'block',
                            maxWidth: '100%',
                            background: '#1e88e5',
                            borderRadius: '3px',
                            fontWeight: '600',
                            color: '#fff',
                            fontSize: '15px',
                            textAlign: 'center',
                            padding: '11px 23px',
                            margin: 'auto',
                            textDecoration: 'none',
                        }}
                        target="_blank"
                    >
                        View Task
                    </Link>

                    <div style={{ marginTop: '20px' }}>
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
                        If you did not apply for this position or believe this message was sent in
                        error, please contact our support team immediately.
                    </Text>
                </Container>
            </Body>
        </Html>
    );
}
