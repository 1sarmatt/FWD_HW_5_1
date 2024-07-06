import Link from 'next/link';
import React from 'react';

const Header: React.FC = () => {
    return (
        <header>
            <h1>Sarmat Lutfullin</h1>
            <nav>
                <Link href="/">About Me</Link>
                <Link href="/photos">Photos</Link>
                <Link href="/portfolio">Portfolio</Link>
                <Link href="/contact">Contact Me</Link>
                <Link href="/comicPage">Find Joke</Link>
            </nav>
        </header>
    );
};

export default Header;
