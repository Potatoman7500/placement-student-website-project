'use client';

import { Flex, NavLink } from '@mantine/core';
import { ReactNode, useState } from 'react';
import styles from './navBar.module.css';
import { usePathname } from 'next/navigation';

export default function NavBar(): ReactNode {
  const navLinks = [
    { label: 'Home', href: '/' },
    { label: 'Events', href: '/events' },
  ];

  const path = usePathname();

  return (
    <Flex className={styles.navBar}>
      {navLinks.map((item, index) => (
        <NavLink
          key={item.label}
          className={styles.navLink}
          href={item.href}
          active={path === item.href}
          label={item.label}
        />
      ))}
    </Flex>
  );
}
