'use client';

import { usePathname } from 'next/navigation';
import Footer from './Footer';
import { useState } from 'react';

export default function FooterWrapper() {
    const pathname = usePathname();
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [isDarkMode, setIsDarkMode] = useState<boolean>(false);

    if (pathname === '/') {
        return null;
    }

    return <Footer isDarkMode={isDarkMode} />;
}