import { useStore } from "@nanostores/react"
import { cart, clearOrder, isConfirmed, type CartItem } from "../stores/cart"

export default function OrderConfirmed() {
  const $isConfirmed = useStore(isConfirmed)
  const $cartItems = useStore(cart)
  const cartItems = Object.values($cartItems) as CartItem[]
  const total = cartItems.reduce(
    (acc, { quantity, price }) => acc + quantity * price,
    0,
  )

  return (
    <dialog open={$isConfirmed}>
      <img src="/icons/order-confirmed.svg" alt="Order confirmed" />
      <h2>Order Confirmed</h2>
      <p>We hope you enjoy your food!</p>
      <div>
        <ul>
          {cartItems.map(({ name, image, quantity, price }: CartItem) => (
            <li key={name}>
              <img src={image} alt={name} />
              <div>
                <p>{name}</p>
                <div>
                  <span>{quantity}</span>
                  <span>{price}</span>
                </div>
              </div>
              <span>{price * quantity}</span>
            </li>
          ))}
        </ul>
        <p>
          Order Total <strong>{total}</strong>
        </p>
      </div>
      <button onClick={clearOrder}>Start New Order</button>
    </dialog>
  )
}
