import React, { Component } from 'react';
class About extends Component {
  render() {
    return (
      <React.Fragment>
        <section id="about">
          <nav id="nav-wrap">
            <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
            <ul id="nav" className="nav">
              <li><a className="smoothscroll" href="#home">Home</a></li>
              <li><a className="smoothscroll" href="#about">About</a></li>
              <li><a className="smoothscroll" href="#education">Education</a></li>
              <li><a className="smoothscroll" href="#skill">Skills</a></li>
              <li><a className="smoothscroll" href="#projects">Projects</a></li>
              <li><a href="../assets/resume/SDRESUME.pdf">Resume</a></li>
            </ul> {/* end #nav */}
          </nav> {/* end #nav-wrap */}
          <div className="row">
            <div className="three columns">
              <img className="profile-pics" src="images/profilepic.jpg" alt />
            </div>
            <div className="nine columns main-col">
              <h2>ABOUT ME</h2>
              <br></br>
              <p>Hello, my name is Davis Hoang! I am a graduate from San Francisco State University.
              I have earned my Bachelor of Science degree in Computer Science.
              This website will provide a brief overview of my career so far.
              You may learn more about my background and experience throughout
              this website and by viewing my resume using the link above.
            </p>
            </div> {/* end .main-col */}
          </div>
        </section> {/* About Section End*/}
      </React.Fragment>
    );
  }
}
export default About;