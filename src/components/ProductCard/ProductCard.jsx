// src/components/ProductCard/ProductCard.jsx
import React from "react";

const ProductCard = ({ product, addToCart }) => {
  return (
    <div className="card h-100">
      <img
        src={product.image} // ✅ already imported in productSlice
        className="card-img-top"
        alt={product.name}
        style={{ height: "200px", objectFit: "contain" }}
      />
      <div className="card-body">
        <h5 className="card-title">{product.name}</h5>
        <p className="card-text">{product.description}</p>
        <h6 className="text-primary">${product.price}</h6>
        <button className="btn btn-primary mt-2" onClick={() => addToCart(product)}>
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
