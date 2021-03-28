import React, { useContext } from 'react'
import { motion } from 'framer-motion'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { AiFillGithub } from 'react-icons/ai';
import { FiExternalLink, FiPrinter } from 'react-icons/fi';
import { Context } from '../contexts/Context'
import useInViewTransition from '../hooks/useInViewTransition'
import { slowUp } from '../variants'

const StyledProject = styled(motion.div)`
  position: relative;
  min-height: 40vh;
  display: flex;
  flex-direction: column;
  justify-content: center;

  figcaption {
    padding: 0 1em;
    position: absolute;
    background: none;
    z-index: 1;
    pointer-events: none; 

    > * {
      margin: 1em 0;
    }

    h3 {
      font-size: 1.4rem;
    }

    ul {
      list-style-type: none;
      display: flex;
      font: .8rem 'SF Mono';
      color: var(--slate);

      li {

        & + li {
          margin-left: 1em;
        }
      }
    }

    .icons a {
      font-size: 1.25rem;
      cursor: pointer;
      pointer-events: auto; 

      & + a {
        margin-left: 1em;
      }

      &:hover {
        color: var(--green);
      }
    }
  }

  .img-link {
    img {
      object-fit: cover;
      height: 56.25vw;
      width: 100%;
      opacity: ${({theme}) => theme === 'dark' ? .5 : .9};
      border-radius: 5px;
      border: 1px solid var(--green);

      transition: opacity var(--trans-time) var(--trans-delay);

      &:hover {
        opacity: 100%;
      }
    }
  }

  @media (min-width: 768px) {
    min-height: 0;

    .img-link {
      width: min(60%, 600px);
      height: min(33.75vw, 341px);

      img {
        height: 100%;
      }
    }

    figcaption {
      width: 50%;
      
      p {
        background-color: var(--light-navy);
        color: var(--light-slate);
        padding: 1.5em;
        border-radius: 5px;
      }
    }
  }
`
function Project(props) {
  const {img, name, desc, techs, code, site} = props
  const Techs = techs.map(tech => <li key={tech}>{tech}</li>)
  const {theme} = useContext(Context)
  const { controls, ref } = useInViewTransition()

  return (
    <StyledProject {...{img, theme, ref}} 
      variants={slowUp} initial='hidden' animate={controls}
    >
      <figcaption >
        <h3>{name}</h3>
        <p>{desc}</p>
        <ul>{Techs}</ul>

        <div className='icons'>
          <a href={code} target="_blank" rel="noopener noreferrer">
            <AiFillGithub/>
          </a>
          <a href={site} target="_blank" rel="noopener noreferrer">
            <FiExternalLink />
          </a>
        </div>
      </figcaption>

      <a href={site} className='img-link' target="_blank" rel="noopener noreferrer">
        <img src={img} alt={name} />
      </a>

    </StyledProject>
  )
}

Project.propTypes = {
  techs: PropTypes.arrayOf(PropTypes.string),
  src: PropTypes.string,
  alt: PropTypes.string,
  name: PropTypes.string,
  desc: PropTypes.string,
  code: PropTypes.string,
  site: PropTypes.string,
}

export { StyledProject }
export default Project