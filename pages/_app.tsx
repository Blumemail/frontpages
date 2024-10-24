import '../styles/globals.css';
import type {AppProps} from 'next/app';
import {createTheme, NextUIProvider} from '@nextui-org/react';
import {ThemeProvider as NextThemesProvider} from 'next-themes';

const lightTheme = createTheme({
   type: 'light',
   theme: {
      colors: {},
   },
});

const darkTheme = createTheme({
   type: 'dark',
   theme: {
      colors: {
         background: "#242323",
         text: "#fff",
         black: 242323
      },
   },
});



function MyApp({Component, pageProps}: AppProps) {
   return (
      <NextThemesProvider
         defaultTheme="system"
         attribute="class"
         value={{
            light: darkTheme.className,
            dark: darkTheme.className,
         }}
      >
         <NextUIProvider>
            <Component {...pageProps} />
         </NextUIProvider>
      </NextThemesProvider>
   );
}

export default MyApp;
