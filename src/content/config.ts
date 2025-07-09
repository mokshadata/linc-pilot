// Import utilities from `astro:content`
import { z, defineCollection } from "astro:content";
// Define a `type` and `schema` for each collection
// const postsCollection = defineCollection({
//   type: "content",
//   schema: z.object({
//     title: z.string(),
//     pubDate: z.date(),
//     description: z.string(),
//     author: z.string(),
//     image: z.object({
//       url: z.string(),
//       alt: z.string(),
//     }),
//     tags: z.array(z.string()),
//   }),
// });

const stepsCollection = defineCollection({
  type: "content",
  schema: ({ image }) => z.object({
    title: z.string(),
    order: z.number(),
    cover: image(),
    coverAlt: z.string(),
  }),
});

const faqsCollection = defineCollection({
  type: "content",
  schema: () => z.object({
    title: z.string(),
    order: z.number(),
  }),
})

const brandingCollection = defineCollection({
  type: "content",
  schema: () => z.object({
    title: z.string(),
    order: z.number(),
  }),
})

// Export a single `collections` object to register your collection(s)
export const collections = {
  // posts: postsCollection,
  steps: stepsCollection,
  faqs: faqsCollection,
  branding: brandingCollection,
};
