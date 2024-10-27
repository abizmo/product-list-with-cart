import type { ImgHTMLAttributes, PropsWithChildren } from "react"
import "@/styles/product-picture.css"
import { useStore } from "@nanostores/react"
import { cart } from "@/stores/cart"

type ProductPictureProps = {
  name: string
}

function ProductPicture({
  name,
  className,
  children,
  ...rest
}: PropsWithChildren<
  ImgHTMLAttributes<HTMLPictureElement> & ProductPictureProps
>) {
  const $cartItems = useStore(cart)
  const itemSelected = !!$cartItems[name]

  if (itemSelected)
    return (
      <picture className={`${className} product-selected`} {...rest}>
        {children}
      </picture>
    )

  return (
    <picture className={className} {...rest}>
      {children}
    </picture>
  )
}

export default ProductPicture
