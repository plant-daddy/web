import { asHTML } from '@prismicio/client'
import { createQuery } from '@tanstack/solid-query'

import { prismicClient } from '../services/prismic'

export const useQuestion = (id: string) =>
  createQuery(
    () => ['question'],
    async () => {
      const response = await prismicClient.getByUID('question', id)

      console.log(response)

      return {
        id: response.uid,
        question: response.data.question[0].text,
        answer: asHTML(response.data.answer) ?? '',
        updatedAt: new Date(response.last_publication_date).toLocaleDateString('en-US', {
          day: '2-digit',
          month: 'long',
          year: 'numeric'
        })
      }
    }
  )
