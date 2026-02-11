import PageLayout from '@/app/genericLayout';
import { ReactNode } from 'react';
import { events } from '../data';

export default function Events(): ReactNode {
  const eventsData = events;
  return (
    <PageLayout title='Events'>
      <h2>Upcoming events</h2>
    </PageLayout>
  );
}
