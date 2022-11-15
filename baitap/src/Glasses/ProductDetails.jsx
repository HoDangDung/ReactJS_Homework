import React from "react";

const ProductDetails = ({ product }) => {
  if (!product) {
    return null;
  }
  return (
    <div class="card">
      <img src={product.url} alt={product.name} />
      <div className="card-body">
        <h4 className="card-title">{product.name}</h4>
        <p className="card-text">{product.desc}</p>
      </div>
    </div>
  );
};

export default ProductDetails;
