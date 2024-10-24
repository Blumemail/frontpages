import { Button, Card, Divider, Grid, Link, Text } from '@nextui-org/react';
import React from 'react';
import { CheckIcon } from '../icons/CheckIcon';
import { Box } from '../styles/box';
import { Flex } from '../styles/flex';

export const Plans = () => {
  return (
    <>
      <Flex
        css={{ py: '$20', gap: '1rem', px: '$6' }}
        justify={'center'}
        wrap={'wrap'}
        direction={'column'}
        align={'center'}
      >
        <Flex direction={'column'} align={'center'}>
          <Text span css={{ color: '$blue600' }}>
            Awesome Feature
          </Text>
          <Text h2>Flexible Plans</Text>
        </Flex>

        <Flex
          css={{ gap: '2rem', width: '100%' }}
          wrap={'wrap'}
          justify={'center'}
        >
          <Card css={{ p: '$6', mw: '400px' }}>
            <Card.Header>
              <Grid.Container css={{ pl: '$6' }}>
                <Grid xs={12}>
                  <Text h4 css={{ lineHeight: '$xs' }}>
                    Silver Plan
                  </Text>
                </Grid>
                <Grid xs={12}>
                  <Text css={{ color: '$accents8' }}>
                    
                  </Text>
                </Grid>
              </Grid.Container>
            </Card.Header>
            <Card.Body css={{ py: '$4' }}>
              <Text css={{ display: 'contents' }} h2>
                $1{' '}
              </Text>
              <Text css={{ display: 'contents', color: '$accents8' }}>/mo</Text>
              <Button css={{ mt: '$7', mb: '$12' }} href='https://blumemail.freshdesk.com/support/tickets/new'>Get Started</Button>

              <Box as={'ul'}>
                <Flex as={'li'} css={{ py: '$2', gap: '$2' }} align={'center'}>
                  <CheckIcon />
                  <Text span css={{ color: '$accents8' }}>
                    1 GB of Storage for your messages
                  </Text>
                </Flex>
                <Flex as={'li'} css={{ py: '$2', gap: '$2' }} align={'center'}>
                  <CheckIcon />
                  <Text span css={{ color: '$accents8' }}>
                    The Blumemail Privacy Commitment
                  </Text>
                </Flex>
                <Flex as={'li'} css={{ py: '$2', gap: '$2' }} align={'center'}>
                  <CheckIcon />
                  <Text span css={{ color: '$accents8' }}>
                    Priority Support, even over the phone
                  </Text>
                </Flex>
              </Box>
            </Card.Body>
          </Card>
        </Flex>
      </Flex>

    </>
  );
};
