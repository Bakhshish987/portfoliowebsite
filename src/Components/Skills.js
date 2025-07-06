import React from 'react';
import { FaPython, FaGitAlt, FaFileExcel, FaChartBar } from "react-icons/fa";
import { SiPandas, SiNumpy, SiScikitlearn, SiStreamlit, SiAmazonaws, SiMysql, SiVercel } from "react-icons/si";

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
    'AWS': <SiAmazonaws />
  };

  return (
    <div
      title={skill}
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        width: '80px',
        margin: '10px'
      }}
    >
      <div style={{ fontSize: '2rem', marginBottom: '5px' }}>
        {icon[skill] || <span>⚙️</span>}
      </div>
      <div style={{
        fontSize: '0.8rem',
        textAlign: 'center',
        color: '#333',
        fontWeight: '500'
      }}>
        {skill}
      </div>
    </div>
  );
};

export default Skills;
