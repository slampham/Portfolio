import React from 'react'
import Project from './Project'

function Projects(props) {
  //TODO: GET GITHUB URLS FOR SRC

  return (
    <div id="Projects">
      <Project 
        img=''
        name='Restaurant Tinder'
        desc='Struggling to choose a restaurant between your group of friends? Restaurant Tinder combines Yelp and Tinder together in order to find a restaurant that you desire. Swipe until you find a match!'
        techs={['Express.js', 'node.js', 'Yelp API']}
        code=''
        site=''
      />

      <Project 
        img=''
        name='10x Developer'
        desc='A research project for understanding what separates the 10x developers from average ones. Some factors may surprise you. Did you know 10x developers have 5000% more issue comments than regular developers?'
        techs={['BigQuery', 'Github API', 'Radon']}
        code=''
        site=''
      />
    </div>
  )
}

export default Projects
