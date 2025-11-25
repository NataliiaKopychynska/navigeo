import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'

interface PaginationProps {
  page: number
  setPage: (page: number) => void
  totalPages: number
}

export default function Pagination({
  page,
  setPage,
  totalPages,
}: PaginationProps) {
  const handlePrev = () => {
    if (page > 1) setPage(page - 1)
  }

  const handleNext = () => {
    if (page < totalPages) setPage(page + 1)
  }

  return (
    <div className="flex sticky bottom-[20px]  justify-start items-center gap-3 mt-4 py-3">
      <button
        onClick={handlePrev}
        disabled={page === 1}
        className="p-2 border border-gray-300  rounded-lg hover:bg-gray-100 disabled:opacity-40"
      >
        <FaChevronLeft className="fill-gray-400" />
      </button>

      <span className="text-gray-700 text-sm">
        Strona <strong>{page}</strong> z {totalPages}
      </span>

      <button
        onClick={handleNext}
        disabled={page === totalPages}
        className="p-2 border border-gray-300  rounded-lg hover:bg-gray-100 disabled:opacity-40"
      >
        <FaChevronRight className="fill-gray-400" />
      </button>
    </div>
  )
}
