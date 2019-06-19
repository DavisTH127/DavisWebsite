import React, { Component } from 'react';
export default class Footer extends Component {
  render() {
    return (
      <React.Fragment>
         <footer>
        <div className="row">
          <div className="twelve columns">
            <ul className="copyright">
              <li>© Copyright Davis Hoang</li>
              <li>Design by <a title="Styleshout" href="images/profilepic.jpg">Davis Hoang</a></li>   
            </ul>
          </div>
          <div id="go-top"><a className="smoothscroll" title="Back to Top" href="#home"><i className="icon-up-open" /></a></div>
        </div>
      </footer> {/* Footer End*/}
      </React.Fragment>
      );
    }
  }