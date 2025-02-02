import { Html, Head, Body, Container, Text, Link, Button, Hr, Img } from '@react-email/components';
import { User, Opening } from '../types';
interface ApplicationRejectedEmailProps {
    user: User;
    opening: Opening;
}

export default function ApplicationRejectedEmail({ user, opening }: ApplicationRejectedEmailProps) {
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
                        padding: 20,
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
                            fontSize: '24px',
                            fontWeight: 'bold',
                        }}
                    >
                        Your Application got rejected
                    </Text>
                    <Text style={{ marginBottom: '20px', textAlign: 'left', fontSize: '18px' }}>
                        Hello {user.name},
                    </Text>
                    <Text style={{ marginBottom: '20px', textAlign: 'left' }}>
                        Thank you for applying to the position of <b>{opening.title}</b> on
                        Interact.
                    </Text>
                    <Text style={{ marginBottom: '20px', textAlign: 'left' }}>
                        We wanted to inform you that your application was not selected.
                    </Text>
                    <Text style={{ marginBottom: '20px', textAlign: 'left' }}>
                        We truly appreciate your interest and effort in applying. Although you were
                        not selected for this role, we encourage you to keep exploring other
                        opportunities on our platform. There are plenty of exciting projects where
                        your skills could be a perfect fit.
                    </Text>
                    <Text style={{ marginBottom: '20px', textAlign: 'left' }}>
                        If you have any questions or need further assistance, please feel free to
                        reach out to our support team. We're here to help!
                    </Text>
                    <div style={{ margin: '20px auto', textAlign: 'center' }}>
                        <Button
                            href="https://interactnow.in/openings"
                            style={{
                                display: 'inline-block',
                                padding: '10px 20px',
                                fontSize: '16px',
                                color: '#fff',
                                background: '#1e88e5',
                                textDecoration: 'none',
                                borderRadius: '5px',
                                textAlign: 'center',
                            }}
                        >
                            Browse Other Opportunities
                        </Button>
                    </div>
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
                        If you did not apply for this position or believe this message was sent in
                        error, please contact our support team immediately.
                    </Text>
                </Container>
            </Body>
        </Html>
    );
}
