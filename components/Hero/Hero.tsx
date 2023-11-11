import { Container, Title, Text, Button, useStyles } from '@mantine/core';
import { Header } from '../Header/Header';
import classes from './Hero.module.css';

export function Hero({ title, description = '', CTA = '' }) {
  return (
    <div
      className={classes.root}
      style={{
        backgroundImage:
          'linear-gradient(250deg, rgba(130, 201, 30, 0) 0%, #062343 70%), url(https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8&auto=format&fit=crop&w=1080&q=80)',
      }}
    >
      <Header />
      <Container size="lg">
        <div className={classes.inner}>
          <div className={classes.content}>
            <Title className={classes.title}>{title}</Title>

            <Text className={classes.description} mt={30}>
              {description}{' '}
            </Text>

            {CTA && <CTA className={classes.control} />}
          </div>
        </div>
      </Container>
    </div>
  );
}
