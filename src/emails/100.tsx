import React from 'react';
import { Html, Head, Body, Container, Img, Text } from '@react-email/components';
import { Comment, User } from '../types';
interface CommentDeletedEmailProps {
    user: User;
    comment: Comment;
}

const CommentDeletedEmail = ({ user, comment }: CommentDeletedEmailProps) => (
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
                <Text style={{ color: '#333', fontSize: '24px' }}>🚩 Comment Deleted</Text>
                <Text style={{ marginBottom: '20px' }}>Hello {user.name},</Text>
                <Text style={{ marginBottom: '20px' }}>
                    We wanted to inform you that your comment has been reviewed and deleted for
                    violating our community guidelines.
                </Text>

                <div
                    style={{
                        padding: '15px',
                        backgroundColor: '#f4f4f4',
                        borderRadius: '5px',
                        marginBottom: '20px',
                    }}
                >
                    <Text style={{ color: '#333', fontSize: '16px' }}>Deleted Comment:</Text>
                    <Text style={{ fontStyle: 'italic', color: '#555' }}>"{comment.content}"</Text>
                </div>

                <Text style={{ marginBottom: '20px' }}>
                    Please ensure that future comments adhere to our community guidelines to avoid
                    further actions.
                </Text>
                <Text style={{ marginBottom: '20px' }}>
                    If you have any questions or need further clarification, please feel free to
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

export default CommentDeletedEmail;
