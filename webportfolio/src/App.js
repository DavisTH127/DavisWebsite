import React, { Component } from 'react';
import Header from './components/header/header';
import About from './components/about/about';
import Resume from './components/resume/resume';
import Footer from './components/footer/footer';
import Projects from './components/projects/projects';
class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <About />
        <Resume />
        <Projects />
        <Footer />
      </div>
    );
  }
}
export default App;
