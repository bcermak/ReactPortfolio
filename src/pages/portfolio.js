import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Image from 'react-bootstrap/Image'
import KeepAustinSocial from './Assets/Images/keepaustinsocial.jpg'
import BrewsNDadJokes from './Assets/Images/brewsndadjokes.jpg'
import TeamProfiles from './Assets/Images/teamprofiles.jpg'
import WeatherApp from './Assets/Images/WeatherApp.png'
import ReactEmployeeDirectory from './Assets/Images/reactempdir.jpg'
import ProgressiveBudget from './Assets/Images/progbudget.jpg'

function Portfolio() {
    return <div className= "container">
        <div className ="row projects">
            <div className= "col-md-6">
                        <div style={{color: 'white', marginBottom:'8px'}}>Progressive Budget Tracker</div>
                        <Image style ={{border:'solid black'}} src={ProgressiveBudget} className ="primaryPic1"></Image>
                        <div><a style={{fontSize: 'larger', color: 'white'}} href = "https://github.com/bcermak/budgettracker"> GitHub </a> || <a style={{fontSize: 'larger', color: 'white'}} href = "https://budgettrackerrrr.herokuapp.com"> Deployed </a></div>
            </div>
            <div className= "col-md-6">
                <div style={{color: 'white', marginBottom:'8px'}}> React Employee Directory </div>
                <Image style ={{border:'solid black'}} src={ReactEmployeeDirectory} className ="primaryPic1"></Image>
                <div><a style={{fontSize: 'larger',color: 'white'}} href = "https://github.com/bcermak/ReactEmployeeDirectory"> GitHub </a> || <a style={{fontSize: 'larger',color: 'white'}} href = "https://user-directoryy.herokuapp.com/"> Deployed </a></div>
            </div>    
        </div>
        <div className ="row projects">
        <div className="col-md-6">
                <div style={{color: 'white', marginBottom:'8px'}}> Weather Dashboard </div>
                <Image style ={{border:'solid black'}} src={WeatherApp} className ="primaryPic1"></Image>
                <div><a style={{fontSize: 'larger',color: 'white'}} href = "https://github.com/bcermak/Weather-Dashboard"> GitHub </a> || <a style={{fontSize: 'larger', color: 'white'}} href = "https://bcermak.github.io/Weather-Dashboard/"> Weather Dashboard </a></div>
            </div>
            <div className="col-md-6">
                <div style={{color: 'white', marginBottom:'8px'}}> BrewsNDadJokes </div>
                <Image style ={{border:'solid black'}} src={BrewsNDadJokes} className ="primaryPic1"></Image>
                <div><a style={{fontSize: 'larger',color: 'white'}} href = "https://github.com/bcermak/BrewsNDadJokes"> GitHub </a> || <a style={{fontSize: 'larger',color: 'white'}} href = "https://bcermak.github.io/BrewsNDadJokes/"> Deployed </a></div>
            </div>
        </div>
        <div id = "projectsBottom" className ="row projects">
            <div className= "col-md-6">
                        <div style={{color: 'white', marginBottom:'8px'}}>Team Profiles Generator (CLI) </div>
                        <Image style ={{border:'solid black'}} src={TeamProfiles} className ="primaryPic1"></Image>
                        <div><a style={{fontSize: 'larger', color: 'white'}} href = "https://github.com/bcermak/Team-Profiles"> GitHub </a></div>
            </div>  
            <div className="col-md-6">
                <div style={{color: 'white', marginBottom:'8px'}}> Keep Austin Social </div>
                <Image style ={{border:'solid black'}} src={KeepAustinSocial}></Image>
                <div><a style={{fontSize: 'larger',color: 'white'}} href = "https://github.com/bcermak/KeepAustinSocial"> GitHub </a> || <a style={{fontSize: 'larger',color: 'white'}} href = "https://keepaustinsocial.herokuapp.com/"> Deployed </a></div>
            </div>
        </div>
        
        </div>        
          
        
}

export default Portfolio;