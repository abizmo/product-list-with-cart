import { defineCollection, z } from "astro:content"

const productsCollection = defineCollection({
  type: "data",
  schema: z.array(
    z.object({
      category: z.string(),
      name: z.string(),
      price: z.number(),
      image: z.object({
        desktop: z.string(),
        mobile: z.string(),
        tablet: z.string(),
        thumbnail: z.string(),
      }),
    }),
  ),
})

export const collections = {
  products: productsCollection,
}
