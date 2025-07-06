import React from 'react';
import ProjectBox from './ProjectBox';
import NewsletterImage from '../images/NewsletterImage.png';
import Toronto from '../images/Toronto.png';
import ForecastIQ from '../images/ForecastIQ.png';
import RogfreeImage from '../images/RogfreeImage.png';
import TindogImage from '../images/TindogImage.png';
import WigglesImage from '../images/WigglesImage.png';

const Projects = () => {
  return (
    <div>
      <h1 className='projectHeading'>My <b>Projects</b></h1>
      <div className='project'>
        <ProjectBox projectPhoto={Toronto} projectName="Wiggles" />
        <ProjectBox projectPhoto={ForecastIQ} projectName="ForecastIQ" />
        <ProjectBox projectPhoto={RogfreeImage} projectName="RogFree" />
        <ProjectBox projectPhoto={TindogImage} projectName="Tindog" />
      </div>

    </div>
  )
}

export default Projects
