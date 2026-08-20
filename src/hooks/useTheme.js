import { useState, useEffect, useCallback } from 'react';

const STORAGE_KEY = 'bsk-theme';

/**
 * useTheme — manages dark/light theme via data-theme on <html>.
 * CSS custom properties do all the visual work; React only tracks
 * the current value so the toggle button can show the right icon.
 */
export function useTheme() {
  const [theme, setTheme] = useState(() => {
    // Read the value that the anti-flash script already applied.
    if (typeof document !== 'undefined') {
      return document.documentElement.getAttribute('data-theme') || 'dark';
    }
    return 'dark';
  });

  // Sync any change to the DOM + localStorage.
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    try { localStorage.setItem(STORAGE_KEY, theme); } catch (_) {}
  }, [theme]);

  const toggle = useCallback(() => {
    setTheme(t => (t === 'dark' ? 'light' : 'dark'));
  }, []);

  return { theme, toggle, isDark: theme === 'dark' };
}
