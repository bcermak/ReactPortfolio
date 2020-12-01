import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Image from 'react-bootstrap/Image'
import KeepAustinSocial from './Assets/Images/keepaustinsocial.jpg'
import BrewsNDadJokes from './Assets/Images/brewsndadjokes.jpg'
import Scheduler from './Assets/Images/scheduler.jpg'
import WeatherApp from './Assets/Images/WeatherApp.png'
import EmpManager from './Assets/Images/empmanager.jpg'
import PasswordGenerator from './Assets/Images/passwordgenerator.png'

function Portfolio() {
    return <div className= "container">
        <div className ="row projects">
            <div className= "col-md-6 primaryProject">
                        <div><a href = "https://enigmatic-brushlands-64346.herokuapp.com/"> Project 1 </a></div>
                        <Image src={KeepAustinSocial} className ="primaryPic1"></Image>
                        <div><a href = "https://github.com/Moon-Ingenium/KeepAustinSocial"> GitHub </a></div>
            </div>
            <div className="col-md-6 secondaryProject">
                <div><a href = "https://bcermak.github.io/BrewsNDadJokes/"> Project 2 </a></div>
                <Image src={BrewsNDadJokes} className ="primaryPic1"></Image>
                <div><a href = "https://github.com/bcermak/BrewsNDadJokes"> GitHub </a></div>
            </div>
        </div>    
            <div className="row homeworks">
                <div className="col-md-3 projectA">
                    <div className="media-body">
                    <h5 className="projectTitle"><a className = "projectTitle" href= "https://bcermak.github.io/Work-Day-Scheduler/"> Work Day Scheduler </a></h5>
                    </div>
                    <Image src={Scheduler}></Image>
                    <button className = "hwBtn1">Visit Repository</button>
                </div> 
                <div class="col-md-3 projectB">  
                    <div class="media-body">
                    <h5 class="projectTitle"><a class = "projectTitle" href= "https://bcermak.github.io/Weather-Dashboard/"> Weather Dashboard </a></h5>
                    </div>
                    <Image src={WeatherApp}></Image>
                    <button class = "hwBtn2">Visit Repository</button>
                </div>
                <div class="col-md-3 projectC">
                    <div class="media-body">
                    <h5 class="projectTitle"><a class = "projectTitle" href= "https://github.com/bcermak/employeetracker"> Employee Management System </a></h5>
                    </div>
                    <Image src={EmpManager}></Image>
                    <button class = "hwBtn3">Visit Repository</button>
                </div>
                <div class="col-md-3 projectD">
                    <div class="media-body">
                    <h5 class="projectTitle"><a class = "projectTitle" href= "https://bcermak.github.io/PasswordGenerator/"> Password Generator </a></h5>
                    </div>
                    <Image src={PasswordGenerator}></Image>
                    <button class = "hwBtn4">Visit Repository</button>
                </div> 
                    </div>        
            </div>   
        
}

export default Portfolio;