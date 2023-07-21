'use client';

import Link from 'next/link';
import { useState } from 'react';
import type { User } from 'next-auth';

import styles from './Header.module.scss';

type Props = Pick<User, 'email'>;

const Header = ({ email }: Props) => {
  const [navOn, setNavOn] = useState(false);
  const navClasses = [styles.nav, navOn ? styles.navOn : ''].join(' ');

  const link = (href: string, name: string) => (
    <Link href={href} onClick={() => setNavOn(false)}>
      {name}
    </Link>
  );

  return (
    <header className={styles.header}>
      <div className="container">
        <div className={styles.logo}>{link('/', 'Next.js Starter')}</div>
        <nav className={navClasses}>
          <ul>
            <li>{link('/', 'Home')}</li>
            <li>
              {email
                ? link('/api/auth/signout', 'Sign Out')
                : link('/api/auth/signin', 'Sign In')}
            </li>
          </ul>
          <div
            className={styles.navToggle}
            onClick={() => setNavOn(!navOn)}
          ></div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
