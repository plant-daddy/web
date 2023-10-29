interface PaginationItemProps {
  number: number
  isCurrent?: boolean
  onPageChange: (page: number) => void
}

export const PaginationItem = ({
  isCurrent = false,
  number,
  onPageChange
}: PaginationItemProps) => {
  if (isCurrent)
    return <button class=" bg-green-300 rounded-3xl text-gray-800 p-2">{number}</button>

  return (
    <button
      class="hover:bg-gray-300 hover:text-gray-800 rounded-3xl p-2"
      onClick={() => {
        onPageChange(number)
      }}>
      {number}
    </button>
  )
}
