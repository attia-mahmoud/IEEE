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
import mockData from './mockData.json';

export function EventsPeak() {
  const cards = mockData.map((article) => (
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
