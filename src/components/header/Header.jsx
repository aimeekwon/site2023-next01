import React from "react";
import Link from "next/link";
import styles from "./header.module.css";

const links = [
  {
    id: 1,
    title: "Intro",
    url: "/intro",
  },

  {
    id: 3,
    title: "Port",
    url: "/port",
  },
  {
    id: 4,
    title: "Youtube",
    url: "/youtube",
  },
  {
    id: 5,
    title: "Movie",
    url: "/movie",
  },
  {
    id: 6,
    title: "Unsplash",
    url: "/unsplash",
  },
];

const Header = () => {
  return (
    <header
      id="header"
      className="header__wrap nanum7 bg-blue"
      role="heading"
      aria-level={1}
    >
      <div className={styles.header__inner}>
        <h1 className={styles.header__logo}>
          <Link href="/">
            web<em>site</em>
          </Link>
        </h1>
        <nav className={styles.header__nav} role="navigation">
          <ul>
            {links.map((link) => (
              <li key={link.id}>
                <Link href={link.url}>{link.title}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
