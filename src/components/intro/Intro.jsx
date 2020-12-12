import React, { Component } from "react";

class Intro extends Component {
  constructor() {
    super();
    this.state = {
      displayBio: true,
      btnText: "Show More",
      btnClass: "btn btn-primary btn-sm"
    };
  }

  //Functions
  handleBioVisibility = () => {
    console.log("btn clicked");
    this.setState({
      displayBio: !this.state.displayBio,
      btnText: !this.state.displayBio ? "Show Less" : "Show More",
      btnClass: !this.state.displayBio ? "btn btn-danger" : "btn btn-success"
    });
  };

  render() {
    let bio = <div>Hello My Name is Yadhap</div>;
    return (
      <div>
        {this.state.displayBio ? bio : null}
        <button
          onClick={this.handleBioVisibility}
          className={this.state.btnClass}
        >
          {this.state.btnText}
        </button>
      </div>
    );
  }
}

export default Intro;
