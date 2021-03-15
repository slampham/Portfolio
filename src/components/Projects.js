import React from 'react'
import styled from 'styled-components'
import Project from './Project'
import RestaurantTinder from '../images/Restaurant Tinder.png'

const StyledProjects = styled.section`
  figcaption:nth-child(odd) {
    text-align: right;
  }

  figcaption:nth-child(even) {
    text-align: left;
  }
`

function Projects() {
  return (
    <StyledProjects>
      <Project 
        img={RestaurantTinder}
        name='Restaurant Tinder'
        desc='Struggling to choose a restaurant between your group of friends? Restaurant Tinder combines Yelp and Tinder together in order to find a restaurant that you desire. Swipe until you find a match.'
        techs={['Express.js', 'node.js', 'Yelp API']}
        code='https://github.com/slampham/Restaurant-Tinder'
        site='https://restaurant-tinder-.glitch.me/'
      />

      {/* <Project 
        img=''
        name='10x Developer'
        desc='A research project for understanding what separates the 10x developers from average ones. Some factors may surprise you. Did you know 10x developers have 5000% more issue comments than regular developers?'
        techs={['BigQuery', 'Github API', 'Radon']}
        code=''
        site=''
      /> */}
    </StyledProjects>
  )
}

export default Projects
