import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Reward from "react-rewards";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.clickMe = this.clickMe.bind(this);
  }
  clickMe() {
    this.reward.rewardMe();
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Reward
            ref={ref => {
              this.reward = ref;
            }}
            type="confetti"
          >
            <p
              style={{ cursor: "pointer", textDecoration: "underline" }}
              className="App-link"
              onClick={() => this.clickMe()}
            >
              Confetti!
            </p>
          </Reward>
        </header>
      </div>
    );
  }
}

export default App;
