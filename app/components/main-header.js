"use client";

import Link from 'next/link';
import styles from './main-header.module.css';
import { useState } from 'react';

export default function MainHeader({ imageNames }) {
    const [isDropdownOpen, setDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setDropdownOpen(!isDropdownOpen);
    };

    return (
        <header className={styles.header}>
            <nav>
                <ul className={styles.navList}>
                <li className={styles.navItem}>
                        <Link href="/">Home</Link>
                    </li>
                    <li className={styles.navItem}>
                        <Link href="/meals">Meals</Link>
                    </li>
                    <li className={styles.navItem}>
                        <Link href="/community">Community</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}
