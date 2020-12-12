import React, { Component } from "react";

import Project from "../Project/Project";
import PROJECTS from "../../data/project";

class Projects extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div className="album py-5 bg-light">
        <div className="container">
          <h2> Highlighted Projects</h2>
          <div className="row">
            {PROJECTS.map(project => {
              return <Project key={project.id} project={project} />;
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default Projects;
