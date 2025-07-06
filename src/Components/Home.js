import React from 'react';
import Lottie from  "lottie-react";
import SpaceBoy from "../LottieFiles/SpaceBoy.json";
import Typed from "./Typed.js";
import Tilt from 'react-parallax-tilt';
import Avatar from '../images/Avatar.png';
import {CiCoffeeCup} from "react-icons/ci";

const Home = () => {
  return (
    <div >
      <div className='HomePage'>

        <div className='HomeText'>
          <h1>Hello!</h1>
          <h1>I'm <b>Bakhshish Sethi</b></h1>
          <Typed/>   
        </div>

        <Lottie 
          className="illustration" 
          animationData={SpaceBoy} 
          loop={true} 
        />
        
      </div>

      <div className='AboutPage'>
        <div className='AboutText'>
          <h1 className='AboutTextHeading'>About Me</h1>
          <p>
            I enjoy transforming data into actionable insights and building tools that solve real-world problems.
            I’m passionate about applying <b>Data Science</b> and <b>ML</b> to meaningful projects that drive impact.<br /><br />
            I’m proficient in <b>Python</b> and <b>SQL</b>, and have hands-on experience with libraries like <b>pandas</b>, <b>scikit-learn</b>, and <b>PyTorch</b>.<br /><br />
            I’m continuously learning and expanding into areas like <b>cloud computing</b> (AWS), <b>data visualization</b> (Tableau), and <b>big data</b> tools.<br /><br />
            And yes, I run on coffee <CiCoffeeCup style={{scale:"1.5", rotate:"15deg"}}/>
          </p>
        </div>
        <Tilt>
          <img className='Avatar' src={Avatar} alt="" />
        </Tilt>
      </div>
    </div>
  )
}

export default Home
