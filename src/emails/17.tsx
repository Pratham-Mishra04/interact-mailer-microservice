import React from 'react';
import { Html, Head, Body, Container, Text, Img, Hr, Link } from '@react-email/components';
import { GroupChat, User } from '../types';

interface GroupChatInvitationEmailProps {
    user: User;
    secondaryUser: User;
    groupChat: GroupChat;
}

export default function GroupChatInvitationEmail({
    user,
    secondaryUser,
    groupChat,
}: GroupChatInvitationEmailProps) {
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
                        maxWidth: '600px',
                        width: '100%',
                        margin: '0 auto',
                        padding: '20px',
                        backgroundColor: '#fff',
                        borderRadius: '0.25rem',
                        boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
                        border: '1px solid #eaeaea',
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
                            fontWeight: 400,
                            textAlign: 'center',
                            margin: '30px 0',
                        }}
                    >
                        You've Been Invited to a Group Chat!
                    </Text>

                    {/* Greeting */}
                    <Text
                        style={{
                            fontSize: '14px',
                            lineHeight: '24px',
                            margin: '16px 0',
                            color: '#000',
                            textAlign: 'left',
                        }}
                    >
                        Hello {user.name},
                    </Text>

                    {/* Chat Invitation Content */}
                    <Text
                        style={{
                            fontSize: '14px',
                            lineHeight: '24px',
                            margin: '16px 0',
                            color: '#000',
                            textAlign: 'left',
                        }}
                    >
                        You've been invited to join a new group chat on Interact! Get ready to
                        connect with multiple people and have engaging conversations.
                    </Text>

                    <Text
                        style={{
                            fontSize: '14px',
                            lineHeight: '24px',
                            margin: '16px 0',
                            color: '#000',
                            textAlign: 'left',
                        }}
                    >
                        The group chat is named: <strong>{groupChat.title}</strong>
                    </Text>

                    <Text
                        style={{
                            fontSize: '14px',
                            lineHeight: '24px',
                            margin: '16px 0',
                            color: '#000',
                            textAlign: 'left',
                        }}
                    >
                        {groupChat.description}
                    </Text>

                    <Text
                        style={{
                            fontSize: '14px',
                            lineHeight: '24px',
                            margin: '16px 0',
                            color: '#000',
                            textAlign: 'left',
                        }}
                    >
                        {secondaryUser.name} has invited you to join this chat.
                    </Text>

                    {/* Button */}
                    <div style={{ textAlign: 'center', margin: '32px 0' }}>
                        <Link
                            href="https://interactnow.in/invitations?tab=group_chats"
                            style={{
                                display: 'inline-block',
                                padding: '12px 20px',
                                fontSize: '14px',
                                fontWeight: 600,
                                color: '#fff',
                                backgroundColor: '#1e88e5',
                                borderRadius: '0.25rem',
                                textDecoration: 'none',
                                textAlign: 'center',
                                width: 'auto',
                                maxWidth: '100%',
                                boxSizing: 'border-box',
                            }}
                        >
                            Join the Group Chat
                        </Link>
                    </div>

                    {/* Footer */}
                    <Text
                        style={{
                            fontSize: '14px',
                            lineHeight: '24px',
                            margin: '16px 0',
                            color: '#000',
                            textAlign: 'left',
                        }}
                    >
                        Don't miss out on the opportunity to collaborate and discuss within this
                        group. Join now!
                    </Text>

                    <Text
                        style={{
                            fontSize: '14px',
                            lineHeight: '24px',
                            margin: '16px 0',
                            color: '#000',
                            textAlign: 'left',
                        }}
                    >
                        If you have any questions or need assistance, feel free to reply to this
                        email.
                    </Text>

                    <Text
                        style={{
                            fontSize: '14px',
                            lineHeight: '24px',
                            margin: '16px 0',
                            color: '#000',
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
