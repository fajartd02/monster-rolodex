import { Component } from "react";

import "./App.css";

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [{ name: "Andrea" }, { name: "John" }, { name: "Alvian" }],
    };
  }

  render() {
    return this.state.monsters.map((monster) => {
      return <h1>{monster.name}</h1>;
    });
  }
}

export default App;
