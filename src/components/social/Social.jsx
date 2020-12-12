import React, { Component } from "react";
import PROFILES from "../../data/profile";

class Social extends Component {
  state = {};
  render() {
    return (
      <div>
        {PROFILES.map(profile => (
          <span key={profile.url}>
            <a href={profile.url}>
              <i className={profile.iconClass}></i>
            </a>
          </span>
        ))}
      </div>
    );
  }
}

export default Social;
