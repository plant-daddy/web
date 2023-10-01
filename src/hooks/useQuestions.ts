import { createQuery } from '@tanstack/solid-query'

import { prismicClient } from '../services/prismic'

export const useQuestions = () =>
  createQuery(
    () => ['questions'],
    async () => {
      const response = await prismicClient.getAllByType('question')

      return response.map((q) => ({
        id: q.uid,
        question: q.data.question[0].text
      }))
    }
  )
