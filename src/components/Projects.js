import React from 'react'
import styled from 'styled-components'
import Project, { StyledProject } from './Project'
import RestaurantTinder from '../images/Restaurant Tinder.png'
import TenXDev from '../images/10x Dev.png'
import Portfolio from '../images/Portfolio.png'

const StyledProjects = styled.section`
  display: grid;
  grid-auto-flow: row;
  row-gap: 7.5vh;

  ${StyledProject}:nth-child(odd) {
    text-align: right;

    ul {
      justify-content: flex-end;
    }
  }

  @media (min-width: 768px) {
    ${StyledProject} {
      figcaption {
        width: 500px;
      }

      &:nth-child(odd) {
        figcaption {
          right: 0;
        }
      }

      &:nth-child(even) {
        .img-link {
          align-self: flex-end;
        }
      }
    }
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

      <Project
        img={TenXDev}
        name='10x Developer'
        desc='A research project for understanding what separates the 10x developers from average ones. Did you know 10x developers have 5000% more issue comments than regular developers?'
        techs={['BigQuery', 'Github API', 'Radon']}
        code='https://github.com/slampham/10x-Dev'
        site='https://colab.research.google.com/drive/1c6-tahKwTqxG8aOacnQ9Y-Bd8VHUrYYU#scrollTo=M-Ye5MoYGDzl'
      />

      <Project
        img={Portfolio}
        name='Portfolio'
        desc="You're seeing it now! Credit goes to Brittany Chiang for the inspiration with theme and UI / UX. (Note that I coded everything from scratch)."
        techs={['React', 'styled-components', ]}
        code='https://github.com/slampham/Portfolio'
        site='https://spencerpham.dev'
      />
    </StyledProjects>
  )
}

export default Projects
