import { Stack } from '@mantine/core';
import NavBar from './components/navBar';
import './global.css';

export default function PageLayout({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <Stack>
      <h1>{title}</h1>
      <NavBar />
      {children}
    </Stack>
  );
}
