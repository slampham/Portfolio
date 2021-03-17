import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { AiFillGithub } from 'react-icons/ai';
import { FiExternalLink } from 'react-icons/fi';

const StyledProject = styled.div`
  position: relative;
  min-height: 40vh;
  display: flex;
  flex-direction: column;
  justify-content: center;

  figcaption {
    padding: 0 1em;
    position: absolute;

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

    a {
      font-size: 1.25rem;

      & + a {
        margin-left: 1em;
      }
    }
  }

  img {
    object-fit: cover;
    width: 100%;
    height: 56.25vw;
    opacity: 20%;
    z-index: -1;
  }

  @media (min-width: 769px) {
    min-height: 0;

    img {
      width: min(60%, 600px);
      height: min(33.75vw, 341px);
      border-radius: 10px;
    }

    figcaption {
      width: 50%;
      border-radius: 10px;
      
      p {
        background-color: var(--light-navy);
        padding: 1.5em;
      }
    }
  }
`
function Project(props) {
  const {img, name, desc, techs, code, site} = props
  const Techs = techs.map(tech => <li key={tech}>{tech}</li>)

  return (
    <StyledProject img={img} >
      <figcaption >
        <h3>{name}</h3>
        <p>{desc}</p>
        <ul>{Techs}</ul>

        <div>
          <a href={code}>
            <AiFillGithub/>
          </a>
          <a href={site}>
            <FiExternalLink />
          </a>
        </div>
      </figcaption>
      { img && <img src={img} alt={name} />}
      
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