// Modules
import React, { Component } from "react";

// Components
import { Card } from "../";

// Style
import "./card-list.styles.css";

export class CardList extends Component {
  render() {
    const { monsters } = this.props;

    return (
      <div className="card-list">
        {monsters.map(({ id, name, email }) => (
          <Card key={id} id={id} name={name} email={email} />
        ))}
      </div>
    );
  }
}

export default CardList;
