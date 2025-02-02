import React from 'react';
import { Html, Head, Body, Container, Text, Img, Hr } from '@react-email/components';
import { User } from '../types';

interface OTPDeactivationEmailProps {
    user: User;
    otp: string;
}

export default function OTPDeactivationEmail({ user, otp }: OTPDeactivationEmailProps) {
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
                            fontSize: '24px',
                            fontWeight: 400,
                            textAlign: 'center',
                            margin: '30px 0',
                        }}
                    >
                        Your One-Time Password (OTP) for Deactivation
                    </Text>

                    <Text
                        style={{
                            fontSize: '15px',
                            lineHeight: '23px',
                            margin: '0',
                            color: '#444',
                            padding: '0 20px',
                            textAlign: 'left',
                            marginTop: '4px',
                        }}
                    >
                        Hello {user.name},
                    </Text>

                    <Text
                        style={{
                            fontSize: '15px',
                            lineHeight: '23px',
                            margin: '16px 0',
                            color: '#444',
                            padding: '0 20px',
                            textAlign: 'left',
                        }}
                    >
                        We're bummed to see you go, but totally understand. Before you deactivate
                        your Interact account, let's just double-check it's you with this one-time
                        code (OTP):
                    </Text>

                    <div
                        style={{
                            backgroundColor: '#1e88e5',
                            color: '#fff',
                            fontSize: '28px',
                            fontWeight: 'bold',
                            textAlign: 'center',
                            padding: '16px',
                            borderRadius: '8px',
                            margin: '20px auto',
                            width: '80%',
                            maxWidth: '300px',
                        }}
                    >
                        {otp} {/* Display OTP dynamically */}
                    </div>

                    <Text style={{ marginBottom: '20px', textAlign: 'left' }}>
                        This OTP is valid for the next 10 minutes. Please enter this code to
                        complete the account deactivation process.
                    </Text>

                    <Text style={{ marginBottom: '20px', textAlign: 'left' }}>
                        Think of it as a secret handshake saying goodbye. Enter the code on the
                        deactivation page, and that's it – your account will be off on its next
                        adventure.
                    </Text>

                    <Text style={{ marginBottom: '20px', textAlign: 'left' }}>
                        For your security, do not share this OTP with anyone. If you did not sign up
                        for an account with us, please ignore this email or contact our support team
                        immediately.
                    </Text>

                    <Text style={{ marginBottom: '20px', textAlign: 'left' }}>
                        <b>Second thoughts? No worries!</b> Interact is always here for you if you
                        change your mind.
                    </Text>

                    <div style={{ marginTop: '20px', textAlign: 'left' }}>
                        <div>Best regards,</div>
                        <div>Interact</div>
                    </div>

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
                        This message was produced and distributed by Interact. If you were not
                        expecting this email, you can ignore it. For any concerns, please contact
                        support.
                    </Text>
                </Container>
            </Body>
        </Html>
    );
}
