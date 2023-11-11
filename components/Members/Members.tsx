import { SimpleGrid, Container, Divider } from '@mantine/core';
import { MemberCard } from './MemberCard';

const heirarchy = [
  {
    team: 'Head',
    members: [
      {
        name: 'Hamza Anwar',
        title: 'Chairman',
      },
    ],
  },
  {
    team: 'PR Team',
    members: [
      {
        name: 'Mahmoud Attia',
        title: 'Webmaster',
      },
      {
        name: 'Bob',
        title: 'Something',
      },
    ],
  },
];

export function Members() {
  return (
    <Container mt="xl">
      {heirarchy.map((level) => {
        const peeps = level.members.map((member) => (
          <MemberCard name={member.name} title={member.title} />
        ));
        return (
          <>
            <Divider my="xs" label={level.team} labelPosition="center" size="md" />
            <SimpleGrid cols={3}>{peeps}</SimpleGrid>
          </>
        );
      })}
    </Container>
  );
}
