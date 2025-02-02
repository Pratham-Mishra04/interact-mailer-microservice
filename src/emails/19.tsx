import React from 'react';
import { Html, Head, Body, Container, Text, Img, Hr } from '@react-email/components';
import { Organization, User } from '../types';
interface OrganizationInvitationAcceptedEmailProps {
    user: User;
    organization: Organization;
}
export default function OrganizationInvitationAcceptedEmail({
    user,
    organization,
}: OrganizationInvitationAcceptedEmailProps) {
    return (
        <Html>
            <Head />
            <Body
                style={{
                    backgroundColor: '#f4f4f4',
                    fontFamily: 'Arial, sans-serif',
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
                        border: '1px solid #eaeaea',
                        borderRadius: '0.25rem',
                    }}
                >
                    {/* Logo */}
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

                    {/* Heading */}
                    <div
                        style={{
                            textAlign: 'center',
                            margin: '30px 0',
                        }}
                    >
                        <Text
                            style={{
                                color: '#333',
                                fontSize: '24px',
                                fontWeight: '400',
                                margin: 0,
                            }}
                        >
                            Organization Invitation Accepted!
                        </Text>
                    </div>

                    {/* Content */}
                    <div style={{ textAlign: 'left', margin: '30px 0' }}>
                        <Text
                            style={{
                                marginBottom: '20px',
                                color: '#000',
                                fontSize: '14px',
                                lineHeight: '24px',
                            }}
                        >
                            Hello {user.name},
                        </Text>
                        <Text
                            style={{
                                marginBottom: '20px',
                                color: '#000',
                                fontSize: '14px',
                                lineHeight: '24px',
                            }}
                        >
                            We're thrilled to have you join us! You have successfully accepted the
                            invitation to join the organization{' '}
                            <strong>{organization.title}</strong> on Interact.
                        </Text>
                        <Text
                            style={{
                                marginBottom: '20px',
                                color: '#000',
                                fontSize: '14px',
                                lineHeight: '24px',
                            }}
                        >
                            This is an exciting opportunity to collaborate with like-minded
                            individuals, share your ideas, and work towards common goals. We're
                            confident that your contribution will be invaluable to the organization.
                        </Text>
                        <Text
                            style={{
                                marginBottom: '20px',
                                color: '#000',
                                fontSize: '14px',
                                lineHeight: '24px',
                            }}
                        >
                            You can now start participating in the organization's activities, join
                            discussions, and contribute to ongoing projects.
                        </Text>
                        <Text
                            style={{
                                marginBottom: '20px',
                                color: '#000',
                                fontSize: '14px',
                                lineHeight: '24px',
                            }}
                        >
                            If you have any questions or need assistance, feel free to reach out to
                            us at any time.
                        </Text>
                        <Text
                            style={{
                                color: '#000',
                                fontSize: '14px',
                                lineHeight: '24px',
                            }}
                        >
                            Best regards,
                            <br />
                            The Interact Team
                        </Text>
                    </div>

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
