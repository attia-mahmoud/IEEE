import { Carousel } from '@mantine/carousel';
import {
  SimpleGrid,
  Card,
  Image,
  Text,
  Container,
  AspectRatio,
  Title,
  Button,
} from '@mantine/core';
import { IconArrowRight } from '@tabler/icons-react';
import { EventCard } from './EventCard';
import classes from './EventCard.module.css';

const mockdata = [
  {
    title: 'Introductory Meeting',
    image:
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80',
    date: 'August 18, 2022',
  },
  {
    title: 'Latex Workshop',
    image:
      'https://images.unsplash.com/photo-1448375240586-882707db888b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80',
    date: 'August 27, 2022',
  },
  {
    title: 'Mountains at night: 12 best locations to enjoy the view',
    image:
      'https://images.unsplash.com/photo-1519681393784-d120267933ba?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80',
    date: 'September 12, 2022',
  },
];

export function Events() {
  const cards = mockdata.map((article) => (
    <EventCard title={article.title} date={article.date} image={article.image} />
  ));

  return (
    <Container py="xl" bg="white" fluid id="events">
      <Title className={classes.heading}>Events</Title>
      <Container size="60rem" className={classes.root}>
        <SimpleGrid cols={{ base: 1, sm: 3 }}>{cards}</SimpleGrid>
        <Button
          variant="light"
          rightSection={<IconArrowRight size={14} />}
          className={classes.button}
        >
          View All
        </Button>
      </Container>
    </Container>
  );
}
