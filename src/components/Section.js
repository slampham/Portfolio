import React from 'react'
import PropTypes from 'prop-types'

function Section(props) {
  return (
    <section className='Section'>
      <h2 className='header'>{props.header}</h2>
      {props.children}
    </section>
  )
}

Section.propTypes = {
  header: PropTypes.string,
}

export default Section
