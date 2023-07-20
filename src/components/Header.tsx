'use client';

import styles from './Header.module.scss';

import { useState } from 'react';
import Link from 'next/link';

export default function Header() {
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
