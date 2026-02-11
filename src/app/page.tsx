import { Stack } from '@mantine/core';
import PageLayout from '@/app/genericLayout';

export default function Home() {
  return (
    <PageLayout title={'Page Title'}>
      <Stack>
        <h2>Content</h2>
      </Stack>
    </PageLayout>
  );
}
