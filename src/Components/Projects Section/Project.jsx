import React, { useState } from 'react'
import './project.css'
import { AiFillYoutube } from 'react-icons/ai'
import { FiGithub } from 'react-icons/fi'
import img from '../../Assets/PIZZA.jpg'
import img2 from '../../Assets/ATR.png'
import img1 from '../../Assets/Preview- Dashboard.jpg'
import img4 from '../../Assets/delivery.png'
import img5 from '../../Assets/sql.png'
import img6 from '../../Assets/dashboard in excel.jpg'
import img7 from '../../Assets/soccer.png'
import img8 from '../../Assets/friendsApp.png'
import img9 from '../../Assets/cvGenerator.png'

const data = [

  {
    id: 1,
    image: img1,
    demo: 'https://www.youtube.com',
    liveLink: 'https://github.com/mohdshadadhossain/AdventureWorks-Sales-Analysis',
    github: 'https://github.com/mohdshadadhossain/AdventureWorks-Sales-Analysis',
    title: 'Sales Data Analysis Using Power BI and Excel',
    desc: 'This project leveraged statistical analysis for identifying patterns, Power BI for creating interactive dashboards and visualizations of sales and profitability, and Microsoft Excel for data manipulation and reporting. These tools enabled comprehensive insights into sales performance and customer demographics.',
    tech1: 'PowerBI',
    tech2: 'Microsoft Excel (Advanced)',
    tech3: 'SAS',
  },

  {
    id: 1,
    image: img5,
    demo: 'https://www.youtube.com',
    liveLink: 'https://github.com/mohdshadadhossain/SQL_DataCleaning_Processing',
    github: 'https://github.com/mohdshadadhossain/SQL_DataCleaning_Processing',
    title: 'Advanced Data Cleaning and Processing with SQL',
    desc: 'This project focuses on data cleaning and processing of the Nashville Housing dataset using SQL. Key tasks included standardizing formats, handling missing values, and removing duplicates. It ensures clean, consistent data for further analysis and insights',
    tech1: 'SQL',
    tech2: 'Microsoft Excel',

  },
  {
    id: 1,
    image: img6,
    demo: 'https://www.youtube.com',
    liveLink: 'https://github.com/mohdshadadhossain/Coffee_Sales_Analysis',
    github: 'https://github.com/mohdshadadhossain/Coffee_Sales_Analysis',
    title: 'Sales Analysis Using Excel: Uncovering Insights from Coffee Sales Data',
    desc: 'This project uses advanced Excel functions (XLOOKUP, INDEX/MATCH, SUMIFS) to analyze coffee sales, uncover trends, and assess customer behavior. It includes creating bar charts and dashboards in Excel, demonstrating skills in data cleaning, trend analysis, and visualization',
    tech1: '',
    tech2: 'Microsoft Excel(Advanced)',

  },
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