import React from "react";
import Hero from "../components/Hero";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";


const About = () => (
  <div>
    <Hero backgroundImage="./backgroundImage.jpeg">
      <h1>Pat Corcoran</h1>
      <h5>Full-Stack Web Developer</h5><br/>
      <a href="/portfolio" ><button className="btn info">P O R T F O L I O</button></a>
    </Hero>
    <Container style={{ marginTop: 30 }}>
      <Row>
        <Col size="md-1">
        </Col>
        <Col size="md-10">
        <div className="card">
        <h2>Welcome...</h2><br/>
            <p>Blazing a path in the world of web development, Pat is excited to bring his coding abilities, well-rounded perspective, and strong team-building expertise to table for an exciting career opportunity.</p>
            <p>This site is a showcase of some of the projects I've built either through the Northwestern University Full-Stack course or through my own web development interests. </p>
            <p>Please have a look around and use the comment page to reach me if you have any questions.  Thanks for visiting!
          </p>
          <p>---</p>
        <div id="initials"><h3>Pat Corcoran</h3></div><br/>
        </div>
        </Col>
        <Col size="md-1">
        </Col>
      </Row>
        <br/><br/>
        <div className="row">
          <div className="container-1 col-md-4">
              <img src="portfolio.jpeg" alt="view"/>
              <a href="/portfolio"><div className="overlay-1"><div className="text">Portfolio</div></div></a>
          </div>
          <div className="container-2 col-md-4">
            <img src="email.jpeg" alt="resume"/>
            <a href="/contact"><div className="overlay-2"><div className="text">Contact</div></div></a> 
          </div>
          <div className="container-3 col-md-4">
            <img src="resumeImage.jpeg" alt="resume"/>
            <a href="/pcwebdevResume.pdf" download><div className="overlay-3"><div className="text">Resume</div></div></a>  
          </div>
        </div>
    </Container>
  </div>
);

export default About;
