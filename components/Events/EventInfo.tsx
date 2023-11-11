import { Card, Image, Avatar, Text, Group } from '@mantine/core';
import classes from './EventInfo.module.css';

export function EventInfo({
  image,
  presenter,
  date,
  type,
  title,
  description,
}: {
  image: string;
  presenter: string;
  date: string;
  type: string;
  title: string;
  description: string;
}) {
  return (
    <Card radius="md" p={0} className={classes.card}>
      <Group wrap="nowrap" gap={0}>
        <Image src={image} height={160} />
        <div className={classes.body}>
          <Text tt="uppercase" c="dimmed" fw={700} size="xs">
            {type}
          </Text>
          {/* <Text className={classes.title} mt="xs" mb="md">
            {title}
          </Text> */}
          <Text size="sm" mt="xs" mb="md">
            {description}
          </Text>
          <Group wrap="nowrap" gap="xs">
            <Group gap="xs" wrap="nowrap">
              {/* <Avatar
                size={20}
                src="https://images.unsplash.com/photo-1628890923662-2cb23c2e0cfe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&q=80"
              /> */}
              <Text size="xs">{presenter}</Text>
            </Group>
            <Text size="xs" c="dimmed">
              •
            </Text>
            <Text size="xs" c="dimmed">
              {date}
            </Text>
          </Group>
        </div>
      </Group>
    </Card>
  );
}
