import React from 'react';
import {FaGithub, FaLinkedin} from "react-icons/fa";
import {GrMail} from "react-icons/gr";
import {SiLeetcode} from "react-icons/si"

const Footer = () => {
  return (
    <footer>
      <h4>Developed by Bakhshish Sethi</h4>
      <h4>Copyright &copy; 2025</h4>
      <div className='footerLinks'>
        <a href="https://github.com/Bakhshish987" target='_blank'><FaGithub/></a>
        <a href="https://www.linkedin.com/in/bakhshish-sethi10/" target='_blank'><FaLinkedin/></a>
        <a href='mailTo:bakhshis@ualberta.ca' target='_blank'><GrMail/></a>
        <a href="https://leetcode.com/u/jXmPVdnPOh/" target="_blank"><SiLeetcode/></a>
      </div>
    </footer>
  )
}

export default Footer
