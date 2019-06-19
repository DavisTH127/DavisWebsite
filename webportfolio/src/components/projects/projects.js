import React, { Component } from 'react';
class projects extends Component {
    render() {
        return (
            <React.Fragment>
                <section id="projects">
                    <div className="row work">
                        <div className="three columns header-col">
                            <h1><span>Projects</span></h1>
                        </div>
                        <div className="nine columns main-col">
                            <div className="row item">
                                <div className="twelve columns">
                                    <h3>Software Engineering Project (Team Lead / Github Master)</h3>
                                    <p className="info">San Francisco State University</p>
                                    <p>
                                        Im my Software Engineering course, I was team lead of a mock software engineering team. We used modern day software engineering 
                                        cycles including best practices of Agile/SCRUM process, and user centered deisgned for developing good UX/UI.
                                        I developed team management, sportsmanship, time management and leadership skills throughout our process.
                                        I led a team of 7 to plan, execute, and document a housing website for San Francisco State University Sutdents. Throughout the process, I aquired knowledge in ReactJS, PGAdmin, Nodejs, Express and Postgres.
                                         This project has strengthened my understanding of user experiance and user interface.
                                    </p>
                                </div>
                            </div> {/* item end */}
                            <br></br>
                            <div className="row item">
                                <div className="twelve columns">
                                    <h3>Human computer Interactions (Team Member)</h3>
                                    <p className="info">San Francisco State University</p>
                                    <p>
                                        I worked in a team of 5 to plan, execute and document a meal kit website. Using modern day software engineering cycles 
                                        we created a meal kit website using tools and technologies including Bootstrap, Javascript, HTML, CSS, Justinmind and Github. 
                                        This project has furthered my understanding and appreciation of User Centered Design, User Interface and User Experience. 
                                    </p>
                                </div>
                            </div> {/* item end */}
                        </div> {/* main-col end */}
                    </div> {/* End Project*/}
                </section>
            </React.Fragment>
        );
    }
}
export default projects;