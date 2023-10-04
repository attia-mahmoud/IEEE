import { Title, Text, Button, Container } from '@mantine/core';
import { Dots } from './Dots';
import classes from './Hero.module.css';

export function Hero() {
  return (
    <Container className={classes.wrapper} size={1400}>
      <Dots className={classes.dots} style={{ left: 0, top: 0 }} />
      <Dots className={classes.dots} style={{ left: 60, top: 0 }} />
      <Dots className={classes.dots} style={{ left: 0, top: 140 }} />
      <Dots className={classes.dots} style={{ right: 0, top: 60 }} />

      <div className={classes.inner}>
        <Title className={classes.title}>
          KFUPM{' '}
          <Text component="span" className={classes.highlight} inherit>
            IEEE
          </Text>{' '}
          Student Section
        </Title>

        <Container p={0} size={600}>
          <Text size="lg" c="dimmed" className={classes.description}>
            Creating opportunities for engineering students.
          </Text>
        </Container>

        <div className={classes.controls}>
          <Button className={classes.control} size="md">
            Check out our events
          </Button>
        </div>
      </div>
    </Container>
  );
}
