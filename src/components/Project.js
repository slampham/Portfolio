import React from 'react'
import PropTypes from 'prop-types'
import { AiFillGithub } from 'react-icons/ai';
import { BsCodeSlash } from 'react-icons/bs';

function Project(props) {
  const techs = props.techs.map(tech => <li>{tech}</li>)

  return (
    <div >
      <img src={props.img} alt={props.name} />

      <div>
        <h3>{props.name}</h3>
        <p>{props.desc}</p>
        <ul>{techs}</ul>

        <div>
          <a href={props.code}>
            <BsCodeSlash />
          </a>
          <a href={props.site}>
            <AiFillGithub />
          </a>
        </div>
      </div>
    </div>
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