import React from 'react'
import './skill.css'
import { TbBrandReactNative } from 'react-icons/tb'
import { IoLogoJavascript } from 'react-icons/io'
import { IoLogoSass } from 'react-icons/io'
import { SiCss3 } from 'react-icons/si'
import { FaHtml5 } from 'react-icons/fa'
import { DiPhp } from 'react-icons/di'
import { FaGitSquare } from 'react-icons/fa'
import { AiOutlineGithub } from 'react-icons/ai'
import { BsWordpress } from 'react-icons/bs'
import { SiMysql, SiPython } from 'react-icons/si'
import { FaMicrosoft } from 'react-icons/fa'
import { FaRegFileExcel } from 'react-icons/fa'

const Skills = () => {
  return (
    <section id='skills' className='skills container section'>
      <div class="sectionTitle">
        <span class="titleNumber">02 . </span>
        <h5 class="titleText">Skills <div class="underline"><span></span></div></h5>
      </div>

      {/* skillContainer */}
      <div className="skillsContainer grid">

        {/* single Group of skills */}
        <div className="skillGroup">
          <div className="groupTitle">
            <h2 className="title">Web Development</h2>
            <span className="subTitle">
              2 Years Experience
            </span>
          </div>
          <div className="generalSkills">
            {/* Single skill div */}
            <div className="singleSkill">
              <div className="iconBox flex">
                <TbBrandReactNative className='icon' />
              </div>
              <span className='skillName'>React</span>
            </div>
            <div className="singleSkill">
              <div className="iconBox flex">
                <IoLogoJavascript className='icon' />
              </div>
              <span className='skillName'>JavaScript</span>
            </div>
            <div className="singleSkill">
              <div className="iconBox flex">
                <IoLogoSass className='icon' />
              </div>
              <span className='skillName'>Sass</span>
            </div>
            <div className="singleSkill">
              <div className="iconBox flex">
                <SiCss3 className='icon' />
              </div>
              <span className='skillName'>CSS</span>
            </div>
            <div className="singleSkill">
              <div className="iconBox flex">
                <FaHtml5 className='icon' />
              </div>
              <span className='skillName'>HTML</span>
            </div>
            <div className="singleSkill">
              <div className="iconBox flex">
                <SiPython className='icon' />
              </div>
              <span className='skillName'>Python</span>
            </div>

          </div>
        </div>



        {/* single Group of skills */}
        <div className="skillGroup">
          <div className="groupTitle">
            <h2 className="title">Data Analysis</h2>
            <span className="subTitle">
              5 Years Experience
            </span>
          </div>
          <div className="generalSkills">
            {/* Single skill div */}
            <div className="singleSkill">
              <div className="iconBox flex">
                <FaRegFileExcel className='icon' />
              </div>
              <span className='skillName'>Excel</span>
            </div>
            <div className="singleSkill">
              <div className="iconBox flex">
                <AiOutlineGithub className='icon' />
              </div>
              <span className='skillName'>Github</span>
            </div>
            <div className="singleSkill">
              <div className="iconBox flex">
                <FaMicrosoft className='icon' />
              </div>
              <span className='skillName'>Power BI</span>
            </div>
            <div className="singleSkill">
              <div className="iconBox flex">
                <SiMysql className='icon' />
              </div>
              <span className='skillName'>MySQL</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills