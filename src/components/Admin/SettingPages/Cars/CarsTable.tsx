import React from 'react'
import type { Car } from '../../../../redux/cars/carsType'
import MenuHover from '../../../../components/atoms/MenuHover'

type Data = {
  id: string
  x: number
  y: number
}

type Props = {
  cars: Car[]
  status: 'idle' | 'loading' | 'succeeded' | 'failed'
  setHoverData: React.Dispatch<React.SetStateAction<null | Data>>
  hoverData: null | Data
  onDelete: (car: Car) => void
  onEdit: (car: Car) => void
}

function CarsTable({
  cars,
  status,
  setHoverData,
  hoverData,
  onDelete,
  onEdit,
}: Props) {
  return (
    <div className="grid grid-cols-2 w-full pb-[16px]">
      <div className="text-gray-700 text-lg font-normal p-[8px]  text-left border-b border-gray-300">
        Samochód
      </div>
      <div className="text-gray-700 text-lg font-normal p-[8px] text-left border-b border-gray-300">
        Numer rejestracyjny samochodu
      </div>

      {status === 'succeeded' && cars && cars.length > 0
        ? cars.map((car: Car, i) => (
            <div
              className="relative col-span-2 grid grid-cols-2 w-full "
              key={car.id}
            >
              <div
                onMouseEnter={(e) =>
                  setHoverData({ id: car.id, x: e.clientX, y: e.clientY })
                }
                onMouseLeave={() => {
                  setTimeout(() => {
                    setHoverData((prev) => (prev?.id === car.id ? null : prev))
                  }, 5000)
                }}
                className={`p-[8px] border-b border-gray-300 text-gray-500 ${
                  i % 2 !== 0 ? 'bg-gray-50' : ''
                }`}
              >
                {car.name}
              </div>
              <div
                onMouseEnter={(e) =>
                  setHoverData({ id: car.id, x: e.clientX, y: e.clientY })
                }
                onMouseLeave={() => {
                  setTimeout(() => {
                    setHoverData((prev) => (prev?.id === car.id ? null : prev))
                  }, 5000)
                }}
                className={`p-[8px] border-b border-gray-300 text-gray-500 ${
                  i % 2 !== 0 ? 'bg-gray-50' : ''
                }`}
              >
                {car.registrationNumber}
              </div>

              {hoverData?.id === car.id && (
                <MenuHover
                  onDelete={() => onDelete(car)}
                  onEdit={() => onEdit(car)}
                  onMouseEnter={() =>
                    setHoverData((prev) =>
                      prev ? { ...prev, id: car.id } : prev,
                    )
                  }
                  onMouseLeave={() => {
                    setTimeout(() => {
                      setHoverData((prev) =>
                        prev?.id === car.id ? null : prev,
                      )
                    }, 5000)
                  }}
                />
              )}
            </div>
          ))
        : status === 'succeeded' && (
            <p className="col-span-2 text-center p-[40px]">
              Brak samochodów do wyświetlenia
            </p>
          )}
    </div>
  )
}

export default CarsTable

// import React from 'react'
// import type { Car } from '../../../../redux/cars/carsType'
// import MenuHover from '../../../../components/atoms/MenuHover'

// type Props = {
//   cars: Car[]
//   status: 'idle' | 'loading' | 'succeeded' | 'failed'
//   setHoverIdItem: React.Dispatch<React.SetStateAction<number | null | string>>
//   hoverIdItem: number | null | string
// }

// function CarsTable({ cars, status, setHoverIdItem, hoverIdItem }: Props) {
//   return (
//     <div className="grid grid-cols-2 w-full pb-[16px]">
//       <div className="text-gray-700 text-lg font-normal p-[8px]  text-left border-b border-gray-300">
//         Samochód
//       </div>
//       <div className="text-gray-700 text-lg font-normal p-[8px] text-left border-b border-gray-300">
//         Numer rejestracyjny samochodu
//       </div>

//       {status === 'succeeded' && cars && cars.length > 0
//         ? cars.map((car: Car, i) => (
//             <div
//               key={car.id}
//               onMouseEnter={() => setHoverIdItem(car.id)}
//               onMouseLeave={() => setHoverIdItem(null)}
//             >
//               <div
//                 className={`p-[8px] border-b border-gray-300 text-gray-500 ${
//                   i % 2 !== 0 ? 'bg-gray-50' : ''
//                 }`}
//               >
//                 {car.name}
//               </div>
//               <div
//                 className={`p-[8px] border-b border-gray-300 text-gray-500 ${
//                   i % 2 !== 0 ? 'bg-gray-50' : ''
//                 }`}
//               >
//                 {car.registrationNumber}
//               </div>
//               {hoverIdItem === car.id && <MenuHover />}
//             </div>
//           ))
//         : status === 'succeeded' && (
//             <p className="col-span-2 text-center p-[40px]">
//               Brak samochodów do wyświetlenia
//             </p>
//           )}
//     </div>
//   )
// }

// export default CarsTable
