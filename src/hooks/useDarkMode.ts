import { useState, useEffect } from 'react';

export function useDarkMode() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const checkDarkMode = () => {
      const hours = new Date().getHours();
      setIsDark(hours < 6 || hours >= 18); // Dark mode between 6 PM and 6 AM
    };

    checkDarkMode(); // Initial check
    const interval = setInterval(checkDarkMode, 60000); // Check every minute

    return () => clearInterval(interval);
  }, []);

  return isDark;
}