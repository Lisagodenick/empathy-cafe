import React from "react";
import { Component } from "react";

class ItemList extends Component {
  render() {
    return (
      <div>
        {this.props.products.map((drink) => {
          return (
            <div key={drink.name}>
              <ul>
                <li>{drink.name}</li>
              </ul>
            </div>
          );
        })}
        ;
      </div>
    );
  }
}

export default ItemList;
