import React from "react";
import Image from 'react-bootstrap/Image'
import 'bootstrap/dist/css/bootstrap.min.css';
import linkedin1 from './Assets/Images/linkedin1.png'
import { Card, CardTitle, Container, Row, Col } from 'reactstrap';



function AboutMe() {
    return <div>
       <Card style={{border:'solid white 6px', backgroundColor:"black", borderRadius: '15px 50px'}} className="aboutMe" body outline>
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

</div>    
}

export default AboutMe;