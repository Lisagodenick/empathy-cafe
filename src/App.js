import { PRODUCTS } from "./components/Products";
import ItemList from "./components/ItemList";
import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: PRODUCTS,
    };
  }
  render() {
    const { drinks } = this.state.products;
    return (
      <div className="app-container">
        <ItemList products={drinks} />
      </div>
    );
  }
}

export default App;
