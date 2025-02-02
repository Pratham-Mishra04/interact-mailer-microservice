import React from 'react';
import { Html, Head, Body, Container, Text, Img, Hr, Link } from '@react-email/components';
import { User } from '../types/index';
interface ApplicationSubmissionConfirmationProps {
    user: User;
}

export default function ApplicationSubmissionConfirmation({
    user,
}: ApplicationSubmissionConfirmationProps) {
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

                    <Text
                        style={{
                            color: '#333',
                            textAlign: 'left',
                            fontSize: '24px',
                            marginTop: '0',
                        }}
                    >
                        Congratulations! Your Application for Opening Has Been Submitted
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
                            marginBottom: '20px',
                            textAlign: 'left',
                        }}
                    >
                        We're happy to inform you that your application for opening on Interact has
                        been successfully submitted!
                    </Text>

                    <Text
                        style={{
                            marginBottom: '20px',
                            textAlign: 'left',
                        }}
                    >
                        Our team will now review your application and get in touch with you shortly.
                    </Text>

                    <Text
                        style={{
                            marginBottom: '20px',
                            textAlign: 'left',
                        }}
                    >
                        In the meantime, you can explore our platform and learn more about what
                        Interact has to offer.
                    </Text>

                    <Text
                        style={{
                            marginBottom: '20px',
                            textAlign: 'left',
                        }}
                    >
                        We appreciate your interest in opening with Interact. We look forward to
                        potentially welcoming you to our community!
                    </Text>

                    <div style={{ marginTop: '20px', textAlign: 'center' }}>
                        <Link
                            href="https://interactnow.in/explore"
                            style={{
                                display: 'inline-block',
                                textDecoration: 'none',
                                padding: '10px 20px',
                                backgroundColor: '#1e88e5',
                                color: '#fff',
                                borderRadius: '5px',
                                fontWeight: 'bold',
                                textAlign: 'center',
                            }}
                        >
                            Explore Interact
                        </Link>
                    </div>

                    <Text
                        style={{
                            marginBottom: '20px',
                            textAlign: 'left',
                        }}
                    >
                        Best regards,
                        <br />
                        Interact
                    </Text>

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
