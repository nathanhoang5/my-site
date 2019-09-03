import React from "react";
import "./Main.css";
import { CSSTransitionGroup } from "react-transition-group";
import Switch from "@material-ui/core/Switch";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronCircleDown } from "@fortawesome/free-solid-svg-icons";

class Main extends React.Component {
  componentDidMount() {
    console.log("oops");
  }
  render() {
    console.log(this.props.dm);
    return (
      <div className="main-view">
        <CSSTransitionGroup
          transitionName="hey"
          transitionAppear={true}
          transitionAppearTimeout={1000}
          transitionEnter={false}
          transitionLeave={false}
        >
          <p>
            <b>Hey there!</b>
          </p>
        </CSSTransitionGroup>

        <CSSTransitionGroup
          transitionName="maintext"
          transitionAppear={true}
          transitionAppearTimeout={3000}
          transitionEnter={false}
          transitionLeave={false}
        >
          <p>
            My name is Nathan Hoang and I'm a computer science student attending
            University of Texas.
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
          <div className="main-switch">
            <span>
              {this.props.dm ? " Good choice! " : "Switch to dark mode "}
            </span>
            <Switch
              checked={this.props.dm}
              onChange={this.props.toggleDm}
              value="checkedB"
              color="primary"
              inputProps={{ "aria-label": "primary checkbox" }}
            />
          </div>
          <div className="blinking">
            <FontAwesomeIcon
              icon={faChevronCircleDown}
              style={{ textAlign: "center", width: "100%" }}
            />
          </div>
        </CSSTransitionGroup>
      </div>
    );
  }
}

export default Main;
