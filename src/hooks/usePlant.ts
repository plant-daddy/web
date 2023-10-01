import { createQuery } from '@tanstack/solid-query'

import { plants } from '../utils/plants'

export const usePlant = (id: string) =>
  createQuery(
    () => ['plant'],
    () => plants.find((p) => p.id === id)
  )
