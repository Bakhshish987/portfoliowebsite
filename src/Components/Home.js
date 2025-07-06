import React from 'react';
import Lottie from "lottie-react";
import SpaceBoy from "../LottieFiles/SpaceBoy.json";
import Typed from "./Typed.js";
import Tilt from 'react-parallax-tilt';
import Avatar from '../images/Avatar.png';
import { CiCoffeeCup } from "react-icons/ci";

const Home = () => {
  return (
    <div>
      <div className='HomePage'>

        <div className='HomeText'>
          <h1>Hello!</h1>
          <h1>I'm <b>Bakhshish Sethi</b></h1>
          <Typed />
        </div>

        <Lottie 
          className="illustration" 
          animationData={SpaceBoy} 
          loop={true} 
        />
        
      </div>

      <div className='AboutPage'>
        <div className='AboutText'>
          <h1 className='AboutTextHeading'>Introduction</h1>
          <p>
            I love transforming raw data into powerful insights and building ML-based tools that actually make a difference.
            I'm currently pursuing a <b>Bachelor of Science in Computer Science</b> at the University of Alberta, specializing in <b>Data Science and Machine Learning</b>.<br /><br />
            I’m skilled in <b>Python, SQL, Pandas</b>, and <b>Machine Learning</b>, and I've completed internships in <b>Data Science and Business Analytics</b>.<br />
            I'm also building out a killer project portfolio using <b>Streamlit</b>, <b>Scikit-learn</b>, <b>Tableau</b>, and more.<br /><br />
            Also, I run on <b>coffee</b> <CiCoffeeCup style={{ scale: "1.5", rotate: "15deg" }} />
          </p>
        </div>
        <Tilt>
          <img className='Avatar' src={Avatar} alt="" />
        </Tilt>
      </div>
    </div>
  )
}

export default Home;
