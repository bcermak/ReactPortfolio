import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

function Resume() {
    return <div>
    <Container>
        <Row>
            <Col>
            <div className="resumeBody">
    <div class="resume">
        <a href = "https://drive.google.com/file/d/1UXcb3RkGwaURCepCkIGigpU1LpcrtxOR/view?usp=sharing"><h2>Resume</h2></a>
        <iframe className = "resume" src="https://docs.google.com/document/d/e/2PACX-1vRBmroBKYj4E5wLh9ADc47_yEaJ5W0RqRqrv-XEYQYXtTFkGmBonLyH-be3eXlGrw/pub?embedded=true"></iframe>
    </div>   
    </div>
            </Col>
        </Row>
    </Container>
    </div> 
    
}

export default Resume