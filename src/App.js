// Modules
import React from "react";

// Hooks
import { useState, useEffect } from "react";

// Components
import { CardList, SearchBox } from "./components";

// Style
import "./App.css";

const App = () => {
  const [filterBy, setFilterBy] = useState("");
  const [monsters, setMonsters] = useState([]);
  const [filteredMonsters, setFilteredMonsters] = useState(monsters);

  useEffect(() => {
    const getMonters = async () => {
      try {
        const data = await fetch("https://jsonplaceholder.typicode.com/users");
        const users = await data.json();
        setMonsters(users);
      } catch (err) {
        console.error(err);
      }
    };
    getMonters();
  }, []);

  useEffect(() => {
    setFilteredMonsters(
      monsters.filter((monster) =>
        monster.name.toLowerCase().includes(filterBy)
      )
    );
  }, [filterBy, monsters]);

  const onSearchChange = (event) => {
    setFilterBy(event.target.value.toLowerCase());
  };

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
};

export default App;
