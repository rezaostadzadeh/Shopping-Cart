import { useState, useEffect } from "react";
import ProductCard from "../components/ProductCard";
import "../styles/ProductCard.css";

function Shop() {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setIsLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setIsLoading(false);
      });
  }, []);

  return (
    <div className="page shop-page">
      <h1>Shop</h1>
      <p>Browse our full collection.</p>

      {isLoading && <p>Loading products...</p>}
      {error && <p>Something went wrong: {error}</p>}

      <div className="product-grid">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default Shop;