import Link from 'next/link';

export default function Header() {
  return (
    <header>
      <div className="container">
        <div>
          <Link href="/">Next.js Starter</Link>
        </div>
        <nav>
          <ul>
            <li>
              <Link href="/">Home</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
