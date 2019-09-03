import React from "react";
import Main from "../../components/Main";
import logo from "../../logo.svg";
import Container from "@material-ui/core/Container";

import "./FrontPage.css";

class FrontPage extends React.Component {
  render() {
    return (
      <div className="fp-main">
        <Container>
          <Main />
          <img src={logo} alt="logo" />
        </Container>
        <span role="img" aria-label="bridge">
          🌁
        </span>
        {/* <a href={Pdf} rel="noopener noreferrer" target="_blank">
          <h1>Download Pdf</h1>
        </a> */}
      </div>
    );
  }
}

export default FrontPage;
