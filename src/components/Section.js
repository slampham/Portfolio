import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { Switch, Route } from 'react-router'

const StyledSection = styled.section`
  color: var(--lightest-slate);
  max-width: 1000px;

  h2 {
    font-size: 1.75rem;
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

function Section({header, children, path}) {
  return (
    <StyledSection id={path}>
      <h2>{header}</h2>
      {children}
    </StyledSection>
  )
}

Section.propTypes = {
  header: PropTypes.string,
}

export { StyledSection }
export default Section