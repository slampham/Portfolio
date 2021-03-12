import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  } /* reset.css */

  :root {  /* GLOBAL VARIABLES */
    --margin: 1.5rem;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  body {
    font-family: 'Calibre', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: #0a192f;
    color: #8892B0;
    padding: var(--margin);
    min-height: 150vh;  /*!FIXME: REDUCE IN FINAL VERSION */
  }

  button {
    font-family: 'SF Mono';
    padding: 1em;
    background: none;
    border-radius: .4em;
    color: #6EFBFF;
    border-color: #00BA8D;
    border-width: .01rem;
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New', monospace;
  }

  @font-face {
    font-family: 'SF Mono';
    src: url('../fonts/SFMono/SFMono-Regular.woff2') format('woff2'),
        url('../fonts/SFMono/SFMono-Regular.woff') format('woff'),
        url('../fonts/SFMono/SFMono-Regular.ttf') format('truetype');
  }
`

export default GlobalStyle