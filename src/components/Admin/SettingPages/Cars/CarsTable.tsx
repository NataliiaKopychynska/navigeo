import React from 'react'
import type { Car } from '../../../../redux/cars/carsType'

type Props = {
  cars: Car[]
  status: 'succeeded'
}

function CarsTable({ cars, status }: Props) {
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
            <React.Fragment key={car.id}>
              <div
                className={`p-[8px] border-b border-gray-300 text-gray-500 ${
                  i % 2 !== 0 ? 'bg-gray-50' : ''
                }`}
              >
                {car.name}
              </div>
              <div
                className={`p-[8px] border-b border-gray-300 text-gray-500 ${
                  i % 2 !== 0 ? 'bg-gray-50' : ''
                }`}
              >
                {car.registrationNumber}
              </div>
            </React.Fragment>
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
