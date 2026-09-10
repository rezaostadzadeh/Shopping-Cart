import { useCart } from "../context/CartContext";
import CartItem from "../components/CartItem";
import "../styles/Cart.css";
import "../styles/ProductCard.css";

function Cart() {
  const { cartItems } = useCart();

  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="page cart-page">
      <h1>Your Cart</h1>

      {cartItems.length === 0 ? (
        <p className="cart-empty">Your cart is empty. Go add something nice!</p>
      ) : (
        <>
          <div className="cart-list">
            {cartItems.map((item) => (
              <CartItem key={item.id} item={item} />
            ))}
          </div>

          <div className="cart-summary">
            <span>Total</span>
            <span className="cart-summary-total">${total.toFixed(2)}</span>
          </div>
        </>
      )}
    </div>
  );
}

export default Cart;