import {Button, Divider, Text} from '@nextui-org/react';
import React from 'react';
import {Flex} from '../styles/flex';
import Link from 'next/link';

export const Trial = () => {
   return (
      <>
         <Flex
            css={{
               py: '$20',
               px: '$6',
            }}
            justify={'center'}
            direction={'column'}
            align={'center'}
         >
            <Text h3>Start Becoming Free</Text>
            <Text
               span
               css={{
                  color: '$accents8',
                  pb: '$15',
                  textAlign: 'center',
               }}
            >
               Sign up for Blumemail and be free from greedy companies using
               you for your data.
            </Text>

            <Button> <Link href="https://blumemail.freshdesk.com/support/tickets/new">Sign Up</Link></Button>
         </Flex>

      </>
   );
};
