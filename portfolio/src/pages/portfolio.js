import React from "react";

function Portfolio() {
    return <div className= "container">
        <div className ="row projects">
            <div className= "col-md-6 primaryProject">
                        <a href = "https://enigmatic-brushlands-64346.herokuapp.com/"> Project 1 </a>
                        <a href = "https://github.com/Moon-Ingenium/KeepAustinSocial"> GitHub </a>
            </div>
            <div className="col-md-6 secondaryProject">
                <a href = "https://bcermak.github.io/BrewsNDadJokes/"> Project 2 </a>
                <img src="/Homework2/Assets/brews_screenshot.JPG" alt=""></img>
                <a href = "https://github.com/bcermak/BrewsNDadJokes"> GitHub </a>
            </div>
        </div>    
            <div className="row homeworks">
                <div className="col-md-3 projectA">
                    <div className="media-body">
                    <h5 className="projectTitle"><a className = "projectTitle" href= "https://bcermak.github.io/Work-Day-Scheduler/"> Work Day Scheduler </a></h5>
                    </div>
                    <img src="/Homework2/Assets/Images/scheduler.JPG" alt="screenshot"></img>
                    <button className = "hwBtn1">Visit Repository</button>
                </div> 
                <div class="col-md-3 projectB">  
                    <div class="media-body">
                    <h5 class="projectTitle"><a class = "projectTitle" href= "https://bcermak.github.io/Weather-Dashboard/"> Weather Dashboard </a></h5>
                    </div>
                    <img src="/Homework2/Assets/weather_screenshot.PNG" alt="screenshot"></img>
                    <button class = "hwBtn2">Visit Repository</button>
                </div>
                <div class="col-md-3 projectC">
                    <div class="media-body">
                    <h5 class="projectTitle"><a class = "projectTitle" href= "https://github.com/bcermak/employeetracker"> Employee Management System </a></h5>
                    </div>
                    <img src="/Homework2/Assets/Images/empmanager.jpg"alt="soon"></img>
                    <button class = "hwBtn3">Visit Repository</button>
                </div>
                <div class="col-md-3 projectD">
                    <div class="media-body">
                    <h5 class="projectTitle"><a class = "projectTitle" href= "https://bcermak.github.io/PasswordGenerator/"> Password Generator </a></h5>
                    </div>
                    <img src="/Homework2/Assets/03-javascript-homework-demo.png"alt="soon"></img>
                    <button class = "hwBtn4">Visit Repository</button>
                </div> 
                    </div>        
            </div>   
        
}

export default Portfolio;