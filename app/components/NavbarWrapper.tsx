'use client';

import { useState } from 'react';
import Navbar from './Navbar';


export default function NavbarWrapper() {
    const [isDarkMode, setIsDarkMode] = useState<boolean>(false);

    return (
        <div data-testid="navbar-wrapper">
            <Navbar
                data-testid="navbar-component"
                isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode}
            />
        </div>
    );
}