import { Card, Image, Avatar, Text, Group, AspectRatio } from '@mantine/core';
import classes from './EventCard.module.css';

export function EventCard({ title, image, date }: { title: string; image: string; date: string }) {
  return (
    <Card key={title} p="md" radius="md" component="a" href="#" className={classes.card}>
      <AspectRatio ratio={1920 / 1080}>
        <Image src={image} />
      </AspectRatio>
      <Text c="dimmed" size="xs" tt="uppercase" fw={700} mt="md">
        {date}
      </Text>
      <Text className={classes.title} mt={5}>
        {title}
      </Text>
    </Card>
  );
}
