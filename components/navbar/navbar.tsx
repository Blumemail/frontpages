import {Button, Dropdown, Link, Navbar, Switch, Text} from '@nextui-org/react';
import React from 'react';
import {AcmeLogo} from './logo';


export const Nav = () => {
   return (
      <Navbar
         isBordered
         css={{
            'overflow': 'hidden',
            '& .nextui-navbar-container': {
               background: '$background',
               borderBottom: 'none',
            },
         }}
      >
         <Navbar.Brand>
            <Navbar.Toggle aria-label="toggle navigation" showIn="xs" />
            <Link href='/'>
               <AcmeLogo />
            <Text b color="inherit" hideIn="xs" css={{color: 'White'}}>
               blumemail
               </Text>
            </Link>
            <Navbar.Content
               hideIn="sm"
               css={{
                  pl: '6rem',
               }}
            >
            </Navbar.Content>
         </Navbar.Brand>

         <Navbar.Content>
            <Navbar.Item>
               <Button auto flat href="https://mail.blumemail.net/SOGo/">
                  Login
               </Button>
            </Navbar.Item>
         </Navbar.Content>
      </Navbar>
   );
};
