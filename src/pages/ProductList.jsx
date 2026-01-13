import React from "react";
import ProductCard from "../components/ProductCard/ProductCard";
import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "../store/cartSlice";

const ProductList = () => {
  const products = useSelector((state) => state.products.items);
  const dispatch = useDispatch();

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };

  return (
    <div className="container my-4">
      <h2 className="mb-4">All Products</h2>
      <div className="row g-4">
        {products.map((product) => (
          <div className="col-md-3" key={product.id}>
            <ProductCard product={product} addToCart={handleAddToCart} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
