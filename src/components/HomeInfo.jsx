import React from 'react'
import { Link } from 'react-router-dom';
import { arrow } from '../assets/icons'
const InfoBox = ({ text, link, btnText }) => (
    <div className="info-box" style={{ margin: '0px', top: '50%',  transform: 'translateY(-45%)', padding: '20px'}}>
        <p className="font-medium sm:text-md text-center" style={{ whiteSpace: 'pre-line' }}>
            {text}
        </p>
        <Link to={link} className="neo-brutalism-white neo-btn " style={{ padding: '6px 2px'}}>
            {btnText}
            <img src={arrow} className="w-4 h-4 object-contain" />
        </Link>
    </div>



)

const renderContent = {
    1: (
        <h1 className="sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-3 px-6 text-white mx-5">
          Welcome to <span className="font-semibold">Shojaei's</span> digital realm.✨
          <br />
          Here creativity meets technology, & innovation thrives.
        </h1>
    ),

    2: (
        <InfoBox
        text= {"Begin your adventure to connect"}
        link="/contact"
        btnText="Let's Talk"
        /> 
    ),

    3: (
        <InfoBox
        text={"Embark on a journey through\n my projects and witness the\n fusion of creativity & technology."}
        link="/projects"
        btnText="Explore here"
        />   
    ),

    4: (
        <InfoBox
        text= {"Uncover the depths of my journey and expertise."}
        link="/about"
        btnText="Discover More"
        />
    ),

}



const HomeInfo = ({ currentStage }) => {
  return renderContent[currentStage] || null;
}

export default HomeInfo