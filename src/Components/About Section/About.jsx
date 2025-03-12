import React from 'react'
import './about.css'
import img from '../../Assets/Picture.jpg'
import { VscCloudDownload } from 'react-icons/vsc'
// import cvv from '../../Assets/Mohaed_DataAnalyst_CV.docx'

const About = () => {
  return (
    <section id='about' className='about section container'>
      <div class="sectionTitle">
        <span class="titleNumber">01 . </span>
        <h5 class="titleText">About Me <div class="underline"><span></span></div></h5>
      </div>

      <div className="sectionContent grid">
        <div className="textSection">
          <h4>
            Analytical and detail-oriented Data Analyst skilled in SQL, Excel, and Power BI. I focus on extracting insights from complex datasets to drive informed decision-making.
            <br />
            Driven by a passion for data storytelling, critical thinking, and a strong foundation in statistical analysis, I am committed to enhancing my skills and delivering actionable insights. I strive to continuously evolve and adapt in the fast-paced world of data analysis.
          </h4>

          <div className="aboutBtn">
            <a className='flex' href="Mohaed_DataAnalyst_CV.docx" download="Mohamd_DataAnalyst_CV.docx" >Download CV <VscCloudDownload /></a>
          </div>
        </div>
        <div className="aboutImgDiv">
          <img className='aboutImg' src={img} alt="Mohammed Image" />
        </div>
      </div>
    </section>
  )
}

export default About