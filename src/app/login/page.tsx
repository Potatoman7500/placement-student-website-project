'use client';

import PageLayout from '@/app/genericLayout';
import { Stack, TextInput, PasswordInput, Button } from '@mantine/core';
import TextAndImageBlock from './components/textAndImageBlock';

export default function Home() {
const username = 'admin';
const password = 'password';
const inputUsername = (document.getElementById('username') as HTMLInputElement)?.value;
const inputPassword = (document.getElementById('password') as HTMLInputElement)?.value;

  return (
    <PageLayout>
      <Stack justify='center' align='center'>
        <h2>Login </h2>
        <TextInput size="md" label="Username" placeholder="Enter username" />
        <PasswordInput size="md" label="Password" placeholder="Enter password" />
        <br />
        <Button type="submit"
        onClick={inputUsername === username && inputPassword === password ? () => {window.location.href = '/admin'} : () => {alert('Incorrect username or password')}}

        >Login</Button>
        <br />
        <p>Username: {username}</p>
        <p>Password: {password}</p>
      </Stack>
    </PageLayout>
  );
}