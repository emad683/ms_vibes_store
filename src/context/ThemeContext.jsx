import { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [isDark, setIsDark] = useState(() => {
    if (typeof window !== 'undefined') {
      const v2 = localStorage.getItem('ms_graph_paper_v2');
      if (!v2) {
        localStorage.setItem('ms_graph_paper_v2', 'true');
        localStorage.setItem('ms_theme', 'light');
        return false;
      }
      const saved = localStorage.getItem('ms_theme');
      if (saved) return saved === 'dark';
    }
    return false; // Default to the user's graph paper theme
  });

  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('ms_theme', isDark ? 'dark' : 'light');
      const root = document.documentElement;
      if (isDark) {
        root.classList.add('dark');
        root.classList.remove('light');
      } else {
        root.classList.add('light');
        root.classList.remove('dark');
      }
    }
  }, [isDark]);

  const toggleTheme = () => setIsDark(prev => !prev);

  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within ThemeProvider');
  }
  return context;
}
