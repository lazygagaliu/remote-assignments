import React, { Component } from 'react';
import fly from './img/fly.png';
import menu from './img/menu.png';

class Header extends Component {
  state= {
    showMenu:false,
    title: "Best Travel Agency!"
  }

  showMenu = () =>
    this.setState({showMenu: true});
  closeMenu = () =>
    this.setState({showMenu: false});

  showText = () =>
    this.setState({
        title: "Welcome Back!"
     });

  render(){
    let toggleMenu = this.state.showMenu;
    return (
<div>
  <nav className="nav">
    <div className="title">
      <h1>Let's Go</h1>
      <img src={fly} height="70" alt="go around the earth"/>
    </div>
    <div>
      <ul>
        <li>About</li>
        <li>Team</li>
        <li>Package</li>
        <li>Contact</li>
      </ul>
      <img
        className="menu"
        src={menu}
        height="70"
        alt="menu trigger icon"
        style={{marginRight: "50px"}}
        onClick={this.showMenu}
      />
      <div>
        <ul
          className="hidden-menu"
          style={{display: (toggleMenu? 'block' : 'none')}}
        >
          <li style={{display: "flex", alignItems: "center", marginTop: "10px"}}>
            <span>About</span>
            <span
              id="closeButton"
              onClick={this.closeMenu}
            >X</span>
          </li>
          <li>Team</li>
          <li>Package</li>
          <li>Contact</li>
        </ul>
      </div>
    </div>
  </nav>
  <header>
    <h1 className="welcome"
        onClick={this.showText}>
      {this.state.title}
    </h1>
  </header>
</div>);
}
}

export default Header;
