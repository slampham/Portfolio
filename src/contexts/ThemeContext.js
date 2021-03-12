import React from 'react'

const theme = {
  'navy': '#0a192f',
  'light navy': '#112240',
  'lightest navy': '#233554',
  'slate': '#8892b0',
  'light slate': '#a8b2d1',
  'lightest slate': '#ccd6f6',
  'white': '#e6f1ff',
  'green': '#64ffda',
}

const ThemeContext = React.createContext(theme)
export default ThemeContext
