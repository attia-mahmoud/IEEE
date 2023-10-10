import { Anchor, Group, ActionIcon, rem, Text } from '@mantine/core';
import { IconBrandTwitter, IconBrandLinkedin, IconBrandSnapchat } from '@tabler/icons-react';
import classes from './Footer.module.css';
import logo from '../../public/logo-horizontal-white.jpg';
import Image from 'next/image';

const links = [
  { link: '#', label: 'Events' },
  { link: '#', label: 'Members' },
  { link: '#', label: 'Contact' },
  { link: '#', label: 'Terms' },
  { link: '#', label: 'Privacy Policy' },
];

export function Footer() {
  const items = links.map((link) => (
    <Anchor
      c="dimmed"
      key={link.label}
      href={link.link}
      lh={1}
      onClick={(event: any) => event.preventDefault()}
      size="sm"
    >
      {link.label}
    </Anchor>
  ));

  return (
    <div className={classes.footer}>
      <div className={classes.inner}>
        <Image src={logo} width={240} height={60} alt="logo" />

        <Group className={classes.links}>{items}</Group>

        <Group gap="xs" justify="flex-end" wrap="nowrap">
          <ActionIcon size="lg" variant="default" radius="xl">
            <IconBrandTwitter style={{ width: rem(18), height: rem(18) }} stroke={1.5} />
          </ActionIcon>
          <ActionIcon size="lg" variant="default" radius="xl">
            <IconBrandLinkedin style={{ width: rem(18), height: rem(18) }} stroke={1.5} />
          </ActionIcon>
          <ActionIcon size="lg" variant="default" radius="xl">
            <IconBrandSnapchat style={{ width: rem(18), height: rem(18) }} stroke={1.5} />
          </ActionIcon>
        </Group>
      </div>
    </div>
  );
}
