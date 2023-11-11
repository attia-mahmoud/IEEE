import { Avatar, Text, Button, Paper } from '@mantine/core';

export function MemberCard({ name, title }: { name: string; title: string }) {
  return (
    <Paper radius="md" withBorder p="lg" bg="var(--mantine-color-body)">
      <Avatar
        src="https://images.unsplash.com/photo-1512485694743-9c9538b4e6e0?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        size={100}
        radius={120}
        mx="auto"
      />
      <Text ta="center" fz="xl" fw={500} mt="md">
        {name}
      </Text>
      <Text ta="center" c="dimmed" fz="lg">
        {title}
      </Text>
    </Paper>
  );
}
