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
  SiTensorflow,
  SiPytorch,
  SiPlotly
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
    'Jupyter Notebook': <SiJupyter />,
    'TensorFlow': <SiTensorflow />,
    'PyTorch': <SiPytorch />,
    'Matplotlib': <SiPlotly />  // Close visual match
  };

  return (
    <div title={skill} style={{ textAlign: 'center', margin: '10px' }}>
      <div style={{ fontSize: '2rem' }}>{icon[skill] || <span>{skill}</span>}</div>
      <div style={{ fontSize: '0.8rem', marginTop: '5px' }}>{skill}</div>
    </div>
  );
};

export default Skills;
