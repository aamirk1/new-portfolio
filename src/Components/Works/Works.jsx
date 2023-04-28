import React from 'react';
import './Works.css';
import Django from '../../img/django.png'
import Python from '../../img/python.png'
import Power from '../../img/power.png'
import Illustrator from '../../img/illustrator.png'
import Excel from '../../img/excel.png'
const Works = () => {
  return (
    <div className="works">
        <div className="awesome">
            <span><br /></span>
            <span style={{color: '#1949B8'}}>My Expertise</span>
            <span>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut rerum eum laudantium similique dolores.<br/> Impedit odio architecto laudantium iure itaque.</span>
            <button className="button s-button">Hire Me</button>
            <div className="blur s-blur1" style={{ background:"#ABF1FF94" }}></div>
        </div>
        {/* right side */}
        <div className="w-right">
            <div className="w-mainCircle">
                <div className="w-secCircle">
                    <img src={Django} alt="" />
                </div>
                <div className="w-secCircle">
                    <img src={Power} alt="" />
                </div>
                <div className="w-secCircle">
                    <img src={Python} alt="" />
                </div>
                <div className="w-secCircle">
                    <img src={Excel} alt="" />
                </div>
                <div className="w-secCircle">
                    <img src={Illustrator} alt="" />
                </div>
            </div>
            <div className="w-backCircle blueCircle"></div>
            <div className="w-backCircle yellowCircle"></div>
        </div>
    </div>
  )
}

export default Works