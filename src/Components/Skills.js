import React from 'react';
import { FaPython, FaGitAlt, FaFileExcel, FaChartBar } from "react-icons/fa";
import {
  SiPandas,
  SiNumpy,
  SiScikitlearn,
  SiStreamlit,
  SiAmazonaws,
  SiMysql,
  SiVercel,
  SiJupyter,
  SiPytorch,
  SiR,
  SiPowerbi,
  SiGooglecloud
} from "react-icons/si";

const Skills = ({ skill }) => {
  const icon = {
    'Python': <FaPython />,
    'Pandas': <SiPandas />,
    'NumPy': <SiNumpy />,
    'Scikit-learn': <SiScikitlearn />,
    'MySQL': <SiMysql />,
    'Tableau': <FaChartBar />,
    'Excel': <FaFileExcel />,
    'Streamlit': <SiStreamlit />,
    'Git': <FaGitAlt />,
    'Vercel': <SiVercel />,
    'AWS': <SiAmazonaws />,
    'Jupyter': <SiJupyter />,
    'PyTorch': <SiPytorch />,
    'R': <SiR />,
    'GCP': <SiGooglecloud />,
    'Power BI': <SiPowerbi />
  };

  return (
    <div title={skill} className='SkillBox' style={{ textAlign: 'center', margin: '10px' }}>
      <div style={{ fontSize: '2rem' }}>{icon[skill] || <span>{skill}</span>}</div>
      <div style={{ fontSize: '0.8rem', marginTop: '5px' }}>{skill}</div>
    </div>
  );
};

export default Skills;
