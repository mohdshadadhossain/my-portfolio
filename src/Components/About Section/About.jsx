import React from 'react'
import './about.css'
import img from '../../Assets/Picture.jpg'
import { VscCloudDownload } from 'react-icons/vsc'
// import cvv from '../../Assets/FRONTEND DEVELOPER.pdf'

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
            Creative and detail-oriented front-end developer skilled in HTML, CSS, JavaScript, and Python. I focus on building responsive, accessible web applications that blend functionality with clean design.
            <br />
            With a passion for solving problems and refining my skills, I'm dedicated to delivering impactful digital experiences and continuously growing in the ever-evolving world of web development.
          </h4>

          <div className="aboutBtn">
            <a className='flex' href="Dimas UML.docx" download="Dimas UML.docx" >Download CV <VscCloudDownload /></a>
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