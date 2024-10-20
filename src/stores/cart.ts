import { map } from "nanostores"

export type CartItem = {
  quantity: number
  price: number
  name: string
  image: string
}

export const cart = map<Record<string, CartItem | undefined>>({})

export type AddToCartProps = Pick<CartItem, "name" | "image" | "price">

export function addToCart(item: AddToCartProps) {
  cart.setKey(item.name, {
    ...item,
    quantity: (cart.get()[item.name]?.quantity ?? 0) + 1,
  })
}

export function removeFromCart(itemName: string) {
  cart.setKey(itemName, undefined)
}

export function removeOneFromCart(itemName: string) {
  const item = cart.get()[itemName]

  if (!!item) {
    if (item.quantity === 1) {
      cart.setKey(item.name, undefined)
    } else {
      cart.setKey(item.name, {
        ...item,
        quantity: item.quantity - 1,
      })
    }
  }
}
