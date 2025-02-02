import React from 'react';
import { Html, Head, Img, Body, Container, Text } from '@react-email/components';
import { User, Opening } from '../types';
interface AccountAttentionEmailProps {
    user: User;
    opening: Opening;
}

export default function AccountAttentionEmail({ user, opening }: AccountAttentionEmailProps) {
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
                    <Text style={{ color: '#333', fontSize: '24px' }}>
                        ⚠️ Your Account Requires Attention
                    </Text>
                    <Text style={{ marginBottom: '20px' }}>Hello {user.name},</Text>
                    <Text style={{ marginBottom: '20px' }}>
                        We've detected some unusual activity on your Interact account and require
                        your attention to ensure its security.
                    </Text>

                    <div
                        style={{
                            padding: '15px',
                            backgroundColor: '#f4f4f4',
                            borderRadius: '5px',
                            marginBottom: '20px',
                        }}
                    >
                        <Text style={{ color: '#333', fontSize: '16px' }}>Flagged Opening:</Text>
                        <Text style={{ fontWeight: 'bold' }}>{opening.title}</Text>
                        <Text style={{ fontWeight: 'bold' }}>{opening.description}</Text>
                    </div>

                    <Text style={{ marginBottom: '20px' }}>
                        <b>What to do:</b>
                    </Text>
                    <ul style={{ marginBottom: '20px', listStyle: 'disc', paddingLeft: '15px' }}>
                        <li>
                            <b>Review your recent login activity:</b> Check your account settings to
                            see a record of recent logins. If you see any unrecognized locations or
                            devices, it's important to take action.
                        </li>
                        <li>
                            <b>Change your password:</b> We highly recommend creating a strong,
                            unique password for your Interact account. A strong password is at least
                            12 characters long and includes a combination of uppercase and lowercase
                            letters, numbers, and symbols.
                        </li>
                    </ul>

                    <Text style={{ marginBottom: '20px' }}>
                        We take the security of your account very seriously. By taking these steps,
                        you can help keep your information safe.
                    </Text>

                    <div style={{ marginTop: '20px' }}>
                        <Text>Best regards,</Text>
                        <Text>The Interact Team</Text>
                    </div>
                </Container>
            </Body>
        </Html>
    );
}
