import React from 'react';
import { Html, Head, Body, Container, Text, Img, Link, Hr } from '@react-email/components';
import { Meeting, User } from '../types';

interface MeetingScheduledEmailProps {
    user: User;
    meeting: Meeting;
}

export default function MeetingScheduledEmail({ user, meeting }: MeetingScheduledEmailProps) {
    return (
        <Html>
            <Head />
            <Body
                style={{
                    backgroundColor: '#f4f4f4',
                    color: '#333',
                    fontFamily: 'Arial, sans-serif',
                    lineHeight: '1.6',
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
                        Meeting Scheduled
                    </Text>

                    <Text
                        style={{
                            textAlign: 'left',
                            fontSize: '18px',
                            margin: '16px 0',
                        }}
                    >
                        Hello {user.name},
                    </Text>

                    <Text
                        style={{
                            textAlign: 'left',
                            fontSize: '14px',
                            lineHeight: '22px',
                        }}
                    >
                        We are pleased to inform you that a new meeting has been scheduled. Please
                        find the meeting details below:
                    </Text>

                    <Text
                        style={{
                            textAlign: 'left',
                            fontSize: '14px',
                            lineHeight: '22px',
                        }}
                    >
                        <strong>Meeting Title:</strong> {meeting.title}
                        <br />
                        <strong>Description:</strong> {meeting.description}
                        <br />
                        <strong>Time:</strong> {meeting.startTime.toLocaleString()}
                        <br />
                        <strong>Frequency:</strong> {meeting.frequency}
                        <br />
                        <strong>Organization:</strong> {meeting.organization.title}
                    </Text>

                    <Text
                        style={{
                            textAlign: 'left',
                            fontSize: '14px',
                            lineHeight: '22px',
                        }}
                    >
                        Please ensure that you join the meeting on time. You can view and manage
                        this meeting by logging into your Interact account or you can directly go to
                        the meeting page by clicking on the button below!
                    </Text>

                    {/* Button to join meeting */}
                    <Link
                        href={`https://interactnow/organisations?oid=${meeting.organizationID}&redirect_url=/meetings/${meeting.id}`}
                        style={{
                            display: 'block',
                            width: '100%',
                            maxWidth: '200px',
                            margin: '20px auto',
                            backgroundColor: '#478ee1',
                            borderRadius: '3px',
                            fontWeight: '600',
                            color: '#fff',
                            fontSize: '15px',
                            textAlign: 'center',
                            padding: '11px 23px',
                            textDecoration: 'none',
                        }}
                        target="_blank"
                    >
                        Join the Meeting!
                    </Link>

                    {/* Closing message */}
                    <Text
                        style={{
                            textAlign: 'left',
                            fontSize: '14px',
                            lineHeight: '22px',
                            margin: '16px 0',
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
