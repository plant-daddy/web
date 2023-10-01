import { createClient } from '@prismicio/client'

export const prismicClient = createClient('plant-daddy', {
  accessToken: import.meta.env.VITE_PRISMIC_ACCESS_TOKEN
})
