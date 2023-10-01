import { createQuery } from '@tanstack/solid-query'

import { plants } from '../utils/plants'

export const usePlants = () =>
  createQuery(
    () => ['plants'],
    () => plants
  )
