import React from 'react';
import { Html, Head, Body, Img, Container, Text } from '@react-email/components';
import { User, Event } from '../types';
interface FlaggedEventEmailProps {
    user: User;
    event: Event;
}

export default function FlaggedEventEmail({ user, event }: FlaggedEventEmailProps) {
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
                    <Text style={{ color: '#333', fontSize: '24px' }}>
                        An Event Has Been Flagged
                    </Text>
                    <Text style={{ marginBottom: '20px' }}>Hello {user.name},</Text>
                    <Text style={{ marginBottom: '20px' }}>
                        We wanted to inform you that an event you are involved with has been
                        flagged.
                    </Text>

                    <div
                        style={{
                            padding: '15px',
                            backgroundColor: '#f4f4f4',
                            borderRadius: '5px',
                            marginBottom: '20px',
                        }}
                    >
                        <Text style={{ color: '#333', fontSize: '16px' }}>Flagged Event:</Text>
                        <Text style={{ fontWeight: 'bold' }}>{event.title}</Text>
                        <Text style={{ fontWeight: 'bold' }}>{event.description}</Text>
                    </div>

                    <Text style={{ marginBottom: '20px' }}>
                        Our moderation team will review this event to determine if it violates our
                        community guidelines.
                    </Text>

                    <Text style={{ marginBottom: '20px' }}>
                        <b>
                            Depending on your role (organizer/participant), you may have different
                            options:
                        </b>
                    </Text>

                    <ul style={{ marginBottom: '20px' }}>
                        <li>
                            <b>Organizers:</b> You may be able to edit the event details to address
                            the flag.
                        </li>
                        <li>
                            <b>Participants:</b> You may be able to report the event as
                            inappropriate or choose not to attend.
                        </li>
                    </ul>

                    <Text style={{ marginBottom: '20px' }}>
                        We take community guidelines seriously to ensure a safe and respectful
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
