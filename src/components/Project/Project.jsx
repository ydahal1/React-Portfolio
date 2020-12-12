import React, { Component } from "react";
import "./project.css";

class Project extends Component {
  state = {};
  render() {
    return (
      <div className="component col-md-4">
        <div className="card mb-4 shadow-sm">
          <div> Title : {this.props.project.title}</div>
          <div>
            <img
              src={this.props.project.image}
              alt={this.props.project.description}
            />
          </div>
          <div> Title : {this.props.project.description}</div>
          <div className="d-flex justify-content-between align-items-center">
            <div className="btn-group">
              <a
                type="button"
                className="btn btn-sm btn-outline-secondary"
                href={this.props.project.link}
              >
                Live
              </a>
              <a
                type="button"
                className="btn btn-sm btn-outline-secondary"
                href={this.props.project.link}
              >
                Code
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Project;
