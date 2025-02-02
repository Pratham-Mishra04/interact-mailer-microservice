import React from 'react';
import { Html, Head, Body, Container, Img, Text } from '@react-email/components';
import { Post, User } from '../types';

interface PostFlagRevokedEmailProps {
    user: User;
    post: Post;
}

const PostFlagRevokedEmail = ({ user, post }: PostFlagRevokedEmailProps) => (
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
                <Text style={{ color: '#333', fontSize: '24px' }}>✅ Post Flag Revoked</Text>
                <Text style={{ marginBottom: '20px' }}>Hello {user.name},</Text>
                <Text style={{ marginBottom: '20px' }}>
                    We are pleased to inform you that the flag on your post has been reviewed and
                    revoked. Your post adheres to our community guidelines.
                </Text>

                <div
                    style={{
                        padding: '15px',
                        backgroundColor: '#f4f4f4',
                        borderRadius: '5px',
                        marginBottom: '20px',
                    }}
                >
                    <Text style={{ color: '#333', fontSize: '16px' }}>Revoked Post:</Text>
                    <Text style={{ fontStyle: 'italic', color: '#555' }}>"{post.content}"</Text>
                </div>

                <Text style={{ marginBottom: '20px' }}>
                    We appreciate your patience during the review process. Thank you for being a
                    valuable part of our community and for adhering to our guidelines.
                </Text>
                <Text style={{ marginBottom: '20px' }}>
                    If you have any questions or need further assistance, please feel free to reply
                    to this email.
                </Text>

                <div style={{ marginTop: '20px' }}>
                    <Text>Best regards,</Text>
                    <Text>The Interact Team</Text>
                </div>
            </Container>
        </Body>
    </Html>
);

export default PostFlagRevokedEmail;
