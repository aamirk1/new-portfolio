import React from 'react'
import './Services.css'
import HeartEmoji from "../../img/heartemoji.png";
import Glasses from "../../img/glasses.png"
import Humble from "../../img/humble.png"
import Card from '../Card/Card';
import Resume from './resume.pdf'
const Services = () => {
  return (
    <div className="services">
        {/* left side */}
        <div className="awesome">
            <span>My Awesome</span>
            <span>Services</span>
            <span>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut rerum eum laudantium similique dolores.<br/> Impedit odio architecto laudantium iure itaque.</span>
            <a href={Resume} download>
            <button className="button s-button">Download cv</button>
            </a>
            <div className="blur s-blur1" style={{ background:"#ABF1FF94" }}></div>
        </div>
        {/* right side */}
        <div className="cards">
          <div style={{left:'14rem'}}>
              <Card
              emoji= {HeartEmoji}
              heading = {'Design'}
              detail = {"Figma, Photoshop, Illustrator"} 
              />
          </div>
          <div style={{ top: "12rem", left: "-4rem" }}>
            <Card
            emoji={Glasses}
            heading={"Developer"}
            detail={"HTML, CSS, JavaScript, ReactJs, Python, Django"}
            />
          </div>
          <div style={{ top:"19rem", left:"12rem" }}>
            <Card
            emoji={Humble}
            heading={"Data Analysts"}
            detail={"Power BI, Excel, Tableu, Matplotlib, Seaborn"}
            />
          </div>
          <div className="blur s-blur2" style={{ background: "var(--purple)"}}></div>
        </div>
    </div>
  )
}

export default Services