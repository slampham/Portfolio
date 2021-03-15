import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const StyledSection = styled.section`
  min-height: 100vh;
  color: var(--lightest-slate);

  h2 {
    &:before {
      content: '0' counter(sectionCounter) '. ';
      font-size: .75em;
    }
    counter-increment: sectionCounter;
  }
`

function Section(props) {
  return (
    <StyledSection>
      <h2>{props.header}</h2>
      {props.children}
    </StyledSection>
  )
}

Section.propTypes = {
  header: PropTypes.string,
}

export default Section
