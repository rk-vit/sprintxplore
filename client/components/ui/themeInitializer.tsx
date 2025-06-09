'use client'

import { useEffect } from 'react'

export default function ThemeInitializer() {
  useEffect(() => {
    document.documentElement.classList.add('light');
    document.documentElement.style.colorScheme = 'light';
  }, []);

  return null;
}
