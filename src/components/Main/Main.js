import React from "react";
import "./Main.css";
import { CSSTransitionGroup } from "react-transition-group";

class Main extends React.Component {
  render() {
    return (
      <div className="main-view">
        <div style={{ width: "100%" }}>
          <CSSTransitionGroup
            transitionName="example"
            transitionAppear={true}
            transitionAppearTimeout={1000}
            transitionEnter={false}
            transitionLeave={false}
          >
            <p>
              <b>Hey there!</b>
            </p>
          </CSSTransitionGroup>
        </div>
        <div>
          <CSSTransitionGroup
            transitionName="example"
            transitionAppear={true}
            transitionAppearTimeout={1000}
            transitionEnter={false}
            transitionLeave={false}
          >
            <p>
              My name is Nathan Hoang and I'm a computer science student
              attending University of Texas.
            </p>
            <span role="img" aria-label="bridge">
              🌁
            </span>
            <span role="img" aria-label="man behind a computer screen">
              👨&zwj;💻
            </span>
            <span role="img" aria-label="hookem">
              🤘🏻
            </span>

            <span role="img" aria-label="hookem">
              ⚽️
            </span>
          </CSSTransitionGroup>
        </div>
      </div>
    );
  }
}

export default Main;
