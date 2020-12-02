import React from "react";
import Image from 'react-bootstrap/Image'
import 'bootstrap/dist/css/bootstrap.min.css';
import linkedin1 from './Assets/Images/linkedin1.png'
import { Card, CardTitle, Container, Row, Col } from 'reactstrap';



function AboutMe() {
    return <div>
       <Card style={{ backgroundColor:"black" }} className="aboutMe" body outline>
        <CardTitle style={{ textAlign:"center" }} tag="h2">Brandon Cermak - Full Stack Web Developer</CardTitle>
        <Container>
            <Row>
                <Col >
                    <Image className="linkedin" src={linkedin1} width="200" height="200"></Image>
                </Col>
                <Col >
                    <div className="aboutText">Brandon is a web developer with an extensive background in operational management. A willingness to do any task to get the job done allowed Brandon to rise to the top of the ranks in hotel management, and this willingness will allow him to thrive in any role at your company!</div>
                    <br></br>  
                    <div className="aboutText">2020 has been a year of surprises for us all. Brandon seized the chance to turn these surprises into growth and is excited to make the long-awaited leap into a new career!</div>
                </Col>    
            </Row>    
        </Container>
      </Card>
        {/* <div className ="row">
            <div className ="col-md-12">
                <div className = "card-body">
                <h2 className = "knowMe"> Brandon Cermak - Full Stack Web Developer </h2>
                <Image src={linkedin1}></Image>
                <p className = "aboutMe">I am currently in the process of a major career change after a very unexpected start to my 2020. Hospitality is/was my passion, however, there was always the idea in the back of my mind to make a major career shift to a more ‘technical’ occupation...after some motivation from the events of COVID19, I am ecstatic to be on my way to becoming a Full Stack Web Developer!</p>
                </div>
            </div>
        </div> */}

</div>    
}

export default AboutMe;