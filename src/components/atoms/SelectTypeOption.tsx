// import React from 'react'
// import { IoIosArrowDown } from 'react-icons/io'
// import { IoIosArrowUp } from 'react-icons/io'
// import { LuPenLine } from 'react-icons/lu'
// import { LuListTodo } from 'react-icons/lu'
// import { LiaMapSolid } from 'react-icons/lia'

// function SelectTypeOption({ setFiltersFunction }) {
//   return (
//     <div className="absolute flex flex-col gap-[8px] top-[90px] bg-gray-100 rounded-b-2xl shadow-2xs p-[8px] min-w-[120px]">
//       <button
//         type="button"
//         onClick={() => setFiltersFunction('typeOrder', 'Tyczenie')}
//         className="flex items-center gap-[8px] bg-blue-100 rounded-2xl p-[4px] pl-[12px] w-full text-left"
//       >
//         <LuPenLine className="stroke-blue-400 w-[16px] h-[16px] mt-[2px]" />
//         <span className="text-blue-400 text-sm font-medium">Tyczenie</span>
//       </button>
//       <button
//         type="button"
//         onClick={() =>
//           setFiltersFunction('typeOrder', 'Mapa do celów projektowych')
//         }
//         className="flex items-center gap-[8px] bg-orange-100 rounded-2xl p-[4px] pl-[12px] w-full text-left"
//       >
//         <LiaMapSolid className="fill-orange-400 w-[16px] h-[16px] mt-[2px]" />
//         <span className="text-orange-400 text-sm font-medium">
//           Mapa do celów projektowych
//         </span>
//       </button>
//       <button
//         type="button"
//         onClick={() => setFiltersFunction('typeOrder', 'Inwentaryzacja')}
//         className="flex items-center gap-[8px] bg-purple-100 rounded-2xl p-[4px] pl-[12px] w-full text-left"
//       >
//         <LuListTodo className="stroke-purple-400 w-[16px] h-[16px] mt-[2px]" />
//         <span className="text-purple-400 text-sm font-medium">
//           Inwentaryzacja
//         </span>
//       </button>
//     </div>
//   )
// }

// export default SelectTypeOption

// import { FaCheckCircle } from 'react-icons/fa'
// import { FaCircleExclamation } from 'react-icons/fa6'

// function SelectTypeOption({ setFiltersFunction }) {
//   return (
//     <div className="absolute flex flex-col gap-[8px] top-[90px] bg-gray-100 rounded-b-2xl shadow-2xs p-[8px] min-w-[120px]">
//       <div
//         onClick={() =>
//           setFiltersFunction('status', 'Zgłoszenie pracy geodezyjnej')
//         }
//         className="flex flex-row gap-[8px] bg-blue-100 rounded-2xl p-[4px] pl-[12px]"
//       >
//         <FaCheckCircle className="fill-gray-600 w-[16px] h-[16px] mt-[2px]" />
//         <span className=" text-gray-600 text-sm font-medium">
//           Zgłoszenie pracy geodezyjnej
//         </span>
//       </div>
//       <div
//         onClick={() => setFiltersFunction('status', 'Rozpoczęto pomiar')}
//         className="flex flex-row gap-[8px] bg-green-100 rounded-2xl p-[4px] pl-[12px] pr-[12px] "
//       >
//         <FaCheckCircle className="fill-gray-600 w-[16px] h-[16px] mt-[2px]" />
//         <span className=" text-gray-600 text-sm font-medium">
//           Rozpoczęto pomiar
//         </span>
//       </div>
//       <div
//         onClick={() => setFiltersFunction('status', 'Dokonano pomiaru')}
//         className="flex flex-row gap-[8px] bg-purple-100 rounded-2xl p-[4px] pl-[12px]"
//       >
//         <FaCheckCircle className="fill-gray-600 w-[16px] h-[16px] mt-[2px]" />
//         <span className=" text-gray-600 text-sm font-medium">
//           Dokonano pomiaru
//         </span>
//       </div>
//       <div
//         onClick={() => setFiltersFunction('status', 'Gotowe opracowanie')}
//         className="flex flex-row gap-[8px] bg-yellow-100 rounded-2xl p-[4px] pl-[12px]"
//       >
//         <FaCheckCircle className="fill-gray-600 w-[16px] h-[16px] mt-[2px]" />
//         <span className=" text-gray-600 text-sm font-medium">
//           Gotowe opracowanie
//         </span>
//       </div>
//       <div
//         onClick={() => setFiltersFunction('status', 'Opracowanie złożone')}
//         className="flex flex-row gap-[8px] bg-orange-100 rounded-2xl p-[4px] pl-[12px]"
//       >
//         <FaCheckCircle className="fill-gray-600 w-[16px] h-[16px] mt-[2px]" />
//         <span className=" text-gray-600 text-sm font-medium">
//           Opracowanie złożone
//         </span>
//       </div>
//       <div
//         onClick={() => setFiltersFunction('status', 'Problem z realizacją')}
//         className="flex flex-row gap-[8px] bg-red-100 rounded-2xl p-[4px] pl-[12px]"
//       >
//         <FaCircleExclamation className="fill-gray-600 w-[16px] h-[16px] mt-[2px]" />
//         <span className=" text-gray-600 text-sm font-medium">
//           Problem z realizacją
//         </span>
//       </div>
//     </div>
//   )
// }

// export default SelectTypeOption
