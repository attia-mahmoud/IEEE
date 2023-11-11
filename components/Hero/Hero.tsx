import { Container, Title, Text, Button } from '@mantine/core';
import { Header } from '../Header/Header';
import classes from './Hero.module.css';

export function Hero() {
  return (
    <div className={classes.root}>
      <Header />
      <Container size="lg">
        <div className={classes.inner}>
          <div className={classes.content}>
            <Title className={classes.title}>
              KFUPM{' '}
              <Text
                component="span"
                inherit
                variant="gradient"
                gradient={{ from: 'blue', to: 'cyan' }}
              >
                IEEE
              </Text>{' '}
              Student Branch
            </Title>

            <Text className={classes.description} mt={30}>
              Creating opportunities for engineering students.
            </Text>

            <Button
              variant="gradient"
              gradient={{ from: 'blue', to: 'cyan' }}
              size="xl"
              className={classes.control}
              mt={40}
              component="a"
              // href="#events"
            >
              Check out our events
            </Button>
          </div>
        </div>
      </Container>
    </div>
  );
}
