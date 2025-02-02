import React from 'react';
import { Html, Head, Body, Container, Text, Img, Hr, Link } from '@react-email/components';
import { User, Organization } from '../types/index';
interface OrganizationInvitationEmailProps {
    user: User;
    secondaryUser: User;
    organization: Organization;
}

export default function OrganizationInvitationEmail({
    user,
    secondaryUser,
    organization,
}: OrganizationInvitationEmailProps) {
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
                        maxWidth: '465px',
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

                    {/* Email Heading */}
                    <Text
                        style={{
                            color: '#333',
                            fontSize: '24px',
                            fontWeight: 400,
                            textAlign: 'center',
                            margin: '30px 0',
                        }}
                    >
                        You've Been Invited to a New Organization!
                    </Text>

                    {/* Greeting */}
                    <Text
                        style={{
                            fontSize: '14px',
                            lineHeight: '24px',
                            margin: '16px 0',
                            color: '#000',
                            textAlign: 'left',
                        }}
                    >
                        Hello {user.name},
                    </Text>

                    {/* Invitation Content */}
                    <Text
                        style={{
                            fontSize: '14px',
                            lineHeight: '24px',
                            margin: '16px 0',
                            color: '#000',
                            textAlign: 'left',
                        }}
                    >
                        {secondaryUser.name} has invited you to join the organization:{' '}
                        <strong>{organization.title}</strong>
                    </Text>

                    <Text
                        style={{
                            fontSize: '14px',
                            lineHeight: '24px',
                            margin: '16px 0',
                            color: '#000',
                            textAlign: 'left',
                        }}
                    >
                        {secondaryUser.name} believes your involvement would be an asset to the
                        organization. Here’s a brief overview:
                    </Text>

                    <Text
                        style={{
                            fontSize: '14px',
                            lineHeight: '24px',
                            margin: '16px 0',
                            color: '#000',
                            textAlign: 'left',
                        }}
                    >
                        We’re excited about the possibility of working with you. Join us and
                        contribute your skills to make a meaningful impact!
                    </Text>

                    <Text
                        style={{
                            fontSize: '14px',
                            lineHeight: '24px',
                            margin: '16px 0',
                            color: '#000',
                            textAlign: 'left',
                        }}
                    >
                        If you have any questions about this invitation or the organization, feel
                        free to reply to this email.
                    </Text>

                    {/* Button */}
                    <div style={{ textAlign: 'center', margin: '32px 0' }}>
                        <Link
                            href={`https://interactnow.in/invitations?tab=organizations`}
                            style={{
                                display: 'inline-block',
                                padding: '12px 20px',
                                fontSize: '14px',
                                fontWeight: 600,
                                color: '#fff',
                                backgroundColor: '#1e88e5',
                                borderRadius: '0.25rem',
                                textDecoration: 'none',
                                textAlign: 'center',
                                width: 'auto',
                                maxWidth: '100%',
                                boxSizing: 'border-box',
                            }}
                        >
                            Join the Organization
                        </Link>
                    </div>

                    {/* Footer */}
                    <Text
                        style={{
                            fontSize: '14px',
                            lineHeight: '24px',
                            margin: '16px 0',
                            color: '#000',
                            textAlign: 'left',
                        }}
                    >
                        Best regards,
                        <br />
                        The Interact Team
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
