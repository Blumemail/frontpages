import {Divider, Text} from '@nextui-org/react';
import React from 'react';
import Link from 'next/link';
import {AcmeLogo} from '../navbar/logo';
import {Box} from '../styles/box';
import {Flex} from '../styles/flex';

export const Footer = () => {
   return (
      <Flex
         css={{
            py: '$20',
            px: '$6',
         }}
      >
         <Box as={'footer'} css={{width: '100%'}}>
               
            <Box
               css={{
                  'px': '$10',
                  '@md': {
                     px: '$56',
                  },
               }}
            >
               <Flex
                  //   justify={'between'}
                  align={'center'}
                  wrap={'wrap'}
                  css={{
                     'pt': '$8',
                     'gap': '$10',
                     'justifyContent': 'center',
                     '@md': {
                        justifyContent: 'space-between',
                     },
                  }}
               >
                  <Flex
                     css={{
                        gap: '$10',
                     }}
                     wrap={'wrap'}
                  >
                     <Text span css={{ color: '$accents8' }}><Link href={'https://blumemail.freshdesk.com/support/home'}>Create a Support Ticket</Link></Text>
                  </Flex>
                  <Flex
                     css={{
                        gap: '$6',
                     }}
                  >
                     <Text span css={{color: '$accents8'}}>
                        <Link href={'/terms'}>Terms of Use</Link>
                     </Text>
                     <Text span css={{color: '$accents8'}}>
                        <Link href={'/privacy'}>Privacy Statement</Link>
                     </Text>
                  </Flex>
                  <Flex
                     css={{
                        gap: '$6',
                     }}
                  >
                     <Text span css={{color: '$accents8'}}>
                        © Copyright 2024 Blumemail.
                     </Text>
                  </Flex>
               </Flex>
            </Box>
         </Box>
      </Flex>
   );
};
