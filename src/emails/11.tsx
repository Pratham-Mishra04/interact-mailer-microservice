import React from 'react';
import { Html, Head, Body, Container, Text, Img, Hr, Link } from '@react-email/components';
import { User, Post } from '../types/index';

interface PostAttentionEmailProps {
    user: User;
    post: Post;
}

export default function PostAttentionEmail({ user, post }: PostAttentionEmailProps) {
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
                        width: '100%',
                        margin: '0 auto',
                        padding: '20px',
                        backgroundColor: '#fff',
                        borderRadius: '8px',
                        boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
                    }}
                >
                    {/* Interact Logo */}
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

                    {/* Main Content */}
                    <Text
                        style={{
                            color: '#333',
                            fontSize: '24px',
                            fontWeight: 400,
                            textAlign: 'center',
                            margin: '30px 0',
                        }}
                    >
                        Your Post is Getting Attention!
                    </Text>

                    <Text
                        style={{
                            marginBottom: '20px',
                            textAlign: 'left',
                        }}
                    >
                        Hello {user.name},
                    </Text>

                    <Text
                        style={{
                            fontSize: '14px',
                            lineHeight: '24px',
                            margin: '0',
                            color: '#444',
                            padding: '0 10px',
                        }}
                    >
                        We're excited to let you know that your recent post/project/event has
                        garnered some impressive numbers!
                    </Text>

                    <Text
                        style={{
                            fontSize: '14px',
                            lineHeight: '24px',
                            margin: '0',
                            color: '#444',
                            padding: '0 10px',
                        }}
                    >
                        <strong>You have a whopping {user.noImpressions} impressions!</strong> This
                        means that your content has been displayed to a significant number of users
                        on Interact.
                    </Text>

                    <Text
                        style={{
                            fontSize: '14px',
                            lineHeight: '24px',
                            margin: '0',
                            color: '#444',
                            padding: '0 10px',
                        }}
                    >
                        <strong>Your post got {post.noImpressions} impressions.</strong>
                    </Text>

                    <Text
                        style={{
                            fontSize: '14px',
                            lineHeight: '24px',
                            margin: '0',
                            color: '#444',
                            padding: '0 10px',
                        }}
                    >
                        This is a great opportunity to connect with a wider audience and generate
                        interest in your work. Keep up the good work!
                    </Text>

                    <Text
                        style={{
                            fontSize: '14px',
                            lineHeight: '24px',
                            margin: '0',
                            color: '#444',
                            padding: '0 10px',
                        }}
                    >
                        We're here to help you succeed on Interact. Feel free to explore our
                        resources or reach out to our support team if you have any questions.
                    </Text>

                    <div
                        style={{
                            textAlign: 'center',
                            margin: '20px 0',
                        }}
                    >
                        <Link
                            href="https://interactnow.in"
                            style={{
                                display: 'inline-block',
                                textDecoration: 'none',
                                backgroundColor: '#478ee1',
                                borderRadius: '3px',
                                color: '#fff',
                                fontWeight: 600,
                                fontSize: '15px',
                                textAlign: 'center',
                                padding: '11px 23px',
                                margin: '0 auto',
                                maxWidth: '100%',
                                boxSizing: 'border-box',
                            }}
                        >
                            Explore More
                        </Link>
                    </div>

                    <Text
                        style={{
                            fontSize: '14px',
                            lineHeight: '24px',
                            margin: '0',
                            color: '#444',
                            padding: '0 10px',
                        }}
                    >
                        Best regards,
                        <br />
                        The Interact Team
                    </Text>

                    {/* Footer */}
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
