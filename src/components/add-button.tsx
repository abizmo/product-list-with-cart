import { useStore } from "@nanostores/react"
import {
  addToCart,
  cart,
  removeOneFromCart,
  type AddToCartProps,
} from "../stores/cart"

export default function AddButton({ name, image, price }: AddToCartProps) {
  const $cartItems = useStore(cart)
  const itemInCart = $cartItems[name]

  if (!itemInCart) {
    return (
      <button onClick={() => addToCart({ name, image, price })}>
        <img src="/icons/add-to-cart.svg" alt="" />
        Add to Cart
      </button>
    )
  }
  return (
    <div>
      <button onClick={() => removeOneFromCart(itemInCart.name)}>
        <img src="/icons/decrement-quantity.svg" alt="" />
        <span className="visually-hidden">decrement {itemInCart.name}</span>
      </button>
      {itemInCart.quantity}
      <button onClick={() => addToCart({ name, image, price })}>
        <img src="/icons/increment-quantity.svg" alt="" />
        <span className="visually-hidden">increment {itemInCart.name}</span>
      </button>
    </div>
  )
}
