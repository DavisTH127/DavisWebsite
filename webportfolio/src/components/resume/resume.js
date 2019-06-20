import React, { Component } from 'react';
class Resume extends Component {
  render() {
    return (
      <React.Fragment>
        <section id="education">
          {/* Education
      ----------------------------------------------- */}
          <div className="row educations">
            <div className="three columns header-col">
              <h1><span>Education</span></h1>
            </div>
            <div className="nine columns main-col">
              <div className="row item">
                <div className="twelve columns">
                  <h3>San Francisco State University</h3>
                  <p className="info">B.S. Degree in Computer Science <span>•</span> <em className="date">August 2014 - May 2019</em></p>
                </div>
              </div> {/* item end */}
            </div> {/* main-col end */}
          </div> {/* End Education */}

          {/* Courses
          ----------------------------------------------- */}
          <div className="row work">
            <div className="three columns header-col">
              <br></br>
              <h1><span>Courses</span></h1>
            </div>
            <div className="nine columns main-col">
              <div className="row item">
                <div className="twelve columns">
                  <h4>
                    <br></br>
                    <ul>
                      <li>PHYSICS W/CALCULUS 2</li>
                      <li>CALCULUS 2</li>
                      <li>LINEAR ALGEBRA</li>
                      <li>PROBABILITY AND STATISTICS</li>
                      <li>DISCRETE MATH</li>
                      <li>DATA STRUCTURES</li>
                      <li>ANALYSIS OF ALGORITHMS</li>
                      <li>THEORY OF COMPUTING</li>
                      <li>MACHINE STRUCTURES</li>
                      <li>ADVANCED SOFTWARE LAB</li>
                      <li>OPERATING SYSTEMS</li>
                      <li>PROGRAMMING LANGUAGES</li>
                      <li>INTERATIVE MULTIMEDIA APP</li>
                      <li>HUMAN COMPUTER INTERACTION</li>
                      <li>SOFTWARE DEVELOPMENT</li>
                      <li>SOFTWARE ENGINEERING</li>
                      <br></br>
                    </ul>
                  </h4>
                </div>
              </div> {/* item end */}
            </div> {/* main-col end */}
          </div>{/*End Courses*/}
          {/* Work
          ----------------------------------------------- */}
          <div className="row work">
            <div className="three columns header-col">
              <br></br>
              <h1><span>Work</span></h1>
            </div>
            <div className="nine columns main-col">
              <div className="row item">
                <div className="twelve columns">
                  <br></br>
                  <h3>Computer Science Instructor</h3>
                  <p className="info">lead teacher at codefu <span>•</span> <em className="date">August 2018 - Present</em></p>
                  <p>
                    I am responsible for teaching K-8th grade students coding lanagues according to age group and ability.
                     I work closely with each student to ensure that they are reaching their achademic goals. As well, i
                      develope and execute lesson plans to promote computer science fundamentals including problem solving and
                      critical thinking. The curriculum included introduction to programming, HTML/CSS, Javascript, python and game devleopment through scratch.
                </p>
                </div>
              </div> {/* item end */}
            </div> {/* main-col end */}
          </div> {/* End Work */}
        </section>
        {/* Skills
      ----------------------------------------------- */}
        <section id="skill">
          <h2>Skills</h2>
          <div className="row">
            <div className="three columns header-col">
            </div>
            <div className="three columns header-col"><div class="skills-icon"><span class="devicon-java-plain"></span></div>
              <h5 class="skills-title font-serif">Java</h5></div>
            <div className="three columns header-col"><div class="skills-icon"><span class="devicon-html5-plain"></span></div>
              <h5 class="skills-title font-serif">HTML</h5></div>
            <div className="three columns header-col"><div class="skills-icon"><span class="devicon-javascript-plain"></span></div>
              <h5 class="skills-title font-serif">JavaScript</h5></div>
          </div>
          <br></br>
          <div className="row">
            <div className="three columns header-col">
            </div>
            <div className="three columns header-col"><div class="skills-icon"><span class="devicon-python-plain"></span></div>
              <h5 class="skills-title font-serif">Python</h5></div>
            <div className="three columns header-col"><div class="skills-icon"><span class="devicon-react-plain"></span></div>
              <h5 class="skills-title font-serif">React</h5></div>
            <div className="three columns header-col"><div class="skills-icon"><span class="devicon-css3-plain"></span></div>
              <h5 class="skills-title font-serif">CSS</h5></div>
          </div>
          <br></br>
          <div className="row">
            <div className="three columns header-col">
            </div>
            <div className="three columns header-col"><div class="skills-icon"><span class="devicon-swift-plain"></span></div>
              <h5 class="skills-title font-serif">Swift</h5></div>
            <div className="three columns header-col"><div class="skills-icon"><span class="devicon-postgresql-plain"></span></div>
              <h5 class="skills-title font-serif">Postgresql</h5></div>
            <div className="three columns header-col"><div class="skills-icon"><span class="devicon-amazonwebservices-plain"></span></div>
              <h5 class="skills-title font-serif">Amazonwebservices</h5></div>
          </div>{/* End skills */}
        </section> {/* Resume Section End*/}
      </React.Fragment>
    );
  }
}

export default Resume;