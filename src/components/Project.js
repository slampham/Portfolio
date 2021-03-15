import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { AiFillGithub } from 'react-icons/ai';
import { BsCodeSlash } from 'react-icons/bs';

const StyledProject = styled.div`
  position: relative;

  figcaption {
    padding: 0 1em;
    position: absolute;
    display: grid;
    row-gap: 1em;

    h3 {
      color: var(--lightest-slate);
      font-size: 1.4rem;
      filter: brightness(2);
    }

    ul {
      display: flex;
      justify-content: flex-end;

      li {
        font-size: 14px;
        display: inline-block;

        & + li {
          margin-left: 1em;
        }
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
            <BsCodeSlash />
          </a>
          <a href={site}>
            <AiFillGithub />
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

export default Project