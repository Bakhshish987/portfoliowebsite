import React from 'react';
import ProjectBox from './ProjectBox';
import TorontoReal from '../images/TorontoReal.png';
import ForecastIQNew from '../images/ForecastIQNew.png';
import AlignIQNew from '../images/AlignIQNew.png';
import TrustIQNew from '../images/TrustIQNew.png';
import frauddetection from '../images/frauddetection.png';
import houseprice from '../images/houseprice.png';
import Dashboard3 from '../images/Dashboard3.png';
import Infinity2 from '../images/Infinity2.png';

const Projects = () => {
  return (
    <div>
      <h1 className='projectHeading'>My <b>Projects</b></h1>
      <div className='project'>
        <ProjectBox projectPhoto={TorontoReal} projectName="Wiggles" />
        <ProjectBox projectPhoto={ForecastIQNew} projectName="ForecastIQ" />
        <ProjectBox projectPhoto={TrustIQNew} projectName="TrustGuard" />
        <ProjectBox projectPhoto={Infinity2} projectName="Tindog" />
        <ProjectBox projectPhoto={AlignIQNew} projectName="AlignIQ" />
        <ProjectBox projectPhoto={Dashboard3} projectName="Tindog" />
        <ProjectBox projectPhoto={frauddetection} projectName="Tindog" />
        <ProjectBox projectPhoto={houseprice} projectName="Tindog" />
      </div>

    </div>
  )
}

export default Projects
