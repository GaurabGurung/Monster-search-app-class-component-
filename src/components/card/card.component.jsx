import { Component } from "react";

import "./card.styles.css";

class Card extends Component {
  render() {
    const { name, id, email } = this.props.monster;
    return (
      <div className="card-container">
        <img
          key={id}
          alt={`monster ${name}`}
          src={`https://robohash.org/${name}?set=set2&size=180x180`}
        />
        <h2> {name} </h2>
        <p> {email} </p>
      </div>
    );
  }
}

export default Card;
