import { For, Show } from 'solid-js'

import { PaginationItem } from './Item'

interface PaginationProps {
  totalCountOfRegisters: number
  registersPerPage: number
  currentPage: number
  onPageChange: (page: number) => void
}

const siblingsCount = 1

const generatePagesArray = (from: number, to: number) => {
  return [...new Array(to - from)]
    .map((_, index) => {
      return from + index + 1
    })
    .filter((page) => page > 0)
}

export const Pagination = (props: PaginationProps) => {
  const lastPage = Math.floor(props.totalCountOfRegisters / props.registersPerPage)

  const previousPages =
    props.currentPage > 1
      ? generatePagesArray(props.currentPage - 1 - siblingsCount, props.currentPage - 1)
      : []

  const nextPages =
    props.currentPage < lastPage
      ? generatePagesArray(props.currentPage, Math.min(props.currentPage + siblingsCount, lastPage))
      : []

  return (
    <div class="flex flex-row gap-2 m-2 items-center">
      {props.currentPage > 1 + siblingsCount && (
        <>
          <PaginationItem onPageChange={props.onPageChange} number={1} />
          {props.currentPage > 2 + siblingsCount && (
            <p class="text-gray-300 w-8 text-center">...</p>
          )}
        </>
      )}

      <Show when={nextPages.length > 0}>
        <For each={previousPages}>
          {(item) => <PaginationItem onPageChange={props.onPageChange} number={item} />}
        </For>
      </Show>
      <PaginationItem onPageChange={props.onPageChange} number={props.currentPage} isCurrent />

      <Show when={props.currentPage + siblingsCount < lastPage}>
        <Show when={props.currentPage + 1 + siblingsCount < lastPage}>
          <p class="text-gray-300 w-8 text-center">...</p>
        </Show>
        <PaginationItem onPageChange={props.onPageChange} number={lastPage} />
      </Show>
    </div>
  )
}
