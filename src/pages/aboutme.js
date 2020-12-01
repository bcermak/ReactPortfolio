import React from "react";
import Image from 'react-bootstrap/Image'
import 'bootstrap/dist/css/bootstrap.min.css';
import linkedin1 from './Assets/Images/linkedin1.png'



function AboutMe() {
    return <div>
       
        <div className ="row">
            <div className ="col-md-12">
                <div className = "card-body">
                <h2 className = "knowMe"> Brandon Cermak - Full Stack Web Developer </h2>
                <Image src={linkedin1}></Image>
                <p className = "aboutMe">I am currently in the process of a major career change after a very unexpected start to my 2020. Hospitality is/was my passion, however, there was always the idea in the back of my mind to make a major career shift to a more ‘technical’ occupation...after some motivation from the events of COVID19, I am ecstatic to be on my way to becoming a Full Stack Web Developer!</p>
                </div>
            </div>
        </div>

</div>    
}

export default AboutMe;