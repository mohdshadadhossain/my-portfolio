import React, { useState } from 'react'
import './project.css'
import { AiFillYoutube } from 'react-icons/ai'
import { FiGithub } from 'react-icons/fi'
import img from '../../Assets/PIZZA.jpg'
import img2 from '../../Assets/ATR.png'
import img3 from '../../Assets/gaming-two.png'
import img4 from '../../Assets/delivery.png'
import img5 from '../../Assets/Thumbnail.png'
import img6 from '../../Assets/database.jpeg'
import img7 from '../../Assets/soccer.png'
import img8 from '../../Assets/friendsApp.png'
import img9 from '../../Assets/cvGenerator.png'

const data = [


  {
    id: 2,
    image: img9,
    demo: 'https://www.youtube.com',
    liveLink: 'https://mohdshadadhossain.github.io/CV-Generator-App/',
    github: 'https://github.com/mohdshadadhossain/CV-Generator-App',
    title: 'CV Generator App',
    desc: 'Frontend application that helps the user to generate CV by filling the fields and clicking download CV Button.',
    tech1: 'Html',
    tech2: 'CSS',
    tech3: 'JavaScript',
  },
  {
    id: 3,
    image: img8,
    demo: 'https://www.youtube.com',
    liveLink: 'https://mohdshadadhossain.github.io/friendsListApplication/',
    github: 'https://github.com/mohdshadadhossain/friendsListApplication',
    title: 'Friends App',
    desc: 'A dynamic friends list application where users can add friends by entering details through an input field. This project highlights my expertise in JavaScript DOM manipulation.',
    tech1: 'Html',
    tech2: 'CSS',
    tech3: 'JavaScript (DOM)',
  },
  {
    id: 4,
    image: img,
    demo: 'https://www.youtube.com/',
    liveLink: 'https://mohdshadadhossain.github.io/thePizzaHub/',
    github: 'https://github.com/mohdshadadhossain/thePizzaHub',
    title: 'thePizzaHub',
    desc: 'Fully responsive and interactive pizza website, designed with HTML, CSS, and JavaScript.',
    tech1: 'Html',
    tech2: 'CSS',
    tech3: 'JavaScript',
  },
  {
    id: 5,
    image: img2,
    demo: 'https://www.youtube.com',
    liveLink: 'https://mohdshadadhossain.github.io/Atlantis-Hotel/',
    github: 'https://github.com/mohdshadadhossain/Atlantis-Hotel',
    title: 'Hotel Website',
    desc: 'This freelance project is a presentation for Atlantis The Royal - Dubai, showcasing room rates, availability, and reservation features',
    tech1: 'Html',
    tech2: 'CSS',
    tech3: 'JavaScript',
  },

  {
    id: 7,
    image: img4,
    demo: 'https://www.youtube.com',
    liveLink: 'https://mohdshadadhossain.github.io/Responsive-Delivery-Website',
    github: 'https://github.com/mohdshadadhossain/Responsive-Delivery-Website',
    title: 'Online Delivery Website',
    desc: 'A frontend freelance project for a local Dubai business designed to showcase my skills in building responsive websites. This site highlights the business’s services and provides easy access to contact information',
    tech1: 'Html',
    tech2: 'CSS',
    tech3: 'JavaScript',
  },

  {
    id: 9,
    image: img7,
    demo: 'https://www.youtube.com',
    liveLink: 'https://mohdshadadhossain.github.io/soccerLeagueWebsite',
    github: 'https://github.com/mohdshadadhossain/soccerLeagueWebsite',
    title: 'Soccer Management System',
    desc: 'A multi-page Soccer League Management System designed to store, organize, and display comprehensive league data, including ongoing season records and match tracking.',
    tech1: 'Html',
    tech2: 'CSS',
    tech3: 'JavaScript',
  }
]

const Project = () => {
  return (
    <section id='projects' className='projects container section'>
      <div class="sectionTitle">
        <span class="titleNumber">03 . </span>
        <h5 class="titleText">Projects <div class="underline"><span></span></div></h5>
      </div>

      <div className="projectContainer grid">
        {
          data.map(({ id, github, image, liveLink, desc, demo, title, tech1, tech2, tech3, tech4 }) => {
            return (
              <div key={id} className="singleProject">
                <div className="externalLinks flex">
                  <div className="youtubeIcon">
                    <a href={demo} target="_blank"><AiFillYoutube className="icon" /></a>
                  </div>
                  <div className="githubIcon">
                    <a href={github} target="_blank"><FiGithub className="icon" /></a>
                  </div>
                </div>

                <div className="imgDiv">
                  <a href={liveLink} target="_blank">
                    <img src={image} alt={title} />
                  </a>
                </div>
                <div className="projectTitle">
                  <h3>{title}</h3>
                </div>
                <div className="desc">
                  {desc}
                </div>
                <div className="technologies flex">
                  <small> {tech1} </small>
                  <small> {tech2} </small>
                  <small> {tech3} </small>
                  <small> {tech4} </small>

                </div>
              </div>
            )

          })
        }
      </div>

    </section>
  )
}

export default Project