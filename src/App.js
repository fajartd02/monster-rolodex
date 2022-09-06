import { Component } from "react";

import "./App.css";

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [
        { name: "Andrea", id: "azx123" },
        { name: "John", id: "azx1234" },
        { name: "Alvian", id: "azx1235" },
      ],
    };
  }

  render() {
    return this.state.monsters.map((monster) => {
      return (
        <div key={monster.id}>
          <h1>{monster.name}</h1>
        </div>
      );
    });
  }
}

export default App;
