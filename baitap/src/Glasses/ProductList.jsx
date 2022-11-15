import React from "react";

const ProductList = ({ products, onSelect }) => {
  return (
    <div className="row">
      {products.map((product) => (
        <div className="col-sm-2">
          <div className="card">
            <div key={product.id}>
              <img
                className="card-img-top"
                width="100px"
                src={product.url}
                alt={product.name}
                onClick={() => onSelect(product)}
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
