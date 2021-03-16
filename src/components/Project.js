import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { AiFillGithub } from 'react-icons/ai';
import { FiExternalLink } from 'react-icons/fi';

const StyledProject = styled.div`
  position: relative;

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
      font: .75rem 'SF Mono';

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
    width: 100%;
    opacity: 20%;
  }
`
function Project(props) {
  const {img, name, desc, techs, code, site} = props
  const Techs = techs.map(tech => <li>{tech}</li>)

  return (
    <StyledProject img={img}>
      <figcaption>
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

      <img src={img} alt={name}/>
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