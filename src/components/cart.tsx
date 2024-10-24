import { useStore } from "@nanostores/react"
import CartItem from "@/components/cart-item"
import {
  cart,
  confirmOrder,
  type CartItem as CartItemType,
} from "@/stores/cart"
import "@/styles/cart.css"
import formatPrice from "@/utils/format-price"

export default function Cart() {
  const $cartItems = useStore(cart)
  const cartItems = Object.values($cartItems) as CartItemType[]
  const isEmpty = cartItems.length === 0
  const items = cartItems.reduce((acc, { quantity }) => acc + quantity, 0)
  const total = cartItems.reduce(
    (acc, { quantity, price }) => acc + quantity * price,
    0,
  )

  return (
    <div className="cart--wrapper">
      <h2 className="cart-title">Your Cart ({items})</h2>
      {isEmpty ? (
        <div className="empty-cart | text-center">
          <img
            className="empty-image"
            src="/illustrations/empty-cart.svg"
            alt="empty cart"
          />
          <p>Your added items will appear here</p>
        </div>
      ) : (
        <>
          <ul className="cart-items">
            {cartItems.map((item: CartItemType) => (
              <li key={item.name}>
                <CartItem {...item} />
              </li>
            ))}
          </ul>
          <p className="total">
            Order Total <strong>{formatPrice(total)}</strong>
          </p>
          <div className="info">
            <img src="/icons/carbon-neutral.svg" alt="carbon neutral" />
            <p>
              This is a <b>carbon-neutral</b> delivery
            </p>
          </div>
          <button className="button" onClick={confirmOrder}>
            Confirm Order
          </button>
        </>
      )}
    </div>
  )
}
