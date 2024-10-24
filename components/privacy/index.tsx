import { Button, Divider, Text, Card } from '@nextui-org/react';
import React from 'react';
import { Box } from '../styles/box';
import { Flex } from '../styles/flex';
import Link from 'next/link';

export const PrivStatement = () => {
    return (
        <>
            <Box
                css={{
                    pt: '$13',

                    display: 'flex',
                    flexDirection: 'column',
                    gap: '$5',
                }}
            >
                <Flex direction={'column'} align={'center'}>
                    <Text
                        h2
                        css={{ textAlign: 'center' }}
                    >
                        Blumemail Privacy Statement
                    </Text>
                    <Text
                        small
                        css={{ textAlign: 'center' }}
                    >
                        Last Updated October 5th, 2024.
                    </Text>ㅤ
                </Flex>
                <Flex
                    align={'center'}
                    justify={'center'}
                    wrap={'wrap'}
                    css={{
                        gap: '1rem',
                        pt: '$14',
                    }}
                >
                    <Card css={{ mw: '500px' }}>
                        <Card.Body>
                            <Flex css={{ gap: '0.5rem' }}>
                                <Flex direction={'column'}>
                                    <Text h3 css={{ textAlign: 'center' }}>End-To-End Encryption</Text>
                                    <Text span>
                                        All emails sent throughout the Blumemail network <strong>are</strong> end-to-end encrypted.
                                        Contacting another Blumemail customer will result in that conversation being fully encrypted.
                                    </Text>
                                    <Text span>ㅤ</Text>
                                    <Text span>
                                        <strong><i>NOTE: </i></strong> Emails sent from the Blumemail network to a person not within
                                        the network may not result in proper end-to-end encryption.
                                    </Text>
                                </Flex>
                            </Flex>
                        </Card.Body>
                    </Card>
                </Flex>
                <Flex
                    align={'center'}
                    justify={'center'}
                    wrap={'wrap'}
                    css={{
                        gap: '1rem',
                        pt: '$14',
                    }}
                >
                    <Card css={{ mw: '500px' }}>
                        <Card.Body>
                            <Flex css={{ gap: '0.5rem' }}>
                                <Flex direction={'column'}>
                                    <Text h3 css={{ textAlign: 'center' }}>Data We Collect</Text>
                                    <Text span>
                                        The data Blumemail collects about you is extremely generic and basic. But here are some
                                        specifics.
                                    </Text>
                                    <Text span>ㅤ</Text>
                                    <Text span>
                                        1. Site Visits
                                    </Text>
                                    <Text span>
                                        Blumemail keeps track of site visitors using Cloudflare nameservers, this is to monitor site traffic. We do not have information like IP Addresses, just countries of origin.
                                    </Text>
                                    <Text span>ㅤ</Text>
                                    <Text span>
                                        2. Email Names &amp; Number of Users
                                    </Text>
                                    <Text span>
                                        Blumemail has access to the number of users within our own systems. We, however, do not have access 
                                        to your personal data, including emails, calendar events, and other data.
                                    </Text>
                                </Flex>
                            </Flex>
                        </Card.Body>
                    </Card>
                </Flex>
                <Flex
                    align={'center'}
                    justify={'center'}
                    wrap={'wrap'}
                    css={{
                        gap: '1rem',
                        pt: '$14',
                    }}
                >
                    <Card css={{ mw: '500px' }}>
                        <Card.Body>
                            <Flex css={{ gap: '0.5rem' }}>
                                <Flex direction={'column'}>
                                    <Text h3 css={{ textAlign: 'center' }}>Data Disclosure</Text>
                                    <Text span>
                                        Blumemail is a company based in the United States. However, we do not carry personally identifying
                                        information about our users.
                                    </Text>
                                    <Text span>ㅤ</Text>
                                    <Text span>
                                        The United States is part of the <Link href={"https://privacyinternational.org/learn/five-eyes"}>Five Eyes Alliance</Link>,
                                        and we as a company, respect this. Our emails <strong>and</strong> attachments are end-to-end encrypted. The only method of getting
                                        information is to reach out to your email provider.
                                    </Text>
                                    <Text span>ㅤ</Text>
                                    <Text span>
                                        The only information we will have on record is the following: 
                                    </Text>
                                    <Text span>
                                        Site Visits
                                    </Text>
                                    <Text span>
                                        Email Names
                                    </Text>
                                    <Text span>
                                        <strong>You can contact Cloudflare if you require IP Address records.</strong>
                                    </Text>
                                </Flex>
                            </Flex>
                        </Card.Body>
                    </Card>
                </Flex>
                <Flex
                    align={'center'}
                    justify={'center'}
                    wrap={'wrap'}
                    css={{
                        gap: '1rem',
                        pt: '$14',
                    }}
                >
                    <Card css={{ mw: '500px' }}>
                        <Card.Body>
                            <Flex css={{ gap: '0.5rem' }}>
                                <Flex direction={'column'}>
                                    <Text h3 css={{ textAlign: 'center' }}>BlumeAds</Text>
                                    <Text span>
                                        BlumeAds is an ads network that is run on our behalf. We still make sure your privacy is first before anything.
                                    </Text>
                                    <Text span>ㅤ</Text>
                                    <Text span>
                                        BlumeAds randomizes advertisements, and does <strong>NOT</strong> keep track of your user habits and preferences.
                                    </Text>
                                    <Text span>
                                        BlumeAds was concieved for Blumemail to make some more money.
                                    </Text>
                                    <Text span>To put it simply, BlumeAds only uses a randomized link and image for an ad, nothing else.</Text>
                                </Flex>
                            </Flex>
                        </Card.Body>
                    </Card>
                </Flex>
                <Flex
                    align={'center'}
                    justify={'center'}
                    wrap={'wrap'}
                    css={{
                        gap: '1rem',
                        pt: '$14',
                    }}
                >
                    <Card css={{ mw: '500px' }}>
                        <Card.Body>
                            <Flex css={{ gap: '0.5rem' }}>
                                <Flex direction={'column'}>
                                    <Text h3 css={{ textAlign: 'center' }}>Minors under 13</Text>
                                    <Text span>
                                        Blumemail does not recommend users under the age of 13 to use our services without explicit
                                        parental consent.
                                    </Text>
                                    <Text span>ㅤ</Text>
                                    <Text span>
                                        The reasoning for this decision has to do with privacy concerns, and laws internationally.
                                        Although Blumemail does collect very little identifiable information, it is against our Terms of Service
                                        and your account may be terminated if found breaking this.
                                    </Text>
                                    <Text span>ㅤ</Text>
                                    <Text span>
                                        If you happen to think a user of the Blumemail service is under the age of 13, alert us at <Link href={'mailto:abuse@blumemail.net'}>abuse@blumemail.net</Link> or at our Abuse Report
                                        line at <Link href={'tel:+17207564422'}>+1 (720) 756-4422</Link>. <Text small>Note: This phone number is <strong>NOT</strong> toll-free. Check with your carrier provider for more details.</Text>
                                    </Text>
                                </Flex>
                            </Flex>
                        </Card.Body>
                    </Card>
                </Flex>
                <Flex
                    align={'center'}
                    justify={'center'}
                    wrap={'wrap'}
                    css={{
                        gap: '1rem',
                        pt: '$14',
                    }}
                >
                    <Card css={{ mw: '500px' }}>
                        <Card.Body>
                            <Flex css={{ gap: '0.5rem' }}>
                                <Flex direction={'column'}>
                                    <Text h3 css={{ textAlign: 'center' }}>Your Security</Text>
                                    <Text span>
                                        Blumemail uses the following encryption methods to keep your attachments and messages safe:
                                    </Text>
                                    <Text span>ㅤ</Text>
                                    <Text span>
                                        We use Symmetric AES-GCM 256 and then hashed on top of this using SHA-256.
                                    </Text>
                                    <Text span>ㅤ</Text>
                                    <Text span>
                                        We are using Let&rsquo;s Encrypt integrations to help ensure that our security certificates are safe and valid.
                                    </Text>
                                </Flex>
                            </Flex>
                        </Card.Body>
                    </Card>
                </Flex>
                <Flex
                    align={'center'}
                    justify={'center'}
                    wrap={'wrap'}
                    css={{
                        gap: '1rem',
                        pt: '$14',
                    }}
                >
                    <Card css={{ mw: '500px' }}>
                        <Card.Body>
                            <Flex css={{ gap: '0.5rem' }}>
                                <Flex direction={'column'}>
                                    <Text h3 css={{ textAlign: 'center' }}>Your Rights</Text>
                                    <Text span>
                                        You have the right to know what data we collect and have on file.
                                    </Text>
                                    <Text span>ㅤ</Text>
                                    <Text span>
                                        You can always request a copy of the data we keep on file relating to you. This may take some time, usually 4-7 business days.
                                    </Text>
                                    <Text span>ㅤ</Text>
                                    <Text span>
                                        This is what you can expect on recieval of your data request: 
                                    </Text>
                                    <Text span>
                                        - The Number of Emails you have sent through our services
                                    </Text>
                                    <Text span>
                                        - The email address you recieved or requested
                                    </Text>
                                    <Text span>
                                        - The number of times you have visited Blumemail.
                                    </Text>
                                    <Text span>
                                        If you are wanting to request the data Blumemail has on file, feel free to request one at <Link href={'mailto:request@blumemail.net'}>request@blumemail.net</Link>.
                                    </Text>
                                </Flex>
                            </Flex>
                        </Card.Body>
                    </Card>
                </Flex>

ㅤ

                <Flex direction={'column'} align={'center'}>
                <Text h3 css={{ textAlign: 'center' }}>
                    Thank you for reading the Blumemail Privacy Statement.
                </Text>
                    <Text h4 css={{ textAlign: 'center' }}>Customer Assistance is available at <Link href={'tel:+13038981242'}>+1 (303) 898-1242</Link>  or at <Link href={'mailto:support@blumemail.net'}>support@blumemail.net</Link>.</Text>
                </Flex>
            </Box>

        </>
    );
};