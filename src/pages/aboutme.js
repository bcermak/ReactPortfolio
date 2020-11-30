import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';



function AboutMe() {
    return <div>
        <div className ="row">
            <div className ="col-md-6">
                <div className = "card-body">
                <h2 className = "knowMe"> Get to Know Brandon </h2>
                <img src=""alt="LinkedIn"></img>
                <p className = "aboutMe">I am currently in the process of a major career change after a very unexpected start to my 2020. Hospitality is/was my passion, however, there was always the idea in the back of my mind to make a major career shift to a more ‘technical’ occupation...after some motivation from the events of COVID19, I am ecstatic to be on my way to becoming a Full Stack Web Developer!</p>
                </div>
            </div>
            <div className="col-md-6 resumeBody">
            <div class="resume">
                <a href = "https://drive.google.com/file/d/1UXcb3RkGwaURCepCkIGigpU1LpcrtxOR/view?usp=sharing"><h2>Resume</h2></a>
                <iframe className = "resume" src="https://docs.google.com/document/d/e/2PACX-1vRBmroBKYj4E5wLh9ADc47_yEaJ5W0RqRqrv-XEYQYXtTFkGmBonLyH-be3eXlGrw/pub?embedded=true"></iframe>
            </div>   
            </div>
        </div>

</div>    
}

export default AboutMe;