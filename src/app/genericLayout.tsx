import { Flex, Image, Stack, Box, Button } from '@mantine/core';
import NavBar from './components/navBar';
import './styles/global.css';
import Footer from './components/footer';

export default function PageLayout({ children }: { children: React.ReactNode }) {
  const SignedIn = false; // Replace with your authentication logic
  return (
    <Stack>
      <Flex
        justify='space-between'
        align='center'
      >
        <Flex
          align='center'
          gap='1rem'
          
        >
          
          <Image
            h={50}
            w='auto'
            fit='contain'
            src='/images/logo.jpg'
          />

          <h1>Tenterden Folk Day Trust</h1>
          
        </Flex>
        <Flex align='right'>
          { SignedIn ? (
            <Button component='a' href='/admin' color='#FFD166'>
              Admin
            </Button>
          ) : (
            <Button component='a' href='/login' color='#FFD166'>
              Login
            </Button>
          )}
          
          { SignedIn && (
            <Button component='a' href='/logout' color='#FFD166'>
              Logout
            </Button>
          )}
        </Flex>
      </Flex>
      <NavBar />
      {children}
      <Footer />
    </Stack>
  );
}
