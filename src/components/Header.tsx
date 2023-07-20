'use client';

import styles from './Header.module.scss';

import { useState } from 'react';
import { useSession } from 'next-auth/react';
import Link from 'next/link';

export default function Header() {
  const { data: session } = useSession();

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
              {session?.user ? (
                <Link href="/api/auth/signout">Sign out</Link>
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
}
