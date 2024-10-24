import { useStore } from "@nanostores/react"
import {
  addToCart,
  cart,
  removeOneFromCart,
  type AddToCartProps,
} from "@/stores/cart"
import "@/styles/add-button.css"

export default function AddButton({ name, image, price }: AddToCartProps) {
  const $cartItems = useStore(cart)
  const itemInCart = $cartItems[name]

  if (!itemInCart) {
    return (
      <button
        className="add-button"
        onClick={() => addToCart({ name, image, price })}
      >
        <img src="/icons/add-to-cart.svg" alt="" />
        Add to Cart
      </button>
    )
  }
  return (
    <div className="buttons-container">
      <button onClick={() => removeOneFromCart(itemInCart.name)}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="8"
          height="2"
          viewBox="0 0 10 2"
        >
          <path fill="currentColor" d="M0 .375h10v1.25H0V.375Z" />
        </svg>
        <span className="visually-hidden">decrement {itemInCart.name}</span>
      </button>
      {itemInCart.quantity}
      <button onClick={() => addToCart({ name, image, price })}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="8"
          height="8"
          viewBox="0 0 10 10"
        >
          <path
            fill="currentColor"
            d="M10 4.375H5.625V0h-1.25v4.375H0v1.25h4.375V10h1.25V5.625H10v-1.25Z"
          ></path>
        </svg>
        <span className="visually-hidden">increment {itemInCart.name}</span>
      </button>
    </div>
  )
}
