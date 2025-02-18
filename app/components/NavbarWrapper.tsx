'use client';

// import { usePathname } from 'next/navigation';
import { useState } from 'react';
import Navbar from './Navbar';


export default function NavbarWrapper() {
    // const pathname = usePathname();
    const [isDarkMode, setIsDarkMode] = useState<boolean>(false);

    // if (pathname === '/') {
    //     return null;
    // }

    return (
        <div data-testid="navbar-wrapper">
            <Navbar
                data-testid="navbar-component"
                isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode}            />
        </div>
    );
}