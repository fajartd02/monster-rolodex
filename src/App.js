import { Component } from "react";

import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor() {
    super();

    this.state = {
      name: { firstName: "Andre", lastName: "Simanjuntak" },
      company: "ZTM",
    };
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Hi {this.state.name.firstName} {this.state.name.lastName}, I work at{" "}
            {this.state.company}
          </p>
          <button
            onClick={() => {
              this.setState({
                name: { firstName: "Xiao", lastName: "Vushinghau" },
                company: "Google",
              });
            }}
          >
            Change Name and Company
          </button>
        </header>
      </div>
    );
  }
}

export default App;
