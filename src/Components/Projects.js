import React from 'react';
import ProjectBox from './ProjectBox';
import NewsletterImage from '../images/NewsletterImage.png';
import Toronto from '../images/Toronto.png';
import ForecastIQ from '../images/ForecastIQ.png';
import RogfreeImage from '../images/RogfreeImage.png';
import TindogImage from '../images/TindogImage.png';
import WigglesImage from '../images/WigglesImage.png';
import Dashboard2 from '../images/Dashboard2.png';
import TorontoReal from '../images/TorontoReal.png';
import Infinity50 from '../images/Infinity.png';
import ForecastIQNew from '../images/ForecastIQNew.png';
import AlignIQNew from '../images/AlignIQNew.png';
import TrustIQNew from '../images/TrustIQNew.png';
import frauddetection from '../images/frauddetection.png';
import houseprice from '../images/houseprice.png';

const Projects = () => {
  return (
    <div>
      <h1 className='projectHeading'>My <b>Projects</b></h1>
      <div className='project'>
        <ProjectBox projectPhoto={TorontoReal} projectName="Wiggles" />
        <ProjectBox projectPhoto={ForecastIQNew} projectName="ForecastIQ" />
        <ProjectBox projectPhoto={TrustIQNew} projectName="RogFree" />
        <ProjectBox projectPhoto={Infinity50} projectName="Tindog" />
        <ProjectBox projectPhoto={AlignIQNew} projectName="Tindog" />
        <ProjectBox projectPhoto={Dashboard2} projectName="Tindog" />
        <ProjectBox projectPhoto={frauddetection} projectName="Tindog" />
        <ProjectBox projectPhoto={houseprice} projectName="Tindog" />
      </div>

    </div>
  )
}

export default Projects
