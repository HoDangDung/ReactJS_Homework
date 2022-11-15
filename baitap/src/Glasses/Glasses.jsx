import React, { Component } from "react";
import data from "./dataGlasses.json";
import ProductDetails from "./ProductDetails";
import ProductList from "./ProductList";

export default class Glasses extends Component {
  constructor(product) {
    super(product);

    this.state = {
      selectProduct: null,
    };
  }

  handleSelect = (product) => {
    console.log(product);
    this.setState({ selectProduct: product });
  };

  render() {
    return (
      <div>
        <h1 className="text-center">Try Glasses App Online</h1>
        <img src="../../public/model.jpg" alt="" />
        <ProductDetails product={this.state.selectProduct} />
        <ProductList products={data} onSelect={this.handleSelect} />
      </div>
    );
  }
}
