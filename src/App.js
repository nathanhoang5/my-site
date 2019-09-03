import React from "react";
import "./App.css";
import FrontPage from "./screens/FrontPage";

// import Pdf from "./resume.pdf";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      darkMode: false
    };
  }

  toggleDm = () => {
    this.setState({ darkMode: !this.state.darkMode });
  };

  render() {
    let curClass = this.state.darkMode ? "App-dark" : "App-light";
    return (
      <div className={curClass}>
        <FrontPage dm={this.state.darkMode} toggleDm={this.toggleDm} />
      </div>
    );
  }
}

export default App;
