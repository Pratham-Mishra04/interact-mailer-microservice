import React from 'react';
import { Html, Head, Body, Container, Text, Img, Hr } from '@react-email/components';
import { User } from '../types';
interface NewsletterEmailProps {
    user: User;
}

export default function NewsletterEmail({ user }: NewsletterEmailProps) {
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
                    <Text
                        style={{
                            color: '#333',
                            fontSize: '24px',
                            fontWeight: '400',
                            textAlign: 'left',
                        }}
                    >
                        📬 Interact Newsletter - June 2024
                    </Text>
                    <Text
                        style={{
                            marginBottom: '20px',
                            textAlign: 'left',
                            fontSize: '18px',
                        }}
                    >
                        Hello {user.name},
                    </Text>

                    <Text
                        style={{
                            marginBottom: '20px',
                            fontSize: '14px',
                            lineHeight: '24px',
                            textAlign: 'left',
                        }}
                    >
                        We're excited to bring you the latest news and updates from Interact! Here's
                        what's new this month:
                    </Text>

                    <Text
                        style={{
                            color: '#333',
                            fontSize: '18px',
                            marginBottom: '10px',
                            textAlign: 'left',
                        }}
                    >
                        🔹 New Features
                    </Text>
                    <Text
                        style={{
                            marginBottom: '20px',
                            fontSize: '14px',
                            lineHeight: '24px',
                            textAlign: 'left',
                        }}
                    >
                        Discover our latest features designed to enhance your collaboration
                        experience. From improved messaging capabilities to new project management
                        tools, there's a lot to explore.
                    </Text>

                    <Text
                        style={{
                            color: '#333',
                            fontSize: '18px',
                            marginBottom: '10px',
                            textAlign: 'left',
                        }}
                    >
                        🔹 Community Highlights
                    </Text>
                    <Text
                        style={{
                            marginBottom: '20px',
                            fontSize: '14px',
                            lineHeight: '24px',
                            textAlign: 'left',
                        }}
                    >
                        Read about inspiring stories and successful collaborations within the
                        Interact community. See how users like you are making the most of our
                        platform.
                    </Text>

                    <Text
                        style={{
                            color: '#333',
                            fontSize: '18px',
                            marginBottom: '10px',
                            textAlign: 'left',
                        }}
                    >
                        🔹 Upcoming Events
                    </Text>
                    <Text
                        style={{
                            marginBottom: '20px',
                            fontSize: '14px',
                            lineHeight: '24px',
                            textAlign: 'left',
                        }}
                    >
                        Mark your calendar for our upcoming webinars, workshops, and community
                        events. Connect with experts and fellow users to learn and grow together.
                    </Text>

                    <Text
                        style={{
                            marginBottom: '20px',
                            fontSize: '14px',
                            lineHeight: '24px',
                            textAlign: 'left',
                        }}
                    >
                        Click the button below to read the full newsletter:
                    </Text>

                    <div style={{ textAlign: 'center', margin: 'auto' }}>
                        <a
                            href="https://interactnow.in/newsletter"
                            style={{
                                width: '50%',
                                textDecoration: 'none',
                                textAlign: 'center',
                                display: 'flex',
                                padding: '1em',
                                gap: '0.4rem',
                                border: 'none',
                                fontWeight: 'bolder',
                                borderRadius: '10px',
                                background: '#1e88e5',
                                backgroundSize: '300%',
                                backgroundPosition: 'left center',
                                transition: 'background 0.3s ease',
                                color: '#fff',
                            }}
                        >
                            Read Newsletter
                        </a>
                    </div>

                    <Text
                        style={{
                            marginBottom: '20px',
                            fontSize: '14px',
                            lineHeight: '24px',
                            textAlign: 'left',
                        }}
                    >
                        Stay tuned for more updates and don't forget to check out the newsletter for
                        all the details.
                    </Text>

                    <Text
                        style={{
                            marginBottom: '20px',
                            fontSize: '14px',
                            lineHeight: '24px',
                            textAlign: 'left',
                        }}
                    >
                        If you have any questions or need assistance, feel free to reply to this
                        email.
                    </Text>

                    <div style={{ marginTop: '20px', textAlign: 'left' }}>
                        <Text>Best regards,</Text>
                        <Text>The Interact Team</Text>
                    </div>

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
