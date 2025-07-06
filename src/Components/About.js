import React from 'react';
import Skills from './Skills.js';
import Tilt from 'react-parallax-tilt';
import Lottie from "lottie-react"
import Coder from '../LottieFiles/coder.json';

const About = () => {
  return (
    <>
      <div className='AboutPage'>
        <div className='AboutText'>
          <h1 className='AboutTextHeading'>Get to <b>know</b> me!</h1>
          <p>
            I'm currently a final year <b>Data Science & Machine Learning</b> undergraduate student at the University of Alberta, graduating in <b>May 2026</b>. <br/><br/>
            I’ve worked as a <b>Data Science Intern</b> at United Worldwide Couriers (New York) and have also contributed to data analytics in the financial sector.
            My interests lie in building ML-powered applications that solve real-world problems; check out some of my projects in the Projects section. <br/><br/>
            I’m <b>actively seeking</b> full-time opportunities in Data Analytics, Data Science, or AI starting Summer 2026. Let’s connect, links are in the footer!
          </p>
        </div>

        <div>
          <Tilt>
            <Lottie 
              className="illustration" 
              animationData={Coder} 
              loop={true} 
            />
          </Tilt>
        </div>
      </div>
      
      <h1 className='SkillsHeading'>Professional Skillset</h1>
      <div className='skills'>
        <Skills skill='Python' />
        <Skills skill='Pandas' />
        <Skills skill='NumPy' />
        <Skills skill='Scikit-learn' />
        <Skills skill='SQL' />
        <Skills skill='Tableau' />
        <Skills skill='Excel' />
        <Skills skill='Streamlit' />
        <Skills skill='Git' />
        <Skills skill='GitHub' />
        <Skills skill='Vercel' />
        <Skills skill='AWS' />
      </div>
    </>
  )
}

export default About;
