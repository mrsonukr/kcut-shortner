"use client";

import React, { createContext, useContext, useEffect, useState } from 'react';

export type Theme = 'light' | 'dark';
export type ColorTheme = 'blue' | 'green' | 'purple' | 'orange' | 'pink';

interface ThemeContextType {
  theme: Theme;
  colorTheme: ColorTheme;
  setTheme: (theme: Theme) => void;
  setColorTheme: (colorTheme: ColorTheme) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

const colorThemes = {
  blue: {
    primary: '217 91% 60%',
    primaryForeground: '0 0% 98%',
    secondary: '214 32% 91%',
    accent: '216 34% 17%',
  },
  green: {
    primary: '142 76% 36%',
    primaryForeground: '0 0% 98%',
    secondary: '138 76% 97%',
    accent: '140 84% 39%',
  },
  purple: {
    primary: '262 83% 58%',
    primaryForeground: '0 0% 98%',
    secondary: '270 95% 98%',
    accent: '263 70% 50%',
  },
  orange: {
    primary: '25 95% 53%',
    primaryForeground: '0 0% 98%',
    secondary: '24 100% 97%',
    accent: '20 90% 48%',
  },
  pink: {
    primary: '330 81% 60%',
    primaryForeground: '0 0% 98%',
    secondary: '322 100% 98%',
    accent: '327 73% 97%',
  },
};

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>('light');
  const [colorTheme, setColorTheme] = useState<ColorTheme>('blue');

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') as Theme;
    const savedColorTheme = localStorage.getItem('colorTheme') as ColorTheme;
    
    if (savedTheme) setTheme(savedTheme);
    if (savedColorTheme) setColorTheme(savedColorTheme);
  }, []);

  useEffect(() => {
    localStorage.setItem('theme', theme);
    document.documentElement.classList.toggle('dark', theme === 'dark');
  }, [theme]);

  useEffect(() => {
    localStorage.setItem('colorTheme', colorTheme);
    const colors = colorThemes[colorTheme];
    const root = document.documentElement;
    
    Object.entries(colors).forEach(([key, value]) => {
      root.style.setProperty(`--${key.replace(/([A-Z])/g, '-$1').toLowerCase()}`, value);
    });
  }, [colorTheme]);

  return (
    <ThemeContext.Provider value={{ theme, colorTheme, setTheme, setColorTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}