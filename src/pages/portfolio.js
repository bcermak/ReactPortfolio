import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Image from 'react-bootstrap/Image'
import KeepAustinSocial from './Assets/Images/keepaustinsocial.jpg'
import BrewsNDadJokes from './Assets/Images/brewsndadjokes.jpg'
import Scheduler from './Assets/Images/scheduler.JPG'
import WeatherApp from './Assets/Images/WeatherApp.png'
import EmpManager from './Assets/Images/empmanager.jpg'
import PasswordGenerator from './Assets/Images/passwordgenerator.png'

function Portfolio() {
    return <div className= "container">
        <div className ="row projects">
            <div className= "col-md-6">
                        <div style={{color: 'white'}}>Keep Austin Social </div>
                        <Image src={KeepAustinSocial} className ="primaryPic1"></Image>
                        <div><a style={{fontSize: 'larger', color: 'white'}} href = "https://github.com/Moon-Ingenium/KeepAustinSocial"> GitHub </a> || <a style={{fontSize: 'larger', color: 'white'}} href = "https://enigmatic-brushlands-64346.herokuapp.com/"> Deployed </a></div>
            </div>
            <div className="col-md-6">
                <div style={{color: 'white'}}> BrewsNDadJokes </div>
                <Image src={BrewsNDadJokes} className ="primaryPic1"></Image>
                <div><a style={{fontSize: 'larger',color: 'white'}} href = "https://github.com/bcermak/BrewsNDadJokes"> GitHub </a> || <a style={{fontSize: 'larger',color: 'white'}} href = "https://bcermak.github.io/BrewsNDadJokes/"> Deployed </a></div>
            </div>
        </div>
        <div className ="row projects">
            <div className= "col-md-6">
                        <div style={{color: 'white'}}> Work Day Scheduler </div>
                        <Image src={Scheduler} className ="primaryPic1"></Image>
                        <div><a style={{fontSize: 'larger',color: 'white'}} href = "https://github.com/bcermak/Work-Day-Scheduler"> GitHub </a> || <a style={{fontSize: 'larger',color: 'white'}} href = "https://bcermak.github.io/Work-Day-Scheduler/"> Deployed </a></div>
            </div>
            <div className="col-md-6">
                <div style={{color: 'white'}}> Weather Dashboard </div>
                <Image src={WeatherApp} className ="primaryPic1"></Image>
                <div><a style={{fontSize: 'larger',color: 'white'}} href = "https://github.com/bcermak/Weather-Dashboard"> GitHub </a> || <a style={{fontSize: 'larger', color: 'white'}} href = "https://bcermak.github.io/Weather-Dashboard/"> Weather Dashboard </a></div>
            </div>
        </div>
        <div className ="row projects">
            <div className= "col-md-6">
                <div style={{color: 'white'}}> Employee Management System </div>
                <Image src={EmpManager} className ="primaryPic1"></Image>
                <div><a style={{fontSize: 'larger',color: 'white'}} href = "https://github.com/bcermak/employeetracker"> GitHub </a> || <a style={{fontSize: 'larger',color: 'white'}} href = ""> Deployed </a></div>
            </div>
            <div className="col-md-6">
                <div style={{color: 'white'}}> Password Generator </div>
                <Image src={PasswordGenerator} className ="primaryPic1"></Image>
                <div><a style={{fontSize: 'larger',color: 'white'}} href = "https://github.com/bcermak/PasswordGenerator"> GitHub </a> || <a style={{fontSize: 'larger',color: 'white'}} href = "https://bcermak.github.io/PasswordGenerator/"> Deployed </a></div>
            </div>
        </div>
        
        </div>        
          
        
}

export default Portfolio;