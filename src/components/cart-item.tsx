import { removeFromCart, type CartItem as CartItemType } from "@/stores/cart"

export default function CartItem({ name, quantity, price }: CartItemType) {
  return (
    <div>
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
        <span className="visually-hidden">remove {name} from cart</span>
      </button>
    </div>
  )
}
