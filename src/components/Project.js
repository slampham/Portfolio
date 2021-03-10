import React from 'react'
import PropTypes from 'prop-types'

function Project(props) {
  const techs = props.techs.map(tech => <li className='tech'>{tech}</li>)

  return (
    <div className='Project' >
      <img className='img' src={props.img} alt={props.name} />

      <div className="content">
        <h3 className='name'>{props.name}</h3>
        <p className='desc'>{props.desc}</p>
        <ul>{techs}</ul>

        <div className="links">
          <a href={props.code} className='code'>
            <img src="https://w7.pngwing.com/pngs/783/228/png-transparent-github-software-developer-source-code-programmer-mascot-logo-mammal-cat-like-mammal-carnivoran.png"/>
          </a>
          <a href={props.site} className='site'>
            <img src="https://pics.freeicons.io/uploads/icons/png/18926654601543238879-512.png"/>
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