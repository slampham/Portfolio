import React from 'react'
import styled from 'styled-components'

import { FaCss3, FaHtml5, FaPython, FaReact, FaNodeJs, FaJava } from 'react-icons/fa'
import { SiJavascript, SiCplusplus } from 'react-icons/si'
import { DiGitBranch } from 'react-icons/di'

const StyledSection = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  row-gap: 2em;
  text-align: center;

  h4 {
    font-size: 1.25rem;
  }

  ul {
    list-style: none;
  }
`


function Skills() {
  return (
    <StyledSection>
      <div>
        <h4>Front End</h4>
        <ul>
          <li>HTML <FaHtml5/></li>
          <li>CSS <FaCss3/></li>
          <li>JavaScript <SiJavascript/></li>
          <li>React <FaReact/></li>
        </ul>
      </div>

      <div>
        <h4>Back End</h4>
        <ul>
          <li>node.js <FaNodeJs/></li>
          <li>Express.js</li>
        </ul>
      </div>

      <div>
        <h4>Languages</h4>
        <ul>
          <li>Java <FaJava/></li>
          <li>Python <FaPython/></li>
          <li>C++ <SiCplusplus/></li>
        </ul>
      </div>

      <div>
        <h4>Technologies</h4>
        <ul>
          <li>Git <DiGitBranch/></li>
        </ul>
      </div>

    </StyledSection>
  )
}

export default Skills
