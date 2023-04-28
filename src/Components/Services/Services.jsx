import React from 'react'
import './Services.css'
import HeartEmoji from "../../img/heartemoji.png";
import Glasses from "../../img/glasses.png";
import Card from '../Card/Card';
const Services = () => {
  return (
    <div className="services">
        {/* left side */}
        <div className="awesome">
            <span>My Awesome</span>
            <span>Services</span>
            <span>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut rerum eum laudantium similique dolores.<br/> Impedit odio architecto laudantium iure itaque.</span>
            <button className="button s-button">Download cv</button>
            <div className="blur s-blur" style={{ background:"#ABF1FF94" }}></div>
        </div>
        {/* right side */}
        <div className="cards">
            <div>
                <Card
                emoji= {HeartEmoji}
                heading = {'Design'}
                detail = {"Figma, Photoshop, Illustrator"} 
                />
            </div>

        </div>
    </div>
  )
}

export default Services