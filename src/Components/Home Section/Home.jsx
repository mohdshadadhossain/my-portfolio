import React from 'react'
import './home.css'
import { TbArrowBigRightLines } from 'react-icons/tb'
import { TbChevronsDown } from 'react-icons/tb'
import { AiFillGithub } from 'react-icons/ai'
import { TbBrandTwitter } from 'react-icons/tb'
import { AiFillYoutube } from 'react-icons/ai'

const Home = () => {
  return (
    <section id='home' className='home section'>
      <div className="leftIcons">
        <div className="socials grid">
          <a href="https://github.com/mohdshadadhossain" target="_blank"><AiFillGithub className="icon" /></a>
          <div className="line"></div>
        </div>
      </div>

      <div className="container homeContent">
        <span className="introText">
          Hi! My Name is
        </span>
        <h1 className="title">
          Mohammed Shadad Hossain
        </h1>
        <span className="subTitle">
          I analyse complex datasets to derive actionable insights.
        </span>
        <p className="homeParagraph">
          I use advanced tools to transform raw data into meaningful visualizations for informed decision-making.
        </p>

        <div className="lowerHomeSection">
          <button className='contactBtn '>
            <a className='flex' href="#contact">
              Contact Me <TbArrowBigRightLines className='icon' />
            </a>
          </button>

          <div class="scrollDiv">
            <a href="#about" className='flex'> <h6 class="scroll">Scroll Down <TbChevronsDown className='icon' /></h6></a>
          </div>
        </div>
      </div>

      <div className="rightEmail">
        <div>
          <div className='emailAddress'>
            <a href="https://mailto:shadadhussain1@hotmail.com" target="_blank">shadadhussain1@hotmail.com</a>
          </div>
          <div className="line"></div>
        </div>
      </div>

    </section>
  )
}

export default Home