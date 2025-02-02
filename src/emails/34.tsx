import React from 'react';
import { Html, Head, Body, Container, Text, Img, Link, Hr } from '@react-email/components';
import { User, Meeting } from '../types';
interface MeetingDueTodayEmailProps {
    user: User;
    meeting: Meeting;
}

export default function MeetingDueTodayEmail({ user, meeting }: MeetingDueTodayEmailProps) {
    return (
        <Html>
            <Head />
            <Body
                style={{
                    backgroundColor: '#f4f4f4',
                    color: '#333',
                    fontFamily: 'Arial, sans-serif',
                    margin: 0,
                    padding: '25px',
                }}
            >
                <Container
                    style={{
                        maxWidth: '600px',
                        margin: '20px auto',
                        padding: '20px',
                        backgroundColor: '#fff',
                        borderRadius: '8px',
                        boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
                        width: '100%',
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
                    <div style={{ padding: '15px', boxSizing: 'border-box' }}>
                        <Text
                            style={{
                                color: '#333',
                                fontSize: '22px',
                                fontWeight: '400',
                                textAlign: 'center',
                                margin: '20px 0',
                            }}
                        >
                            Meeting Due Today
                        </Text>
                        <Text style={{ marginBottom: '15px' }}>Hello {user.name},</Text>
                        <Text style={{ marginBottom: '15px' }}>
                            This is a reminder that you have a meeting scheduled for today on
                            Interact. Please find the meeting details below:
                        </Text>
                        <Text style={{ marginBottom: '15px' }}>
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
                        <Text style={{ marginBottom: '15px' }}>
                            Please ensure that you join the meeting on time. You can view and manage
                            this meeting by logging into your Interact account, or you can directly
                            go to the meeting page by clicking on the button below!
                        </Text>
                        <div style={{ textAlign: 'center', margin: '20px 0' }}>
                            <Link
                                href={`https://interactnow/organisations?oid=${meeting.organizationID}&redirect_url=/meetings/${meeting.id}`}
                                style={{
                                    backgroundColor: '#1e88e5',
                                    borderRadius: '3px',
                                    fontWeight: '600',
                                    color: '#fff',
                                    fontSize: '15px',
                                    textAlign: 'center',
                                    padding: '10px 20px',
                                    textDecoration: 'none',
                                    display: 'inline-block',
                                }}
                                target="_blank"
                            >
                                Join the Meeting!
                            </Link>
                        </div>
                        <Text style={{ marginBottom: '0' }}>
                            Best regards,
                            <br />
                            The Interact Team
                        </Text>
                    </div>
                    <div
                        style={{
                            textAlign: 'center',
                            borderTop: '1px solid #eaeaea',
                            paddingTop: '20px',
                            marginTop: '20px',
                        }}
                    >
                        <Text
                            style={{
                                fontSize: '12px',
                                lineHeight: '18px',
                                color: 'hsl(214, 7%, 62%)',
                                margin: 0,
                            }}
                        >
                            This message was produced and distributed by Interact. If you were not
                            expecting this email, you can ignore it. For any concerns, please
                            contact support.
                        </Text>
                    </div>
                </Container>
            </Body>
        </Html>
    );
}
