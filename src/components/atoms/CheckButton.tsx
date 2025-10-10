import React from 'react'

type Props = {
  inputLabel: string
  onChange: () => void
  checked: boolean
}

function CheckButton({ inputLabel, onChange, checked }: Props) {
  return (
    <label className="flex items-center gap-2 cursor-pointer select-none">
      {/* прихований реальний чекбокс */}
      <input
        type="checkbox"
        checked={checked}
        onChange={onChange}
        className="hidden"
      />

      <span
        className={`w-5 h-5 border-2 rounded flex items-center justify-center transition-colors ${
          checked
            ? 'bg-orange-400 border-orange-400'
            : 'border-gray-400 bg-white'
        }`}
      >
        {checked && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-3 h-3 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={3}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M5 13l4 4L19 7"
            />
          </svg>
        )}
      </span>

      <span className="text-gray-800 text-sm">{inputLabel}</span>
    </label>
  )
}

export default CheckButton
