import { Button, Divider, Text, Card } from '@nextui-org/react';
import React from 'react';
import { Box } from '../styles/box';
import { Flex } from '../styles/flex';
import Link from 'next/link';

export const TermsStatement = () => {
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
                        Blumemail Terms of Use
                    </Text>
                    <Text
                        small
                        css={{ textAlign: 'center' }}
                    >
                        Last Updated October 10th, 2024.
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
                                    <Text h3 css={{ textAlign: 'center' }}>Who are we?</Text>
                                    <Text span>
                                        Blumemail is a privacy-focused email service for everyone. Some use cases you can use Blumemail for are: Personal Use, Social Media, Secure Business Communication (SBC), or talking to friends and family without having the feeling of companies watching over your shoulder.
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
                                    <Text h3 css={{ textAlign: 'center' }}>Payment Methods</Text>
                                    <Text span>
                                        Payment methods for the ability to use our services are: Cash App, Venmo, cryptocurrency (including BTC and LTC). Payments that are late by five days will result in your Blumemail Account being terminated without notice and become claimable by new users on the Blumemail Network.
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
                                    <Text h3 css={{ textAlign: 'center' }}>Freedom of Speech Policy</Text>
                                    <Text span>
                                        At Blumemail, you have the freedom to say anything, unless it involves illegal activities. You may <strong>NOT</strong> use Blumemail for Fraud and Scamming activity.
                                    </Text>
                                    <Text span>ㅤ</Text>
                                    <Text span>
                                        The sharing and distribution of sexually explicit material and sexually explicit material involving minors is <strong>STRICTLY</strong> prohibited on the Blumemail Network and will result in account termination and possible criminal charges or jail time.
                                    </Text>
                                    <Text span>ㅤ</Text>
                                    <Text span>Violating Intellectual Property or other rights of others will also result in account termination.</Text>
                                    <Text span>ㅤ</Text>
                                    <Text span>
                                        <strong>Note:</strong> anyone inside or outside of the Blumemail Network can report incidents including the above. If you encounter abusive or harmful content on Blumemail, please report it to our Abuse team, and we are deeply sorry.
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
                                    <Text h3 css={{ textAlign: 'center' }}>Service Limitations</Text>
                                    <Text span>
                                        Blumemail has limitations in place for other users to be able to use our services without hiccups.
                                    </Text>
                                    <Text span>ㅤ</Text>
                                    <Text span>
                                        <strong>ALL</strong> messages older than one week will be erased from our servers. You are able to download messages from Webmail, so do that if you plan to keep a message longer than one week.
                                    </Text>
                                    <Text span>
                                        A maximum of 1000 email message per minute. 
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
                                    <Text h3 css={{ textAlign: 'center' }}>Blumemail Network Addresses</Text>
                                    <Text span>
                                        Your Blumemail Network Address (also known as your email address on the Blumemail Network) can be named anything as long as it does not promote the following materials: Business Impersonation, sexually explicit and sexually explicit material involving a minor.
                                    </Text>
                                    <Text span>ㅤ</Text>
                                    <Text span>
                                        If your email address appears to impersonate a legitimate business, we will report this issue to the relevant company. This may or may not result in account termination.
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
                                    <Text h3 css={{ textAlign: 'center' }}>Account Termination</Text>
                                    <Text span>
                                        We reserve the right to terminate or erase your Blumemail Network Address without notice if violations of our Terms of Use are found.
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
                                    <Text h3 css={{ textAlign: 'center' }}>Appealing</Text>
                                    <Text span>
                                        If your Blumemail Network Address is erased due to an error in our security systems, an abuse or violation mistake, you can appeal this with our customer support team. 
                                    </Text>
                                </Flex>
                            </Flex>
                        </Card.Body>
                    </Card>
                </Flex>

                ㅤ

                <Flex direction={'column'} align={'center'}>
                    <Text h3 css={{ textAlign: 'center' }}>
                        Thank you for reading the Blumemail Terms of Use.
                    </Text>
                    <Text h4 css={{ textAlign: 'center' }}>Customer Assistance is available at <Link href={'tel:+13038981242'}>+1 (303) 898-1242</Link>  or at <Link href={'mailto:support@blumemail.net'}>support@blumemail.net</Link>.</Text>
                </Flex>
            </Box>

        </>


    );
};