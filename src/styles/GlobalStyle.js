import React, {useContext, useEffect, useState} from 'react'
import { createGlobalStyle } from 'styled-components'
import SFMonoURL from '../fonts/SFMono/SFMono-Regular.woff2'
import { Context } from '../contexts/Context'

const Style = createGlobalStyle`
  :root {  /* GLOBAL VARIABLES */
    --margin: 1.5rem;
    --navy: #0a192f;
    --light-navy: #112240;
    --lightest-navy: #233554;
    --slate: #8892b0;
    --light-slate: #a8b2d1;
    --lightest-slate: #ccd6f6;
    --white: #e6f1ff;
    --green: #64ffda;
    --trans-time: 1s;
    --trans-delay: ease-in-out;
  }

  *, *::before, *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  } /* reset.css */

  a {
    text-decoration: none;
    color: inherit;
  }

  :before {
    font-family: 'SF Mono';
    font-weight: normal;
    color: ${({theme}) => theme === 'dark' ? 'var(--green)' : 'navy'};
  }

  body {
    font-family: 'Calibre', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: ${({theme}) => theme === 'dark' ? 'var(--navy)' : 'white'};
    color: ${({theme}) => theme === 'dark' ? 'var(--slate)' : 'black'};
    padding: 0 var(--margin);
  }

  button {
    font-family: 'SF Mono';
    padding: 1em;
    background: none;
    border-radius: .4em;
    color: ${({theme}) => theme === 'dark' ? 'var(--green)' : 'green'};
    border-color: ${({theme}) => theme === 'dark' ? 'var(--green)' : 'green'};
    border-width: .01rem;
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New', monospace;
  }

  @font-face {
    font-family: 'SF Mono';
    src: url(${SFMonoURL}) format('woff2'),
        url('../fonts/SFMono/SFMono-Regular.woff') format('woff'),
        url('../fonts/SFMono/SFMono-Regular.ttf') format('truetype');
  }

  ${({theme}) => { 
    return (theme === 'light' && `
      h1, h2, h3, h4, h5, h6, figcaption, li, p, button, footer {
        color: black;
      }
  `)}}

  ${({pageLoaded}) => {
    return (pageLoaded && `
      body, button, span, strong { /* Transitions */
        transition: var(--trans-time) var(--trans-delay);
        transition-property: background-color, color, border-color;
      }
  `)}}
`

function GlobalStyle() {
  const [pageLoaded, setPageLoaded] = useState(false)
  
  useEffect(() => {
    setPageLoaded(true)
  }, [])

  const {theme} = useContext(Context)
  return <Style {...{theme, pageLoaded}} />
}

export default GlobalStyle