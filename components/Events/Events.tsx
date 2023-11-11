import { Accordion, Container } from '@mantine/core';
import { EventInfo } from './EventInfo';
import classes from './Events.module.css';
import mockData from './mockData.json';

export function Events() {
  const items = mockData.map((event) => (
    <Accordion.Item key={event.title} value={event.title}>
      <Accordion.Control>{event.title}</Accordion.Control>
      <Accordion.Panel>
        <EventInfo {...event} />
      </Accordion.Panel>
    </Accordion.Item>
  ));

  return (
    <Container mt="xl">
      <Accordion defaultValue="Apples" classNames={classes}>
        {items}
      </Accordion>
    </Container>
  );
}
