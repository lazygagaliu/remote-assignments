import React, { Component } from 'react';
import Hidden from './Hidden';

class Content extends Component {
  state = {
    show: false,
    divs: [
      {
        text: "Islands in Central America"
      },
      {
        text: "Mysterious North Africa"
      },
      {
        text: "Canada and Alaska"
      },
      {
        text: "South America plus Antarctica"
      }
    ]
  };

  showDiv = () =>
    this.setState({
      show: !this.state.show
    });

  render() {
    let show = this.state.show;
    return (
  <div>
    <div className="content">
      <h2 className="sec-title">Amazing experience you can explore</h2>
      <section className="container">
        <div className="box">Islands in Southeast Asia</div>
        <div className="box">Elegant Europe Trip</div>
        <div className="box">Africa Wildlife</div>
        <div className="box">Ancient Middle East</div>
      </section>
    </div>
    <div>
      <button
        className="show-button"
        onClick={this.showDiv}
      >Call to Action</button>
    </div>
    <div className="content">
      <section
        className="container hidden-content"
        style={{ display: (show? 'flex' : 'none')}}
      >
      {this.state.divs.map(div =>
        <Hidden
          text={div.text}
        />)}
      </section>
    </div>
  </div>
    );
  }
}

export default Content;
