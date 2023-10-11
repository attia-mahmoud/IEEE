import { SimpleGrid, Card, Image, Text, Container, AspectRatio, Title } from '@mantine/core';
import { TwitterTimelineEmbed } from 'react-twitter-embed';
import classes from './Timeline.module.css';

export function Timeline() {
  return (
    <Container py="xl" className={classes.root} bg="white" fluid>
      <Title className={classes.heading}>Latest Tweets</Title>
      <Container size="400">
        <TwitterTimelineEmbed
          sourceType="profile"
          screenName="IEEEKFUPM"
          options={{ height: 500, width: 500 }}
        />
      </Container>
    </Container>
  );
}
