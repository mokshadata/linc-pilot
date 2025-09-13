// Import utilities from `astro:content`
import { z, defineCollection } from "astro:content";
import { file, glob } from "astro/loaders";
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
    show: z.boolean(),
  }),
})

const photoGridCollection = defineCollection({
  // loader: file('src/content/grid/welcome.json'),
  // type: "content",
  // loader: glob({ pattern: "*.yml", base: "./src/content/grid"}),
  schema: () => z.object({
    image_filename: z.string(),
    alt: z.string(),
    column: z.number(),
    order: z.number(),
  })
})

const partsCollection = defineCollection({
  type: "content",
  schema: () => z.object({
    headline: z.string(),
    cover_image: z.string().nullable().optional(),
    cover_alt: z.string().nullable().optional(),
    call_to_action: z.string().nullable().optional(),
    cover_first: z.boolean().nullable().optional(),

    location: z.string().nullable().optional(),
    url: z.string().nullable().optional(),
    cms_order: z.number().nullable().optional(),
  })
})

const menusCollection = defineCollection({
  loader: glob({ pattern: "**/*.yml", base: "./src/content/menus"}),
  schema: () => z.object({
    items: z.array(z.object({
      item_name: z.string(),
      path: z.string(),
    }))
  })
})

// Export a single `collections` object to register your collection(s)
export const collections = {
  // posts: postsCollection,
  steps: stepsCollection,
  faqs: faqsCollection,
  branding: brandingCollection,
  grid: photoGridCollection,
  parts: partsCollection,
  menus: menusCollection,
};
