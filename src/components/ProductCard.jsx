import { useState } from "react";
import { useCart } from "../context/CartContext";

function ProductCard({ product }) {
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCart();

  function handleAdd() {
    addToCart(product, quantity);
    setQuantity(1);
  }

  return (
    <div className="product-card">
      <div className="product-image">
        <img src={product.image} alt={product.title} />
      </div>
      <p className="product-title">{product.title}</p>
      <p className="product-price">${product.price.toFixed(2)}</p>
      <div className="product-controls">
        <div className="quantity-control">
          <button onClick={() => setQuantity((q) => Math.max(1, q - 1))}>−</button>
          <span>{quantity}</span>
          <button onClick={() => setQuantity((q) => q + 1)}>+</button>
        </div>
        <button className="add-to-cart-btn" onClick={handleAdd}>
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default ProductCard;