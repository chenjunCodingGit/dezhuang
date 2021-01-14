import React from 'react'

export const themes = {
  light: {
    foreground: '#000000',
    background: '#f00',
  },
  dark: {
    foreground: '#ffffff',
    background: '#0ff',
  },
};

export const ThemeContext = React.createContext({
  theme: themes.dark,
  toggleTheme: () => {},
})