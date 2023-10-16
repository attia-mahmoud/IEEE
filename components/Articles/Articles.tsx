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
import { ArticleCard } from './ArticleCard';
import classes from '../Events/EventCard.module.css';
import { IconArrowRight } from '@tabler/icons-react';

const mockdata = [
  {
    title: 'Top 10 places to visit in Norway this summer',
    image:
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80',
    date: 'August 18, 2022',
  },
  {
    title: 'Best forests to visit in North America',
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

export function Articles() {
  const cards = mockdata.map((article) => (
    <ArticleCard title={article.title} date={article.date} image={article.image} />
  ));

  return (
    <Container py="xl" className={classes.root} bg="white" fluid>
      <Title className={classes.heading} mb="xl">
        Articles
      </Title>
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
