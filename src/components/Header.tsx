'use client';

import Link from 'next/link';
import { useState } from 'react';

import styles from './Header.module.scss';

interface IHeaderProps {
  email: string | undefined | null;
}

const Header = ({ email }: IHeaderProps) => {
  const [navOn, setNavOn] = useState(false);
  const navClasses = [styles.nav, navOn ? styles.navOn : ''].join(' ');

  return (
    <header className={styles.header}>
      <div className="container">
        <div className={styles.logo}>
          <Link href="/">Next.js Starter</Link>
        </div>
        <nav className={navClasses}>
          <ul>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/protected">Protected Page</Link>
            </li>
            <li>
              {email ? (
                <Link href="/api/auth/signout">Sign out ({email})</Link>
              ) : (
                <Link href="/api/auth/signin">Sign in</Link>
              )}
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
