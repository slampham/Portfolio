import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const StyledSection = styled.section`
  min-height: 100vh;
  color: var(--lightest-slate);

  h2 {
    display: flex;
    align-items: center;
    margin-bottom: 1em;

    &:before {
      content: '0' counter(sectionCounter) '. ';
      font-size: .75em;
      margin-right: .5em;
    }
    counter-increment: sectionCounter;

    &:after {
      content: '';
      flex: 1;
      margin-left: .5em;
      height: 1px;
      background-color: var(--lightest-navy);
    }
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
