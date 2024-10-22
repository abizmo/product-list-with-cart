import { useStore } from "@nanostores/react"
import CartItem from "@/components/cart-item"
import {
  cart,
  confirmOrder,
  type CartItem as CartItemType,
} from "@/stores/cart"

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
    <>
      <h2>Your Cart ({items})</h2>
      {isEmpty ? (
        <div>
          <img src="/illustrations/empty-cart.svg" alt="empty cart" />
          <p>Your added items will appear here</p>
        </div>
      ) : (
        <>
          <ul>
            {cartItems.map((item: CartItemType) => (
              <li key={item.name}>
                <CartItem {...item} />
              </li>
            ))}
          </ul>
          <p>
            Order Total <strong>{total}</strong>
          </p>
          <p>
            <img src="/icons/carbon-neutral.svg" alt="carbon neutral" />
            This is a <b>carbon-neutral</b> delivery
          </p>
          <button onClick={confirmOrder}>Confirm Order</button>
        </>
      )}
    </>
  )
}
