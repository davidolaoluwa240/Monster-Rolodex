// Modules
import React, { Component } from "react";

// Components
import { CardList, SearchBox } from "./components";

// Style
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      filterBy: "",
    };
  }

  async componentDidMount() {
    try {
      const data = await fetch("https://jsonplaceholder.typicode.com/users");
      const users = await data.json();
      this.setState(() => ({ monsters: users }));
    } catch (err) {
      console.log(err);
    }
  }

  onSearchChange(event) {
    this.setState({ filterBy: event.target.value.toLowerCase() });
  }

  render() {
    const { monsters, filterBy } = this.state;
    const { onSearchChange } = this;

    const filteredMonsters = monsters.filter((monster) =>
      monster.name.toLowerCase().includes(filterBy)
    );

    return (
      <div className="App">
        <h1 className="app-title">Monsters Rolodex</h1>

        <SearchBox
          className="monsters-search-box"
          placeholder="search monsters"
          onChangeHandler={onSearchChange.bind(this)}
        />
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;
