import { useStore } from "@nanostores/react"
import { cart, removeFromCart, type CartItem } from "../stores/cart"

export default function Cart() {
  const $cartItems = useStore(cart)
  const cartItems = Object.values($cartItems) as CartItem[]
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
            {cartItems.map(({ name, quantity, price }: CartItem) => (
              <li key={name}>
                <div>
                  <p>{name}</p>
                  <div>
                    <span>{quantity}</span>
                    <span>{price}</span>
                    <span>{price * quantity}</span>
                  </div>
                </div>
                <button onClick={() => removeFromCart(name)}>
                  <img src="/icons/remove-item.svg" alt="" />
                  <span className="visually-hidden">
                    remove {name} from cart
                  </span>
                </button>
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
          <button>Confirm Order</button>
        </>
      )}
    </>
  )
}
