import React from 'react'
import type { Car } from '../../../../redux/cars/carsType'

type Props = {
  cars: Car[]
  status: 'succeeded'
}

function CarsTable({ cars, status }: Props) {
  return (
    <div className="grid grid-cols-2 w-full pb-[16px]">
      <div className="text-gray-600 text-lg font-normal p-[8px]  text-left border-b border-gray-300">
        Samochód
      </div>
      <div className="text-gray-600 text-lg font-normal p-[8px] text-left border-b border-gray-300">
        Numer rejestracyjny samochodu
      </div>

      {status === 'succeeded' && cars && cars.length > 0
        ? cars.map((car: Car) => (
            <React.Fragment key={car.id}>
              <div className="p-[8px] border-b text-gray-700">{car.name}</div>
              <div className="p-[8px] border-b text-gray-700">
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
