import React, { Component } from 'react';
class Header extends Component {
  render() {
    return (
      <React.Fragment>
        <header id="home">
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
          <div className="row banner">
            <div className="banner-text">
              <h1 className="responsive-headline">Davis Hoang</h1>
              <h2>Welcome to my portfolio.<a className="smoothscroll" href="#about"> Start scrolling </a>
                and learn more <a className="smoothscroll" href="#about">about me</a>!</h2>
              <hr />
              <ul className="social">
                <li><a href="https://www.linkedin.com/in/davisth127/"><i className="fa fa-linkedin" /></a></li>
                <li><a href="https://github.com/DavisTH127"><i className="fa fa-github" /></a></li>
                <li><a href="https://www.facebook.com/davis.hoang.5"><i className="fa fa-facebook" /></a></li>
              </ul>
            </div>
          </div>
          <p className="scrolldown">
            <a className="smoothscroll" href="#about"><i className="icon-down-circle" /></a>
          </p>
        </header> {/* Header End */}
      </React.Fragment>
    );
  }
}
export default Header;