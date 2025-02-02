import React from 'react';
import { Html, Head, Body, Container, Text, Img, Hr } from '@react-email/components';

interface OTPVerificationEmailProps {
    otp: string;
}

export default function OTPVerificationEmail({ otp }: OTPVerificationEmailProps) {
    return (
        <Html>
            <Head />
            <Body
                style={{
                    color: '#333',
                    fontFamily: 'Arial, sans-serif',
                    lineHeight: '1.6',
                    margin: 0,
                    padding: '25px',
                    backgroundColor: '#f4f4f4',
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
                            fontSize: '20px',
                            fontWeight: 400,
                            textAlign: 'center',
                            margin: '20px 0',
                        }}
                    >
                        Enter the following code to complete your registration.
                    </Text>

                    <Text
                        style={{
                            fontSize: '14px',
                            lineHeight: '22px',
                            color: '#444',
                            padding: '0 10px',
                            textAlign: 'left',
                        }}
                    >
                        Thank you for signing up with Interact. To complete the registration process
                        and verify your email address, please use the following One-Time Password
                        (OTP):
                    </Text>

                    <div>
                        <Text
                            style={{
                                width: '50%',
                                maxWidth: '280px',
                                textDecoration: 'none',
                                textAlign: 'center',
                                margin: '20px auto',
                                display: 'block',
                                padding: '10px',
                                border: 'none',
                                fontWeight: 'bolder',
                                borderRadius: '10px',
                                background: '#1E88E5',
                                color: '#fff',
                            }}
                        >
                            {otp} {/* Display the OTP dynamically */}
                        </Text>
                    </div>

                    <Text
                        style={{
                            fontSize: '14px',
                            lineHeight: '22px',
                            margin: 0,
                            color: '#444',
                            padding: '0 10px',
                            textAlign: 'left',
                        }}
                    >
                        <b>This OTP is valid for the next 10 minutes.</b>
                    </Text>

                    <Text
                        style={{
                            fontSize: '14px',
                            lineHeight: '22px',
                            margin: 0,
                            color: '#444',
                            padding: '0 10px',
                            textAlign: 'left',
                        }}
                    >
                        Please enter this code on the verification page to verify your email address
                        and activate your account.
                    </Text>

                    <Text
                        style={{
                            fontSize: '14px',
                            lineHeight: '22px',
                            margin: 0,
                            color: '#444',
                            padding: '0 10px',
                            textAlign: 'left',
                        }}
                    >
                        For your security, do not share this OTP with anyone.
                    </Text>

                    <Text
                        style={{
                            fontSize: '14px',
                            lineHeight: '22px',
                            margin: 0,
                            color: '#444',
                            padding: '0 10px',
                            textAlign: 'left',
                        }}
                    >
                        Thank you for joining Interact!
                    </Text>

                    <Text
                        style={{
                            fontSize: '14px',
                            lineHeight: '22px',
                            marginTop: '20px',
                            color: '#444',
                            padding: '0 10px',
                            textAlign: 'left',
                        }}
                    >
                        Best regards,
                        <br />
                        Interact
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
                            lineHeight: '20px',
                            margin: 0,
                            color: 'hsl(214, 7%, 62%)',
                            padding: '0 10px',
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
