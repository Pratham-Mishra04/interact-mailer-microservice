import React from 'react';
import { Html, Head, Body, Img, Container, Text } from '@react-email/components';
import { User, Comment } from '../types';
interface CommentFlagRevokedEmailProps {
    user: User;
    comment: Comment;
}

const CommentFlagRevokedEmail = ({ user, comment }: CommentFlagRevokedEmailProps) => (
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
                <Text style={{ color: '#333', fontSize: '24px' }}>✅ Comment Flag Revoked</Text>
                <Text style={{ marginBottom: '20px' }}>Hello {user.name},</Text>
                <Text style={{ marginBottom: '20px' }}>
                    We wanted to let you know that the flag on your comment has been reviewed and
                    revoked. Your comment complies with our community guidelines.
                </Text>

                <div
                    style={{
                        padding: '15px',
                        backgroundColor: '#f4f4f4',
                        borderRadius: '5px',
                        marginBottom: '20px',
                    }}
                >
                    <Text style={{ color: '#333', fontSize: '16px' }}>Revoked Comment:</Text>
                    <Text style={{ fontStyle: 'italic', color: '#555' }}>"{comment.content}"</Text>
                </div>

                <Text style={{ marginBottom: '20px' }}>
                    Thank you for your patience during this process. We're committed to maintaining
                    a respectful and constructive community.
                </Text>
                <Text style={{ marginBottom: '20px' }}>
                    If you have any questions or need further assistance, please don't hesitate to
                    reply to this email.
                </Text>

                <div style={{ marginTop: '20px' }}>
                    <Text>Best regards,</Text>
                    <Text>The Interact Team</Text>
                </div>
            </Container>
        </Body>
    </Html>
);

export default CommentFlagRevokedEmail;
