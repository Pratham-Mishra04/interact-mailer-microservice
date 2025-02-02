import React from 'react';
import { Html, Head, Body, Container, Text, Img, Link, Hr } from '@react-email/components';
import { User, Comment } from '../types';
interface CommentTagEmailProps {
    user: User;
    secondaryUser: User;
    comment: Comment;
}
export default function CommentTagEmail({ user, secondaryUser, comment }: CommentTagEmailProps) {
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
                        margin: '0 auto',
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
                    <Text
                        style={{
                            color: '#333',
                            textAlign: 'center',
                            margin: '20px 0',
                            fontSize: '24px',
                            fontWeight: '400',
                        }}
                    >
                        You were tagged in a comment
                    </Text>
                    <Text style={{ marginBottom: '20px', textAlign: 'left' }}>
                        Hello {user.name},
                    </Text>
                    <Text style={{ marginBottom: '20px', textAlign: 'left' }}>
                        You've been tagged in a comment by {secondaryUser.name} on Interact! Join
                        the conversation and stay engaged.
                    </Text>
                    <Link
                        href="interactnow.in"
                        style={{
                            display: 'block',
                            padding: '15px',
                            borderRadius: '10px',
                            backgroundColor: '#f9f9f9',
                            border: '1px solid #ddd',
                            color: '#555',
                            textDecoration: 'none',
                            marginBottom: '20px',
                        }}
                    >
                        {comment.content}
                    </Link>
                    <Text style={{ marginBottom: '20px', textAlign: 'left' }}>
                        Don't miss out on important updates and discussions. Head to the comment
                        section now!
                    </Text>
                    <Text style={{ marginBottom: '20px', textAlign: 'left' }}>
                        If you have any questions or need assistance, feel free to reply to this
                        email.
                    </Text>
                    <div style={{ textAlign: 'left' }}>
                        <div>Best regards,</div>
                        <div>Interact</div>
                    </div>
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
                            fontSize: '13px',
                            lineHeight: '24px',
                            color: 'hsl(214, 7%, 62%)',
                            textAlign: 'center',
                            margin: 0,
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
