import {
  Card,
  Image,
  ActionIcon,
  Group,
  Text,
  Avatar,
  Badge,
  useMantineTheme,
  rem,
} from '@mantine/core';
import { IconHeart, IconBookmark, IconShare } from '@tabler/icons-react';
import classes from './ArticleCard.module.css';

export function ArticleCard({
  title,
  image,
  date,
}: {
  title: string;
  image: string;
  date: string;
}) {
  const theme = useMantineTheme();

  return (
    <Card withBorder padding="lg" radius="md" className={classes.card}>
      <Card.Section mb="sm">
        <Image src={image} alt="Top 50 underrated plants for house decoration" height={180} />
      </Card.Section>

      {/* <Badge w="fit-content" variant="light">
        decorations
      </Badge> */}

      <Text fw={700} className={classes.title} mt="xs">
        {title}
      </Text>

      <Group mt="lg">
        <div>
          <Text fw={500}>Elsa Gardenowl</Text>
          <Text fz="xs" c="dimmed">
            {date}
          </Text>
        </div>
      </Group>

      <Card.Section className={classes.footer}>
        <Group justify="space-between">
          <Text fz="xs" c="dimmed">
            Read Article &gt;
          </Text>
        </Group>
      </Card.Section>
    </Card>
  );
}
