import React from 'react';
import { Html, Head, Body, Container, Text, Img, Hr } from '@react-email/components';
import { GroupChat, User } from '../types';

interface GroupChatInvitationAcceptedEmailProps {
    user: User;
    groupChat: GroupChat;
    secondaryUser: User;
}

export default function GroupChatInvitationAcceptedEmail({
    user,
    groupChat,
    secondaryUser,
}: GroupChatInvitationAcceptedEmailProps) {
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
                            fontWeight: '400',
                            textAlign: 'left',
                            marginTop: 0,
                        }}
                    >
                        GroupChat Invitation Accepted!
                    </Text>

                    {/* Content */}
                    <div style={{ textAlign: 'left', margin: '30px 0' }}>
                        <Text
                            style={{
                                marginBottom: '20px',
                                color: '#000',
                                fontSize: '14px',
                                lineHeight: '24px',
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
                            }}
                        >
                            Good news! {secondaryUser.name} has accepted your invitation to join the
                            group chat on Interact.
                        </Text>
                        <Text
                            style={{
                                marginBottom: '20px',
                                color: '#000',
                                fontSize: '14px',
                                lineHeight: '24px',
                            }}
                        >
                            The group chat is named: <strong>{groupChat.title}</strong>
                        </Text>
                        <Text
                            style={{
                                marginBottom: '20px',
                                color: '#000',
                                fontSize: '14px',
                                lineHeight: '24px',
                            }}
                        >
                            <i>{groupChat.description}</i>
                        </Text>
                        <Text
                            style={{
                                marginBottom: '20px',
                                color: '#000',
                                fontSize: '14px',
                                lineHeight: '24px',
                            }}
                        >
                            {secondaryUser.name} is excited to join the conversation and start
                            collaborating with you and other members.
                        </Text>
                        <Text
                            style={{
                                marginBottom: '20px',
                                color: '#000',
                                fontSize: '14px',
                                lineHeight: '24px',
                            }}
                        >
                            Don't miss out on the engaging discussions and collaborative
                            opportunities that lie ahead. Jump back into the chat and start
                            interacting!
                        </Text>
                        <Text
                            style={{
                                marginBottom: '20px',
                                color: '#000',
                                fontSize: '14px',
                                lineHeight: '24px',
                            }}
                        >
                            If you have any questions or need assistance, feel free to reply to this
                            email.
                        </Text>

                        {/* Signature */}
                        <Text
                            style={{
                                color: '#000',
                                fontSize: '14px',
                                lineHeight: '24px',
                            }}
                        >
                            Best regards,
                            <br />
                            The Interact Team
                        </Text>
                    </div>

                    {/* Footer */}
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
