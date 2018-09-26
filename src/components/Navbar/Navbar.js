import React, {Component} from 'react';


class Navbar extends Component {



render() {
  return(
    <nav className="nav-extended">
  
    <div className="nav-wrapper indigo darken-4 center">
      <a href="#" className="brand-logo">{this.props.title}</a>
    </div>
    <div className="nav-content s12 m3 indigo darken-3 center-align">
      <ul className="tabs tabs-transparent">
        <li className="tab">Score: {this.props.score}</li>
        <li className="tab">Top Score: {this.props.topScore}</li>
        </ul>
    </div>
    <div className="nav-content indigo darken-2">
      <ul className="tabs tabs-transparent">
        <li className="tab">Click on the image to start! Try to get all of them without clicking the same image twice!</li>
        </ul>
        </div>
  
  </nav>
  )
}
}

export default Navbar;