import { useStore } from "@nanostores/react"
import { cart, clearOrder, isConfirmed, type CartItem } from "../stores/cart"
import "@/styles/order-confirmed.css"
import formatPrice from "@/utils/format-price"

export default function OrderConfirmed() {
  const $isConfirmed = useStore(isConfirmed)
  const $cartItems = useStore(cart)
  const cartItems = Object.values($cartItems) as CartItem[]
  const total = cartItems.reduce(
    (acc, { quantity, price }) => acc + quantity * price,
    0,
  )

  if (!$isConfirmed) return null
  return (
    <div className="confirmation-container">
      <dialog className="confirmation" open={$isConfirmed}>
        <img
          className="confirmation__icon"
          src="/icons/order-confirmed.svg"
          alt="Order confirmed"
        />
        <h2 className="confirmation__title">Order Confirmed</h2>
        <p className="confirmation__text">We hope you enjoy your food!</p>
        <div className="order">
          <ul className="order__list">
            {cartItems.map(({ name, image, quantity, price }: CartItem) => (
              <li className="order__item" key={name}>
                <img src={image} alt={name} />
                <div className="order__item-info">
                  <p className="order__item-name">{name}</p>
                  <div>
                    <span className="order__item-qty">{quantity}x</span>
                    <span className="order__item-price">
                      @ {formatPrice(price)}
                    </span>
                  </div>
                </div>
                <span className="order__item-total">
                  {formatPrice(price * quantity)}
                </span>
              </li>
            ))}
          </ul>
          <p className="order__total">
            Order Total <strong>{formatPrice(total)}</strong>
          </p>
        </div>
        <button className="button" onClick={clearOrder}>
          Start New Order
        </button>
      </dialog>
    </div>
  )
}
