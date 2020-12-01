import React from "react";
import { Container, Card, CardTitle, CardText } from 'reactstrap';

function Contact() {
    return <Container classname ="contactContainer">
    <Card className="contactContainer" body outline style={{backgroundColor: 'black', color: 'white'}}>
      <CardTitle tag="h5"><i class="fas fa-phone-volume"> Call </i></CardTitle>
      <CardText>(512)659-1685</CardText>
    </Card>
    <br></br>
    <Card body outline style={{backgroundColor: 'black', color: 'white'}}>
      <CardTitle tag="h5">Email</CardTitle>
      <CardText>cermakprofessional@gmail.com</CardText>
      <a href="mailto:cermakprofessional@gmail.com"><i class="fas fa-envelope"></i></a>
    </Card>
    <br></br>
    <Card body outline style={{backgroundColor: 'black', color: 'white'}}>
      <CardTitle tag="h5">LinkedIn</CardTitle>
      <CardText><a href="https://www.linkedin.com/in/brandon-cermak-ab4219121/"><i class="fab fa-linkedin"></i></a></CardText>
    </Card>
    <br></br>
    <Card body outline style={{backgroundColor: 'black', color: 'white'}}>
      <CardTitle tag="h5">GitHub</CardTitle>
      <CardText><a href="https://github.com/bcermak/"><i class="fab fa-github"></i></a></CardText>
    </Card>
  </Container>
}

export default Contact;