import React from 'react'; 
import { CgCPlusPlus } from "react-icons/cg";
import { FaReact, FaPython, FaGitAlt, FaGithub, FaNpm, FaFigma, FaBootstrap, FaTable } from "react-icons/fa";
import { DiNodejs, DiJavascript1 } from "react-icons/di";
import { SiExpress, SiMongodb, SiPostman, SiVercel, SiPandas, SiNumpy, SiScikitlearn, SiStreamlit, SiAmazonaws } from "react-icons/si";

const Skills = ({ skill }) => {
  const icon = {
    'C++': <CgCPlusPlus />,
    'Python': <FaPython />,
    'Pandas': <SiPandas />,
    'NumPy': <SiNumpy />,
    'Scikit-learn': <SiScikitlearn />,
    'SQL': <FaTable />,
    'Tableau': <FaTable />,
    'Excel': <FaTable />,
    'Streamlit': <SiStreamlit />,
    'AWS': <SiAmazonaws />,
    'Postman': <SiPostman />,
    'React': <FaReact />,
    'Javascript': <DiJavascript1 />,
    'Node': <DiNodejs />,
    'Express': <SiExpress />,
    'MongoDb': <SiMongodb />,
    'Git': <FaGitAlt />,
    'Github': <FaGithub />,
    'Npm': <FaNpm />,
    'Figma': <FaFigma />,
    'Bootstrap': <FaBootstrap />,
    'Vercel': <SiVercel />
  };

  return (
    <div title={skill} className='SkillBox'>
      {icon[skill] || <span>{skill}</span>}
    </div>
  );
};

export default Skills;
