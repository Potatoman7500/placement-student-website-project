export type Event = {
  date: string;
  time: string;
  title: string;
  venue: string;
  tickets: string;
  ticketLink?: string;
  description: string;
  contactDetails?: { email?: string; phone?: string };
};

export const events: Event[] = [
  {
    date: 'Saturday 3rd October 2026',
    time: '11:30 to 22:30',
    title: 'All Day Song and Music Session',
    venue: 'Tenterden Club',
    tickets: 'No tickets are needed as the day is free but collections will be taken to pay for the use of The Tenterden Club so please give generously.',
    description: 'Come along and take part or you are welcome to just sit and listen.  You do not have to stay all day, so just comealong when you can and pop in and out as suits you (but not while someone is performing of course). You can bring food but please do not bring drinks as The Tenterden Club will be proving the bar and hot drinks will also be available.',
    contactDetails: {
      email: 'info@tenterdenfolkfestival.org.uk',
    },
  },
  {
    date: 'Monday 1st September 2026',
    time: '8pm',
    title: 'Free Range Children with Pete Castle',
    venue: 'Online',
    tickets: '£5',
    ticketLink: 'https://www.musicglue.com/tenterdenfolkfestival/tickets',
    description: 'This will be a show about kids, not for kids. It won’t be Milly Molly Mandy or Enid Blyton, think more Lord of the Flies and come prepared for some serious misbehaviour!',
  },
  {
    date: 'Friday 5th December',
    time: '7pm',
    title: 'A Derbyshire Christmas circa 1900',
    venue: 'Online',
    tickets: '£5',
    ticketLink: 'www.musicglue.com/tenterdenfolkfestival/tickets',
    description: 'Carols, customs and stories from the adult writings of Alison Uttley (with a brief appearance of Little Grey Rabbit).',
    contactDetails: { email: 'petecastle42@gmail.com' },
  },
];
