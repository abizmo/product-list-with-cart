import { removeFromCart, type CartItem as CartItemType } from "@/stores/cart"
import formatPrice from "@/utils/format-price"

export default function CartItem({ name, quantity, price }: CartItemType) {
  return (
    <div className="item__container">
      <div>
        <p className="item__name">{name}</p>
        <div className="item__info-container">
          <span className="item__quantity">{quantity}x</span>
          <span className="item__unit-price">@ {formatPrice(price)}</span>
          <span className="item__price">{formatPrice(price * quantity)}</span>
        </div>
      </div>
      <button className="remove-button" onClick={() => removeFromCart(name)}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="10"
          height="10"
          viewBox="0 0 10 10"
        >
          <path
            fill="currentColor"
            d="M8.375 9.375 5 6 1.625 9.375l-1-1L4 5 .625 1.625l1-1L5 4 8.375.625l1 1L6 5l3.375 3.375-1 1Z"
          />
        </svg>
        <span className="visually-hidden">remove {name} from cart</span>
      </button>
    </div>
  )
}
