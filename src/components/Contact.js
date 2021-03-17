import React, { useContext } from 'react'
import styled from 'styled-components'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { Context } from '../contexts/Context'

const StyledContact = styled.section`
  text-align: center;

  > * {
    margin: 1em 0;
  }

  button {
    font-size: 1rem;
  }

  ul {
    color: ${({theme}) => theme === 'dark' ? 'var(--light-slate)' : 'black'};
    font-size: 1.5rem;
    list-style-type: none;
    display: flex;
    justify-content: center;

    > * {
      margin: 0 1em;
    }
  }

  footer {
    margin-top: 5em;
    font-size: .9rem;
    color: DarkGray;
  }
`

function Contact() {
  const {theme} = useContext(Context)

  return (
    <StyledContact theme={theme}>
      <p>Again, please contact me if you're interested or have a position open for a web developer. I have a strong work ethic, and I'll make sure that any product that I work on is completed to perfection!</p>

      <button>Contact Me</button>

      <ul>
        <FaGithub/>
        <FaLinkedin/>
      </ul>

      <footer>
        Credit goes to Brittany Chiang for the inspiration on the theme and UI
      </footer>
    </StyledContact>
  )
}

export default Contact
